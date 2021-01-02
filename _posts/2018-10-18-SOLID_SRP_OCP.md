---
layout: post
title:  "모든 개발자가 알아야만 하는 SOLID 원칙 - 1편"
date:   2018-10-18 23:00:00
author: Jay Ahn
subtitle: SRP/OCP
description: 객체지향 소프트웨어 개발의 새로운 설계를 위한 SOLID 원칙
image: https://doublems.github.io/assets/postphoto/srp.jpeg
categories: Programming
tags:   SOLID Principles every Developer Should Know
comments: true
---

객체지향 타입의 프로그래밍은 소프트웨어 개발의 새로운 설계를 불러왔습니다.

개발자가 데이터와 같은 목적과 기능을 클래스로 묶을 수 있으며, 전체 어플리케이션과 상관없이 단일 목적을 위해 이용 할 수 있습니다.

하지만, 객체지향프로그래밍은 유지보수가 어렵고, 코드가 혼란스러워지는 것을 예방하지는 않습니다.

Robert C. Martin은 다섯 가지 지침을 개발했습니다. 다섯가지 지침과 원칙을 통해 개발자는 읽기 쉽고 유지 보수가 쉬운 프로그램을 쉽게 만들 수 있습니다. 



다음 다섯가지 원칙은 S.O.L.I.D 라고 합니다. (Michael Feathers가 만든 머리글자)

- S: Single Responsibility Principle (단일책임원칙)
- O: Open-Closed Principle (열린-닫힌 원칙)
- L: Liskov Substitution Principle (리스코프 치환 원칙)
- I: Interface Segregation Principle (인터페이스 분리 원칙)
- D: Dependency Inversion Principle (의존성 역전 원칙)


이 원칙들을 본 글에서 다뤄보려고 합니다.

- Note : 이번 글에 있는 대부분의 예제는 실제 어플리케이션의 적용이나 사례로로 충분하지 않을 수 있습니다. 모든것은 자신의 설계와 사용 사례에 달려 있습니다.  가장 중요하게 이해해야 하는 것은 어떻게 원칙을 적용하고 따라 하는지를 아는 것 입니다.

- Tip : SOLID 원칙은 모듈화, 캡슐화, 확장용이성, 구성용이한 컴포넌트 등을 고려한 소프트웨어의 구축을 위한 설계 입니다.
(비트([Bit])는 이러한 원칙을 실천에 옮기는 도구입니다. 팀별로 다양한 프로젝트에서 이러한 구성 요소를 쉽게 분리, 공유 및 관리 할 수 ​​있습니다.)

<img src="//doublems.github.io/assets/postphoto/srp.jpeg" title=""  width="80%" height="80%">

________________________________
### Single Responsibility Principle (SRP:단일 책임 원칙)
> “…You had one job” — Loki to Skurge in Thor: Ragnarok

> 당신은 일 하나를 가지고 있었다... -  로키, 토르 라그나로크 中
>> ("당신은 일 하나를 가지고 있었다"라는 말은 직장에서 개인이 저지른 실수에 주의를 환기시키는 표현입니다. https://knowyourmeme.com/memes/you-had-one-job)



**단일 클래스는 오직 하나의 일을 가져야 한다.**


단일 클래스는 오직 한 가지 일에만 책임이 있어야 합니다.  만약 하나의 클래스가 하나 이상의 책임이 있다면, 이것은 결합(Coupled)를 불러옵니다. 하나의 책임에 대한 변경은 다른 책임의 수정을 발생시킵니다.

- NOTE: 이 원칙의 적용은 클래스에만 국한되지 않으며, 소프트웨어 컴포넌트와 마이크로 서비스에도 적용됩니다. 


다음 아래의 예제 코드를 살펴보세요.

````csharp
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
    saveAnimal(a: Animal) { }
}
````



Animal 클래스는 SRP원칙을 위반했습니다.

어떻게 SRP 위반했을까요?


클래스는 하나의 책임(맡은 일)을 가져야 한다고 명시되어 있습니다. 여기서 우리는 두가지 책임을 뽑아 낼 수 있습니다.

**첫째로,1) Animal 데이터베이스의 관리와 두번째로 2) Animal 프로퍼티들(속성)의 관리입니다. saveAnimal이 DB의 Animal 스토리지를 관리하는 동안 생성자와 getAnimalName은 Animal 프로퍼티를 관리 합니다.**

이런 설계는 나중에 어떤 이슈를 불러올까요?

어플리케이션이 DB관리기능에 영향을 주도록 변경된다면, 변경사항에 맞춰 Animal 프로퍼티의 사용을 만드는 클래스는 반드시 건들이게 되고 새로 컴파일 해야 합니다.

우리는 시스템에서 경직된 냄새가 나며, 도미노 효과처럼 보이고, 하나의 카드를 만지면 다른 모든 카드에 영향을 주는 것으로 보입니다. 

> rigidity (경직성) 
> 물체의 형태나 구조가 비교적 고정되어 잘 바뀌지 않음을 일컫는 말
>  - 네이버 지식백과 인문과학 > 심리 > 실험심리학용어사전



이런 시스템이 SRP를 따르도록, DB에 각 animal을 저장하는 단 하나의 책임을 관리 할 또 다른 클래스를 만들었습니다.

````csharp
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
}
class AnimalDB {
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}
````

> 클래스들이 같은 이유로 매번 변화하는 변화경향이 있다면, 클래스를 설계할때 연관된 기능들을 함께 모으는 것을 목표로 해야한다.
> 우리는 기능을 분리하노록 노력하고, 기능들은 서로 다른 이유로 변경되어야 한다. - Steve Fenton


