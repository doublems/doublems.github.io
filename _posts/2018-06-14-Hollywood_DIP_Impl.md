---
layout: post
title:  "헐리우드원칙과 DIP구현"
date:   2018-06-14 10:29:00
author: Jerry Ahn(안재열)
categories: Programming
tags:   Hollywood Principle DIP js java
comments: true
---
### 들어가며
다른사람들과 함께 '일'을 하다보면 다양한 '일'을 겪는다. 그 일들은
고객의 문제와 해결이며, 필요성과 욕구 사이의 줄타기이다.

줄타기 사이에서 우리의 역할은 문제를 정의하는 일을 할 수도, 문제를
해결하는 방법을 만드는 일을 할 수도, 필요와 욕구 사이를 적절히 조율하는
일을 할 수도 있다.

<img src="//doublems.github.io/assets/postphoto/20180614/1.jpg" title=""  width="100%" height="100%">

소프트웨어는 무엇이고, 개발은 무엇인가? 아마, 소프트웨어는 문제를
해결하는 방법이며 개발은 문제를 해결하는 일을 만드는 일이라고 할 수 있을
것이다.

그렇다면, **'문제정의 → 해결방안설계 → 해결방안구현 → 문제해결'**
이라는 방법으로 순차적으로 처리를 할 수 있을까?

위와 같은 일은 큰 맥락으로 이뤄지지만, 나의 학교에서의 프로젝트
경험으로도, 기업단위의 프로젝트경험에서도 매끄럽게 이뤄지지 않았다.

가장 큰 문제는 문제정의를 문제라고 생각하는 실제 경험자가 정의하지 않고,
할 수도 없는 상황이 많다.

이를 해결하기 위해, 소프트웨어 개발방법론에는 Agile이라는 방법도 있고,
일반 과학연구방법론쪽에서는 Living-Lab이라는 개념을 도입하기도 한다.

두개의 방법 모두 실제문제경험을 할 수 있는 고객,소비자,사용자를
문제정의의 대상객체에서 정의를 내리는 주체로 만들고 지속적인 반복 해결을
통하여 문제를 해결하자라는 개념이다.

아직까지는 나의 경우 경험이 부족하여 식견이 짧아, 어떤 방안이 더욱
효율적인지는 판단이 어렵다. 

하지만, 위와 같은 방법론적인 방안외에 내가 프로그래밍(coding)을 통해서
할 수 있는 일은 어떤것이 있을까하고 고민하던 중 아래와 같은 원칙을
발견하고 적용해보려고 한다. 

#### 헐리우드원칙

사전적 정의는 없지만, 많은 위키와 글들에서 아래와 같이 말한다.

"Don't call us, we'll call you" 우리한테 연락하지 마세요. 우리가
연락할께요

<img src="//doublems.github.io/assets/postphoto/20180614/2.jpg" title=""  width="100%" height="100%">

'내'가 할 수 있는 일과 '남'이 할 수 있는 일을 구분하는 것이다.

인력채용과정에서 구직자가 주도적으로 할 수 있는 일은 '자기소개서 및
이력서' 작성 및 제출이 최선이다. 제출이후에 벌어지는 일들은 각
구인기업의 방법에 따라 다르다.

구직자는 서류통과 이후 기업에서 요청하는데로 반응하여 행동 할 수 밖에
없다.

구직을 위해서라면 기업요청에 맞춰 유연하게 대응해야한다.

<img src="//doublems.github.io/assets/postphoto/20180614/3.jpg" title=""  width="100%" height="100%">

위의 경우 구직자의 서류가 모두 통과 되었다고 하자, 그렇다면 구직자는
세가지의 채용 프로세스에 따라서 행동을 해야 한다.

여기서 문제는 세가지의 채용프로세스이고, 해결을 위해서는 구직자가 각
채용프로세스에 맞춰서 행동해야 한다.

프로그래밍을 한다면 어떻게 할 것인가?

아래에서 getResult 함수는 각각의 회사채용방식에 맞게 코드를 작성 할
것인가?

지원자 객체는 이름과 점수(학점), 현재회사, 고용유무상태를 확인한다.

Node.JS 예시
````javascript
//서버

var express = require('express');

var router = express.Router();

/* GET home page. */

//구직자

router.get('/', function(req, res, next) {

var applicant = {name: 'jerry', score: 10, company:'',
isHired:''};

var result = getResult(applicant);

res.render('index', { result:result});

});

