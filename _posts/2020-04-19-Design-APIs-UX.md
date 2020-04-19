---
layout: post
title:  "UX 디자인처럼 API 디자인하기"
date:   2020-04-19 23:00:00
author: Jay Ahn(안재열)
categories: Programming
tags:   API UX Design
comments: true
---

현재 [재직중인 회사]에서 API 개발자로 일하고 있습니다.
일하면서 느꼈던 점은 API를 디자인 및 구성 해야 할 때 사용자 경험(UX)을 늘 고민해야 한다는 것들입니다.
과연, 내가 만든 API를 보고 회사 내부의 프론트엔드 개발자분들은 편안함을 느낄 수 있을까? 다른 회사의 고객들은 우리의 Open API를 보고 어떤 생각일까?
개인적으로는 진행하며 이런 질문이 꼬리에 꼬리를 물게 되고, 깊은 고민이 있던 API는 편안한 형태로 도출되곤 합니다.

조금 더 나은 API 개발자가 되길 희망하며 리서치 중 좋은 글이 있어서 소개하고자 합니다.
[POSTMAN]에서 Technical Product Manager로 일하시는 [Prashant Agrawal] 님이 작성하신 UX 디자인처럼 API 디자인하는 방법에 관한 글이 있어서 소개하고자 합니다.

________

### UX 디자인처럼 API 디자인하기 : [Design APIs like you design User Experience]

<img src="//doublems.github.io/assets/postphoto/20200419/200419-01.jpeg" title="main_poster"  width="70%" height="70%">
*Photo by rawpixel on Unsplash

### 사용자경험(UX)이 뭔가요?
우리의 사용자가 우리의 제품을 사용 할 때의 가치라고 할 수 있어요. 

UX 용어는 대부분 아름답게 보이는 UI 와 연관 되어 있다고 생각 할 수 있지만 아니에요. 

> **[사용자 경험 디자인](User Experience Design : UXD or UED)**
> 사용자 경험 디자인은 사용자가 제품을 사용할 때 사용성, 접근성 그리고 상호작용을 통한 즐거움을 만족 할 수 있도록 향상시키는 과정 

사용자 경험 디자인을 위해 디자이너들은 상호작용과 UI 요소가 아주 즐겁도록 하는데 많은 시간을 보내죠.

사용자 경험 디자인을 위한 과정을 통해서 디자인인/UX 팀이 우리 제품 사용자들에게 가치있고 호감가며 사용성 있는 디자인을 하게 되죠. 

단지 예쁜 UI를 만드는게 아니에요. 
모든 이해관계자를 디자인 과정에 참여시켜 최종적으로 갑자기 놀라는 일은 만들지 않도록 해요. 불편한 경험을 하지 않게 하죠. 또한 충분한 리서치와 사용자 테스팅과 프로토타이핑을 통해서 아이디어와 디자인을 하고 목표 사용자에게 와 닿도록 합니다.

> 디자인은 단지 어떻게 보이고, 어떻게 느껴지는가를 말하는 것은 아니다. 
>
> 디자인은 어떻게 작동하는가를 말하기도 한다.
>
> — Steve Jobs.
________

### 왜 우리는 API 디자인을 신경써야 하나요?

Postman의 API의 생명주기를 보면 디자인 및 목킹, 디버깅, 자동화테스팅, 문서화, 모니터링 그리고 사용자가 API를 소비 할 수 있도록 시작할 수 있는 배포의 단계가 있어요.


<img src="//doublems.github.io/assets/postphoto/20200419/200419-02.png" title="api-life-cycle"  width="70%" height="70%">
*API 생명주기

API의 디자인과 Mocking 은 API 생명주기의 처음이자 가장 중요한 단계에요. 어떤 좋은 엔지니어든 이렇게 말할 수 있을거에요. 

**“취약한 기반에서 만들어지면 무엇이는 결국 붕괴 될 것이다.”**

