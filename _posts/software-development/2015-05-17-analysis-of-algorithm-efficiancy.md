---
layout: post
title:  "Analysis Of Algorithm Efficiency"
category: "Software Development"
---

The Efficiency of an Algorithm depends on two factors, first one is Memory consumed, and the secound one is the Time taken to complete the execution. In some applications such as embedded systems, main constraint will be memory and in some other applications main constraint will be the time. With this post I would like to share some of my understandings on Space and Time Complexity

> The Space Complexity is the measure of minimum amount of memory, which is essential to run the program completely and efficiantly

With the advent of new technology and cheap memory, Space complexity is often ignored and not considered much in web development, also when it comes to web softwares or web applications they all run on scalable cloud infrastructure which can scale and balance the processing load

More than all those reasons to ignore, If you have ever heard of [Moor's law](http://www.mooreslaw.org/) , which is an observation made by Gordon Moore which says that

> The number of transistors on an affordable CPU would double every two years

Meaning, If you have observed the cost of RAM is reducing year by year, 2 years back 4GB RAM laptop was considered as a highend laptop for an engineer in software company, but now it starts from 8GB RAM

what is more considered in the world of web development is Time Complexity

> The Time complexity of an algorithm is measured purely on how fast a given algorithm is executed.

The execution time of an algorithm can be measured on any particular machine. The execution time of the same algorithm depends on various factors such as, its memory, choice of programming language, and System software used to compile and run, So to calculate the time complexity of the algorithm these dependent factors should not be considered.

Time complexity of an algorithm is calculated based on the number of steps carried out by the algorithm to do a specific operation

For eg.. If the time of execution of a basic operation on a particular computer is T, and the number of operations it executes is N then the the time complexity would be T\*N

Many algorithms uses N as a paramter which affects the running time very significantly. The parameter N is a variable which can be number of elements to be sorted or length of a given string or length of the array to search from, I mean its just a representation of the count of entity on which algorithm is actually intended to run on

Time complexity of any N on any algorithm can be generalized by plotting a Graph on X and Y axis, we a generic formula can be obtained using which we can calculate time complexity for any N

There are some standard patterns such as

*   Constant : - For any N the time is same
*   N2 : - Which indicates that running time of the algorithm is quadratic
*   N3 : - Which indicates that running time of the algorithm is cubic
*   N! : - Which indicates that running time of the algorithm is exponential

Observation and analysis of these patterns helps us to decide on which one algorithm to use to solve our problem

I hope you enjoyed reading my explaination on Analysis of Algorithms.