function getResult(applicant){

return applicant

}
````
````
//결과(웹)

extends layout

block content

h1= title

p Welcome to #{result.company}

p #{result.name}은 #{result.company}의 채용전형 결과
#{result.score}로 #{result.isHired}하셨습니다.
````

A기업의 채용프로세스는 다음과 같다.

>-   지원자의 이름은 지원번호와 함께 나타난다.
>-   지원자의 점수는 10을 곱하여 합격유무가 결정된다.


````javascript
A 기업

function getResult(applicant){

applicant.name = ("지원번호 000123/"+applicant.name);

var companyScore = (applicant.score * 10);

if(companyScore >99){

applicant.isHired ="합격";

}else {

applicant.isHired = "불합격";

}

return applicant

}
````

여기서 B기업의 프로세스를 추가하려면 아래와 같은 선택지가 있다.

>a. getResult를 삭제 혹은 주석처리

>b. getResult2 라는 새로운 이름의 함수선언 및
Route.get('/')의 getResult 호출 변경

a안은 A기업의 프로세스를 재사용 할 수 없다.  a안을 따르는 순간 A기업의
getResult를 사용하던 모든 함수는 장애가 발생한다. (강제로 B기업
프로세스로 적용)

b안은 함수의 이름을 관리해야하며, 잘못된 함수의 이름은 다른사람으로
하여금 혼돈 및 오용가능성을 높일 수 있다. 또한 Route.get('/')에서
필요로 하는 요소 (이름, 회사명, 점수, 합격유무) 프로퍼티가 존재하지
않을경우 잘못된 페이지가 나타난다.

잘못된 페이지는 잘못된 응용이다.  (아래 B기업의 결과를 보고 싶다면
반드시 결과(웹) 템플릿의 호출 프로퍼티 식별자 명을 바꿔야 한다.)

````javascript
B 기업

function getResult(applicant){

applicant.B_NAME = (applicant.name);

var BS = (applicant.score * 6);

if(BS >90){

applicant.hired ="합격";

}else {

applicant.hired = "불합격";

}

return applicant

}
````

### 의존성역전의 원칙

Dependency Inversion Principle 이라고 한다. (이하 DIP) , 의존이란
'다른것에 의지하여 존재함'이라는 뜻이다.

객체 지향 프로그래밍에서 의존 관계 역전 원칙은 소프트웨어 모듈들을
분리하는 특정 형식을 지칭한다.

이 원칙을 따르면, 상위 계층(정책 결정)이 하위 계층(세부 사항)에 의존하는
전통적인 의존 관계를 반전(역전)시킴으로써 상위 계층이 하위 계층의
구현으로부터 독립되게 할 수 있다. 이 원칙은 다음과 같은 내용을 담고
있다.

첫째, 상위 모듈은 하위 모듈에 의존해서는 안된다. 상위 모듈과 하위 모듈
모두 추상화에 의존해야 한다.
둘째, 추상화는 세부 사항에 의존해서는 안된다. 세부사항이 추상화에
의존해야 한다.

이 원칙은 '상위와 하위 객체 모두가 동일한 추상화에 의존해야 한다'는
객체 지향적 설계의 대원칙을 제공한다.

상위 모듈이 하위모듈에 의존하지 말라고 한다. 우리의 예를 들면, 구직자가
보고 싶어하는 페이지(웹템플릿)이 상위모듈이다. (이 페이지에는 구직자의
목표인 구직결과가 나타나있다.)

하지만, 지금까지의 프로그래밍 결과로는 상위모듈이 하위모듈에 의존하고
있는 모습이다.

<img src="//doublems.github.io/assets/postphoto/20180614/4.jpg" title=""  width="100%" height="100%">

>*A* ***policy*** *is* *a* *set* *of* *ideas* *or* *plans* *that
is* *used* *as* *a* *basis* *for* *making* *decisions*, *especially* *in* *politics*, *economics*, *orbusiness*.

Policy는 계획이나 아이디어의 모음이며, 의사결정을 하는데 쓰인다. -
콜린스코빌드영영사전

지극히도 구직을 하기 위한 Policy 수준내용이 반영된 구현체(웹템플릿)이
채용프로세스를 담고있는 함수들에 의존을 하고 있다. 

위에서 보았겠지만, b안(*getResult2 라는 새로운 이름의 함수선언 및
Route.get('/')의 getResult 호출 변경*)을 따르는 경우에는 필연적으로
웹템플릿을 수정 할 수 밖에 없다.

