---
layout: post
title:  "Stop Or Kill Or Remove all Docker containers running in your system"
category: The Impigrity Catalog
author: "Aravind HU"
description: "Stop Or Kill Or Remove all Docker containers running in your system"
keywords: "Docker, Docker kill all containers,Stop all containers,Remove all containers"
---


Off late, Everyone loves using virtualization at their operating system level. Docker is one of the most popular Virtualization platforms which not only reduces the plumbing effort of developers in setting up the required development stack but also helps them perform a lot of experiments and testing.

When you are in that mindset to exploit Docker for everything what we usually do is keep on creating containers as and when we need them. If you are using Docker for Mac or Docker Engine in Linux or Docker Windows App, usually when we kill the Docker App in general and start again, it spins up all the containers that were running. Sometimes that will be slowing down your Development PC by consuming a certain amount of CPUs and memory. In that case, you might need to quickly do some troubleshooting to stop/kill/remove all the containers in your machine to come out of the problem with impigrity.

I, too, landed in a similar situation here is what I did.

{:.alert .alert-warning}
DISCLAIMER : - All these commands which I am sharing here will work only on Linux or MacOSx, Docker Windows App does not function as expected and lots of Docker capabilities will not work in Docker Windows App.

**Let's list all containers and their statuses and details**

```shell

docker ps -a

```

**Let's list all container ID's only ( here is the trick ) : -**

```shell
docker ps -aq 

```

**To Stop all containers in my machine: -**

Use the trick we just did in your shell 

```shell

docker container stop $(docker ps -aq) 

```

**To Kill all containers in my machine: -**

{:.alert .alert-info}
This is different from stop actually stop gracefully stops the container and kill terminates instantly. To understand more in detail 
do read this article [here](https://superuser.com/questions/756999/whats-the-difference-between-docker-stop-and-docker-kill)

```shell

docker container kill $(docker ps -aq) 

```

**To Remove all containers in my machine: -**
```shell

docker container rm $(docker ps -aq) 

```
