---
layout: post
title:  "C4Model로 협업하기"
date:   2021-06-21 22:40:00
author: Jay Ahn
subtitle: 개발자와 소통하기
description: 개발업무를 원활하게 하기 위한 C4모델의 사용과 협업이야기
image: https://doublems.github.io/assets/postphoto/20210621/img_12.png
categories: Culture, DEx, Developer
tags:   C4model Design Guide
comments: true
---

# C4Model로 협업하기

개발 업무를 원활하게 하기 위한 C4모델의 사용과 협업이야기

---

## 대상독자

- 소프트웨어 개발자 및 관리자

---

## 들어가며

'소프트웨어 프로그래머' 또는 '개발자'로 불리는 직업을 나의 직업으로 삼았다. 개발자로 일을 하면서 다양한 상황을 만나고, 이를 해결해 나가고 있다. 물론 나도 밀레니얼세대[1] 라서 그런지 직장도 몇차례 옮기게 되었다. 옮긴 이유는 다양했지만 '성장'이 가장 큰 동원이었다.

직장을 옮기면 가장 처음 만나는 어려움. 적응이다. 특히 개발자로서 적응의 핵심 포인트는 기존에 작성되어있는 코드를 읽고 이해하며, 이를 활용하여 새로운 문제를 해결 할 수 있어야 한다.

심플하다. 동료가 작성한 코드를 '읽고' 내가 '이해' 하면 해결된다. 얼마나 쉬운 일인가?

이에 별 감흥이 없거나, 고개를 끄덕이는 분은 아래와 같은 행복한 상황이라 의심치 않는다.

- 테스트코드와 함께 적재적소에 사람이 읽을만하도록 깨끗한 코드로 어느정도 유지되고 있음
- 이미 전 직장 혹은 프로젝트에서 하던 업무 도메인을 다루고, 구조가 같은 코드인 상황
- 본인의 상상력과 창의력으로 코드를 이해할 수 있음

이런 경우 말고도 수 많은 이유가 있으리라 생각된다. 그렇다면 코드가 아닌 부분으로 적응을 해결 할 수 있을까?

'어렵다. 하지만 도움을 받을 수 있는 방법은 여럿 존재한다.' 라고 답변 할 수 있다. 멘토링, 페어프로그래밍, 업무 관련 문서읽기 등 많다. 그렇지만 결국은 '동료의 코드를 이해해야 하는 것'으로 가기 위한 수단이다. 그리고 협업을 편안하게 할 수 있는 상태가 되면 적응은 어느정도 마무리 된것이라고 생각된다.

이번 글에서는 협업을 하기 위해 필요로 했던 일과 그 과정을 소개하려 한다.

---

## 서로 업무 프로토콜 맞추기

동료와 협업을 하기 위해서 코드만으로 상황을 이해하기 쉽지 않은 경우가 많다. 특히 업무와 관련된 코드작성의 경우 해당 업무절차를 정확하게 알지 못하면 더욱 그렇다. 엄격하고 흔하게 사용되는 프레임워크를 사용한다면 어느정도 표준화된 패턴을 이해하고 있기 때문에 각 모듈의 책임과 역할은 어렴풋이 알수 있을 뿐이다.

OJT(On The Job Training) 시간이나 직장 동료에게 업무 프로세스를 물어볼 수 있는 기회가 분명 있다. 회사에 Wiki, KMS(Knowledge Management System) 아니면 프로젝트내에 UML등 관련 문서를 읽을 수 있는 위치가 있다면 해당 문서를 읽으라고 할 수도 있지만, 그렇지 않은 경우 내가 만난 대부분의 사람들은 간략한 UML 혹은 아래와 같은 그림을 그리며 설명해준다.

<img src="//doublems.github.io/assets/postphoto/20210621/img.png" title="main_poster"  width="80%" height="80%">
작성자의 주관된 표현으로 작성된 관계도 - 출처 c4model.com

