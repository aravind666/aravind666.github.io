---
layout: post
title:  "Test Coverage Vs Mutation Testing Vs Property Base Testing"
category: "Software Development"
description: "Being a part of transformation team, I face lots of arguments, one such interesting argument was the need for Mutation testing and the need for Property based testing and the need for coverage. 
All three of them enhances Brevity and Elegance of your source code. But All three of them comes with Three different values. "
---

Being a part of transformation team, I face lots of arguments, one such interesting argument was the need for Mutation testing and the need for Property based testing and the need for coverage. 
All three of them enhances Brevity and Elegance of your source code. But All three of them comes with Three different values. 

**Code coverage** : - It tells to developer what all lines of code has been referred by your unit tests and what all lines are not. 
This is technically termed as Code coverage, there are tools for each of those popular programming language, and they all give you an absolute percentage value of coverage. 

**Mutation Testing or Mutation Analysis** : - [Mutation testing or Mutation analysis](/software%20development/2020/12/05/mutation-testing.html) is the process of assessing whether all statements in the source code are correct according to the unit tests, 
and whether they all are needed for the unit tests to pass. Every statement in the source code should contribute to make at least one unit test pass. 
Not being the cause of the failure of a unit test is not a good enough reason for a statement to be present in the source code.

**Property based testing** : -  Property based testing is all about testing the permutation of all possible aspects of a functionality .There by it helps you test your edges, with each possible values. 
None of these actually can be replaced with each other . They all come with different values, and they all exist for different purpose. 