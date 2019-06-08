---
layout: post
title:  "모든 개발자가 알아야만 하는 SOLID 원칙 - 2편(LSP/ISP/DIP)"
date:   2018-10-23 23:00:00
author: Jay Ahn(안재열)
categories: Programming
tags:   SOLID Principles every Developer Should Know
comments: true
---

지난 글에 이어서 모든 개발자가 알아야만 하는 SOLID 원칙 (LSP/ISP/DIP)를 알아보겠습니다.

### Liskov Substitution Principle (리스코프 치환원칙:LSP)
> 하위 클래스는 반드시 상위클래스와 대체 가능 해야 한다. 

이 원칙이 지향하는 것은 하위클래스가 상위 클래스의 자리를 에러 없이 맡을 수 있는지 확인하는 것 입니다.

**만약, 코드가 스스로 자신의 클래스 타입을 확인한다면, 그건 정말로 원칙을 위반 한 것입니다.** 

우리의 예제를 살펴보도록 합시다.

````cfml
//...
function AnimalLegCount(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(typeof a[i] == Lion)
            return LionLegCount(a[i]);
        if(typeof a[i] == Mouse)
            return MouseLegCount(a[i]);
        if(typeof a[i] == Snake)
            return SnakeLegCount(a[i]);
    }
}

AnimalLegCount(animals);
````

위와 같은 것이 LSP 원칙을 위한한 모습입니다. (또한 OCP를 위반한 것이기도 합니다.)

위 코드는 모든 Animal 타입을 알아야 하고, leg-counting 기능과 연관된 것을 호출해야합니다.

모든 새로운 Animal의 생성을 할때, 위의 AnimalLegCount() 는 새로운 Animal을 받아드릴 수 있도록 반드시 수정되어야 합니다.

````cfml
//...
class Pigeon extends Animal {
        
}
const animals[]: Array<Animal> = [
    //...,
    new Pigeon();
]
function AnimalLegCount(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(typeof a[i] == Lion)
            return LionLegCount(a[i]);
        if(typeof a[i] == Mouse)
            return MouseLegCount(a[i]);
         if(typeof a[i] == Snake)
            return SnakeLegCount(a[i]);
        if(typeof a[i] == Pigeon)
            return PigeonLegCount(a[i]);
    }
}
AnimalLegCount(animals);
````

이 함수가 LSP를 따르게 만드는 것은, 우리가 Steve Fenton가 필수조건으로 말한 LSP의 요구사항을 따르는 것 입니다.

만약 상위 클래스(Animal)가 상위클래스 타입(Animal)의 Parameter를 받는 메소드를 갖고 있을 경우, 하위클래스(Pigeon)은 반드시 상위클래스 타입(Animal 타입) 또는 하위클래스 타입(Pigeon type)을 Argument로 받을 수 있어야만 한다.
만약 상위클래스가 상위클래스 타입(Animal)을 반환한다면, 하위클래스는 상위클래스 타입(Animal) 또는 하위클래스 타입(Pigeon type)을 반드시 반환해야 합니다.


이제 LSP를 따르도록, AnimalLegCount()를 새로 구현해보겠습니다.

````cfml
function AnimalLegCount(a: Array<Animal>) {
    for(let i = 0; i <= a.length; i++) {
        a[i].LegCount();
    }
}
AnimalLegCount(animals);
````

AnimalLegCount()는 전달된 Animal의 타입에 대해서는 관심이 없고, 오직 다리의 숫자를 세는 것에만 관심이 있습니다.

파라미터는 Animal 타입(Animal 클래스나 Animal의 하위 클래스)이어야만 한다는 것이 위 코드에서 알 수 있는 전부입니다.

**Animal 클래스는 이제 LegCount() 메소드만 구현/정의 하기만 하면 됩니다.**
````cfml
class Animal {
    //...
    LegCount();
}
````

그리고 하위 클래스들은 LegCount()메소드를 구현해야만 하죠.

````
//...
class Lion extends Animal{
    //...
    LegCount() {
        //...
    }
}
//...
````

Lion 클래스 타입의 아규먼트가 AnimalLegCount() 메소드로 전달 될 때, LegCount()는 lion이 갖고 있는 다리의 숫자를 반환 할 것입니다.

이제 우리는 AnimalLegCount()가 다리 갯수를 세기 위해서 Animal의 타입에 대해 알 필요가 없다는 것을 볼 수 있습니다.

단지 Animal 타입의 LegCount()만 호출하면 됩니다. 계약으로 인해, Animal클래스의 하위 클래스는 LegCount() 기능을 구현해야만 하거든요. 

