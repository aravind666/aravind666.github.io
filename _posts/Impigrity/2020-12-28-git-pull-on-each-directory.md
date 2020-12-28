---
layout: post
title:  "Perform Git pull on all the sub directories"
category: Impigrity
author: "Aravind HU"
description: "Perform Git pull on all the sub directories "
keywords: "TFS, Git, git pull, Impigrity"
---

In one of my previous posts, I had shown how you can clone or checkout several repositories from [TFS](impigrity/2020/08/08/clone-all-repositories-in-a-TFS-region.html) or [GIT](impigrity/2020/07/05/clone-all-repositories-in-an-Github-organization.html).
Now once cloned you might have to periodically update the same. In that case you don't have to go to navigate to each of the folder and perform ```git pull```

You can do that easily in your linux terminal.

```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull \;
```

This finds the immediate sub-directories which are git repositories and performs ```git pull``` on each of those sub-directories.
You can notice that I am using ```-depth 1``` which means this works only for first level sub-directories. I will share a post for n-level directories soon.

