---
layout: post
title:  "Treat Warnings As Errors in Spring Boot Application"
category: "Software Development"
author: "Aravind HU"
description: "As I have explained in my previous post on how important and helpful it is to treat compiler warnings as errors. From my experience, I had found that Spring Boot framework used to building production-grade Spring-based Applications in JAVA, has its complications to deal with when the team decides to treat compiler warnings as fatal."
keywords: "Compiler warnings, warnings, compiler errors, treat warnings as errors, Spring boot, warnings as errors"
---

{:.text-justify }
As I have explained in my previous post on [how important and helpful it is to treat compiler warnings as errors](/software%20development/2021/03/18/treat-warnings-as-errors-in-java.html).
From my experience, I had found that Spring Boot framework used to building production-grade Spring-based Applications in JAVA, has its complications to deal with when the team decides to treat compiler warnings as fatal.

#### Here is the working solution for those spring boot developers who are struggling hard looking for a way to treat compiler warnings as errors in their application.

If you are using maven to build your Spring Boot application and wanted to treat warnings as errors.

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
         <arg>-Xlint:-processing</arg>
         <arg>-Xlint:all</arg>
      </compilerArgs>
   </configuration>
</plugin>
```

If you are using Gradle to build your Spring Boot application and wanted to treat warnings as errors

```groovy
tasks.withType(JavaCompile) {
    configure(options) {
        options.compilerArgs << '-verbose' <<  '-Werror' <<  '-Xlint:-processing' << '-Xlint:all'
    }
}
```