----

### Interface Segregation Principle (인터페이스 분리 원칙 : ISP)

> 클라이언트의 세분화된 내용과 같은 세분화된 인터페이스를 만들자.

> 클라이언트는 사용되지 않는 인터페이스에 의존하도록 강요해서는 안된다.

이 원칙은 커다란 인터페이스의 구현에 관한 단점을 다룹니다.
아래의 Shape 인터페이스를 보세요.

````cfml
interface Shape {
    drawCircle();
    drawSquare();
    drawRectangle();
}
````

이 인터페이스는 Squares와 circles, rectangles를 그립니다. Shape 인터페이스를 구현하고 있는 클래스 Circle, Square,Rectangle는 반드시 메소드 drawCircle(), drawSquare(),drawRectangle()를 정의해야 합니다.

````cfml
class Circle implements Shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Square implements Shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Rectangle implements Shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
````

위의 코드를 보면 꽤 재밌습니다. **클래스 Rectangle은 쓰이지 않는 메소드들(drawCircle()과 drawSquare())을 구현하고 있습니다.** 마찬가지로 Square 또한 사용되지않는 drawCircle()과 drawRactangle()을, Circle 클래스는 drawSquare(), drawSquare()를 구현하고 있습니다.

만약 우리가 drawTriangle()과 같은 다른 메소드를 Shape 인터페이스에 추가 한다면 아래와 같을겁니다.

````cfml
interface Shape {
    drawCircle();
    drawSquare();
    drawRectangle();
    drawTriangle();
}
````

클래스는 반드시 신규 메소드를 구현해야 하며, 그렇지 않으면 오류가 발생합니다.

우리는 위 코드가 Circle을 그릴 수있지만 그 외의 rectangle,square ,triangle은 그릴 수 없는 Shape의 구현은 불가능 하다는 것을 알 수 있습니다.

(*역자주: drawCircle()만을 구현 할 수 없음을 말함)

단지 Operation을 실행 할 수 없다는 에러를 던지는 메소드를 구현 할 수 있을 뿐입니다. 


ISP는 이런 Shape 인터페이스의 설계에 대해서 질색으로 싫어 합니다.

**클라이언트(여기서는 Rectangle, Circle, Square)는 필요하치 않거나 사용되지 않는 메소드에 의존하도록 강요해선 안됩니다.**

또한, ISP는 다음과 같이 명시하고 있습니다. '인터페이스는 꼭 하나의 일을 해야 하며,  추가적인 행위 그룹은 반드시 다른 인터페이스로 분리되어 추상화 되어야 한다.' 라고 말이에요.



아래에의 코드에서, Shape 인터페이스는 다른 인터페이스들에 의해 개별적으로 움직이는 일을 수행하고 있습니다.

Shape 인터페이스를 ISP 원칙을 따르도록 만드는 것은 행위(action)를 다른 인터페이스로 분리하는 것을 말합니다.

````cfml
interface Shape {
draw();
}

interface ICircle {
    drawCircle();
}
interface ISquare {
    drawSquare();
}
interface IRectangle {
    drawRectangle();
}
interface ITriangle {
    drawTriangle();
}
class Circle implements ICircle {
    drawCircle() {
        //...
    }
}
class Square implements ISquare {
    drawSquare() {
        //...
    }
}
class Rectangle implements IRectangle {
    drawRectangle() {
        //...
    }    
}
class Triangle implements ITriangle {
    drawTriangle() {
        //...
    }
}
class CustomShape implements Shape {
   draw(){
      //...
   }
}
````

ICircle 인터페이스는 오직 circle을 그리는 일만 하고 있으며, Shape는 그외의 도형들을 그리는 것을 다루고 있습니다. ^^

ISqurae 는 Squre그리는 일만. 그리고 IRectangle은 rectangles를 그리는 일만 하고 있지요. 


----

### Dependency Inversion Principle (의존성 역전 원칙 : DIP)
의존(종속)은 구체가 아닌 추상과 이뤄져야 한다.

> A. 고수준(High-Level)의 모듈은 저수준(Low-Level)의 모듈에 의존하면 안된다. 둘다 추상화에 의존해야한다.

> B. 추상은 세부사항(Details)에 의존해서는 안된다. 세부사항은 추상에 의존해야 한다.

>> * 참고 : 모듈화 디자인이란, 한 시스템을 여러 개의 기능적 구성요소(모듈)들을 조합함으로써 완성하도록 한 설계를 말한다. - 나무위키


