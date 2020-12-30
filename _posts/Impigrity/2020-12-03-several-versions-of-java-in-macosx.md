---
layout: post
title:  "Switching between versions of Java in MacOSx"
category: The Impigrity Catalog
author: "Aravind HU"
description: "Having different modules of same software running in different versions of JAVA. Or Your team is an amazing team, and your product is an amazing product, built on latest JAVA, and you are an amazing engineer part of the same team, who always keeps an eye on new JAVA releases, and experiments its features. In either of the case, you need a setup in your machine, where you should be able to switch between the versions and flavours of Java. "
keywords: "MacOSx, Multiple java versions, Switch Java versions, Multiple JDK's"
---

If you are fanatic about your machine like me, and you always like to do every damn thing in your mac-book.
You always try to ensure your machine exactly reflects exact production environment.

One such scenario is, having different modules of same software running in different versions of JAVA. 
Or Your team is an amazing team, and your product is an amazing product, built on latest JAVA, and you are an amazing engineer part of the same team,
who always keeps an eye on new JAVA releases, and experiments its features.
In either of the case, you need a setup in your machine, where you should be able to switch between the versions and flavours of Java. 

If you are from Ruby or NodeJS background as well along with Java Skills. You must have heard of
RBENV, RVM, NVM etc ... 

For Java, I did not see anything of that sort but for MacOSx there are some tricks that you can apply to make your life easy. 
The trick is simple, just keep on installing all versions/flavours of Java you are interested in.

All the Virtual machines that are installed in MacOSx exists in the directory 

```
/Library/Java/JavaVirtualMachines
```

There exists a command called java_home built into shell of majority of linux flavours, MacOS comes with the flavour of linux which has that built in command. 
Here is the path for the same.
```
/usr/libexec/java_home
```

{: .blockquote .lead}
The  java_home  command  returns a path suitable for setting the JAVA_HOME environment
variable.  It determines this path from the user's enabled and preferred JVMs  in  the
Java  Preferences  application.  Additional constraints may be provided to filter the list of JVMs available.  
By default, if no constraints match  the  available  list  of  JVMs, the default order is used.  The path is printed to standard output.

Once installing multiple versions of java, from your terminal you can actually know which all versions of Java you have installed in your machine by running the command with Verbose option. 
For eg.. here is the output from my machine.
```

aravindhu@MACC02ZK005NQMC JavaVirtualMachines %  /usr/libexec/java_home -V
Matching Java Virtual Machines (9):
    15.0.0, x86_64:	"Amazon Corretto 15"	/Library/Java/JavaVirtualMachines/amazon-corretto-15.jdk/Contents/Home
    13.0.1, x86_64:	"OpenJDK 13.0.1"	/Library/Java/JavaVirtualMachines/jdk-13.0.1.jdk/Contents/Home
    12, x86_64:	"OpenJDK 12"	/Library/Java/JavaVirtualMachines/jdk-12.jdk/Contents/Home
    11, x86_64:	"OpenJDK 11"	/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
    10, x86_64:	"OpenJDK 10"	/Library/Java/JavaVirtualMachines/jdk-10.jdk/Contents/Home
    9.0.4, x86_64:	"OpenJDK 9.0.4"	/Library/Java/JavaVirtualMachines/jdk-9.0.4.jdk/Contents/Home
    1.8.0_265, x86_64:	"Amazon Corretto 8"	/Library/Java/JavaVirtualMachines/amazon-corretto-8.jdk/Contents/Home
    1.8.0_231, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
    1.7.0_80, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home

```
Once you have several versions installed, you can actually set the path to your favorite version by running the command in your terminal.

```
export JAVA_HOME=/usr/libexec/java_home -v9
```

If you are just using this one version of java always, you can just add this line to your shell .profile or .bash_profile or .zshrc file. 
If you need to conveniently switch between multiple versions of java, you can always have aliases and export statements in place with in your favorite shell's profile configuration file. 

As a first step, you have to declare some variables for each of your installed Java versions. So In my machine I have declared below variables for the versions of Java that I have installed.

```
# JAVA paths
export JAVA_9_HOME=$(/usr/libexec/java_home -v9)
export JAVA_10_HOME=$(/usr/libexec/java_home -v10)
export JAVA_11_HOME=$(/usr/libexec/java_home -v11)
export JAVA_12_HOME=$(/usr/libexec/java_home -v12)
export JAVA_13_HOME=$(/usr/libexec/java_home -v13)
export JAVA_7_HOME=$(/usr/libexec/java_home -v1.7)
export JAVA_8_HOME=$(/usr/libexec/java_home -v1.8)
export JAVA_8_AMAZON_CORRETTO=$(/usr/libexec/java_home -v1.8.0_265)
export JAVA_15=$(/usr/libexec/java_home -v15.0.0)
```
Next use the same for your aliases.

```
# Java Alias to switch
alias java9='export JAVA_HOME=$JAVA_9_HOME'
alias java10='export JAVA_HOME=$JAVA_10_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
alias java12='export JAVA_HOME=$JAVA_12_HOME'
alias java13='export JAVA_HOME=$JAVA_13_HOME'
alias java7='export JAVA_HOME=$JAVA_7_HOME'
alias java8oracle='export JAVA_HOME=$JAVA_8_HOME'
alias java8='export JAVA_HOME=$JAVA_8_AMAZON_CORRETTO'
alias java15='export JAVA_HOME=$JAVA_15'
```
Have a statement in your profile in your machine for your default favorite JAVA version 
Say,

```
java15 
```

Now you are done setting things up, those aliases that you have created can be easily used to switch between various versions of JAVA that you have installed in your Mac.
For eg.. If you need to switch to Java version 8 by just using alias command you just created and configured.

```
java8
```