---
layout: post
title:  "Angular JS Terminologies & Fundamentals"
category: "Software Development"
---

Angular JS is yet another Javascript framework which is used to add dynamic behaviour to HTML. I could understand this framework by applying my OOP skills.

I also felt this approach to understand this framework is pretty easy and it helps a lot if you are comfortable in relative learning.

If you have come to this page by already struggling to understand Angular JS framework, then this post might work as a capsule, If you are starting to learn Angular JS please make sure you go through the documentation links which I have provided with in this post

okay first things first, To understand and get introduced to this framework, we need to know its terminologies and its usage.

let me list them down here

1.  Directive
2.  Expressions
3.  Module
4.  Controller
5.  Services

Before starting to explain these terminologies, let me explain the relationship between DOM and Javascript framework in general.

Whatever framework you use in javascript, DOM is considered as a big huge parent object, which has lots of child objects with various properties. So any framework, it might be angular, knockoutJS or backboneJS or jquery just adds some behaviour to the main object as well as child objects.

For eg . when we use Jquery and write something like this.

```js
$("#somedivid").click(function ()
{
    alert("hey you clicked");
});
```

Here you can observe that #somedivid is the id of some 'div' tag in DOM which is considered as a child of huge DOM object, and we are adding the behaviour to alert some text when clicked, to this child object.

So the conclusion is simple at the gross level javascript frameworks just allows us to add behaviour to DOM objects .

The behaviour can be anything, it might add interactivity or it might add validation to input field or it might add some animation when end user mouse over the object etc ....

I guess you are now clear on what is the basic advantage of using javascript framework.

I think it's time to define  each of Angualar JS terminologies which I listed.

#### Directive : -

In angularJS a directive is a reference to a particular DOM object to add behaviours.

for example,

```html
            <div ng-controller="ExampleController">
                <p>some text</p>
                <p>some other text</p>
                <p>some more text </p>
            </div>
```

        

Now in our angular JS code we add behaviour to the div which has a built in directive reference called ng-controller which is evaluated to ExampleController

```js
(function () {

    // IIFE block

    var app = angular.module('example', [])

    app.controller('ExampleController', function() {

    // do some thing
    });

})();
```



Angular also provides ways to define your own directive, and use them in your DOM to express the behaviour. you can learn a lot about it at [Angular JS documentation on Directives](https://docs.angularjs.org/guide/directive)

#### Expressions

Angular JS expressions allows you to express dynamic behaviour with in HTML

for eg. you can do some addition with in HTML like
```html
<p> my age is {{ "{{ 2014 - 1987 " }}}} </p>
```

Expressions also allows us to exhibit the behaviour defined by the directives. For example you can inject dynamic values to your HTML by defining them in the controllers .

For example

```js
(function () {
    var app = angular.module('example', [])
    app.controller('ExampleController', function() {
        this.variable1 = "myself"
        this.variable2 = "yourself"
    });
})();
``` 

So now we can write expressions to exhibit the above defined behaviours. some thing like this

```html
<div ng-controller="ExampleController as example">

        <p>{{ "{{example.variable1" }}}}</p>

        <p>{{ "{{example.variable2" }}}}</p>

</div>
```

To know more about expressions please refer to [Angular JS documentation for Expressions](https://docs.angularjs.org/guide/expression)

#### Module

Modules are just parts of application which are classified by considering code reusability and maintainability. Modules normally define dependencies for your application. In angular your coding starts by defining a module, and its dependencies, you cannot directly add behaviours to your DOM with defining atleast a single module. Angular provides directives to define modules, its modules in the middle layer which adds behaviours( controllers ) ng-app is the directive which is used to define module.

To define a module, first use the ng-app directive to reference it in HTML

```html
<body ng-app="example">
    // Your DOM
</body>
```

Now in angular JS code we can add behaviours to DOM like below

```js
(function () {
    var app = angular.module('example', [])
    app.controller('ExampleController', function() {
        this.variable1 = "myself"
        this.variable2 = "yourself"
    });
})();
```

To know more about defining a module and its dependencies please refer to the [Angular JS documentation on modules](https://docs.angularjs.org/guide/module).

#### Controllers

If you are from MVC background like me, you might have definately defined some actions and controllers in a module especially if you have used frameworks like FuelPHP or Zendframework 2 or Rails. A controller is just used to define the behaviour or we can say express the behaviour in angular JS code.

#### Services 

Services are like consumables for controller, remember only controller can consume services no one else :). lets think as a generalist, why we as human beings consume services like telephone ? The answer is simple it enhances our capability. In similar terms controllers can consume services to enhance its capability to define behaviours, the enhancement can be, Calling an API in the server side, Filtering a list and many more . Angular JS provides lot of built in Services, which can be directly consumed

To consume a service in a controller.

```js
app.controller('ExampleController',  ['$http', function($http) {
    // Do some thing here using the service .
}]);
```
Here you can observe, to consume a service we need to explicitly declare in the list and also pass that as an argument. We can also define our own custom service, you can check that out in [Angular JS documentation on services](https://docs.angularjs.org/guide/services).