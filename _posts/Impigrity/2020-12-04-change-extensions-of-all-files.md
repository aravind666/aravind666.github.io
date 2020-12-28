---
layout: post
title:  "Changing file extensions of all files in a directory"
category: Impigrity
author: "Aravind HU"
description: "My Personal blog, was built using Jekyll. In 2020, It was in my todo list to revamp the website. One of the Situation that I encountered was to rename the file extension of all 50 html files to markdown"
keywords: "MacOSx, Changing file extensions, Terminal, Commandline, file extensions of all files in a directory"
---

My Personal blog, was built using Jekyll. In 2020, It was in my todo list to revamp the website.
One of the Situation that I encountered was to rename the file extension of all 50 html files to markdown. 
Meaning if the file extension is ```.html ``` I need to change that to ```.md ```

Here is what I just did to achieve the same.

First navigate to the directory where you have all files with ```.html ``` extension. Then run the below command.

```
aravindhu@MAC software-development % ls -ltr
-rw-r--r--  1 aravindhu  staff   2246 Nov 29 15:22 2014-07-22-using-crc-cards-in-software-design.html
-rw-r--r--  1 aravindhu  staff   4765 Nov 29 15:27 2014-08-06-coffee-script-starter-for-beginners.html
-rw-r--r--  1 aravindhu  staff   2676 Nov 29 15:29 2014-08-08-naming-things.html
-rw-r--r--  1 aravindhu  staff   3539 Nov 29 15:31 2014-08-09-web-accessibility.html
-rw-r--r--  1 aravindhu  staff  10745 Nov 29 15:41 2014-08-23-object-oriented-design-principles.html
-rw-r--r--  1 aravindhu  staff   6497 Nov 29 15:41 2014-08-24-what-is-web2-0.html
```

```
aravindhu@MAC software-development % for f in `find . -iname '*.html' -type f -print`;do mv "$f" ${f%.html}.md; done
```

This above command loops through each of the file whose extension is ```.html ``` , and rename it using [```mv```]([https://en.wikipedia.org/wiki/Mv]) command. 

```
aravindhu@MAC software-development % ls -ltr
-rw-r--r--  1 aravindhu  staff   2246 Nov 29 15:22 2014-07-22-using-crc-cards-in-software-design.md
-rw-r--r--  1 aravindhu  staff   4765 Nov 29 15:27 2014-08-06-coffee-script-starter-for-beginners.md
-rw-r--r--  1 aravindhu  staff   2676 Nov 29 15:29 2014-08-08-naming-things.md
-rw-r--r--  1 aravindhu  staff   3539 Nov 29 15:31 2014-08-09-web-accessibility.md
-rw-r--r--  1 aravindhu  staff  10745 Nov 29 15:41 2014-08-23-object-oriented-design-principles.md
-rw-r--r--  1 aravindhu  staff   6497 Nov 29 15:41 2014-08-24-what-is-web2-0.md
```

Now you got all your file extensions renamed with out doing that manual work.