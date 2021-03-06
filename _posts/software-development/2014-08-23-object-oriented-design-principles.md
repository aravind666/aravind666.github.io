---
layout: post
title:  "Object Oriented Design Principles"
category: "Software Development"
---

If you have ever tried to build an OOP application, most of the time you end with dissatisfaction, the reason would be you fell some thing as missing or some thing might be over engineered, or some thing you might have created but you will not be in need of it.

The reason for all such problems is, you can verify and validate a software, but you cannot so easily verify or validate its OOD , for example if you have a god object, having all behaviours, or if you create multiple classes with out using inheritance, Or you never make any thing as private you make every behaviour as public there by ignoring encapsulation.

With all these bad practices, neither the developer nor the QA nor the bussiness loose some thing, because end of the day every body wants a functional software which meets the requirements.

So the effects of such bad designs would be during the maintenance phase of any product which is built and delivered. Object oriented design principles are actually evolved to validate the application to make sure that the application is properly built by exploiting the 4 pillars of OOP ( Inheritance, Polymorphism, Encapsulation, Abstraction).

These principles are not exactly used to validate the system but they are used to employ some best practices in our development phase, hence these things are called as principles not rules.

More than these pillars today's agile methodologies or iterative development methodologies have made a considerable impact on the way we design and deliver a software, As a result of this you can observe a thin line between design principles and Agile methodologies, i.e most of these object oriented and design principles are employed in software development process by considering Agile practices.

Whether its Agile or Waterfall two of the most commonly used generic software design principles are.

1.  **DRY**\-- Don't repeat yourself
2.  **YAGNI**\-- You Ain't gonna need it

### DRY

As the acronym says don't repeat yourself, its an obvious statement and its agnostic to OOPS, whether you use OOPs or not you should not re invent the wheel . This principle is applied almost in every aspect with in the development life cycle, for eg, applying this principle might prevent you copying code from class to class or having same function in a non inherited class or you build some thing new by leaving out the old one because you cannot understand the old one, Or you might be storing same data in multiple tables, your application might have multiple bootstraps, your application might have multiple ways to connect to same database Or you are trying to solve something which is already solved and many more.

The easiest way to prevent your repetition is by reasoning every aspect, and properly seperating the concerns across objects for eg if you are writing a function, list down the reasons for having a new function, check if any other function exists and you can reuse. If its a function written in a class, then you should think of inheritance.

### YAGNI

It is a common problem for passionate developers to think of future problems, or think of future exceptions, when he/she is asked to work on an user story. Some people argue, saying "we code for future enhancement" but that's not so great, no business analyst could anticipate current and future expectations of a client. Some people also argue saying what is the problem in having some extra code ? , a standard code is not simply a code, its a code with test cases and some assertions to execute test cases, which will be part of our test suite, which adds an extra overhead of maintenance.

So if you miss applying DRY or YAGNI principles, I meant if you have code repeatations or you have extra unnessary code, then you endup having a smelling code.

**Some of the most commonly encountered code which smells would be**

1.  Long methods
2.  A huge class
3.  Repeated instance variables
4.  Unnecessary comments
5.  If it takes too much time to handle change requests

**YAGNI and DRY are the global principles, when it comes to OOPs specific, two of the most commonly employed principles are**

1.  SOLID
2.  GRASP

SOLID
-----

Its not an acronym actually, each letter in the acronym describes a principle.

S : - Single responsibility principle

O : - Open close principle

L : - Liskov substitution principle

I : - Interface segregation principle

D : - Dependency inversion principle

I do not want to explain the history behind these principles, because its very huge. These principles are extremely simple though it looks so complex. Most of the time after getting to know these principles you confess a lot about your past mistakes :) .

### Single responsibility principle

An object should have one single concern or responsibility. It should represent one single business entity or one single sub entity of your business entity, meaning all those concerns should be encapsulated with in that class. One of the most easiest way to apply this principle, is cultivating the habit of commenting each class, once you comment, just read out once and observe the conjunctions in the comment if you find 'and' conjunctions a lot then its more likely that you are breaking this principle.