아직은 성숙하지 않은 팀에 속하게 되어 Wiki가 없던적이 있다. 작성된 문서 또한 Sales 나 전략기획부서에게 보고하는 보고용 자료가 대부분이었다. 그래도 다행이 대부분의 사람들이 친절하게 애써 그림으로 그려가며 설명을 해주었지만 제각기 다른 네모상자의 규칙이 코드를 이해하는데 큰 도움이 되지는 않았다.

그래서 UML(Unified Modeling Language)을 요청을 고려했지만 서로 이해하기에는 문법도 새로 익혀야하고, 이를 지원하는 도구도 고민해야 했다. 내게는 적당한 규칙이 필요했고, 유지보수에 드는 시간과 비용도 고민해야만 했다. 모두들 이미 암묵지로는 알고 있는 사실이었고, 이를 형식지로 꺼내는 것이 귀찮을것이기 때문이다.

---

## C4 Model과 Plant UML

우선 적절한 규칙을 찾았다. UML의 경우 앞서 말했다시피, 알아야 할 것이 많다. 귀찮다. Enterprise Arcitecture와 관련된 모델링 규칙을 찾던중 반갑게 C4모델을 만났다.

C4모델은 아래와 같이 Context, Containers, Components, Code 4단계의 다이어그램 수준으로 모델링을 하는 기법이다.