API도 마찬가지에요. API 디자인을 좋게 마무리 하지 못하면, 생명주기에 따라 다음 단계도 차례차례 영향을 받겠죠.

**API가 이미 만들어지면 변경하기 어려워요.** 비용도 시간도 많이 들구요. 더 나쁜것은 게시된 API를 변경하면 사용자가 사용중인 서비스 혹은 어플리케이션도 멈춘다는 것이죠. 

디자인은 세부사항들을 계획하고 여러 제안과 What, If 분석을 반복적으로 수행해야해요.
 
[더욱이 설계 단계에서 API를 변경하면 쉽고 저렴하게 수행 할 수 있습니다.]

> **API 디자인(설계)은 잘못된 API를 만들거나, 잘못된 방향으로 갈 것을 막는데 도움을 준다.**

API를 만들 때는 개발자가 설계보다 코딩에 시간을 많이 투자하는 것을 보게 될 것이에요. 

API는 사람과의 접점은 없고, 단지 기계로부터 소비된다고 생각되죠. 그래서 많은 조직들은 API를 디자인하는 프로세스를 구축하는 일에는 충분한 관심과 노력이 부족한게 공공연했죠.

하지만 마이크로서비스 아키텍처가 세상을 떠들썩 하게 하는 오늘날에는 API는 기술보다는 제품처럼 보이고 있죠. 따라서 많은 이들은 최종 사용자에게 기능을 제공하는 방법으로 봐야 한다고 주장하고 있어요.

> API의 세상에서 우리는 기계와 기계 사이에서 사용할 것을 생각하고 만든다. 
>
> 하지만 잘못된 생각이다.
>
> API 클라이언트의 바깥에는 사람이 있다.
>
> — [Ronnie Mitra], Director of Technology at Publicis Sapient

________

### API를 위한 더 나은 UX 디자인

오늘날에 설계된 많은 RESTful API는 HTTP/S를 전송 계층을 지나서 도메인/비즈니스 객체의 내부 표현을 제공하는 객체 브라우저에 지나지 않아요.

- 어떻게 더 나은 API 디자인을 할까?

- 어떻게 일관된 API 패턴을 만들까?

- 팀에 합류하는 새로운 사람들이 API 디자인과 결정들에 대해 새로 고민하고 재설계 하지 않도록 도와줄까? 

위와 같은 고민들은 UX 디자이너들이 매일 풀고 고민하는 사항들과 비슷하죠.

훌륭한 UX는 관념적으로 [Peter Morville]가 정의한 사용성 규칙 [UX Honeycomb] 를 따르고 있어요.

<img src="//doublems.github.io/assets/postphoto/20200419/200419-03.png" title="The UX Honeycomb"  width="70%" height="70%">
*The UX Honeycomb

훌륭한 UX를 따르는 API를 설계하려면 다음 질문에 답해보세요.

- **유용한가?** - API는 최종 사용자의 관점에서 유용한가요?

- **사용가능한가?** -  개발자가 API를 빨리 쓸수 있고 사용하기 쉬운 기능을 제공 하나요?

- **호감가는가?** - API를 통해 제공되는 기능이 개발자와 최종 사용자의 바람을 이뤄주려 하나요?

- **찾을 수있는가?** - API 문서를 쉽게 찾을 수 있고 개발자가 즉시 사용할 수 있나요?

- **이용할 수 있는가?** - API는 기술적으로 제약이나 제한이 있는 최종 사용자에게 기능을 제공 할 수 있나요?

- **믿을 수 있는가?** - API가 제공 한 데이터는 신뢰할 수 있나요?

- **가치있나?** - API가 회사의 수익에 기여하고 고객 만족도를 향상 시키나요?

________
### API를 위한 디자인 프로세스 정의

디자인의 힘은 최종 결과물을 만들기까지의 많은 과정속에 있다고 생각해요. **디자인 프로세스는 우리의 상품을 설계하는 동안 명료하고 효율적일 수 있도록 도와줘요**. 원치 않는 결과 등의 위험요소를 줄이고 기대했던 결과가 나오도록 말이에요. 

