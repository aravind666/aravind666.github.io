---
layout: post
title:  "Identifying Dead code using Cerberus"
category: Cerberus
author: "Aravind HU"
description: "Let's say you have some several millions of lines of java code scattered into some 5 or 6 repositories and you wanted to know 
the dead blocks of code within those 5 or 6 repositories. "
keywords: "Cerberus, Dead code, clean code, Continuous integration, identify dead code, gate dead code, detect dead code"
---

Let's say you have some several millions of lines of java code scattered into some 5 or 6 repositories and you wanted to know 
the dead blocks of code within those 5 or 6 repositories. 

Here is my definition of dead code. 

A dead code can be 

1. **UnusedAssignment**: Assignments to variables that are never used before it is overwritten. 
2. **UnusedFormalParameter**: Parameters to methods or constructors without actually referencing them in the method
3. **UnusedImports**:  Unused import statements. 
4. **UnusedLocalVariable**: A local variable which is declared and/or assigned, but not used.
5. **UnusedPrivateField**: A private field which is declared and/or assigned a value, but not used.
6. **UnusedPrivateMethod**: A private method which is declared but is unused.

All these types of dead code can easily be identified by using [Cerberus](https://github.com/philips-software/cerberus).

As a first step you have to download the latest version of Cerberus from [here](https://github.com/philips-software/cerberus/releases) .

Next create an xml file called dead_code_rules.xml with the below listed rules.

```xml
<?xml version="1.0"?>

<ruleset name="Dead Code Rules"
         xmlns="http://pmd.sourceforge.net/ruleset/2.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://pmd.sourceforge.net/ruleset/2.0.0 https://pmd.sourceforge.io/ruleset_2_0_0.xsd">

    <description>
        Dead Code Rules 
    </description>
    <rule ref="category/java/bestpractices.xml/UnusedImports" />
    <rule ref="category/java/bestpractices.xml/UnusedLocalVariable" />
    <rule ref="category/java/bestpractices.xml/UnusedPrivateField" />
    <rule ref="category/java/bestpractices.xml/UnusedPrivateMethod" />
    <rule ref="category/java/bestpractices.xml/UnusedFormalParameter" />
    <rule ref="category/java/bestpractices.xml/UnusedAssignment" />
</ruleset>
```

Once done, just pass this rule as an input parameter to Cerberus along with the path to source code like below. 

```
java -jar cerberus-executable.jar FPM --files=/path/to/source_code --java-version=1.8 --language=java --rulesets="path/to/dead_code_rules.xml"  
```

Once you run the above command, Cerberus creates a report called ```mistakes-report.html``` on dead blocks of code with in the source code directory.

If you are little thoughtful, you can actually create the ```dead_code_rules.xml``` file and download ```cerberus-executable.jar``` with in the source code directory and run the same command in a little different way.

```
java -jar cerberus-5.0.jar FPM --files=$(pwd) --java-version=1.8 --language=java --rulesets="$(pwd)/dead_code_rules.xml"
```  

There are still another class of dead code called [Unreachable statement](https://docs.oracle.com/javase/specs/jls/se10/html/jls-14.html#jls-14.21), 
which is caught by java compiler itself, during the process of compilation. So you actually do not require a static analysis to find that.

Last but not least, Cerberus FPM feature which I just described here returns exit status with a number. If there are any violations like in this case "dead code" the number of violations will be returned as an exit code.
If there are no violations it returns Zero. 

If you want to run Cerberus FPM in your Continuous integration pipeline, you can always use these exit code to mark your builds as red or green.
