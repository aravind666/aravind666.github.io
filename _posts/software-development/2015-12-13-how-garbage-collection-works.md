---
layout: post
title:  "Java Garbage Collection !! How it works ?"
category: "Software Development"
---
Building a software in JAVA platform has lots of advantages, Today in this post I would like to share some of my understandings on one such greatest advantage gifted by JAVA platform, to all those developers who lost hairs from there scalp by pragmatically managing memory :), i.e Garbage collection.

Before explaining garbage collection, let me explain some things about "Objects", If C++ is your first OO programming language then you can consider it as a pointer to a particular memory location, In JAVA too its the same, Objects when created from class gets its memory allocated. Objects are modified and its behaviours are accessed only via variable references.

In C++ like language, Memory is actually managed pragmatically, ( this is what is the reason for loosing hairs :) ). JAVA completely wipes out this problem by giving JVM the power to do Garbage collection. JAVA being a full fledged OOP languagge, Objects referenced by variables are actually created in heap memory.

As long as any variable references an object, JAVA garbage collector retains them in the memory. When all variable references of an object expire, it becomes eligible to be garbage collected.

#### When Do References Expire ?

Variables local to functions or code blocks expire when function is complete. Programmers can explicitly expire the references by setting them to null

eg .

```java
String temp = "JAVA journals ";
temp = null;
```

Though programmers has this sort of flexibility to explicitly expire object references, programmers has no way to control the behavior of garbage collector. Garbage collector runs on its own thread. It identifies objects eligible for garbage collection and clean them from the memory.

JDK provides certain API's to programmers which can request garbage collection, but as per documentation there is no guarantee, Since garbage collector has its own inteligence based on that it will prioritize and serve the request if possible. Below are the API's which are provided by JDK to request for Garbage collection

1.  System.gc()
2.  Runtime.gc()

Both these API's does the same thing, there is a difference in terms of usage, Its little out of scope to explain them. Please refer Javadocs to know more about them.

Some times you might get an exception, saying " Out Of memory " to avoid that you can expliot some of the API's provided by JDK to know the memory status

*   Runtime.maxMemory()
*   Runtime.totalMemory()
*   Runtime.freeMemory()

#### As a JDK user Can I increase the HEAP size ?

Ofcourse yes, There are some commandline options which you can use

```java
 Java -Xms        set initial Java heap size
 Java -Xmx        set maximum Java heap size
 Java -Xss        set java thread stack size
```   

#### Can I disable this entire Garbage collection feature ?

OfCourse yes, you might not be able to control it but you can disable or enable it for a particular class Below are the command line options

Java -Xnoclassgc disable class garbage collection Java -Xincgc enable incremental garbage collection

#### How can I know what the hell this Garbage collector is doing ?

You can know by logging its status to a file.

```java
Java -Xloggc:    log GC status to a file with time stamps\
```

There are still lots of magic Garbage collector does, it is really an amazing thing to play around, I hope you enjoyed reading my post.