<img src="//doublems.github.io/assets/postphoto/20200419/200419-04.png" title="The Double Diamond design process"  width="70%" height="70%">
*The Double Diamond design process


[British Design Council] 이 만든 [Double Diamond] 디자인 프로세스는 많은 디자인 프로세스 중 하나에요. 더블 다이아몬드 프로세스는 사람들은 강점을 검증하고 단점을 제거하는 동안 다양한 선택 사항들을 탐색하는 과정을 통해서 의도적 설계를 할 수 있도록 해요. 즉 수렴적 사고를 하는동안 확산적 사고를 할 수 있도록 도움을 주는 프로세스에요.

> **확산적 사고(Divergent thinking)**
>
> 문제 해결 과정에서, 정보를 광범위하게 탐색하고 상상력을 발휘하여 미리 정해지지 않은 다양한 해결책을 모색하는 사고로, 수렴적 사고와는 반대되는 개념
>
> **수렴적 사고(Convergent thinking)**
>
> 주어진 문제를 해결하기 위하여 다양한 대안들을 분석하고 평가하여 최종적으로 가장 적합한 문제를 선택해 가는 사고방식이다.


이 접근 방식은 모든 설계 프로세스에서 **가장 중요한 두 가지 사항**을 달성하는 데 도움이 되요.

- **옳은 것을 설계하기**

- **올바르게 설계하기**
________
### 옳은 것을 설계하기
이번 장은 탐색 및 리서치와 정의 및 통합으로 단계로 나눠 볼 수 있어요. 새로운 것을 디자인 하는 동안 **‘진짜 문제'**를 외면하고 아무도 원치않고 사용하지 않을 것을 디자인하기 쉽상이에요.

부지런히 리서치를 진행하고 올바르게 문제 정의해서 풀어나간다면 진실로 우리가 옳은 것을 만들 수 있을 것이에요.

**탐색 및 리서치**: 우리가 새로운 제품이나 기능 혹은 API를 만들 때는 문제를 해결하고자 하고, 솔루션을 만들 때는 가장 먼저 문제를 이해하려고 하는 모습을 보여요.

항상 문제에 대한 **'도메인 지식'**을 확보하여 시작하길 권해요. 어떤 문제를 해결하려고하는지, 누구를 위해 만들어졌는지 등에 대한 이해도가 높아야 해요.
쓰임새와 요구사항을 명확하게 해야 한다는 말이에요.
  
기존 솔루션을 리서치하여 동일한 문제를 해결하는 방법과 구조적/기술적인것들을 학습해하는 것도 필요해요.
또한 Product 팀, 디자인 팀, 보안 팀 등을 포함하여 API를 사용 할 수 있는 모든 조직의 내외부팀들을 이해 관계자로 설정하고 많은 얘기를 나눠보는 것을 권유해요.
그 **사람들의 다양한 관점은 우리에게 보다 넓은 사고와 시야의 확장을 유도**하고 **API 설계를 옳은 방향**으로 갈 수 있게 도와줘요.

조사 또는 참조를 위해 "[Postman API Network]"를 활용하여 조직의 API가 어떻게 다른지 알아볼 수 있어요.
Postman의 API 네트워크에는 다양한 도메인과 산업의 조직에서 게시 한 다양한 API 목록이 포함되어 있거든요.

예를 들어 FinTech 공간에서 API를 구축하는 경우 필요한 리서치의 컨텐츠로 금융 서비스 섹션에서 다른 조직이 게시 한 일부 API를 확인할 수 있어요.

<img src="//doublems.github.io/assets/postphoto/20200419/200419-05.png" title="main_poster"  width="70%" height="70%">
*API Network inside Postman app

이 단계에서는 많은 구조화되지 않은 정보와 중복된 쓰임새와 요구사항들의 나열을 하는 단계라서 구조화된 디자인 결정을 하기 어려워요.

