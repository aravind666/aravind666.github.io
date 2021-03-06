---
layout: post
title:  "Simplified Introduction To Design Patterns"
category: "Software Development"
---

If you are person who does hard core programming, every day as part of your job, and gets a funny feeling like the way I get, by observing some similarities between the problems you solve, and feel like writing down your solution and refer back to it as needed.

Design patterns are the solutions for such common class of software problems which can be consumed when you code. Basically prevents you from reinventing the wheel.

The meaning of the word "solution" in the above statement, is not the actual solution for the problem, Let me elaborate it to make it clear.

Basically what ever problem you solve while building a software with in the development lifecycle are just like high level variants of our high school algebraic equations :)

for example in an equation like ax2 + bx + c = 0 can be solved by

![](/assets/post_images/quadratic.png)

Design patterns are kind of solutions which could be used just like Algebraic formulas.

To conclude my explaination on Design patterns, let me take some real world Programming example which will neutralize all confusions

Say that for a long time you have a class called payment with in your system, which has some predefined methods and is instantiated by a client code, and as usual you have followed SOLID principles to create it, as a result of which its closed for modification, open for extension.

```php
class payment
{
    private $type;
    private $card;
    function __construct($type, $card)
    {
        $this->type = $type;
        $this->card = $card;
    }
    function getType()
    {
        return $this->type;
    }

    function getCard()
    {
        return $this->card;
    }
}
```

```php
// Client Code
$payment = new payment('credit', 'VISA');
echo "Payment Type" . " -- " . $payment->getType();
echo "\n";
echo "Card Type" . " -- " . $payment->getCard();
echo "\n";
```

Lets say you have updated the system bussiness entities and now the expectation from the client code has increased. Client now expects class to have a single method which returns both card and type attributes.

You also still have some old client code which is expecting class to have multiple methods to access each attribute. The problem of satisfying old and new clients requirements, could be solved by having another class like below.


```php
class newPayment
{
    private $payment;
    function __construct(payment $payment)
    {
        $this->payment = $payment;
    }

    function getCardAndType()
    {
        return $this->payment->getType() . ' Card Of Type ' . $this->payment->getCard();
    }
}
```


So now your new clients can consume this class to satisfy their needs

```php
// New Client Code
$payment = new payment('credit', 'VISA');
$newPayment = new newPayment($payment);

echo " Payment with " . $newPayment->getCardAndType();
```


The work around which you built here can be re used in other similar situations by creating adapter classes like "newPayment" . Aha.. you are right this is an adapter pattern which we actually applied here to solve this old clients problem. So by knowing a pattern like adapter you can identify the situation and apply the pattern to solve it, just like the way you solve an algebraic equation of type ax2 + bx + c = 0;
I hope you enjoyed reading this Simplified Introduction to Design Patterns.