**이런 것을 적절히 응용하면, 우리 어플리케이션은 높은 응집력을 갖게 될 것입니다.**

_____________________________________________

### Open-Closed Principle (OCP:열림-닫힘 원칙)

> 소프트웨어 엔티티(클래스,모듈,함수)는 확장을 위해 열려있고, 수정되서는 안된다.


계속해서 우리의 Animal 클래스를 살펴봅시다.

````csharp
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
}
````

우리는 Animal 리스트를 반복하고, 각 Animal의 울음소리를 반복하였습니다. 

````csharp
//...
const animals: Array<Animal> = [
    new Animal('lion'),
    new Animal('mouse')
];
function AnimalSound(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(a[i].name == 'lion')
            return 'roar';
        if(a[i].name == 'mouse')
            return 'squeak';
    }
}
AnimalSound(animals);
````

함수 `AnimalSound()`는 OCP를 따르지 않고 있습니다. 왜냐하면 새로운 종의 Animal에 대해서 닫혀있지 않기 때문이죠 .

만약, 우리가 새로운 Animal, Snake를 추가한다면:

````csharp
//...
const animals: Array<Animal> = [
    new Animal('lion'),
    new Animal('mouse'),
    new Animal('snake')
]
//...
We have to modify the AnimalSound function:

//...
function AnimalSound(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        if(a[i].name == 'lion')
            return 'roar';
        if(a[i].name == 'mouse')
            return 'squeak';
        if(a[i].name == 'snake')
            return 'hiss';
    }
}
AnimalSound(animals);
````

여러분은 앞으로 보시게 될겁니다. 모든 새로운 Animal을 위해서 새로운 로직을 `AnimalSound()` 함수에 추가하는 것을 말이지요.

이건 상당히 간단한 예제입니다. 우리의 어플리케이션이 커지고 복잡해질때, 여러분은 만나게 될 것입니다. 매시간 새로운 animal이 추가 될 때 마다, 'if' 조건문이 `AnimalSound()`함수에서 계속해서 반복되며 추가된다는 것을 말이에요.


어떻게 하면 AnimalSound가 OCP를 지킬 수 있도록 할까요?

````csharp
class Animal {
        makeSound();
        //...
}
class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
}
class Squirrel extends Animal {
    makeSound() {
        return 'squeak';
    }
}
class Snake extends Animal {
    makeSound() {
        return 'hiss';
    }
}
//...
function AnimalSound(a: Array<Animal>) {
    for(int i = 0; i <= a.length; i++) {
        a[i].makeSound();
    }
}
AnimalSound(animals);
````

현재 Animal은 가상의 `makeSound()`를 가지고 있습니다. 우리는 Animal class를 확장하고 가상의 makeSound()를 구현하고 있는 각각의 animal을 가지고 있습니다.

모든 animal은 자신의 `makeSound()`에서 울음소리에 관한 방법을 구현하고 있습니다. `AnimalSound()`는 animal 배열을 반복하며 `makeSound()` 메서드를 호출 할 뿐입니다.

이제, 우리가 새로운 animal을 추가한다면, AnimalSound는 더이상 변경 할 필요가 없습니다. 우리가 할 일은 새로운 animal을 animal 배열에 추가하기만 하면 됩니다.


AnimalSound는 이제 OCP 원칙을 따르게 되었습니다.



다른예제:

여러분이 상점을 가지고 있다고 상상해보세요. 그리고 여러분이 좋아하는 고객에게 20% 할인해주고자 할때,

클래스는 아래와 같을겁니다.

````csharp
class Discount {
    giveDiscount() {
        return this.price * 0.2
    }
}
````

여기에 VIP 고객에게는 20%를 추가로 할인해주기로 결정했을때, 코드는 아래와 같을것입니다.

````csharp
class Discount {
    giveDiscount() {
        if(this.customer == 'fav') {
            return this.price * 0.2;
        }
        if(this.customer == 'vip') {
            return this.price * 0.4;
        }
    }
}
````

하지만 위 코드는 OCP 원칙을 지키지 못했습니다. OCP는 이런 코드를 금지하고 있거든요 :) 

만약에 우리가 신규 할인률을 다른 고객에게 적용하려고 한다면, 새로운 로직이 추가되는 것을 보게 될 것입니다.


OCP 원칙을 준수하며 만드는 방법은 Discount를 확장하여 새로운 클래스를 추가하는 것입니다. 

추가된 신규 클래스에서 우리는 신규 행위를 구현 할 수 있을 것입니다.  

````csharp
class VIPDiscount: Discount {
    getDiscount() {
        return super.getDiscount() * 2;
    }
}
````

만약, 80%의 할인율을 슈퍼 VIP 고객에게 적용하려면 아래와 같습니다.

````csharp
class SuperVIPDiscount: VIPDiscount {
    getDiscount() {
        return super.getDiscount() * 2;
    }
}
````

**이제, 우리는 '수정'과는 별개로 '확장' 된 모습을 볼 수 있습니다.**


________
*본 자료는 [Chidume Nnamdi]님이 Medium에서 작성한 글 입니다. Doublem.org는 저자의 허락을 받아 번역하여 대한민국에 소개하고 있습니다.

*Original article is written by [Chidume Nnamdi]. Doublem.org, with the permission of the author, is translated and introduced to Korea.
________

참고자료
--------

- [SOLID Principles every Developer Should Know](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688).

[Bit]: https://github.com/teambit/bit
[Chidume Nnamdi]: https://blog.bitsrc.io/@kurtwanger40