<img src="//doublems.github.io/assets/postphoto/20180614/5.jpg" title=""  width="100%" height="100%">

<img src="//doublems.github.io/assets/postphoto/20180614/6.jpg" title=""  width="100%" height="100%">

DIP는 이를 해결하기 위해 Interface를 사용하라고 한다. 어떤 뜻일까?

### 사용예시

상위 예시에서는 getResult를 정의하고 사용 할 수 있다.

그러나, applicant의 프로퍼티에 대해서 강력한 제약사항을 선언 할 수
없었다. 이것은 관심사의 분리 정도밖에 기능을 할 수 없는 것으로 보인다. 

>separation of concerns; SoC관심사의 분리, 관심의 분리

>(소프트웨어 공학) 프로그램을 기능 면에서 가능한 중복이 아닌 여러 모듈로
명확히 나누는 것
여기서, 관심 = 프로그램의 기능, 행동, 목적
큰 문제를 작은 부분들의 문제로 분할하면 해결이 용이함
모든 프로그래밍 패러다임의 지향점
모듈성과 캡슐화가 중요함
//예시
MVC 디자인 패턴 - 데이터와 표현 분리
서비스 지향 설계 - 관심을 서비스로 분리
절차적 프로그래밍
객체지향프로그래밍 - 데이터에 대한 관심을 클래스와 객체로 분리
관점지향프로그래밍 AOP
역할지향프로그래밍
주제지향프로그래밍
-
[[https://zetawiki.com/wiki/%EA%B4%80%EC%8B%AC%EC%9D%98_%EB%B6%84%EB%A6%AC_SoC](https://zetawiki.com/wiki/%EA%B4%80%EC%8B%AC%EC%9D%98_%EB%B6%84%EB%A6%AC_SoC)

잠깐! 여기서 생각해보자. 지금까지 우리는 구직자의 행위와 함께 구인기업의
채용프로세스를 정의하는 제3자, 전지적작가시점에서 코드를 작성했다.

만약, 구인기업의 채용프로세스를 모른다고 가정한다면 어떻게 코드를
작성해야 할까? 막연히 프로세스를 알때까지 기다려야 할까?

````javascript
/* GET home page. */

router.get('/', function(req, res, next) {

var applicant = {name: 'Jerry Ahn', score: 10,
company:'',isHired:''};

var result = '??????????????????' //여기는 어떻게 하나???

res.render('index', { result:result});

});
````

이런경우 아래와 같이 작성을 하게 된다면 이후, 채용프로세스를 알때,
우리는 채용프로세스 함수를 인자로 넣어주기만 하면 된다. 

(나중에 내가 선언을 해줘도 되고, 외부에서 모듈로 다운로드 받아도 된다.)

**"Don't call us, we'll call you" 우리한테 연락하지 마세요. 우리가
연락할께요. 가 눈앞에 구현되는 순간이다.**

````
/* GET home page. */

router.get('/', function(req, res, next) {

var applicant = {name: 'Jerry Ahn', score: 10,
company:'',isHired:''};

var result = getResult(applicant,'프로세스');//시키는데로 반응하겠다.
헐리우드 원칙 적용

res.render('index', { result:result});

});

//회사채용후 결과를 얻는 함수 //시키는데로 반응하겠다. 헐리우드 원칙
적용

//applicant는 name:String, score:integer, company:String, isHired:String
프로퍼티로 구성되어있습니다.

function getResult(applicant,callback){

return callback(applicant);

};
````

단지 JS로 구현한 코드에는 인터페이스의 강제성이 없어서 만약 applicant의
프로퍼티 타입이 다를경우를 해결하는 로직을 getResult에 구현해줘야한다. 

**단, 해결로직은 getResult에만 포함해주면 된다. 이는 관심사의 분리를
통한 이점이다.** 다른사람과의 협업시에 한사람은 getResult만 신경쓰면
되며, 이를 사용하는 쪽에서는 다른 부분에만 관심을 두고 작업을 진행하면
된다.

(사실. Interface라면 서로 합의가 된 상태에서 구현이 이뤄져야한다.
아니면, 누군가가 하나의 기준을 준수하고 따라줘야 한다. 프로퍼티가
다르다는 것은 인터페이스가 제 기능을 못하는것으로 봐도 될 것이다.) 

````javascript
var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

var applicant = {name: 'Jerry Ahn', score: 10,
company:'',isHired:''};

var result = getResult(applicant,CompanyB);

res.render('index', { result:result});

});

