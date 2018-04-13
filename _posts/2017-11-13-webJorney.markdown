---
layout: post
title:  "Eclipse Web project로의 여정"
date:   2017-11-13 00:20:59
author: Jerry Ahn
categories: Web Programming
tags:	Eclipse, Java, Web
---
#### 1) 동기

많은 분들이 처음 Java를 학습 할 때, 이클립스 IDE를 설치하고 예시를 따라서 기본프로젝트로 src 하단에 `Helloworld.java`  를 작성한 경험이 있을것으로 생각합니다.

기본프로젝트 이후로, Servlet, Spring 등 웹 프로젝트를 학습하면서 조금 더 복잡한 프로젝트 구조를 만나게 됩니다.  

<a href="//doublems.github.io/assets/postphoto/web-jorney/20171112_1.PNG" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/20171112_1.PNG" title="기본 프로젝트 시작" width="40%" height="40%"/></a>

책이나 예시 자료등을 보고 따라하는 웹프로젝트의 첫 학습은 흔히 기본프로젝트와는 별개로 새로운 프로젝트로 시작됩니다. (제 경험에 의하면) 기존에 학습하던 프로젝트 방식과 맥락이 이어지지 않는 갑작스런 변화는 프로젝트가 복잡하고 어렵다고 생각하게 합니다.

평소, 프로젝트 구조도 궁금하기도 했고, 어떻게 하면 프로젝트가 확장되어 진행 될 수 있는지 궁금하여 본 글을 작성하게 되었습니다. 

따라서  이 글은 **기본프로젝트  `HelloWolrd.java` 부터 웹프로젝트까지의 프로젝트의 연결이 궁금하신 분** 들에게 도움이 될 수 있을 것으로 생각됩니다.

------

#### 2) 자바 기본 프로그래밍

**이클립스를 통해서 가장 처음 만나는 기본 프로그래밍 프로젝트를 시작합니다.**

- [x] New Java Project를 통해 프로젝트를 생성
- [x] src 하단 HelloWorld 클래스 생성

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-52-8.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작"  width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-52-8.png" title="기본 프로젝트 시작" width="40%" height="40%">
</a>


너무나도 익숙한 HelloWorld 입니다. 

이때, 우리의  실제 프로젝트 저장은 어떤 폴더에 어떻게 저장될까요? 
<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-54-12.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-54-12.png" title="기본 프로젝트 시작" width="40%" height="40%">
</a>

이클립스 시작 후 (~~Enter key로 순식간에 넘어가는)~~제일 처음 만나는 화면입니다. Workspace에 쓰여있는 실제 경로로 이동해보면 만들었던 프로젝트 폴더가 있습니다.
<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-57-42.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_14-57-42.png" title="기본 프로젝트 시작" width="40%" height="40%">
</a>
src는 이클립스에서 프로젝트 진행 때 봤던것이고, 나머지는 생소합니다. 

src안에는 만들었던 `HelloWorld.java`가 있습니다.  bin에는 `HelloWorld.class`가 있습니다.

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-41-12.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-41-12.png" title="기본 프로젝트 시작" width="40%" height="40%">
</a>

bin은 컴파일러에 의해 컴파일 된 클래스가 저장된 공간입니다.

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-4-46.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작"  width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-4-46.png" title="기본 프로젝트 시작"  width="40%" height="40%">
</a>

**늘 여기서 문제였습니다. 여기까지하고 무엇을 해야 할 지 모릅니다.** 검정색 콘솔창에 글씨를 아름답게 찍는 분들도 계시고, 여기서 멈추는 분들도 많습니다.
**하지만, 이글의 제목처럼 이어서 웹프로젝트로 여정을 진행**하겠습니다.

- [x] 사전준비 : 톰캣설치 Tomcat https://tomcat.apache.org/download-80.cgi
      ​
------

#### 3) 웹 프로젝트로 구조변경

웹프로젝트로 구조를 변경하기 위해선 **Project facets**를 통한 환경구성이 필요합니다.

