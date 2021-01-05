---
layout: post
title:  "Options... Options... Options..."
category: "Management"
author: "Aravind HU"
image: "/assets/post_images/options-options-options.png"
description: "Time taken by a person to make a decision from possible options increases logarithmically when  number of choices are increased "
keywords: "Hick's Law, complexity of choices, more is less, The Paradox of Choice, Why More Is Less, Analysis paralysis, Options"
---

Some years back. I faced a very weird situation where I was asked to display a same data set in two different formats 
one with just a display of list like an outlook mail box where selecting an item opens the info on the right panel. Another was a table view where all the information on an item was displayed in a row of a table.

While Creating a table view or Grid view of items I was also asked to provide Sort , filter options for each of the columns. In the List view, it had similar sort and filter options but for only selected fields not for all. 

The application was used by not so technical users, from Google analytics I was able to track which view was used most and what all features of the view was most used for eg.. which column was sorted more than any other column in gridview .
From the analytics data I found some interesting behaviours of my product users in Grid view. 

1. Users were spending too long to achieve some things in Grid view which could be achieved with lesser time in List view.
2. Sorting of columns on certain columns was getting used only once per month in grid view.
3. Filtering of columns on certain columns was getting used only once per month in grid view.

So one of the conclusion was, Though the features we provide was a business requirement, it was actually slowing down the user in getting things done with the product.
Also, another conclusion was not all features are getting used by a decent subset of users.

When I did some personal research on to identify the root cause of this behaviour I ended up finding a real scientific reason behind this behaviour.

I was also sad ( because I was not the first one ) as well as happy :), because lots of people since ages were curious to know the reason for this sort of behaviour. American  psychologists [William Edmund Hick](https://en.wikipedia.org/wiki/W._E._Hick) and [Ray Hyman](https://en.wikipedia.org/wiki/Ray_Hyman) were the early curious folks who were curious about this behaviour.
They came out with a nice description of observed phenomena and defined a law by generalizing it.

It is popularly called Hick's law.

{:.blockquote}
{% include 
    figure_with_author.html 
    quote=" Time taken by a person to make a decision from possible options increases logarithmically when  number of choices are increased. " 
    author="Hick's law"
%}

If we apply this to my story, More options that a user has, the longer it takes for them to make a decision. 
Also, the more you add elements on the screen, it becomes more hard for users to follow . 

Adding a feature to the product is easy, but removing it is hard. Especially if your product is a commercial enterprise product or a product solving some problem for an enterprise. 
Because business will ask for features to be built by paying for it,  and management or decision makers who asked you to build the feature will obviously not be so interested to remove it.

So think, discuss and gather analytics or perform a proper usability test on existing behaviour before you build. Sometimes less functionality improves practicality and usability. 
Software that is limited, but simple to use, may be more appealing and intuitive.
                                                                               
There is also a beautiful book written by a Psychology professor [Barry Schwartz](https://en.wikipedia.org/wiki/Barry_Schwartz_(psychologist)) it is called 

["The Paradox of Choice – Why More is Less"](https://www.goodreads.com/book/show/10639.The_Paradox_of_Choice). 

Just for your information, I did not read his book, I just listened to his interesting, thoughtful and insightful TED talk in Youtube.

<div class="ratio">
    <iframe src="https://www.youtube.com/embed/VO6XEQIsCoM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

There are so many real world examples which I later was able to point out 

1.  Mark Zuckerberg always wears gray t-shirt, jeans, and sweatshirts .
2.  Steve job's always used to wear Black long-sleeved mock turtleneck T-shirt and a Levis Jeans pant throughout his life in all his public appearances .
3.  Albert Einstein use to always wear a typical grey suit every day. 

These folks might have learnt or figured out long back that it saves a lot of time and helps them to be productive by keeping lesser options.    


 
