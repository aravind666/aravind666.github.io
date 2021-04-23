---
layout: post
title:  "Remove all Docker images, volumes, running in your system"
category: The Impigrity Catalog
author: "Aravind HU"
description: "Remove all Docker images, volumes, network bridges running in your system"
keywords: "Docker, Docker kill all containers,Stop all containers,Remove all containers, remove docker images"
---

In my one of the previous post, [I shared methods to clean up Docker containers in your system](/the%20impigrity%20catalog/2021/04/20/stop-or-rm-kill-all-docker-containers.html). As I said before Containers are isolated from one another and bundle their software, libraries, and configuration files. Sometimes they are born with Storage volumes and network bridges.

Most importantly Docker Containers are created from Docker images and post removing the containers, images using which you created those containers still exist in your system. That would be eating up a considerable amount of space in your machine.

**So there is a shortcut to delete all the images in your machine**

```shell
docker image rm $(docker images -aq)
```

**The above command removes all the images, to remove images with filter** 

```shell
docker image rm $(docker images --filter=reference='ruby:*') // would delete all ruby images irrespective of tag
docker image rm $(docker images --filter=reference='postgres:*') // would delete all postgres images irrespective of tag
```

**If you are having unused images** that are not referred to by any container docker itself provides a built-in command

```shell
docker image prune
```

**If you are having some Dangling Images** that have no relationship to any tagged images and you want to remove them.

```shell
docker image rm $(docker images -f "dangling=true" -q)
```

Once you are done with the images, you might need to clean up Volumes 

**To know what all Docker volumes exists in your system** 

```shell
docker volume ls 
```

**To delete all the unused local volume with impigrity Docker itself provides a command** 

```shell
docker volume prune
```

**If you want to remove volumes by force with impigrity use the below command** 


```shell
{% raw %}
docker volume rm $(docker volume ls --format "{{.Name}}")
{% endraw %}
```


### Lets clean up Network Bridges

Usually, when you spin up several docker-compose definitions, at your local system, it also creates network bridges for its context and needs. Here is how we clean them up in your system with impigrity.


**To Remove all unused local network bridges docker itself has provided a command: -**

```shell
docker network prune
```

**To Remove all local network bridges by force with impigrity use the below command: -**

```shell
{% raw %}
docker network rm $(docker network ls --format "{{.ID}}")
{% endraw %}
```
