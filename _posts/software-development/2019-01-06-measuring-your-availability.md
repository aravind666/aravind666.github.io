---
layout: post
title: "How to measure the availability of your product ?"
category: "Software Development"
---
Dear readers, In the post ["Techniques to build applications with high availability"](/software%20development/2019/01/06/Techniques-to-build-applications-with-high-availability.html), I described various techniques to increase availability of your application. One of the techniques that I described there is creating a Risk matrix

One of the first and foremost step in creating Risk matrix for scalability perspective is to measure the availability of your product

Site availability can be calculated by below formulae

{:.blockquote}
> AVAILABILITY\_PERCENTAGE = ( TOTAL\_SECONDS\_IN\_MEASURING\_PERIOD - TOTAL\_SECONDS\_SYSTEM\_DOWN ) / TOTAL\_SECONDS\_IN\_MEASURING\_PERIOD

Let me take an example to show you how to use this formulae

In the month of May 2019 your product "Awesome product" had a down time of 30 minutes in the first week, and 18 minutes in the last week of may. Now lets calculate the availability percentage of your "Awesome product"

{:.blockquote}
> TOTAL\_SECONDS\_SYSTEM\_DOWN = (30mins \* 60secs) + (18mins \* 60secs) = 1800secs + 1080secs = 2880 secs

{:.blockquote}
> TOTAL\_SECONDS\_IN\_MEASURING\_PERIOD = 31days \* 24hrs \* 60mins \* 60secs = 2678400 secs

{:.blockquote}
> AVAILABILITY\_PERCENTAGE = ( 2678400 - 2880 ) / 2678400 = 0.998924731182796

We got to convert this to percentage by multiplying this with 100

So the availability percentage of your "Awesome product " is 99.89247311827957%

So what does this mean ? your "Awesome product" availability is some what 99.89% in the month of May 2019

Don't get so impressed about your product, because it comes with 48 mins of downtime every month which is actually not so great availability :)

If you consume AWS cloud objects and have gone through the documentation of AWS you often see amazon assures 99.9999% availability you might get a weird feeling ( like the way I got ) why amazon is so possessive in expressing there availability with 4 digit precision ? . They are actually not possecive they are actually letting you know that in a month any AWS cloud objects will have 2.6 seconds of downtime, this is some thing you can expect from AWS and it is not 100 percent .

Just in case if they claim or any SAAS product claim, you can literally sue them legally in the court for false claim based on the impact you had on your bussiness . AWS is just too carefull in posting these numbers

Thats one of the reasons why SAAS products comes with an SLA (service-level agreement ). Good SAAS products claim what they actually are, they don't false claim to sell there license.

I hope you enjoyed reading this, I promise I am not criticising any one here I am just opening up the facts in front of you.