따라서 다음 단계에서이 정보를 구조화하여 API를 중심으로 더 나은 디자인 결정을 내릴 수 있도록 해야해요.

**정의 및 종합** : Raw Data에서 다양한 사용자 및 시나리오에 걸쳐있는 트렌드 및 통찰력을 찾아보세요. 또 **제공하려는 정확한 사용 사례와 요구 사항**을 찾아보세요.
 이번 프로세스의 단계는 우리의 API가 다른 서비스와 의존성을 갖게됨을 알 수 있는 기점이에요.
 (API의 다른서비스에서의 의존성은 마이크로서비스 아키텍처에서는 일반적이죠)

우리의 리소스 모델과 관계를 정의를 통해서 공개해야 할 API의 식별에 도움을 줄 수 있어요.

또한 API를 사용하는 동안 소비자가 어떤 가정도 하지 않아도 되도록 **API의 동작과 기대치를 명확하게 설명**해보세요.
이를 수행하면 서비스 또는 클라이언트의 일부가 될 비즈니스 로직의 양을 식별하는 데 도움이 될 거에요.

________

### 올바르게 설계하기
이번 단계에서는 개발/관념화(Develop/Ideation), 전달/구현(Deliver/Implementation)로 구분 할 수 있어요.
이 단계는 디자인하기로 결정한 모든 것을 보장해요. 품질, 일관성, 보안 및 조직/업계에서 제시 한 모범 사례 준수하도록 올바른 방법을 설계하는 단계에요.

**개발/관념화**: API를 사용하여 '무엇을 달성해야하는지'가 확실 해지면 API 제공 업체가 제공하고자하는 것에 대해 의사 소통 할 수 있도록 API를 디자인 해야하죠. API 에 대한 서술 언어인 OpenAPI/Swagger, RAML, 등은 API의 중요한 측면을 표현하는 좋은 방법이에요.

특히 고객이 눈으로 볼 수 있는 프론트엔드의 디자인 및 아키텍처 디자인의 결정사항은 API 서술언어로 확인 해 볼 수도 있죠.
 그러나 이러한 **API 설명 언어의 한 가지 단점은 너무 기술적이고 장황하여 협업하기가 어렵다는 것**이죠.

따라서 [Swagger], [OpenAPI], [RAML], [Postman Collection] 등을 통해서 이를 보완 할 수 있어요.

UX / 디자인 팀과 일을 했다면 알꺼에요. 디자인 과정이 끝날때 마다 나오는 산출물들에 대해서요.
**기능과 상호 작용, 다양한 UI 상태 표시 (오류 상태, 빈 상태 등) 그리고 이런 것들과 상호작용함을 UI로 나타낸 프로토타입들까지……**

UX/디자인 팀들은 이런 문서를 기대하고 만들어 내곤 하죠.
Postman Colloection을 사용한다면 API에서 이런 일들을 해볼 수 있을거에요. 당연히 제공도 가능하구요.

- **API 문서화** - Collection, Folder, Request, 쿼리 파라미터 등을 문서화가 가능하며,  [Generates beautiful looking documentation] 사용시 공유 가능하다.

- **다른 API 시나리오/상태** - 소비자는 어떤 요청을 보내고 어떤 응답을 기대해야하는지 알 수 있도록 모든 API에 대해 서로 다른 [Examples]를 디자인 한다. 일반적으로 오류 응답, 빈 응답 등 API에 대해 가능한 모든 다른 요청 / 응답 시나리오에 대한 예제를 추가한다. 

- **프로토타입** - 설계된 예제를 응답으로 반환하는 [Mock server] 제공. 이는 API 소비자를 즉시 ​​활성화하고 실제 API가 준비되지 않은 경우에도 사용 사례를 프로토 타이핑 / 테스트 할 수 있기 때문에 매우 유용하다.

 

