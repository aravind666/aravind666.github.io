---
layout: post
title:  "Applying some final thoughts on Java final modifier"
category: "Software Development"
author: "Aravind HU"
description: "In Java, all methods and instance variables can be overridden by default. If you wish to declare that you want to no longer allow subclasses to override your variables or methods, you can declare them with <b>final</b> modifier"
keywords: "Final modifier, checkstyle final, Final keyword java, Java seal classes, prevent overriding methods and variables"
---

In Java, all methods and instance variables can be overridden by default.

If you wish to declare that you want to no longer allow subclasses to override your variables or methods, you can declare them with ```final``` modifier.

The ```final``` modifier can be applied to four types of programming constructs in [Java](software%20development/2015/12/12/java-terminologies.html) :

1. variables in general: A ```final``` variable can be initialized only once.
2. class property : A ```final``` property/field/instance-variable can only be set at once, by the constructor of the class which defines it.
3. methods:  You can use the ```final``` as a modifier on the method declarations when you want to refuse subclasses from overriding a particular method.
4. classes: A ```final``` class cannot be subclassed, or extended, in any way.  Making a class ```final``` is nothing but making all its methods and properties declared ```final```.

More ```final``` programming constructs give you better performance since it is easy for the compiler to consume them as they are in the fixed memory location, and there is no way for them to be virtually overridden.

{:.text-justify }
There is a  dichotomy in the universe right now on whether to enforce usage of ```final``` where ever applicable or leave that to the programmer's choice.  Some feel it is noise while reading the code, some feel it is not so important.
Some usually justify such a [Directive attitude](https://martinfowler.com/bliki/DirectingAttitude.html) by blaming JAVA in general for allowing the developers to create [Fragile Base Class Problem](https://wiki.c2.com/?FragileBaseClassProblem).
There are solutions for avoiding such problems as well using [Selective Open Recursion](https://www.cs.cmu.edu/~aldrich/papers/selective-open-recursion.pdf).

Irrespective of the [Attitude](https://martinfowler.com/bliki/SoftwareDevelopmentAttitude.html) you have

How do I as a  Development Manager Enforce all my team members to use ```final``` modifier for

1. A method parameter that is never re-assigned within the method should be declared ```final```
2. A class with only private constructors should be ```final``` unless the private constructor is invoked by an inner class.
3. A local variable assigned only once should be declared ```final```

{:.text-justify }
**Java [Programming mistakes detector(PMD)](https://pmd.github.io/pmd/index.html)  provides an amazing set of rules which could be added to your project to enforce usage of final where ever it is logically applicable.**

{:.text-justify }
If you are using a [maven PMD plugin](https://maven.apache.org/plugins/maven-pmd-plugin/), just copy the below contents and save them in a file called "final-pmd-rules.xml" in your desired location within the working directory.

```xml
<?xml version="1.0"?>

<ruleset name="Documentation"
         xmlns="http://pmd.sourceforge.net/ruleset/2.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://pmd.sourceforge.net/ruleset/2.0.0 https://pmd.sourceforge.io/ruleset_2_0_0.xsd">

    <description>
        Rules that for final modifier.
    </description>
    <rule ref="category/java/codestyle.xml/LocalVariableCouldBeFinal" />
    <rule ref="category/java/design.xml/ClassWithOnlyPrivateConstructorsShouldBeFinal" />
    <rule ref="category/java/codestyle.xml/MethodArgumentCouldBeFinal" />

</ruleset>
```

Now consume the [PMD](https://pmd.github.io/pmd/index.html) final rules that we just created in your PMD plugin goal. 

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-pmd-plugin</artifactId>
    <version>${maven.pmd.plugin.version}</version>
    <configuration>
        <linkXRef>false</linkXRef>
        <sourceEncoding>UTF-8</sourceEncoding>
        <targetJdk>${java.required.version}</targetJdk>
        <rulesets>
            <ruleset>${rootDir}/your/existing/rules.xml</ruleset>
            <ruleset>${rootDir}/path/to/final-pmd-rules.xml</ruleset>
        </rulesets>
    </configuration>
    <executions>
        <execution>
            <phase>compile</phase>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

If you are using Gradle, you should first apply the [PMD plugin](https://docs.gradle.org/current/userguide/pmd_plugin.html) if you have not used then configure the Gradle task like below by consuming the final PMD rules we just created.

```groovy

apply plugin: 'pmd'

pmd {
    consoleOutput = true
    toolVersion = "6.22.0"
    ruleSets = [
        "${rootDir}/your/existing/pmd-rules-if-any.xml",
        "${rootDir}/path/to/final-pmd-rules.xml"
    ]
}

```
