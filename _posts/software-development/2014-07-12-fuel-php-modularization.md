---
layout: post
title:  "Modularizing Fuel PHP Framework"
category: Software Development
---

When ever we design a system we prefer making the code as much scalable as possible, and as much re usable as possible, and as much readable as possible so that any collaboration can run with out any hurdles. To achieve that in any application, we can have modules.

A module is all related code and assets, that solve a specific problem. Modules should be designed in such a way so that it could be used as plug and play.

In FuelPHP every module lives in its own PHP namespace.

A module can also be a full fledged MVC application, but not always.

Fuel PHP didn't had documentation initially on configuring modules, I found it very difficult to achieve this configuration, I think community has updated the documentation now and also there is an Oil generator which could be used to generate a module.

I decided to create a FuelPHP skeleton application by configuring modules. You can fork/download my github repository from the below URL

{:.blockquote}
>> [modular-fuelphp](https://github.com/aravind666/modular-fuelphp)

### Some Implementation guidelines

To create new routes to module controller action we need to follow the below convention in app/config/routes.php file.

```php
'route-name' => 'module-name/controller-name/action-name'
```


Also when ever you are using extending controller class or controllerTemplate class you need to refer to root namespace . I meant you need to add "\\"

For example

```php
    
    class Controller_Welcome extends Controller
    {

    }

    // OR if you are using controller template

    class Controller_welcome extends Controller_Template
    {

    }

```

Also when forging views and presentations you need to add a back slash to forge .

For example

```php
class Controller_Welcome extends Controller
 {
    /**
    * The basic welcome message
    *
    * @access public
    * @return Response
    */
    public function action_index()
    {
        return Response::forge(View::forge('welcome/index'));
    }
}
``` 
    

Once module is created you can reuse them in another module by loading them at the module bootstrap.

In FuelPHP module bootstrap is nothing but the before() function which gets called before calling anything in the controller.

```php
/**
* This is before controller level bootstrap
*/
public function before() {
    Module::load('student');
    Module::load('dashboard');
}
```

Once used you can just refer to the module name space followed by class name to instantiate and call methods in model classes.