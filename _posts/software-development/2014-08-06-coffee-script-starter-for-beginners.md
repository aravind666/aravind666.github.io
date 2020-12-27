---
layout: post
title:  "Coffee Script Quick Start Learning"
category: "Software Development"
---
I was facing lot of difficulties in learning coffee script at last I could figure out the reason and started identifying the gray areas.

**Here it goes**

1.  What is it ?
2.  Why do we need to use it and what is its role ?
3.  Grasping its syntax

I decided to share my understanding thinking it might help others who are also facing the same problem by trying to learn this soon. But to learn any technology relative thinking/learning is the key.

Lets start turning these gray areas into green :)

#### What is it ?

I guess you have already seen this below statement in the home page of coffee script.org, It is the most important statement and has lots of inner meanings .

> CoffeeScript is a little language that compiles into JavaScript

I was lost initially, when I read this statement let me elaborate it so that you can get its insights .

Some questions to raise here, why we need to compile to javascript?, Aha because browser understands only javascript nothing else, So coffee script compiler just tokenize the code written in coffee script language understands the business logic written there and outputs most efficient javascript which is consumed by web applications to add interactivity to HTML.

So we have two things here, first one is coffee script compiler and 2nd one is coffee script language.

Coffee script Compiler is a Node Package which could be installed via NPM command and it exposes several compiling modes and options for developers to easily use coffeescript to code javascript instead of coding Javscript directly.

I feel its little out of scope to describe how to install coffee script compiler so please refer to the [coffee script documentation on installation.](http://coffeescript.org/#installation)

#### Why do we need to use it and what is its role ?

Javascript as a language it is awesome, and it has lots of great features its syntax is very easy to learn and code. Today most of the business logic is handled in client side and since javascript syntax exhibits its nature of [syntactic sugar](http://en.wikipedia.org/wiki/Syntactic_sugar) makes it easy for any developer to write bad code.

Since we write bad code it will be very hard to maintain, also due to syntactic sugar it is hard to write the efficient testable code.

So Coffee script solves most of these problems, it helps developers to write efficient testable code as a result of this it helps us to handle change requests from customers in a very healthy way by modifying the coffee script, test it, and just re compile it to javascript and deploy them to server.

Most of the times we keep multiple versions of javascript ( min and formatted ) so now we don't need to worry about this because we just keep coffee script in our version control and javascript out of version control. So no need to worry about maintaining JS.

With javascript we some times end up writing lot of code for small tasks, though its easy to code maintenance gets harder, but if we use coffeescript we can exploit its utilities and program constructs to write least possible testable and maintainable code.

#### Grasping coffee Script syntax

It was a hick up for anyone to suddenly start coding javascript using coffee script. As I said before relative learning is the key, lets relate with the language that we are already familiar with, i.e javascript and grasp its syntax .

Before starting to grasp syntax, lets list down some [coffee script](http://coffeescript.org/) syntax commandments which helps to grasp its syntax.

1.  No semicolons through out the code
2.  No parenthesis for functions ( not mandatory )
3.  No need to declare the variables.
4.  No more named functions only function expressions/clojure/IIFE blocks
5.  No need to use return statements
6.  No need to check for undefined, exploit conditional operator.
7.  Use splats instead of array of arguments
8.  Use chained comparisons instead of having multiple conditions
9.  Worry a lot about indentation because it matters a lot when you declare and use objects.

And that's all, after grasping these commandments I was feeling more comfortable then before, I guess its the same for you people who are reading this article .

To know about the syntax of [coffee script](http://coffeescript.org/), please refer to [coffee script language reference](http://coffeescript.org/#language)

You can also use an online tool called [js2Coffee](http://js2coffee.org/) which converts javascript to [coffee script](http://coffeescript.org/), which helps a lot to evaluate and relate your [coffee script](http://coffeescript.org/) and its equivalent javascript once coded in the initial stages of your learning.