---
layout: post
title:  "Manipulate Browser History Using HTML5 History API"
category: "Software Development"
---
HTML5 session history and navigation API basically inherits and extends the capabilities of the javascript history object. Before Explaining session history and navigation API's let me describe what were the features which were there in age old javascript history object.

History object use to exhibit 3 behaviours, first one is the length() , which use to return the number of links in the browser history stack.

2nd one is forward() function which navigates to the next URL which was there in the browser if any, and last one is the back() which just navigates to the previously visited page.

HTML5 history and navigation API's adds some more behaviours,

1.  Add a URL to browser History stack.
2.  Change the URL at the Top of the History stack.
3.  Change the URL of the browser with out refreshing the page.
4.  Allow access to catch the browser back button click event.

From these behaviours we could observe, most of the issues that we were facing in the past when we build highly intractive AJAX based SPA ( single page application ) application are all solved .

We do not need to worry about having cool and complex URLs in AJAX applications, since we can manipulate the history API to load what ever URL that we want for every event .

Lets start experimenting some of the behaviours of new HTML5 history object .

The first most important method is pushState() method, It allows us to change the portion of the URL

Syntax ,

```js
 history.pushState('restoreURL', 'page_title', 'yoururl_basename');
```

Example,

```js
history.pushState(null, null, "newpage.html");
```  
        
Here restortURL is the current URL of the webpage, and page\_title is the page title of the URL that you want browser to show when the newpage.html is loaded.

Here the third argument is the most relevant and mandatory.

The second most important event which is triggered is onPopState event, its an event which is triggered on javascript window object when back button is clicked .

The onPopState event is a javascript event which provides access to the current state of the browser stack, I meant If you imagine browser history as a stack it gives you the stack pointers location and its content.

For example .

```js
window.onpopstate = function(event) {
    if(event.state != null)
    {
        // The browser has some thing in the stack and 
        // we have access to its current content
        // event.state is the top most URL in the browser history stack.
        alert(event.state);
    }
};
```   

Third and most rearely used API is replaceState() method .

It can be used to change the state information of the current page with out adding the URL to the history Stack .

Syntax .

```js
 window.history.replaceState( 'restoreURL' , 'title_to_use', 'url_to_replace' );
``` 

Here restorURL is same as pushstate, but title which is the secound argument, is ignored by most of the browsers, though it is mentioned in the specification.

#### Browser compatibility

You can observe in some popular web applications like facebook and twitter, they switch back to hashbangs when browser is not supporting History API.

So if your target audiance wants to access your application in IE8 and IE9 then its not advisable to use HTML5 history API's itself, to take decisions you can use an wonderful website called caniuse.com

You can load the below URL and see if this matches all your requirements .

[http://caniuse.com/history](http://caniuse.com/history)

Alternatives to handle old browsers

There are some javascript libraries which handles history API issues or works as polyfills with old browsers, one such widely popular open source library is [history.js you can clone it at github](https://github.com/browserstate/history.js#aims)