//회사채용후 결과를 얻는 함수 //시키는데로 반응하겠다. 헐리우드 원칙
적용

//applicant는 name:String, score:integer, company:String, isHired:String
프로퍼티로 구성되어있습니다.

function getResult(applicant,callback){

return callback(applicant);

};

//A기업

function CompanyA(applicant){
    applicant.name = ("지원번호 000123/"+applicant.name);
    applicant.company = 'A기업';
    var companyScore = (applicant.score * 10);
    if(companyScore >99){
        applicant.isHired ="합격";
    }else {
        applicant.isHired = "불합격";
    }
    return applicant;
}

//B기업

function CompanyB(applicant){
    applicant.company = 'B기업';
    var companyScore = (applicant.score * 5);
    if(companyScore >60){
        applicant.isHired ="합격";
    }else {
        applicant.isHired = "불합격";
    }

    return applicant;
}
````

이를 자바에서 구현해보자. 자바의 경우에는 인터페이스를 구현시에는
강제성을 지닌다. 따라서 결과에 대한 보장을 받을 수 있다.

아래와 같이 구현시에는 지원서에 적힌 Company명을 가지고 분류하는
기능으로 자동화가 가능하다. 이기능을 구현시에는 이부분의 코딩은 완료가
된다. → Factory Pattern 을 통한 활용이 가능

````java
package Controller;
import model.Applicant;
import model.CompanyA;
import model.HiringProcess;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Map;

@Controller
public class IndexController {
    @RequestMapping("/")
    public String welcome(Model model) {
    Applicant jerry = new Applicant("jerry",10);
    HiringProcess result = new CompanyA(); // 채용프로세스 타입을 보장받는다.
    // (지금은 CompanyA를 넣었지만, 지원서에 적힌 Company명을 가지고
    //분류하는 기능으로 자동화가 가능하다. 이기능을 구현시에는 이부분의 코딩은
    //완료가 된다.)
    model.addAttribute("result", result.getResult(jerry));
    return "welcome";
    }
}


package model;
public class Applicant {
private String name;
private String company;
private int score;
private String isHired;
public Applicant(String name, int score){
this.name = name;
this.score = score;
this.company = "";
this.isHired ="미정";
}

//..... Getter, Setter}

//-----------------------

package model;
//채용프로세스 인터페이스
public interface HiringProcess {
Applicant getResult(Applicant applicant);
}

//---------------------

package model;
public class CompanyA implements HiringProcess {

    @Override
    public Applicant getResult(Applicant applicant) {
        applicant.setName(("지원번호 000123/"+applicant.getName()));
        int companyScore = (applicant.getScore() * 10);
        if(companyScore >99){
          applicant.setIsHired("합격");
        }else {
          applicant.setIsHired("불합격");
        }
        return applicant;
    }
}
````
<img src="//doublems.github.io/assets/postphoto/20180614/7.jpg" title=""  width="100%" height="100%">

-   추후 OCP 연계 및 자동화기능을 수행하는 Factory를 만들어보자.

참고자료
--------

-   [http://doublem.org/Hollywood-Principle/](http://doublem.org/Hollywood-Principle/)
-   [https://dzone.com/articles/the-hollywood-principle](https://dzone.com/articles/the-hollywood-principle)
-   [https://en.wikipedia.org/wiki/Dependency_inversion_principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
-   [http://vandbt.tistory.com/42](http://vandbt.tistory.com/42)
-   [https://medium.com/@smartbosslee/%EA%B4%80%EC%8B%AC%EC%82%AC%EC%9D%98-%EB%B6%84%EB%A6%AC-separation-of-concerns-soc-8a8d09df066d](https://medium.com/@smartbosslee/%EA%B4%80%EC%8B%AC%EC%82%AC%EC%9D%98-%EB%B6%84%EB%A6%AC-separation-of-concerns-soc-8a8d09df066d)
-   [https://zetawiki.com/wiki/%EA%B4%80%EC%8B%AC%EC%9D%98_%EB%B6%84%EB%A6%AC_SoC](https://zetawiki.com/wiki/%EA%B4%80%EC%8B%AC%EC%9D%98_%EB%B6%84%EB%A6%AC_SoC)
-   [https://en.wikipedia.org/wiki/Living_lab](https://en.wikipedia.org/wiki/Living_lab)
