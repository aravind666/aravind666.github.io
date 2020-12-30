---
layout: post
title:  "Mutation Analysis or Mutation Testing"
category: "Software Development"
---

{:.blockquote }
{% include 
    figure_with_author.html 
    quote="Who’s gonna investigate the man who investigates the man who investigates me? I don’t doubt my loyalty, But who knows just what his might be? Who’ll check the record of the man who checks the record of the man who checks the record of mine? Seems to me there’s gonna be an awfully long line." 
    author="Harold Rome"
%}

If you are a strict follower of TDD, you always go with predictable way to develop software, because your intention will be to always know when you are finished. 
You feel good and work does not stress you as long as you know where the trail ends. If you are little more advanced  you can actually have sort of control on yourself so that you always write new code or modify new code only if tests are failing.

One of the most fundamental benefit of following TDD would be the reduction of defect density, 
because that makes quality assurance phase of software development to shift from reactive to proactive. 
This intern helps you build shippable software with new functionality quite frequently and that in-turn leads to new business opportunities. That in-turn means more profit.

Let's say we have a team which follows Strict TDD and have tests for every code they write and still we are not able to reduce defect density. 
In that case its high time that we have to see how good our tests are. Our team might have good code coverage, but still we see escape defects. 

{:.blockquote .lead}
_Mutation testing or Mutation analysis is the process of assessing whether all statements in the source code are correct according to the unit tests, 
and whether they all are needed for the unit tests to pass. Every statement in the source code should contribute to make at least one unit test pass. 
Not being the cause of the failure of a unit test is not a good enough reason for a statement to be present in the source code._

So Mutation Analysis tells you which behaviour you did not cover in your tests. Then you can decide if you wanted to cover the behavior or not. 
It does not mean you have to cover it always . It just gives you information that you might not know before so that you can ship it with confidence.

So In simple words Mutation analysis is a test for how religiously your team follows TDD. 

### What does mutation mean in the context of source code ? 

It is an Artificial defect which are injected into the source code. Here is an example of mutation of source code.

```js
// Original code
function max(a, b) 
{
   return (a < b) ? b : a;
}

// Mutated code Version 1
function max(a, b)
{
   return (a <= b) ? b : a;
}

// Mutated code Version 2
function max(a, b) 
{
   return (a => b) ? b : a;
}

// Mutated code Version 3
function max(a, b)
{
   return (a = b) ? b : a;
}

// Mutated code Version 4
function max(a, b)
{
   return (a == b) ? b : a;
}
```

### How do we Perform mutation analysis or Mutation testing ? 

We execute test cases on various Mutated versions of source code. 
Mutated versions are nothing but fault-injected versions of the original Source code. We can call those fault-injected versions as mutants.

![MUTATION ANALYSIS PROCESS](/assets/post_images/MUTATION_ANALYSIS.png)

Once we run all the tests we can analyze our test results which is what is basically called as Mutation analysis or Mutation testing. 
A mutant for which our tests have not failed as **"Survived Mutant"**. A mutant for which all tests have failed is called as **"Killed Mutant"**. 

Now here is how we gather an actionable insight out of mutation analysis . 

1. If all our tests fail for all mutants, we have great tests. 
2. If there are some tests which are passing even for mutants then that shows deficiency in the test suite and indicates in most cases that either a new test case should be added, 
or that an existing test case needs a better test. 

There is also a third case, which is quite rare, sometimes these mutations cause error, for example 

```typescript
for (i = 0; i < 0; i--) { } // Original 

for (i = 0; i > 0; i--) { } // Mutant 1
```

In the above example if I have some logic where the loop never ends, in the mutated version for loop counter _i > 0_  Then our tests fail due to error or due to stackoverflow.
In such a case we can ignore those mutants .

So to summarize actionable insights from mutation analysis 

{:.table .table-bordered .table-striped}
| Original Source code  | Mutant |   Analysis Result   | Action |
| ------------- | ------------- | ------------- | ------------- | 
| PASS | FAILED | KILLED MUTANT  | Great Tests No action required |
| PASS | FAILED due to error | INVALID MUTANT | Ignore it no action required |
| PASS | PASS | SURVIVED MUTANT | Improve your tests |



### Tools to perform Mutation analysis

