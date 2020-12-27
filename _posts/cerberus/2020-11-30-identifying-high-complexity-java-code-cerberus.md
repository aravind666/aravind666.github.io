---
layout: post
title:  "Identifying High Complexity Code In Large Java Code base"
category: Cerberus
author: "Aravind HU"
description: "Let's say you have some several millions of lines of java code scattered into some 5 or 6 repositories and you wanted to know 
the methods which are having cyclomatic complexity > 3 and classes which are having cyclomatic complexity > 30 within those 5 or 6 repositories."
keywords: "Cerberus, cyclomatic complexity, clean code, Continuous integration"
---

Let's say you have some several millions of lines of java code scattered into some 5 or 6 repositories and you wanted to know 
the methods which are having cyclomatic complexity > 3 and classes which are having cyclomatic complexity > 30 within those 5 or 6 repositories.

I am choosing 3 for method here because that is what I think as something that [fit's everyone's brain](https://bovon.org/archives/350) and that is what I think as something which everyone in this world can easily read and understand.
I am also choosing 30 for a class so that a class can have a max of 10 methods which are of cyclomatic complexity 3. These values can be changed as per your convenience and context.  

As a first step you have to download the latest version of Cerberus from [here](https://github.com/philips-software/cerberus/releases) .

Next create an xml file called high_cyclomatic_complexity_rules.xml with the below listed rules.


```xml
<?xml version="1.0"?>

<ruleset name="Dead Code Rules"
         xmlns="http://pmd.sourceforge.net/ruleset/2.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://pmd.sourceforge.net/ruleset/2.0.0 https://pmd.sourceforge.io/ruleset_2_0_0.xsd">

    <description>
        High Cycomatic Comlexity Rules 
    </description>
    <rule ref="category/java/design.xml/CyclomaticComplexity">
        <properties>
            <property name="classReportLevel" value="30" />
            <property name="methodReportLevel" value="3" />
        </properties>
    </rule>
</ruleset>
```

Once done, just pass this rule as an input parameter to Cerberus along with the path to source code like below. 

```
java -jar cerberus-executable.jar FPM --files=/path/to/source_code --java-version=1.8 --language=java --rulesets="path/to/high_cyclomatic_complexity_rules.xml"  
```

Once you run the above command, Cerberus creates a report called ```mistakes-report.html``` on list of methods having complexity > 3 and classes having complexities > 30  with in the source code directory.

If you are little thoughtful, you can actually create the ```high_cyclomatic_complexity_rules.xml``` file and download ```cerberus-executable.jar``` with in the source code directory and run the same command in a little different way.

```
java -jar cerberus-5.0.jar FPM --files=$(pwd) --java-version=1.8 --language=java --rulesets="$(pwd)/high_cyclomatic_complexity_rules.xml"
```  

Last but not least, Cerberus FPM feature which I just described here returns exit status with a number. If there are any violations like in this case "High Complexity Code" the number of violations will be returned as an exit code.
If there are no violations it returns Zero. 

If you want to run Cerberus FPM in your Continuous integration pipeline, you can always use these exit code to mark your builds as red or green.




 

