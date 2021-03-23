---
layout: post
title:  "Treat Warnings as Errors in Java"
category: "Software Development"
author: "Aravind HU"
description: "Compiler warnings identify real problems, indicate likely programming mistakes or code smells. Warnings also indicate other unusual conditions in your code that might indicate a problem, although compilation can proceed successfully."
keywords: "Compiler warnings, warnings, compiler errors, treat warnings as errors"
---

{:.text-justify }
Compiler warnings identify real problems, indicate likely programming mistakes or code smells. Warnings also indicate other unusual conditions in your code that might indicate a problem, although compilation can proceed successfully.
Since these compiler warnings are unlikely to be fatal they are likely to be ignored. Once they are ignored they build up and become a Frankenstein Monster who is difficult to treat and un-reasonable to plan and eliminate.

{:.text-justify }
One of the famous examples of the build-up of errors in an open-source world is Mozilla Firefox builds which are existing for 19 years and getting resolved even today,
do check this [bug created in the Mozilla bug tracker](https://bugzilla.mozilla.org/show_bug.cgi?id=187528)

{:.text-justify }
Eliminating these warnings was such a huge task, and a big transformation challenge for firefox.
A computer scientist from Mozilla [Mr Nicholas Nethercote](https://nnethercote.github.io/) who was working for Firefox has shared the story in a nice beautiful blog post on 
how [Mozilla started treating compiler warnings fatal](https://bugzilla.mozilla.org/show_bug.cgi?id=187528).

{:.text-justify }
Some ages back Mozilla took a herculean transformation step, which is to treat all compiler warnings as errors.

{:.text-justify }
So how do we Java developers treat warnings as errors in the applications that we build?

{:.text-justify }
[JAVAC](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html#description) compiler which comes as part of JDK provides an option to lint your code for compiler warnings related to various scenarios.
Below is the list of compiler warning scenarios detected by [JAVAC](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html#description). Below command lists man pages of [JAVAC](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html#description).

```shell
javac -help -X
```
{:.lead text-justify }
Below are the Xlint options for linting your code for compiler warnings.

```shell
-Xlint                       Enable recommended warnings
  -Xlint:<key>(,<key>)*
        Warnings to enable or disable, separated by comma.
        Precede a key by - to disable the specified warning.
        Supported keys are:
          all                  Enable all warnings
          auxiliaryclass       Warn about an auxiliary class that is hidden in a source file, and is used from other files.
          cast                 Warn about use of unnecessary casts.
          classfile            Warn about issues related to classfile contents.
          deprecation          Warn about use of deprecated items.
          dep-ann              Warn about items marked as deprecated in JavaDoc but not using the @Deprecated annotation.
          divzero              Warn about division by constant integer 0.
          empty                Warn about empty statement after if.
          exports              Warn about issues regarding module exports.
          fallthrough          Warn about falling through from one case of a switch statement to the next.
          finally              Warn about finally clauses that do not terminate normally.
          module               Warn about module system related issues.
          opens                Warn about issues regarding module opens.
          options              Warn about issues relating to use of command line options.
          overloads            Warn about issues regarding method overloads.
          overrides            Warn about issues regarding method overrides.
          path                 Warn about invalid path elements on the command line.
          processing           Warn about issues regarding annotation processing.
          rawtypes             Warn about use of raw types.
          removal              Warn about use of API that has been marked for removal.
          requires-automatic   Warn about use of automatic modules in the requires clauses.
          requires-transitive-automatic Warn about automatic modules in requires transitive.
          serial               Warn about Serializable classes that do not provide a serial version ID.
                             Also warn about access to non-public members from a serializable element.
          static               Warn about accessing a static member using an instance.
          try                  Warn about issues relating to use of try blocks (i.e. try-with-resources).
          unchecked            Warn about unchecked operations.
          varargs              Warn about potentially unsafe vararg methods
          preview              Warn about use of preview language features
          none                 Disable all warnings

```

{:.text-justify }
To run [JAVAC](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html#description) using Xlint option use the below pattern 

```shell
javac -Xlint:option_name -classpath if-exists path-to-java-file.java
```
{:.text-justify }
eg.. command 

```shell
javac -Xlint:finally Example.java
```

{:.text-justify }
Just to play around with compiler warnings here is one of my favorite examples which Warn about ```finally``` clauses that do not terminate normally.


```java
public static int horribleMethod(int a, int b) {
    try {
      return b / a;
    } catch (AClassException e) {
      System.err.println("Caught AClassException.");
      return 1;
    } finally {
      return 0;
    }
  }
```

{:.text-justify }
The above code throws a warning if you build with ```Xlint:finally```. Since
A ```finally``` block always executes when the try block exits. In this example,
if control is transferred to the ```catch``` block, then the method exits.
However, the ```finally``` block must be executed,
so it is executed, even though control has already been transferred outside the method.


### If you are building your application using some build automation tool like [Maven](https://maven.apache.org/what-is-maven.html) or [Gradle](https://docs.gradle.org/current/userguide/what_is_gradle.html), you have plugins and options to treat warnings as errors


{:.text-justify }
In case of Gradle, to treat warnings as errors we get Compile options using which you can configure compiler options to javac task just like below.

```groovy
tasks.withType(JavaCompile) {
    configure(options) {
        options.compilerArgs << '-Xlint:all' << -Werror 
    }
}
```

In case of Maven, to treat compiler warnings as errors we can use [Maven compiler plugin](http://maven.apache.org/plugins/maven-compiler-plugin/) which could be configured in your [POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#What_is_a_POM) like below

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.8.0</version>
    <configuration>
        <source>${java.version}</source>
        <target>${java.version}</target>
        <fork>true</fork>
        <compilerArgs>
            <arg>-verbose</arg>
            <arg>-Werror</arg> 
            <arg>-Xlint:all</arg>
        </compilerArgs>
    </configuration>
</plugin>
```