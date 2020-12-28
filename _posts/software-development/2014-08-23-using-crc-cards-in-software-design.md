---
layout: post
title:  "Domain Driven Design using CRC cards"
category: Software Development
---

When we model classes for Domain, in any agile project, we start brainstorming the entities involved in the system, the way they communicate with each other, there properties and behaviours.

When we collaborate this brainstorming activity with all stakeholders, it get messed up and thoughts shared by collaborators might get missed out or misunderstood. So an alternative approach to brainstorm is to use CRC cards, it stands for Class Responsibility and Collaboration cards.

These cards are just paper handouts of post card size. Its very easy to create these cards, more than that its very easy to dispose if you make a mistake. These cards are spread across your round meeting table by representing each class with a card. Each card consists of 3 sections, name of the class, Responsibilities of the class, and the list of collaborated classes it interacts with.

Usually people use CRC cards in the below format.

![Sample Class responsibility and collaboration card](/assets/post_images/crc.jpg)

You can create N number of cards, by reviewing requirement documents or an Agile user Story.

When we create CRC cards, we should not worry about code naming conventions, because these are not actual, Its almost similar to UML diagrams but its more easier and simpler than UML.

Using these cards you could analyze dependencies, coupling, and cohesion factors between entities by keeping related cards one above the other, you can also think of interfaces, abstractions protocols and many more.

Using CRC cards allows us to easily apply and adopt [Object oriented design principles and practices,](/oops/2014/08/23/object-oriented-design-principles/) we can easily apply and adopt SOLID and GRASP principles For eg.. If your list of responsibilities in any card is too huge then you have to redesign it because its more likely that you might end up creating a God object.

Remember as I said before, CRC cards help when we do system design in collaboration, when we collaborate and build cards, we should always have some one to lead so that focus on cards remain stable other wise we might end up with mess and waste time :) .