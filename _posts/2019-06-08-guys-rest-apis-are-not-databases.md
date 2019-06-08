---
layout: post
title:  "저기요, REST API는 데이터베이스가 아니에요"
date:   2019-06-08 23:00:00
author: Jay Ahn(안재열)
categories: Programming
tags:   API, REST
comments: true
---

현재 재직중인 회사([Trumpia])에서 Open API를 개발자로 일하고 있습니다.
일하면서 느꼈던 점은 Open API를 디자인 및 구성 해야 할 때 고려해야 할 사항이 다양하고 많다는 점입니다. 
곧 경험을 공유하는 글을 게시하도록 하겠습니다. :)

이에 앞서, Medium에 영국에서 리드 개발자로 일하시는 [Thiago Marini] 님이 REST 방식의 Open API를 구성 할 때 고민해야 할 점을 설명한 글이 있어서 소개하고자 합니다.

### 저기요, REST API는 데이터베이스가 아니에요 : [Guys, REST APIs are not Databases]

<img src="//doublems.github.io/assets/postphoto/20190608/guy_rest.png" title="main_poster"  width="70%" height="70%">

REST API를 만드는 개발자들이 흔하게 **실수하는 것은 REST API를 데이터베이스처럼 다루는 것**입니다.

여느 웹 프레임워크 문서를 보게 되면 ORM 모델의 데이터베이스의 CRUD 작업과 REST API의 엔드포인트를 짝지어 놓은 마법과 같은 일을 보게 됩니다.

- **C** = POST
- **R** = GET
- **U** = PUT or PATCH
- **D** = DELETE

> **ORM**
 
