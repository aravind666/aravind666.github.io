---
layout: post
title:  "Tweleve Attributes Of Scalability"
category: "Software Development"
---
Dear readers, I hope all you might have attended interviews and faced questions like have scaled your microservices ? How did you scaled your servers ? sort of questions. You might have answered saying I added CPUs in AWS created more nodes under Load balancer etc .., In reality its too generic question from the interviewer but its inevitable that you got to answer to impress him .

I too had been questioned in the past several times in a similar way, some couple of years ago. In this post I did some readings and heard talks of people like Martin Fowler and figured out what all the attributes of scalability . Meaning if someone asks how did you scaled ? You can actually tell them these twelve attributes I tuned.

Leaving the interveiws apart, these attributes are really important when you are in the state where you need to scale your systems. Remember !! to enahnce something you should measure it otherwise there is no end . Its like a moving football goal into which you can never push the ball .

Here goes the list

1.  **Response Time** : Time taken by the system to process the request
2.  **Responsiveness** : How quickly system acknowledges the request
3.  **Latency** : Minimum time required to get any form of request
4.  **Throughput** : Amount of bussiness that your system can perform in a given amount of time
5.  **Load** : How much stress the system can take eg .. how many concurrent users can connect to it
6.  **Load Sensitivitiy** : Variation in the response time, eg .. If System X has a response time of 0.5 secs for 10 to 20 users and System Y has response time of 0.2 secs for upto 10 users and 10 to 20 users the response time increases by 2 secs then we can say System X has lower load sensitivity than Y. Lower the load sensitivity better the system
7.  **Efficiancy** : Its simple math Performance divided by resources
8.  **Capacity** : Maximum effective Throughput
9.  **Scalability** : Now comes the last terms actual definition , it is the measure of how adding resources affects performance.
10.  **Vertical Scalability Or Scaling UP** : Adding resources to single Server eg .. increase RAM or increase number CPUs etc ..
11.  **Horizontal Scalability Or Scaling out** : Adding more servers eg .. setting up load balancers and create several nodes under it to balance to traffic .
12.  **Performance** : The real meaning of performance is either the measure of throughput or response time based on the context that you are in.

After going through these terms you might wonder how do I measure each of those attributes . Offcourse its always good to buy some thing which does this sort of job so that you can focus on your bussines. New relic is one such thing which can be used to measure almost all of these attributes of each your microservice and helps you to define your scalability goal, achive your scalability goal, build SLA's with your customer etc ..