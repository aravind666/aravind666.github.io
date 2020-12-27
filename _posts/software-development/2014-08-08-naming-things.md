---
layout: post
title:  "Naming Things In Software Development"
category: "Software Development"
---
When we start building a new web application, we actually should build standards first before we plan any thing related to application structure or configuration or file structure etc ..

So one such standard which is very much important is naming things.

All stakeholders of any project should come to an agreement on how we name things through out the product life cycle.

When I say, naming things, I meant, naming any thing, it might be your function, class , variable, file, logfile, vhost name, folder etc ..

In this post I would like to list some of the best rules that I felt as good to have .

1.  Use no spaces when you name any thing.
2.  Replace space with either snake case it or add underscore or you an add an hypen but not recommended .
3.  Keep it short, and meaningful, for eg, instead of calling a function as clear\_data\_from\_tables, you can say bus\_tables, Here you can observe bus means clean and it actually make sense but little difficult but still it is short and meaningfull .
4.  Do not append numbers, for example if we have a function called clear\_data1 and another function called clear\_data2 with different functionality, then its really bad because it is a pain in the ass for any person who works on this code in future.
5.  Try to name as much as possible with lowercase, because uppercase characters has its own platform and language specific status.
6.  Make sure what ever files that you expect application to create has some extension, it helps a lot during debugging.
7.  Use only alphanumeric characters
8.  Last but not least, Make sure every stackholder follows this

One interesting question, is expected, i.e

> Why should we name things well ?

Software development is all about, describing and expressing solutions. When we join a project as a stakeholder, then first thing what we see is the code or technical specifications or an UML diagram or best case Agile User stories.

When we see them the only means that we can get insights about the application functionality is by exploiting the naming system which is followed. So that works as a capsule for any new guy entering the project, and the capsule is built by the team who started the application from scratch by having ground rules to name things.

If you have ever reviewed some of the postings in [codingconfessional.com](http://www.codingconfessional.com/) most of the postings are indirectly related to naming.

The best way to learn to name things is by renaming things as much as possible and testing its readability and simplicity with the stakeholders :)