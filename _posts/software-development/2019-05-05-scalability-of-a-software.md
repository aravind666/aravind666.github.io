---
layout: post
title:  "Scalability Of A Software"
category: "Software Development"
description: "When you are in the state where you need to scale your systems. Remember !! to enhance something you should measure it otherwise there is no end"
---
I hope all of you might have attended interviews and faced questions like have you scaled any microservice? How did you scale your servers? sort of questions. You might have answered by saying I added CPUs to my amazon EC2 objects or I  created more nodes under Load balancer etc .., In reality, it's too generic a question from the interviewer but you inevitably got to answer to impress him.

I too had been questioned in the past several times similarly, some couple of years ago. In this post, I did some readings and heard talks of people like Martin Fowler and figured out all the attributes of scalability. Meaning if someone asks how did you scale? You can tell them these twelve attributes I tuned.

Leaving the interviews apart, these attributes are really important when you are in the state where you need to scale your systems. Remember !! to enhance something you should measure it otherwise there is no end. It's like a moving football goal into which you can never push the ball.

### Here goes the list
1. Response Time: Time is taken by the system to process the request
2. Responsiveness: How quickly the system acknowledges the request
3. Latency: Minimum time required to get any form of request
4. Throughput: Amount of business that your system can perform in a given amount of time
5. Load: How much stress the system can take eg .. how many concurrent users can connect to it
6. Load Sensitivity: Variation in the response time, eg... If System X has a response time of 0.5 secs for 10 to 20 users and System Y has a response time of 0.2 secs for up to 10 users and 10 to 20 users the response time increases by 2 secs then we can say System X has lower load sensitivity than Y. Lower the load sensitivity better the system
7. Efficiency: Its simple math Performance divided by resources
8. Capacity: Maximum effective Throughput
9. Scalability: Nothing but the measure of how adding resources affects performance.
10. Vertical Scalability Or Scaling Up:  Adding resources to a single Server eg .. increase RAM or increase the number of CPUs etc...
11. Horizontal Scalability Or Scaling out: Adding more servers eg .. setting up load balancers and create several nodes under them to balance traffic.
12. Performance: The real meaning of performance is either the measure of throughput or response time based on the context that you are in.

After going through these terms you might wonder how do I measure each of those attributes. Of course, it's always good to buy something which does this sort of job so that you can focus on your business. [New Relic](https://newrelic.com/) is one such thing that can be used to measure almost all of these attributes of each of your microservice and helps you to define your scalability goal, achieve your scalability goal, build SLA’s with your customer, etc... There are opensource reliable alternatives one of my favorite ones is [Apache Skywalking](https://skywalking.apache.org/).



