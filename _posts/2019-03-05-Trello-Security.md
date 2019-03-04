---
layout: post
title:  "간단한 구글 쿼리로 수십개의 퍼블릭 트렐로에서 패스워드 얻는 방법"
date:   2019-03-05 00:10:00
author: Jerry Ahn(안재열)
categories: Trello
tags:   Trello Tip 보안
comments: true
---

저는 2018년 4월 25일 조사를 하면서 수 많은 개인 및 회사의 민감성 정보가 퍼블릭 [트렐로] 보드에 있는 것을 찾았습니다.

고쳐지지 않은 버그, 보안취약점, SNS자격증명, 이메일 주소, 서버 및 관리자 대시보드 정보 등은 검색엔진이 인덱싱 해놓은 퍼블릭 트렐로 보드에 있다면,
 
**누구나 쉽게 이런 정보를 찾을 수 있습니다.**

### 어떻게 발견했나?

저는 아래 쿼리를 통해서 Jira의 [버그바운티]를 운영하는 Jira 인스턴스를 검색 중이었습니다.

````sql
inurl:jira AND intitle:login AND inurl:[company_name]
````

>- Note : 저는 구글 Google dork query를 사용하였으며, dork이라고도 불립니다.
         고급 검색 연산자를 사용하여 웹사이트에서 쉽게 접근하기 어려운 정보를 찾습니다. - [WhatIs.com] [구글해킹]
       

저는 Trello를 {company name}에 넣었고, 구글은 몇가지 트렐로 보드의 결과를 보여줬습니다.

결과에는 Jira 인스턴스로 로그인하는 정보들이 있었습니다. 이때가 8:19 AM UTC 쯤 이였습니다.

**저는 너무 놀랍고 충격에 휩싸였습니다.**

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue0.png" title=""  width="100%" height="100%">

그렇다면 왜 이런 문제가 있었을까요? 트렐로는 프로젝트 및 개인 일정 관리를 위한 온라인 도구이기 때문입니다.
트렐로는 보드를 통해서 프로젝트와 일정을 관리합니다. 사용자는 보드를 개인용(private) 혹은 공개용(Public)으로 설정 할 수 있습니다.
여기서 **공개용으로 설정한 내용이 노출** 되는 것 입니다.

이메일 계정 자격 증명과 같은 다른 정보를 찾아보기로 했습니다.

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue1.png" title=""  width="100%" height="100%">

````sql
inurl:https://trello.com AND intext:@gmail.com AND intext:password
````

SSH, FTP는 어떨까요?

````sql
inurl:https://trello.com AND intext:ftp AND intext:password
inurl:https://trello.com AND intext:ssh AND intext:password
````

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue2.png" title=""  width="100%" height="100%">

### 내가 찾은 것

이러한 방법으로 몇 시간정도 찾은 결과, 더 놀라운 사실을 발견했습니다.

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue3.png" title=""  width="100%" height="100%">

어떤 회사는 퍼블릭 트렐로 보드를 **자사 웹사이트 및 어플리케이션의 버그관리와 보안 취약점을 관리하는 용도**로 사용하고 있었습니다.

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue4.png" title=""  width="100%" height="100%">

사람들은 또한 트렐로 보드를 멋진(?) 비밀번호 관리용으로 사용하기도 합니다. 
어떤 경우에는 서버, CMS, CRM, 기업용 이메일, SNS 계정 등을 포함하고 있었습니다.

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue5.png" title=""  width="100%" height="100%">

어떤 **NGO는 수많은 기부자 개인정보와 기부 재정정보를 가지고 있는 기부자 관리 소프트웨어 (데이터베이스) 접속방법을 공유**하고 있었습니다.

아홉 시간동안 이런 정보를 찾고, 가장 민감한 정보를 노출하고있는 25개의 회사의 연락처를 찾아서 이 사실을 알려주었습니다. 25개의 연락처 정보를 찾는 일은 굉장히 지루하고 도전적인 일이었습니다.

이후 저는 private 버그바운티 창에 이런 사실을 공지하였고, 트위터에 트렐로 기법과 관련하여 피드를 달았습니다.

사람들은 제가 그랬던것처럼 몹시 놀랐습니다.

사람들은 공유 한 트렐로 기법을 통해 비즈니스 이메일, Jira 자격 증명, Bug Bounty 프로그램의 민감한 내부 정보 등 멋진 정보를 찾았다고 말하기 시작했습니다.

<img src="//doublems.github.io/assets/postphoto/20190305/trello_issue6.png" title=""  width="100%" height="100%">

이런 사실을 발견한지 거의 10시간이 됬을 무렵, 버그바운티 프로그램을 운영하는 회사를 대상으로 테스팅 하기 시작했습니다.


````sql
inurl:https://trello.com AND intext:[company_name]
````

### 이후

이런 사실을 해당 회사의 보안팀에 알렸으나, 일부 회사는 이미 처리중인 문제라는 응답을 주었습니다. 

일부는 대기업 이었지만 많은 곳들이 버그바운티 프로그램을 운영하지 않았습니다.

버그바운티를 운영하는 곳에서도 이미 인지된 문제로 보상을 거절하기도 하였습니다.

________


#### [Kushagra Pathak]님 추가활동

- 2018.05.18 - [미국정부]의 로그인 정보등을 포함한 민감정보가 노출 신고

- 2018.08.17 - [영국 및 캐나다] 정부의 내부정보 누출 신고

- 2018.09.24 - [UN]의 FTP, SNS, 내부정보 등 민감정보 누출 신고


________

*본 자료는 [Kushagra Pathak]님이 Medium에서 작성한 글 입니다. Doublem.org는 저자의 허락을 받아 번역하여 대한민국에 소개하고 있습니다.

*개인정보보안을 위한 공익목적으로 공개하는 자료입니다. 악의적 사용시 책임은 본인에게 있습니다.  

*Original article is written by [Kushagra Pathak]. Doublem.org, with the permission of the author, is translated and introduced to Korea.

*This information is for public interest. If you use for malicious, You must have responsibility.
________


참고자료
--------

- [How I used a simple Google query to mine passwords from dozens of public Trello boards](https://medium.freecodecamp.org/discovering-the-hidden-mine-of-credentials-and-sensitive-information-8e5ccfef2724).

[Kushagra Pathak]: https://twitter.com/xKushagra
[구글해킹]: https://ko.wikipedia.org/wiki/%EA%B5%AC%EA%B8%80_%ED%95%B4%ED%82%B9
[WhatIs.com]: https://whatis.techtarget.com/definition/Google-dork-query
[UN]: https://theintercept.com/2018/09/24/united-nations-trello-jira-google-docs-passwords/
[영국 및 캐나다]: https://theintercept.com/2018/08/16/trello-board-uk-canada/
[미국정부]: https://securityaffairs.co/wordpress/72380/data-breach/trello-data-leak.html
[트렐로]:https://trello.com
[버그바운티]:http://www.itworld.co.kr/news/110223