### Open close principle

What ever class you create, it should be open for extension but closed for modification. This principle is applied most of the time, when we need to add new entities which inherit some behaviours of existing entities with in the system.

### Liskov substitution principle

Derived Classes must be substitutable for their base classes. For example you have a class called animal and you have an inherited class called mammals, then you should be able to pass mammal object to a function which expects animal object.

### Interface segregation principle

Interfaces are basically used to reduce coupling or dependencies when it comes to communication between objects. For example we build database interface because we want to build an application in a database agnostic way, so that if you want to change the RDBMS used you can just implement the parent interface and add required functions.

This principle says that, encourage having multiple interfaces then one single interface which is generic. Adding more interfaces reduce coupling between application layers, more than that it reduces coupling between entities across layer.

### Dependency inversion principle

Its the most complex of all the five, needs some amount of relative thinking to apply.

We use Abstract classes when you want to share some code among several closely related classes also we expect classes that extend our abstract class have many common methods or fields, or require access modifiers other than public (such as protected and private) and enables us to define methods that can access and modify the state of the object to which they belong.

The principle says to depend on abstractions and not on concretions, for example

If you have a class called file, and you might require functionality such as write to video file or read from video file or write into text file or read from text file .

Instead of directly inheriting the file class, create an abstract class called file implement that class as two another abstract classes name it as read and write , later for audio write functionality implement write abstract class and for video read functionality implement read abstract class. So that you can reduce the dependencies across various flavours of same entity with in same layer.

GRASP
-----

GRASP is another set of object oriented design principles just like SOLID, Its an acronym for General responsibility assignment software principles.

These principles take slightly different perspective then SOLID, If you can observe the vision behind SOLID principles, its only dependency. In case of GRASP its all about responsibility and concerns. SOLID and GRASP are not competing in each other actually, you can use either of them or ignore one of them. Some people prefer GRASP in Extreme Programming.

GRASP has many principles like the way we have 5 principles in SOLID

1.  Creator
2.  Controller
3.  Pure Fabrication
4.  Expert
5.  High Cohesion
6.  Indirection
7.  Low coupling
8.  Polymorphism
9.  Protected variations

I guess some of them are self explanatory. Most of the time we face situations to apply these principles after designing them by applying SOLID, though they are called as design principles, you can consider it for refactoring or re organizing phase of the design. These principles are applied on each class and its subclasses.

### Creator

This principle is applied to every class to identify who is responsible for creating its object. If you have designed an OOPs system, I guess the most common problem would be to identify the birth of the object with in the system and its life cycle.

### Low coupling Or High Cohesion : -

This principle suggests us to gather 2 attributes for every class, Cohesion and Coupling. Cohesion describes the level of related behaviours exhibited by class and coupling describes the level of dependencies that a class has on other classes. The principle enforce us to reduce coupling and increase cohesion.

### Expert Or Information Expert : -

This principle suggests us to assign the responsibility to a class which has sufficient data to full fill it.

### Controller : -

This principle suggests us to create an intermediate class to communicate between objects, for example in any MVC application we never want to have our Model classes to communicate with views, instead we have a controller in the middle which works as a communicator.

### Pure Fabrication : -

This principle suggests us to create a new class to add behaviours which don't belong to any of the existing classes.

### Indirection : -

This principle suggests us to reduce coupling by creating intermediate object,

Okay let me stop here, I guess most of the things in GRASP are self explanatory, these are just like hints and tips that could make our life easy when we design a class.

Whether you apply SOLID or GRASP the intention to have principles in place is just to make sure the code we write is more readable, testable and maintainable and it wont smell :).

I hope you enjoyed reading this post, and some of you might have confessed yourself for building code by ignoring these principles. UML diagrams help us a lot to apply these principles.

If you are not satisfied with the explanations given here, you can find out [uncle bob's book on writing clean code in agile](http://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445)