각 수준(Level)에 맞춰서 상호간의 눈높이를 맞추고 의사소통이 편리했고, 보고용 산출물을 별도로 만들지 않아도 되어 너무 행복(?) 했다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_1.png" title="c4model intro"  width="80%" height="80%">
[https://c4model.com/](https://c4model.com/)



C4모델의 각 요소의 개념은 다음과 같다.

- **사용자 :**  소프트웨어 시스템의 사용자(유저, 퍼소나, Actor 등)
- **소프트웨어 시스템 :** 최상위 추상화 요소로 시스템이 어떤 가치를 제공하는지 나타내며 보유하거나 개발하고 있는 소프트웨어와 연동되는 소프트웨어를 나타낼 때 사용
- **컨테이너:** server-side web appilication (node.js, java EE), DBMS, MobileApp 등 소프트웨어 시스템의 내부를 표현하는 추상화 요소로 애플리케이션이나 데이터 저장과 관련된 솔루션을 나타낼 때 사용 (도커의 컨테이너가 아님)
- **컴포넌트:** 컨테이너 내부를 표현하는 추상화 요소로 기능 단위로 묶을 수 있는 모듈이나 인터페이스의 집합 Java나 C#에 빗대어 설명하면 인터페이스나 패키지를 구현하기 위해 구현한 클래스의 집합이라고 생각하면 쉽다.
- **관계:** 추상화 요소 사이의 의존성이나 데이터 흐름

<img src="//doublems.github.io/assets/postphoto/20210621/img_2.png" title="main_poster"  width="80%" height="80%">
[https://c4model.com/](https://c4model.com/)

C4모델을 지원하는 도구는 GUI방식과 Code방식으로 나뉜다. 나의 경우에는 IDE(webstorm)에서 바로 사용할 수 있는 PlantUML을 선택했다. 더욱이 GUI방식으로 draw.io에서 UML 시퀀스 다이어그램을 그릴때의 불편함이 떠올라서 더더욱 선택했다.

> PlantUML은 PlantUML의 사용자가 플레인 텍스트 언어로부터 UML 다이어그램을 만들 수 있게 하는 오픈 소스 도구이다. PlantUML의 언어는 도메인 특화 언어의 한 예이다. Graphviz 소프트웨어를 사용하여 다이어그램을 배치시킨다.



C4모델은 아래와 같이 PlantUML외에도 다양한 모델링 도구와 다이어그램들이 지원을 하고 있다. 상황에 맞춰서 선택을 할 수 있는 장점이 있다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_3.png" title="c4model tools"  width="80%" height="80%">
C4모델을 지원하는 다양한 도구들

---

### C4 Model - PlantUML 구성

### 준비항목

- Webstorm
- PlantUML plugin
- [https://github.com/plantuml-stdlib/C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML)

IDE(Webstorm)에서 아래와 같이 플러그인을 내려받고, C4-PlantUML을 설치한다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_4.png" title="plugin in IDE"  width="80%" height="80%">

저장소를 내려받거나 Clone해도 되고 Import 해도 된다.

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4.puml
...
```

### C4 Model 작성 예시

아래와 같이 @startuml 과 @enduml사이에 모델링한 내용을 기입한다.

```abap
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
' uncomment the following line and comment the first to use locally
' !include C4_Component.puml

LAYOUT_WITH_LEGEND()

title Component diagram for Internet Banking System - API Application

Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")
Container(ma, "Mobile App", "Xamarin", "Provides a limited subset ot the internet banking functionality to customers via their mobile mobile device.")
ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

Container_Boundary(api, "API Application") {
    Component(sign, "Sign In Controller", "MVC Rest Controlle", "Allows users to sign in to the internet banking system")
    Component(accounts, "Accounts Summary Controller", "MVC Rest Controlle", "Provides customers with a summory of their bank accounts")
    Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")
    Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")

    Rel(sign, security, "Uses")
    Rel(accounts, mbsfacade, "Uses")
    Rel(security, db, "Read & write to", "JDBC")
    Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")
}

Rel(spa, sign, "Uses", "JSON/HTTPS")
Rel(spa, accounts, "Uses", "JSON/HTTPS")

Rel(ma, sign, "Uses", "JSON/HTTPS")
Rel(ma, accounts, "Uses", "JSON/HTTPS")
@enduml
```

해당 코드를 IDE에서 작성하고 나면 아래와 같은 결과물을 확인 할 수 있다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_5.png" title="c4model getting started"  width="80%" height="80%">

### Error Case

- Graphviz 가 설치되지 않은 경우 아래와같은 에러가 나타날 수 있다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_6.png" title="Graphviz error"  width="80%" height="80%">

> Graphviz는 DOT 언어 스크립트로 지정된 그래프 그리기를 위해 AT&T 랩스 리서치가 시작한 오픈 소스 도구 패키지이다. 응용 소프트웨어가 도구를 사용할 수 있도록 라이브러리 또한 제공한다. Graphviz는 이클립스 퍼블릭 라이선스에 의해 허가된 자유 소프트웨어이다

설치는 MacOS 의 경우 brew를 통해 쉽게 할 수 있다. 그 외의 경우에는 아래 사이트에 방문하여 확인이 필요하다.

- [https://graphviz.org/](https://graphviz.org/)

```bash
brew install graphviz
```

---

## 필요한 일 찾기

C4Model을 이용하여 동료간 필요한 업무의 프로토콜을 맞췄다. 눈높이를 맞췄다고 봐도 된다. 코드를 제외하고, 서로 소통 할 수 있는 최소한의 조건이 만들어졌다. 신규프로젝트를 동료와 함께 시작하며 나름의 설계 혹은 디자인을 위해서 시작하는 단계에서 C4-Model, UML등으로 서로 의견을 주고 받는 것은 나름 큰 맥락을 짚어 나가기에 좋다. 전통적인 Waterfall Model로 움직이는 개발프로세스에서는 효과적인 것으로도 볼 수 있다.[4]

<img src="//doublems.github.io/assets/postphoto/20210621/img_7.png" title="cost of software process"  width="80%" height="80%">

하지만 개발자는 결국 코드로 이해하고 표현하는 결과물을 만들어야 한다. 여기서 혼란스러워지기 시작한다. 정갈한 코드와 충분한 테스트코드가 있었다면 C4-model 등은 필요 없을 것이다. 코드면 충분하니까. 하지만 그렇지 않은 상황이었다. 그래서 코드외의 방법을 통해 협업을 진행하려는 상황이다.

동료에게 부탁하자.

> "테스트 코드작성 부탁드리고, 저희 프로젝트 구성도 그려주실수 있나요?"

가능할까? 좋은 환경이라면 가능 할 수도 있다. 낙관적으로 생각해서 모두 해준다고 생각하자. 여기서 걸림돌이 있다. 협업을 위한 또 다른 '일'을 하고 있는 동료가 언제 끝낼 수 있을까? 빠른 시간에 테스트 코드작성과 구성도 작성을 할 수 있는 상황이라면, 깨끗한 코드기반[5]의 프로젝트일 것이다. 이런 말을 해야하는 현장에서는 다들 바쁘다. 테스트와 구성도 작성에 많은 시간이 소요되고, 나중에는 귀찮아서 대충(?) 마무리 지어버리는 안타까운 일도 생긴다.  '그렇다면 위에서 말한 C4-Model은 필요 없다는 것인가?'

> 팀원들의 업무를 효율적으로 할 수 있는 코드와 시스템을 만들자

팀원들이 시간이 없어서 협업을 할 수 있는 여지가 안된다고 한다. 그럼 시간을 만들 수 있게 해주자.

우선 팀원들의 디버깅 환경을 개선이 필요했다. 당장 나도 흐름을 따라가기가 어려운 상황이었기도 했다. Distributed tracing 시스템을 구축이 필요했던 상황이었으나, 당장은 어려웠다. 그래서 기존에 사용하던 로그를 개선하도록 했다. 기존에 사용하던 logging은 nuxt의 consola였다. Consola의 경우에는 로그를 찍는 위치표기가 되지 않고, 멀티태그 또한 지원하지 않았다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_8.png" title="consola log example"  width="80%" height="80%">
Consola log 예

Java에서 흔히 사용되는 slf4j, log4j 등과 같이 적어도 현재 로깅의 파일위치는 찍히길 바랬다.

```bash
INFO : org.springframework.web.context.ContextLoader - Root WebApplicationContext: initialization started
INFO : org.springframework.web.context.support.AnnotationConfigWebApplicationContext - Refreshing Root WebApplicationContext: startup date [Wed Oct 18 15:06:22 KST 2017]; root of context hierarchy
INFO : org.springframework.web.context.support.AnnotationConfigWebApplicationContext - Registering annotated classes: [class config.RootConfig]
INFO : org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor - JSR-330 'javax.inject.Inject' annotation found and supported for autowiring
INFO : org.springframework.web.context.ContextLoader - Root WebApplicationContext: initialization completed in 301 ms
10월 18, 2017 3:06:22 오후 org.apache.catalina.core.ApplicationContext log
정보: Initializing Spring FrameworkServlet 'dispatcher'
```

> 그래서 결국 우리 팀이 사용하는 Logger를 감싸서 해당 기능을 추가해주는 Logger를 만들기로 하였다. 이때 'C4-Model'을 사용하여 공유하였다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_9.png" title="usecase-logger in c4model"  width="80%" height="80%">

코드작성은 Jest를 이용하여 Test코드와 함께 진행하였고, 테스트 커버리지는 100%를 기반으로 진행했다.

설계는 RFC5424를 기반으로 DIP를 따르도록 구성했다. 또한 사용자 가독성을 위해 Currying 비슷한 문법을 반영했다.

테스트 코드는 아래와 비슷하게 진행되었다.

```jsx
        const singleTagLogger = require('./team-logger.lib')(module)('test');
        const multiTagLogger = require('./team-logger.lib')(module)('test1', 'test2', 'test3');
        const noneTagLogger = require('./team-logger.lib')(module)();
        const noneModuleLogger = require('./team-logger.lib')()('test');
        const noneModuleTagLogger = require('./team-logger.lib')()();
        const Tags = require('./team-logger.constant');
        
        describe('# multiTagLogger', () => {
        test('basic test : 1', (done) => {
        multiTagLogger.fatal('basic fatal test : 1');
        multiTagLogger.error('basic error test : 1');
        multiTagLogger.warn('basic warn test : 1');
        multiTagLogger.log('basic log test : 1');
        multiTagLogger.info('basic info test : 1');
        multiTagLogger.start('basic start test : 1');
        multiTagLogger.success('basic success test : 1');
        multiTagLogger.ready('basic ready test : 1');
        multiTagLogger.debug('basic debug test : 1');
        multiTagLogger.trace('basic trace test : 1');
        done();
        });

        test('generateTags test', (done) => {
        const tag = multiTagLogger.generateTags();
        expect(tag).toEqual('test1,test2,test3');
        done();
        });

        test('generateCallPath test', (done) => {
        const tag = multiTagLogger.generateCallPath();
        expect(tag).toEqual('common/team-logger.lib.test.js');
        done();
        });

        test('generateMessage', (done) => {
        const messageWithTag = multiTagLogger.generateMessage('generateMessage');
        const expected = '[test1,test2,test3] [common/team-logger.lib.test.js] generateMessage';
        expect(messageWithTag).toEqual(expected);
        done();
        });

        test('getMessageWithTag', (done) => {
        const messageWithTag = multiTagLogger.getMessageWithTag('getMessageWithTag');
        const expected = '[test1,test2,test3] [common/team-logger.lib.test.js] getMessageWithTag';
        expect(messageWithTag).toEqual(expected);
        done();
        });
        });
```

완성된 코드를 사용한 결과, 아래와 같이 Grafana에서 Loki와 함께 필터조합으로 활용하여 더욱 디버깅에 시간을 아낄 수 있게 되었다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_10.png" title="grafana-example"  width="80%" height="80%">

```bash
2021-05-28 10:57:04	
ℹ [RTC,EVENT,DEVICE] [device-event/device-event-handler.js] DEVICE EVENT: done eventType 
2021-05-28 10:57:04	
ℹ [RTC,EVENT,DEVICE] [device-event/device-event-handler.js] DEVICE EVENT: done eventType
2021-05-28 10:57:04	
ℹ [RTC,EVENT,DEVICE] [device-event/device-event-handler.js] DEVICE EVENT: done eventType
2021-05-28 10:57:04	
[RTC,EVENT,DEVICE] [offer/connect-handler.lib.js] delete abc offer event connect task 
```

Logger는 이제 Data lake 와 결합하여, Distributed Tracing 등을 맞이할 준비가 되었다. 이 설계 또한 C4Model로 구성되어 공유되었다.

<img src="//doublems.github.io/assets/postphoto/20210621/img_11.png" title="blue-print"  width="80%" height="80%">

---

## 맺으며

가장 좋은  협업의 도구는 코드가 되어야 한다. 하지만 어려운 경우가 있어서 본 글에서는 C4-Model을 제안했다. 협업을 위해 시작했던 C4-Model 은 결국 누군가로부터 출발해야한다. 누군가 해주길 바라지 말고 스스로 제안하고 출발하자. 팀원의 시간이 나의 시간이 될 수 있다. 나의 기여가 나에게 돌아온다.

> There ain't no such thing as a free lunch!

## 참고

[1] 밀레니얼세대 - [https://en.wikipedia.org/wiki/Millennials](https://en.wikipedia.org/wiki/Millennials)

[2] Avi Flax - Set your data free with model-based architecture diagramming - [https://www.youtube.com/watch?v=3i-C7qbRGGQ](https://engineering.linecorp.com/ko/blog/diagramming-c4-model-c4-plantuml/)

[3] [https://engineering.linecorp.com/ko/blog/diagramming-c4-model-c4-plantuml/](https://engineering.linecorp.com/ko/blog/diagramming-c4-model-c4-plantuml/)

[4] [http://www.agilemodeling.com/essays/costOfChange.htm](http://www.agilemodeling.com/essays/costOfChange.htm)

[5] [https://www.samsungsds.com/kr/story/cleancode-0823.html](https://www.samsungsds.com/kr/story/cleancode-0823.html)

[6] [https://scrapbox.io/mabasasi/【nuxt%2Fconsola】_使い方まとめ【ロガー%2Flogger】](https://scrapbox.io/mabasasi/%E3%80%90nuxt%2Fconsola%E3%80%91_%E4%BD%BF%E3%81%84%E6%96%B9%E3%81%BE%E3%81%A8%E3%82%81%E3%80%90%E3%83%AD%E3%82%AC%E3%83%BC%2Flogger%E3%80%91)

---