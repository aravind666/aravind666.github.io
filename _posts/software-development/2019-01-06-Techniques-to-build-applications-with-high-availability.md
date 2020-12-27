---
layout: post
title:  "Techniques to build applications with high availability"
category: "Software Development"
---
Dear readers, Building a scalable application that has high availability is not easy. With this post I would like to describe few techniques that could help you to improve your application availability

I learnt some of these techniques from my experiance as well as from the talks of the Cloud Strategist and Thought leaders like [Dan North](https://dannorth.net/about/) , [Lee Atchison](https://www.leeatchison.com/) , [Ryan Tomayko](https://github.com/rtomayko)

**The two most important characteristics which makes your product distinct are**

*   Availablity : - Ability of the system to meet bussines goals by being operational
*   Reliability : - Quality of the operation performed by the system

Out of the two the most important is Availability, with out high availability there is actually there is no reason to scale

**There are several reasons for poor availability**

1.  Resource Exhaustion eg.. Sudden spike data coming in to system
2.  Load changes eg .. Sudden spike in number of users in the system
3.  Adding lots of new features
4.  Too many external dependencies
5.  High Technical Debt due to aggressive bug fixes and feature development

Product cannot sustain for a long time if it is suffering from frequent availability issues

No one can actually anticipate when a particular product will face availability issues if the entire product team considers that there product not being 100% availabile as one of the risk and mitigate it well it will definately avoid vicious cycle of problems which impacts your bussiness

#### Below are techniques to keep your application availability high

*   **Build with failure in mind** : While building your system consider availability concerns during all aspects of your system design
*   **Always think in scalability perspective** : Build systems for tommorow meaning design your system with the ability to tolerate increased load
*   **Build risk matrix and mitigate them** : Religiously call for discussions frequently with stake holders and define Risk matrix and also in subsequent discussions re-visit mitigation plans
*   **Monitor availability** : Utilize third party tools like AppDynamics, Newrelic to monitor your servers, and configure them so that it alerts stakeholders to trouble shoot
*   **Have a pre-defined troubleshooting guide** : This is a must, and infact an output of point 3 above, the output of risk mitigation plan is to document to reduce the seviarity of the problem.

Being prepared in advanced to handle availability concerns is the best way to reduce the likelihood and severity of availibility problems

I belive the techniques listed here is not a constant list, but probably it can lay a foundation for your team to comeout with a game plan as per the need





