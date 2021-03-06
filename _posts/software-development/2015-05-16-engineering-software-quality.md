---
layout: post
title:  "Engineering Software Quality"
category: "Software Development"
---

While we are building a product and we start thinking about the quality of the product which we are building, its always a good idea to brainstorm all possible approaches and pick the best that suits our needs.

With this post I would like to share some of my understandings on Quality Assurance process which might help you to think about the best process which suits you.

I have seen lots of arguments in some of my daily meat speak discussions where we discuss whether to test after building a product or test after every module is built or test while developing it and a particular class of people think that we should write test cases before we build it and build to pass those test cases, many more, but how to conclude which works best?

Which ever approach you pick as best, you will always have a better advantage by incorporating quality assurance as part of your process from the beginning.

Reason is simple, which ever system you build inner things keep getting encapsulated, which ever project you take initially you might build core functionality, but later iterations will be filled with activities to encapsulate the core functionality.

If you ignore quality assurance at the initial stage, your team end up doing additional work when bugs are identified in an encapsulated system.

So identifying and fixing bugs in an non encapsulated system, will allow you to pay only for the bug idenified with out any extra labour, there by adding lots of benefits.

Now you want to add quality assurance as part of your process, how will you seperate the concerns accross the stake holders of the project ? To do so, traditional software engineering methodologies defines three categories of testing with in the developmnt life cycle, irrespective of the methodology you follow.

1.  Black box testing
2.  White box testing
3.  Grey box testing

> Black box testing refers to testing the application through the user interface.

> White box testing refers to testing at code level under the hood.

> Grey box testing refers to testing the encapsulated application ( black box testing ) by knowing the internals of an encapsulated system.

So stake holders who does black box testing need not worry about application internals, they just need to validate user interface.

Stake holders who does White box testing need not worry about usability and UI, they just need to validate the inner workings.

Stake holders who does Grey box testing need to do both.

So if yours is a huge product development company having lots of people and hierarchy, you can make super senior developers to do grey box testing, and senior developers to make sure associate developers do white box testing, and last but not least hire some partially technical people to do black box testing.

But lets say yours is a start up, and you dont have investers and you can afford very less people, and you are building your own innovative idea, then you should hire people who are capable of doing Grey box testing.

The above two thoughts are just my opinions, you might still have more roles where you add software architects, Quality architects to design the quality process and many more, but at last you need to define who should do what.

I hope you enjoyed reading this, simplified description on QA process and might help you to define a process by seperating the concerns accross your stake holders.