> 객체 모델링(Object Oriented Modeling)과 관계형 데이터 모델링(Relational Data Modeling) 사이의 불일치를 해결해 주는 OR Mapping 서비스로, 본 글의 저자는 ORM 모델을 DB 스키마를 반영한 Class를 이야기 합니다.
> - 역자 주 / 참고 [http://www.egovframe.go.kr-ORM]

저는 이런 동작들의 상호 매칭은 자연스러운 일이라고 인정합니다.

하지만, 문제의 시작은 개발자가 REST API를 데이터베이스의 개념과 연결짓고 REST의 요점들을 놓치기 시작 할 때 입니다.

**데이터베이스의 목적은 데이터의 보관이며, API는 구성 요소가 서로 어떻게 상호 작용하는지에 관한 것입니다.**

또 다른 문제점은 데이터베이스 개념을 중심으로, **DB 스키마에 맞춰 API를 만든다면 시간이 지남에 따라 API가 애매하고 유지하기가 어려울 가능성이 높다는 것입니다.** 왜냐하면,  API는 다양한 컨텍스트(문맥)을 지원해야 하고, 이에 따라 API를 통한 결과는 다양하게 변형 될 수 있기때문입니다. 

REST는 **RE**presentational **S**tate **T**ransfer를 뜻합니다. <br>
문자 그대로 어떤 프로토콜로 '무엇인가'의 상태를 전송하는것을 의미합니다. (일반적으로 HTTP가 선택된다.)

> **representation**은 어떤 리소스의 특정 시점의 상태를 반영하고 있는 정보이다.
> representation data와 representation metadata로 구성된다.
> - 역자 주 / 참고 [https://blog.npcode.com/] , [rfc7231#section-3.1]

윗 글에서의 상태가 전송된 **'무엇인가'**는 리소스 입니다. 그리고 상태는 리소스의 스냅샷(해당 시점의 기록) 으로 볼 수 있습니다.

리소스가 ORM 모델로 곧바로 매핑되나요? 물론 됩니다! 하지만, **'리소스'**는 다양한 것으로 변이 가능합니다. 단지 ORM 모델 뿐만 아니라요. 예를 들면, 데이터의 읽기 전용 모음이 리소스가 될 수 있겠네요. 

리소스와 데이터베이스 개념을 분리하기 위한 흥미로운 작업은 **'시간'** 리소스를 위한 엔드포인트를 만드는 것을 상상하기 입니다. 확실히 '시간'은 DB가 필요 없습니다. 단지 GET을 통해서는 현재 시간을 알 수 있고, POST를 통해서는 다른 날짜를 추가하여 미래 시간을 생성 할 수 있으면 됩니다. DB가 필요 없지요.

**그러면 어떻게 REST API를 구축해야 할까요?**

### 사용자의 컨텍스트에 맞춰 API를 만들기

각 사용자에 따라 매우 다양한 방법으로 API가 사용되고 있다고 상상해보세요.

예를 들어, API와 수화물 리소스를 해상운송회사가 가지고 있습니다. 수화물 리소스를 구매자(Buyer), 판매자(Seller), 수송사(Carrier)가 같은 관점으로 볼까요? <br>
결코 아닙니다! **각 사용자들은 수화물 리소스의 관점을 갖고, API를 통해 각기 다른 일을 하길 필요로 합니다.**

구매자는 수화물에 대한 가격 지불과 배송추적을 원합니다. 반면에 판매자는 재고 및 배송에 대해 걱정할뿐입니다. 수송사는 수화물의 면적과 무게 그리고 목적지에 대해서만 신경을 씁니다. 뭐 그런겁니다..

만약, **이런 상황에 API를 모두 하나로 된 One-In-All 솔루션으로 만들어 위 세명의 사용자에게 제공한다면, 결국 지나치게 유지보수하기 어렵고 개선하기 어려우며 애매한 API가 될 수 있습니다.** <br>
필요 이상의 데이터의 노출이 이뤄 질 수 있구요.

따라서, **이 경우에는 각 사용자 컨텍스트 별로 3개의 전문화된 API가 구성되어야 합니다.** <br>
구성된 세가지의 API는 데이터 수준에서의 높은 결합으로 인해서 동일한 프로젝트에 위치 해야 할 수 있습니다. 대부분의 최신 웹 프레임 워크는 하위 도메인 또는 접두사 라우팅을 지원하므로 이를 고려하여 분리 구현된 API가 동일 프로젝트에 위치하여 구현이 가능하도록 해야합니다.

위와 같은 일들은 너무 많은 일을 해야 하는 것으로 들리지만, 시간이 지날 수록 그 보상이 이뤄 질 것입니다. 

컨텍스트의 대안은 API에 대한 액세스 제어 나 일종의 액세스 제어를 구현하는 것입니다. <br>
저는 이런 접근법은 지금까지의 의견에 불필요한 복잡함을 야기 할 수 있다고 생각되어 조심스럽네요.


### 컨텍스트를 알 수 없을 때

만약, API를 너무 많은 사용자가 사용하여 도저히 컨텍스트를 확인하기 어렵다면, 이를 인정하고 포용해야 합니다. 그리고 API 사용자를 돕기위해 최선을 다해야 합니다.<br>
[GraphQL]과 같은 기술을 사용하여 API에게 질의하고 정보를 얻어 갈 수 있도록 하는 권한을 유저에게 주세요. 작은 조작을 통해 많은 것을 변화 시킬수 있습니다.

> **GraphQL**

> 클라이언트는 필요한 데이터의 구조를 지정할 수 있으며, 서버는 정확히 동일한 구조로 데이터를 반환한다.
> GraphQL은 사용자가 어떤 데이터가 필요한 지 명시할 수 있게 해 주는 강타입 언어이다. 이러한 구조를 통해 불필요한 데이터를 받게 되거나 필요한 데이터를 받지 못하는 문제를 피할 수 있다.
> - 역자 주 / 참고 [https://ko.wikipedia.org/wiki/graphql]

________

**Q) 하지만, 제 API는 작다구요. 더 복잡해지는 것을 멈춰주세요!**

A) 알았어요. 크기와 범위는 직접적인 관계가 있습니다. API가 작을수록 범위 또한 좁아집니다. 쉬운 문제지요.

따라서 API가 많이 작다면 설계에 따라 애매모호하고 일반적일 것이며, 컨텍스트도 필요치 않습니다. CRUD 기능과 REST 엔드포인트를 단순하게 매핑 할 수 있습니다. 하지만 해당 API의 개선을 주시해야 할 필요가 있습니다.

만약, 스스로 API에 유지보수를 위해서 타입이나 조건을 추가하려 하고 있다면 지금까지의 내용과 접근법을 고려해야합니다. 
________
*본 자료는 [Thiago Marini]님이 Medium에서 작성한 글 입니다. Doublem.org는 저자의 허락을 받아 번역하여 대한민국에 소개하고 있습니다.

*Original article is written by [Thiago Marini]. Doublem.org, with the permission of the author, is translated and introduced to Korea.
________

참고자료
--------

- [Guys, REST APIs are not Databases](https://medium.com/@marinithiago/guys-rest-apis-are-not-databases-60db4e1120e4)
- [http://www.egovframe.go.kr-ORM](http://www.egovframe.go.kr/wiki/doku.php?id=egovframework:rte2:psl:orm)
- [https://blog.npcode.com/](https://blog.npcode.com/2017/04/03/rest%EC%9D%98-representation%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)
- [rfc7231#section-3.1](https://tools.ietf.org/html/rfc7231#section-3.1)
- [https://ko.wikipedia.org/wiki/graphql](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%84QL)
- [GraphQL](https://graphql.org/)

[Guys, REST APIs are not Databases]:(https://medium.com/@marinithiago/guys-rest-apis-are-not-databases-60db4e1120e4)
[http://www.egovframe.go.kr-ORM]:(http://www.egovframe.go.kr/wiki/doku.php?id=egovframework:rte2:psl:orm)
[https://blog.npcode.com/]:(https://blog.npcode.com/2017/04/03/rest%EC%9D%98-representation%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)
[rfc7231#section-3.1]:(https://tools.ietf.org/html/rfc7231#section-3.1)
[https://ko.wikipedia.org/wiki/graphql]:(https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%84QL)
[GraphQL]:(https://graphql.org/)
[Trumpia]:(https://trumpia.com)
[Thiago Marini]: https://www.linkedin.com/in/marinithiago/?originalSubdomain=uk