이번 원칙에서는 모듈로 구성되어 커지게 될 소프트웨어 개발에 대한 중요한 점이 나옵니다.

시작하기전, 우리는 의존성 주입(Dependency Injection) 과 관련된 일들에 대해서 명확히 알아야 합니다.

아래의 코드는 고수준의 구성요소(Component)가 저수준의 구성요소에 따라 행동하는 모습의 예시입니다.

아래의 코드에서는 HttpService가 저수준의 컴포넌트이고, Http는 고수준의 컴포넌트 입니다. 

(* 역자주: Http 클래스는 Constructor를 통한 XMLHttpService 클래스의 의존성 삽입의 사례를 나타내고 있습니다.)

````cfml
class XMLHttpService extends XMLHttpRequestService {}

class Http {
    constructor(private xmlhttpService: XMLHttpService) { }
    get(url: string , options: any) {
        this.xmlhttpService.request(url,'GET');
    }
    post() {
        this.xmlhttpService.request(url,'POST');
    }
    //...
}
````

이 설계는 DIP A를 위반하였습니다.(DIP A - 고수준의 모듈은 저수준의 모듈에 의존해선 안된다. 반드시 추상화에 의존 해야한다.)

상위 코드의 Http 클래스는 XMLhttpService 클래스에 의존하도록 되어있습니다. 간혹, xmlHttpService 외에 다른 Http 연결 서비스를 사용 하고 싶을 수도 있습니다. 이럴때, 코드를 편집하기 위해서는 모든 Http 인스턴스(사용중인)를 고려하여 조심스레 수정해야합니다. 이는 OCP 원칙 위반이기도 합니다.

따라서 **'Connection 인터페이스'를 만들어, 사용중인 Http 서비스 타입들에 대해 덜 신경 써야합니다**. 


````cfml
interface Connection {
    request(url: string, opts:any);
}
````

request 메소드를 갖고 있는 Connection 인터페이스를 이용하여 Http를 개선 할 수 있습니다. Connection 인터페이스 타입의 Argument를 Http 클래스로 전송합니다.

````cfml
class Http {
constructor(private httpConnection: Connection) { }

    get(url: string , options: any) {
        this.httpConnection.request(url,'GET');
    }
    post() {
        this.httpConnection.request(url,'POST');
    }
    //...
}
````

Http에 전달된 Http 연결 서비스 유형에 관계없이 네트워크 연결 유형을 알지 않고도 쉽게 네트워크에 연결할 수 있습니다.
이제 XMLHttpService 클래스를 다시 구현하여 Connection 인터페이스를 구현할 수 있습니다.
````cfml
class XMLHttpService implements Connection {
    const xhr = new XMLHttpRequest();
    //...
    request(url: string, opts:any) {
        xhr.open();
        xhr.send();
    }
}
````
많은 Http Connection 타입을 만들고 Http 클래스에 에러와 같은 야단법석한 일들은 피해서 전송 할 수 있습니다. 

````cfml
class NodeHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }
}
class MockHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }    
}
````

우리는 고수준의 모듈과 저수준의 모듈이 추상에 의존하고 있음을 볼 수 있습니다. Http 클래스(고수준의 모듈)은 Connection 인터페이스(추상)에 의존하고 있으며, Http 서비스 타입들(저수준의모듈)또한 Connection 인터페이스에 의존하고 있습니다.

또한, 여기서 DIP는 Liskov Substitution Principle을 위반하지 않도록 합니다. (Connection 유형 Node-XML-MockHttpService는 상위 유형 Connection을 대체 할 수 있습니다.)



### 결론 

우리는 여기서 모든 소프트웨어 개발자가 반드시 알아야 하는 다섯가지 원칙에 대해서 알아봤습니다.
모든 원칙들을 지키는 일은 처음에는 너무나도 벅찬일이지만, 꾸준한 연습과 적용을 통해서 원칙들을 우리의 어플리케이션 소프트웨어의 일부로 만들고 유지보수에 훌륭하고 큰 영향을 끼칠 수 있을 것입니다.

________
*본 자료는 [Chidume Nnamdi]님이 Medium에서 작성한 글 입니다. Doublem.org는 저자의 허락을 받아 번역하여 대한민국에 소개하고 있습니다.

*Original article is written by [Chidume Nnamdi]. Doublem.org, with the permission of the author, is translated and introduced to Korea.
________

참고자료
--------

- [SOLID Principles every Developer Should Know](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688).

[Chidume Nnamdi]: https://blog.bitsrc.io/@kurtwanger40