**전달/구현**:  API를 성공적으로 설계했으면 이제 구현을 시작하죠. 잠깐! API 코딩을 시작하기 전에 [Contract Test] 를 만족하고 성공하는지 확인하길 권장해요. **Contract Test는 디자인된 Request/Response에 변동이 있다면 실패 함을 알리는 ‘계약’** 테스트를 말해요.

> 참고: https://martinfowler.com/bliki/ContractTest.html 

API를 개발하게 되면 알려야 하는 영향받는 팀원들에게 개발 소식을 알리는 것도 필요해요. [Postman to collaborate] 등을 사용하면 쉽게 처리 할 수 있어요.

또 [Postman comments] 를 사용해서 실제로 API를 개발하는 동안 지속적으로 피드백을 받을 수 있어요. 
________

###API를위한 디자인 스타일 가이드 작성

성장하는 팀에서 새로운 사람들과 함께 일할 때마다 특정 시점이 지나면 API의 품질, 일관성 및 보안을 보장하기가 매우 어려워져요. 

API를 개발하는 동안 모든 새 개발자가 자신만의 스타일로 엔드포인트(URI 등)에 이름을 짓고, 자신만의 인증방식을 사용하고, 별도의 헤더 쿼리 매개 변수와 새로운 스타일의 성공 및 오류 응답 구조 등을 사용한다고 생각해보세요. 

상상만해도 끔찍하죠?

디자인팀도 UI를 만들때 비슷한 상황에 종종 처하게 되요. 그래서 디자인팀에서는 ‘디자인 스타일 가이드’를 만들어서 이런 문제를 피하고 해결하죠. 모든 팀원들이 같은 UI 컴포넌트, 색상, 타이포그라피, 등을 사용하도록 하죠.

디자인 스타일가이드를 사용하면 팀원간의소통이 쉬워지고, UI를 장기적으로 일관성있게 유지하고 디자인 및 개발 프로세스에서 민첩성을 제공해요.

그렇다면, 왜 우리의 API의 [디자인 스타일 가이드]는 없을까요. 있어야 하지 않을까요? 

[Google], [Microsoft], [Cisco], [Paypal] 등의 회사는 API 스타일 가이드를 사용하여 일관성 있고 일관성 있고 직관적 인 API를 유지하고 있어요.

이런 일관성은 많은 이점을 가지고 있어요. 일관성을 통해 팀은 공통 코드, 패턴, 문서 및 디자인 결정을 활용 할 수 있죠. 또한 API 제작자와 소비자 모두의 ‘개발자 경험’을 가능한 한 매끄럽게 만들 수 있습니다.

 **API 스타일 가이드에 포함되어야 할 중요한 사항**은 다음과 같아요.

- **URI 구조** - 주어진 리소스에 대한 URL 형식과 쿼리 매개 변수 등의 정의한다.

- **요청 메서드** - 요청 방법 목록을 정의하고 언제 어떤 메서드를 요청 할 지 정의합니다. 이를 통해 요청 메소드가 API에서 동일한 동작을 갖도록 한다.

- **요청/응답 헤더** - 서비스를 요청하고 응답하는 동안 API와 함께 사용해야하는 헤더 목록 정의

- **응답 상태 코드** - API에 허용되는 상태 코드 목록을 작성하고 특정 상태 코드 사용시기에 대한 지침을 명확하게 설정하여 정의한다.

- **에러** - 다른 모든 개발자가 사용할 수있는 일반적인 오류 응답 형식을 디자인하십시오. 좋은 오류 응답은 개발자가 오류를 인식, 진단 및 복구 할 수 있도록 해야 한다.

- **버전** - API 버전을 지정하는 방법과 주의사항에 대한 지침을 설정해야 한다. 

- **필터링/페이징/정렬** - 데이터 컬렉션을 반환하는 API에서 필터링 및 페이지 매김을 지원하는 방법, 필터링 / 페이지 매김 / 정렬 결과의 응답 JSON 스키마에 대한 정의가 필요하다. 

 