facet은 보석의 깎인 면, 측면등의 뜻으로 이클립스에서 사용할 언어나 환경구성을 보고싶은 형태로 만드는 것을 뜻하는 것으로 유추됩니다.

> *A facet of something is a single part or aspect of it.*
> *1.~ (of sth) 측면, 양상*
> *Now let's look at another facet of the problem.예문 발음듣기*
> *이제 그 문제의 또 다른 측면을 살펴보죠.*
> *2.(보석의 깎인) 면*

프로젝트 폴더 `오른쪽 클릭-> Properties-> project facets`을 선택합니다. 그리고 이번 글에서는 Tomcat 기반의 웹프로젝트를 진행하기로 합니다. 따라서 중간 오른편의 `Runtimes -> 설치된 톰캣선택`을 합니다.

그리고, Dynamic WebModule, Java, JavaScript를 선택합니다. 그랬더니 WebContents 폴더와 하위로 META-INF, WEB-INF가 생겼습니다.

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-44-31.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-44-31.png" title="기본 프로젝트 시작" width="40%">
</a>
<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-51-38.png" data-lightbox="기본 프로젝트 시작" data-title="기본 프로젝트 시작" width="40%" height="40%">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_15-51-38.png" title="기본 프로젝트 시작" width="40%" height="40%">
</a>


#### 4) 웹 프로젝트 프로그래밍 (Servlet)

설치했던 Tomcat은 Java Servlet, JSP 등 JavaEE 설계에 대한 구현체입니다. 본 글에서는 자세하게 설명하기 어렵습니다. 지금은 웹프로그래밍을 위해 필요한 도구라고 생각하고 사용해보도록 하겠습니다.

> * The Apache Tomcat® software is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies. *



우선 기존에 작성한 `HelloWorld.java` 클래스를 `HttpServlet` 클래스를 상속받아서 웹의 기능으로 확장(extends)하도록 하겠습니다.

```java
package doublem;
 
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
 
public class HelloWorld extends HttpServlet {
 
    /**
     * Example Hello World by Servlet
     */
    private static final long serialVersionUID = 1L;
 
    private String message;
 
       public void init() throws ServletException {
          // Do required initialization
          message = "Hello World";
       }
 
       public void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
           
          // Set response content type
          response.setContentType("text/html");
 
          // Actual logic goes here.
          PrintWriter out = response.getWriter();
          out.println("<h1>" + message + "</h1>");
       }
 
       public void destroy() {
          // do nothing.
       } 
}
```

그리고 서블릿 배포(Servlet Deployment)를 위해서 web.xml을 생성해줍니다.

```xml
<?xml version="1.0" encoding="UTF-8"?> 
<web-app xmlns="http://java.sun.com/xml/ns/javaee" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
    http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
    version="2.5">
     
<servlet>
   <servlet-name>HelloWorld</servlet-name>
   <servlet-class>doublem.HelloWorld</servlet-class>
</servlet>
 
<servlet-mapping>
   <servlet-name>HelloWorld</servlet-name>
   <url-pattern>/HelloWorld</url-pattern>
</servlet-mapping>
     
     
</web-app>
```

생성한 web.xml 파일은  `<Tomcat-installation-directory>/webapps/프로젝트명/WEB-INF/>` 에 위치시켜줍니다.

또 상위 HelloWorld 소스파일의 컴파일된 .class 파일은 `<Tomcat-installationdirectory>/webapps/프로젝트명/WEB-INF/classe/>` 에 위치시켜야 합니다.

> (이 규칙들은 Servlet 2.4 specification에 보면 설명 되어 있고, Tomcat 구현 소스를 살펴보면 아래와 같이 구성이 되어 있습니다.)
>
> *web.xml 는 `ContextConfig.java`가 `getContextWebXmlSource()`메서드 에서 constants.java의 String ApplicationWebXml = "/WEB-INF/web.xml" 사용을 통해 web.xml 읽는 것으로 구현*
>
> *"/WEB-INF/lib/"; "META-INF/services/" 경로는 `WebappServiceLoader`에서 설정 *


