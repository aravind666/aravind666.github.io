---
layout: post
title:  "Building applications with high availability"
category: "Software Development"
---
Ensuring the high availability of any scalable product is not easy. With this post, I would like to describe few techniques that could help you to improve your application availability

I learned some of these techniques from my experience as well as from the talks of the Cloud Strategist and Thought leaders like [Dan North](https://dannorth.net/about/), [Lee Atchison](https://www.leeatchison.com/), [Ryan Tomayko](https://github.com/rtomayko)

**The two most important characteristics which make your product distinct are**

**Availability**: - Ability of the system to meet business goals by being operational
**Reliability**: - Quality of the operation performed by the system

Out of the two, the most important is Availability, without high availability, there is no reason to scale. Also, A Software that is not so Available can be not so reliable

**There are several reasons for poor availability**

1.  Resource Exhaustion eg... Sudden spike data coming into system
2.  Load changes eg .. Sudden spike in the number of users in the system
3.  Adding lots of new features
4.  Too many external dependencies
5.  High Technical Debt due to aggressive bug fixes and feature development

The product cannot sustain for a long time if it is suffering from frequent availability issues

No one can anticipate when a particular product will face availability issues if the entire product team considers that their product not being 100% available as one of the risks and mitigate it well it will avoid the vicious cycle of problems that impacts your business

#### Below are techniques to keep your application availability high

*   **Build with failure in mind**: While building your system consider availability concerns during all aspects of your system design
*   **Always think in scalability perspective**: Build systems for tomorrow meaning design your system with the ability to tolerate increased load
*   **Build risk matrix and mitigate them**: Religiously call for discussions frequently with stakeholders and define Risk matrix and also in subsequent discussions re-visit mitigation plans
*   **Monitor availability** : Utilize third-party tools like AppDynamics, Newrelic to monitor your servers, and configure them so that it alerts stakeholders to troubleshoot
*   **Have a pre-defined troubleshooting guide**: This is a must, and in fact output of point 3 above, the output of the risk mitigation plan is to document to reduce the severity of the problem.

Being prepared in advance to handle availability concerns is the best way to reduce the likelihood and severity of availability problems

I believe the techniques listed here is not a constant list, but probably it can lay a foundation for your team to come out with a game plan as per the need