사람들이 빨리 시작할 수 있도록 컬렉션을 가져와서 시작할 수 있는 템플릿으로도 시작 할 수 있어요.

<img src="//doublems.github.io/assets/postphoto/20200419/200419-06.gif" title="main_poster">
*The UX API Template
________

###마무리하며...

다른 모든 디자인 프로세스와 마찬가지로 API 디자인 프로세스도 반복적이야해요.

사용자에게 API를 게시하는 것이 API 수명주기의 끝이 아님을 명심해야해요.

API 소비자의 지속적인 피드백 채널을 항상 열어 두어야하고 동일한 설계 프로세스를 사용하여 제안을 수용하여 API를 잘 가꾸고 키워야해요. 

*Thanks to Kaustav Das Modak, Anudeep, and Danny Dainton.

________
*본 자료는 [Prashant Agrawal]님이 Medium에서 작성한 글 입니다. Doublem.org는 저자의 허락을 받아 번역하여 대한민국에 소개하고 있습니다.

*Original article is written by [Prashant Agrawal]. Doublem.org, with the permission of the author, is translated and introduced to Korea.

________

참고자료
--------

- [Design APIs like you design User Experience](https://medium.com/better-practices/design-apis-like-you-design-user)
- [Double Diamond](https://www.designcouncil.org.uk/news-opinion/design-process-what-double-diamond)
- [UX Honeycomb](https://semanticstudios.com/user_experience_design)

[Design APIs like you design User Experience]: https://medium.com/better-practices/design-apis-like-you-design-user-experience-a7adeb2ee90f
[사용자경험]: https://en.wikipedia.org/wiki/User_experience_design
[재직중인 회사]: https://trumpia.com
[Prashant Agrawal]: https://www.linkedin.com/in/prashantagrawal1/
[POSTMAN]: https://www.postman.com/
[더욱이 설계 단계에서 API를 변경하면 쉽고 저렴하게 수행 할 수 있습니다.]: https://medium.com/better-practices/api-first-software-development-for-modern-organizations-fdbfba9a66d3
[Ronnie Mitra]:https://twitter.com/mitraman
[British Design Council]:https://www.designcouncil.org.uk
[Double Diamond]:https://www.designcouncil.org.uk/news-opinion/design-process-what-double-diamond
[Swagger]:https://learning.getpostman.com/docs/postman/collections/data_formats/#importing-swagger
[OpenAPI]:https://learning.getpostman.com/docs/postman/collections/working_with_openAPI/
[RAML]:https://learning.getpostman.com/docs/postman/collections/data_formats/#importing-raml
[Postman Collection]:https://learning.getpostman.com/docs/postman/collections/intro_to_collections
[Generates beautiful looking documentation]:https://learning.getpostman.com/docs/postman/api_documentation/publishing_public_docs
[Examples]:https://learning.getpostman.com/docs/postman/collections/examples
[Mock server]:https://learning.getpostman.com/docs/postman/mock_servers/intro_to_mock_servers
[Contract Test]:https://medium.com/postman-engineering/consumer-driven-contract-testing-using-postman-f3580dba5370
[Postman to collaborate]:https://learning.getpostman.com/docs/postman/launching_postman/collaboration
[Postman comments]:https://learning.getpostman.com/docs/postman/collections/commenting_on_collections
[디자인 스타일 가이드]:http://apistylebook.com/
[Google]:https://cloud.google.com/apis/design/
[Microsoft]:https://github.com/Microsoft/api-guidelines
[Cisco]:https://github.com/CiscoDevNet/api-design-guide
[Paypal]:https://github.com/paypal/api-standards/blob/master/api-style-guide.md#version
[Peter Morville]:https://semanticstudios.com/about/
[UX Honeycomb]:https://semanticstudios.com/user_experience_design/
[Postman API Network]:https://www.getpostman.com/api-network/