```java
package org.apache.catalina.startup;
 
/**
 * String constants for the startup package.
 *
 * @author Craig R. McClanahan
 */
public final class Constants {
 
    public static final String Package = "org.apache.catalina.startup";
 
    public static final String ApplicationContextXml = "META-INF/context.xml";
    public static final String ApplicationWebXml = "/WEB-INF/web.xml";
    public static final String DefaultContextXml = "conf/context.xml";
    public static final String DefaultWebXml = "conf/web.xml";
    public static final String HostContextXml = "context.xml.default";
    public static final String HostWebXml = "web.xml.default";
    public static final String WarTracker = "/META-INF/war-tracker";
 
    /**
     * A dummy value used to suppress loading the default web.xml file.
     *
     * <p>
     * It is useful when embedding Tomcat, when the default configuration is
     * done programmatically, e.g. by calling
     * <code>Tomcat.initWebappDefaults(context)</code>.
     *
     * @see Tomcat
     */
    public static final String NoDefaultWebXml =
            "org/apache/catalina/startup/NO_DEFAULT_XML";
}
```


    java
    public class WebappServiceLoader<T> {
    private static final String LIB = "/WEB-INF/lib/";
    private static final String SERVICES = "META-INF/services/";
 
    private final Context context;
    private final ServletContext servletContext;
    private final Pattern containerSciFilterPattern;
 
    /**
     * Construct a loader to load services from a ServletContext.
     *
     * @param context the context to use
     */
    public WebappServiceLoader(Context context) {
        this.context = context;
        this.servletContext = context.getServletContext();
      ....



하지만 명세와 구성과는 다르게, 이클립스 프로젝트에는 프로젝트 명과 하단에 WebContent가 있고 그 하단에 META-INF와 WEB-INF가 있었습니다.  WebContent는 어떻게 해야할까요?

배포 경로를 확인해보겠습니다.

**프로젝트 우클릭 후 `Properties→ Deployment Assembly`로 이동하게 되면 출처와 배포 경로를 알 수 있습니다.**

> class 파일의 경우는 /src  →  WEB-INF/classes로 알맞게 되어있습니다.
> /WebContent는 → /(루트로) 되어있다.

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_16-11-52.png" data-lightbox="경로확인" data-title="경로확인">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_16-11-52.png" title="경로확인" width="40%">
</a>


작성된 코드를 톰캣을 통해서 실행해봅시다.

- [x] 프로젝트 우클릭 -> Run as  -> Run on Server

<a href="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_17-14-59.png" data-lightbox="경로확인" data-title="경로확인">
  <img src="//doublems.github.io/assets/postphoto/web-jorney/image2017-11-4_17-14-59.png" title="경로확인" width="40%">
</a>

여기서 주의 할 점은 이클립스에서 실행한 웹프로젝트는 설치된 톰캣 디렉토리에서 실행 되지 않습니다. 

> *'이클립스상에서 톰켓이 구동되면 워크스페이스로 잡은 폴더 내부 .metadate 폴더안에*
> *war파일로 만들어서 압축을 풀었을때 같은 형태로 배포가 됩니다.'*
>
> *참고  : <https://okky.kr/article/286482>*

**`\eclipse-workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\` 에서 실행이 됩니다.** 


자세한 정보는 Servers 의 server.xml에서 마지막줄을 확인하면 자세히 알 수 있습니다.

```xml
<Context docBase="ProjectStructure_test" path="/ProjectStructure_test" reloadable="true" 
source="org.eclipse.jst.jee.server:ProjectStructure_test"/></Host>
```

따라서, 추후 웹 프로젝트 수행시는 War를 생성후 톰캣폴더에 직접 올려줘야 합니다.이를 배포라고 합니다.
------
> #### War 배포
>
> 이클립스에서 File → export → war 선택 후 war 파일로 압축파일을 만든다. 만든 파일을 톰캣 내의 web-app 파일에 넣고 톰캣\bin 내의 startup을 통해 서버를 가동(켜있다면 재가동) 하면 war 파일의 압축이 해제되며 실행된다.
