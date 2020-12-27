---
layout: post
title:  "Clone all repos in a TFS region"
category: Impigrity
author: "Aravind HU"
description: "Clone all repositories in a TFS region "
keywords: "TFS, Git, clone, Github, multiple clone, TFS region, TFS-GIT, TFS git"
---

On a late winter, you join a team using Microsoft Team Foundation Server( TFS ) and have region level bifurcation of instances to version control. 
The team has such a setup for the sake of legal compliance which business demands. One the day 1 you will be given access to a particular region which has some 35 or 40 repositories. 
Are you nuts? Are you are going to clone all those by manually ? visiting each of those repositories and copy the clone URL and run a git clone on that. 
Remember you are a new guy you cannot show aggression and frustration. You might go an ask someone to know what do they do, for your bad luck they are all nuts :) they do exactly the same they manually go and clone each of the repositories. 

So it is an opportunity to prove my skills. 

Just a quick observation and analysis made me find that TFS web UI makes a HTTP request to backend to get list of repositories and its clone URL's to paint it in the UI. 

The request is a simple GET request and URL seems to be of the pattern

```
https://tfs.your.org.domain/tfs/REGION_ID/id_of_region/_apis/git/Repositories
```

Response will be an array of several JSON objects of the below format 

```json
[
    {
          "id":"d3e458d4-341f-4467-91df-0326f8e955cf",
          "name":"tps-mock-auth",
          "url":"https://tfs.your.org.domain/tfs/REGION_ID/id_of_region/_apis/git/Repositories/d3e458d4-341f-4467-91df-0326f8e955cf",
          "project":{
             "id":"8c0f0c68-1a1e-43b5-ad12-cec298ae9959",
             "name":"SAMPLE",
             "description":"SAMPLE DESCRIPTION",
             "url":"https://tfs.your.org.domain/tfs/REGION_ID/id_of_region/_apis/projects/8c0f0c68-1a1e-43b5-ad12-cec298ae9959",
             "state":1,
             "revision":1657,
             "visibility":0,
             "lastUpdateTime":"\/Date(1607937865920)\/"
          },
          "defaultBranch":"refs/heads/master",
          "size":881,
          "remoteUrl":"https://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME/_git/tps-mock-auth",
          "sshUrl":"ssh://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME/_git/tps-mock-auth",
          "webUrl":"https://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME/_git/tps-mock-auth"
    },
    {
          "id":"d3e458d4-341f-4467-91df-0326f8e955cf",
          "name":"tps-mock-auth",
          "url":"https://tfs.your.org.domain/tfs/REGION_ID/id_of_region/_apis/git/Repositories/d3e458d4-341f-4467-91df-0326f8e955cf",
          "project":{
             "id":"8c0f0c68-1a1e-43b5-ad12-cec298ae9959",
             "name":"SAMPLE 2",
             "description":"SAMPLE DESCRIPTION 2",
             "url":"https://tfs.your.org.domain/tfs/REGION_ID/id_of_region/_apis/projects/8c0f0c68-1a1e-43b5-ad12-cec298ae9959",
             "state":1,
             "revision":1657,
             "visibility":0,
             "lastUpdateTime":"\/Date(1607937865920)\/"
          },
          "defaultBranch":"refs/heads/master",
          "size":881,
          "remoteUrl":"https://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME2/_git/tps-mock-auth",
          "sshUrl":"ssh://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME2/_git/tps-mock-auth",
          "webUrl":"https://tfs.your.org.domain/tfs/REGION_ID/PROJECT_NAME2/_git/tps-mock-auth"
    }
]
```
I just copied this response from Google Chrome Console, and created a file called repos.json. 

From the terminal I navigated to the directory where repos.json is created and I just ran the below command to clone all the repositories.

```
cat repos.json | jq '.[].sshUrl' | xargs -L1 git clone
```

To run the above command you should have Linux [jq](https://stedolan.github.io/jq/) command working in your machine. If it is not installed in your machine, you can easily (download it)[https://stedolan.github.io/jq/download/] and install it by following the instructions.

That's it, and I did it, with all those odds on my way, I just did it.