{:.blockquote}
{% include 
    figure_with_author.html 
    quote="It is essential to have good tools, but it is also essential that the tools should be used in the right way. " 
    author="Wallace D Wattles"
%}

Another important thing to note

{:.blockquote}
{% include 
    figure_with_author.html 
    quote="A good tool improves the way you work. A great tool improves the way you think. " 
    author="Jeff Duntemann"
%}


We have great tools to perform mutation analysis which actually performs all those complex steps that I just explained in the past. These tools are their for several popular programming languages .
I have tried to collect some of them which I have tried and experimented . 

{:.table .table-bordered .table-striped}
| Programming Language  | Tool |  
| ------------- | ------------- | 
| JAVA | [PITEST](https://pitest.org/) | 
| C# | [STRYKER.NET](https://stryker-mutator.io/docs/stryker-net/Introduction/) | 
| PYTHON | [MutPy](https://pypi.org/project/MutPy/), [mutmut](https://pypi.org/project/mutmut/) | 
| C++ | [mutate_cpp](https://github.com/nlohmann/mutate_cpp) | 
| JAVASCRIPT | [Stryker](https://stryker-mutator.io/docs/stryker/getting-started) |  
| RUBY | [mutant](https://github.com/mbj/mutant), [mutiny](https://github.com/ruby-mutiny/mutiny), [Heckle](https://ruby.sadi.st/Heckle.html) | 

If the product you are building or working is least elegant, and has some build tool like [Maven](http://maven.apache.org/) or [Gradle](https://gradle.org/) or [Rake](https://ruby.github.io/rake/) or [Paver](https://paver.readthedocs.io/en/latest/) or [npm](https://www.npmjs.com/) or [webpack](https://webpack.js.org/). 
All these tools has plugins for respective platforms, I will leave that to you, it is too easy to figure that out. 

### Mutation Operators 

Previously I just classified mutants into, Killed and Survived, this classification is post Mutation analysis to gather actionable insights. 
During the first step of mutation analysis we create mutants, which are artificially injected faults, such faults could be classified based on the type or context or aspect in which it has been injected.
That type or context or aspect can be but not limited to interchange addition with subtraction, negate or shortcut conditions, change the values of constants or literal strings, remove return statement, etc.. from your original source code.

You can actually decide on which all types of mutation operators is a value add for your codebase and enable the same as per your convenience.
Almost all these Mutation analysis tools that I have listed in this post provide means to do that.

Deciding on which all mutation operators need to be enabled is something an output of a good retrospection by the team. 
For eg.. 

1. If you have too many log statements in your source code, and obviously you will not be having tests for log statements. In that case you can disable [String mutations](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/#string-literal). 
2. If you notice some big huge que of bugs related a pattern of issues.
3. If you have too many absolute values hardcoded in your source code . _You know I just hate such a programmer who had done such a crime_, keeping the grudge aside and if he confesses, and you obviously forgive, ( we programmers has to learn to forgive :) ) you can actually disable [in-line constant mutation](https://pitest.org/quickstart/mutators/#INLINE_CONSTS).

```java 
public void foo() {
  int i = 3; // Original Code
}
```

```java 
public void foo() {
  int i = 4; // Mutated Code 1
}
```

```java 
public void foo() {
  float i = 3.0; // Mutated Code 2
}
```


### When to perform Mutation Analysis 

This is quite tricky, It requires some sort of strategic analysis. As you already know for a majority of the questions in Software Development the answer is "IT DEPENDS ..." . 
Even for this the answer is same. But you can actually make use of my experience to make your life little easy, I am not doing this mutation analysis since ages, but I have few years of experience doing it. 
With that in mind I would like to share some approaches or strategies which had worked for me. 

Mutation analysis is a time-consuming process, it takes hell a lot of time and some times for a large code base it takes several days to complete. Here is the flow chart which can help you decide. 
 
![MUTATION ANALYSIS STRATEGY](/assets/post_images/mutation-desicion.png)

I have chosen 10 minutes as a breakout [pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) time, why I choose 10 minutes is because my pomodoro size is 80 minutes, and I usually take a break for 10 minutes.
So what I usually do is post having good tests, post doing great refactoring, I start running mutation analysis and other checks and go for a break. 
So this above flow chart requires some sort of customization, but I believe I made you understand the strategy that I apply to run mutation analysis.
