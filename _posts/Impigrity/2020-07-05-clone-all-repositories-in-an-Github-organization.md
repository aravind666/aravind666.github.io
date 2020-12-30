---
layout: post
title:  "Clone all repositories in a Github Organization of Enterprise"
category: The Impigrity Catalog
author: "Aravind HU"
description: "Clone all repositories in a Github Organization of Enterprise "
keywords: "Git, clone, Github, multiple clone, github enterprise"
---

As a developer I was lucky to work with various development teams, each of those teams had different culture and practice in place for developing high quality software. 
Just like the way I encountered a situation with TFS on a late winter, similar thing happened with Github too. But it was little different and weird. The organization which I was part was a 
strong believer of monorepo, where entire organization source code of all projects are stored under one single Github Organization.

In such a case, my team was actually having some 30 repositories, what do you do if you have to clone that particular 30 or 50 repositories ?. One thing which helped me was my team was following a standard, all their repositories are having a unique prefix say 'xyz'.
That prefix helped me to automate a lot. 

Github provides [API's](https://docs.github.com/en) to get list of repositories there by encouraging teams to build custom automated tools.
But to invoke an API you should use Personal Access Token in the header of your [API request](https://docs.github.com/en/free-pro-team@latest/rest/guides/getting-started-with-the-rest-api). 

As a first step, you have to generate one Personal Access Token by following the steps listed [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).

Once you have your PAC generated, you have to copy it in your clipboard and save it in some secured place so that you can use it get the list of repositories of an organization along with its clone URL's.

Here is a sample API request where I am trying to query an open source github organization owned by [Microsoft](https://github.com/microsoft), I am also filtering by name with prefix "Windows" and language "C#" 

```
curl --header 'Authorization: token 907fbYOURre59cberezflPACrjaneorjnHERE' 
"https://api.github.com/search/repositories?q=microsoft%2Fwindows+in%3Aname+language:C%23&per_page=100" 
```

Github API's provides filters to repository API's using which you can narrow down the request by name, programming language. You can paginate as well. 

Now you know how to get the list of repositories and its clone URL's using github API, next step is to clone them . You clone them by grepping for git ssh url for each of the objects in the response and running git clone on each of them. Below command does exactly the same.

{: .text-wrap .text-break}
```
curl --header 'Authorization: token 907fbYOURre59cberezflPACrjaneorjnHERE' 
"https://api.github.com/search/repositories?q=microsoft%2Fwindows+in%3Aname+language:C%23&amp;per_page=100" 
| grep -o 'git@[^"]*' | xargs -L1 git clone
```
