---
layout: post
title:  "Database Design Optimization"
category: "Software Development"
---

When ever you are building a database driven web application, we first plan our entities, and its relationships by writing an ER diagram, Once done we implement our DB by creating necessary tables with necessary columns.

Now before moving towards OOD we need to make sure that our database will contain

1.  minimum of duplicate data.
2.  minimum of redundant data
3.  Data stored in this database is easy to fetch
4.  easy to edit
5.  easy to maintain.

> A database which has all these above listed features is actually called normalized database.

So to normalize a database we apply a set of formal criteria of rules called Normal Forms, these are actually developed by a person called Edgar Codd in 1972, these rules defines series of tests on Database to certify whether it satisfies a certian normal form.

In this post I would like to share some of my understandings on normalizing a database and its advantages.

Process of normalization involves several levels or normal forms, again the level to which you need to optimize depends on your bussiness need.

Level 1 : - First normal form

Level 2 : - Secound Normal form

Level 3 : - Third Normal form

There are some more levels such as Fourth and Fifth Normal forms, there is also an another set of rules to optimize called BC normal form, usually in Agile projects we prefer taking it to max third normal form because we have changing bussiness requirements.

Let me elaborate by explaining each of those levels

### First Normal Form (1NF)

> First normal form says that each of your columns and each of your tables should contain one value just one value, and there should be no repeating groups.

For eg..

Lets say we are designing a database for library and we have a table called books, books table has columns book\_id, author, author\_name, category, year\_of\_publication.

Now we start inserting books data inside columns, and we realize that a book has multiple authors and multiple catogories. for eg.. books like " Search Inside Yourself " by chang meng comes under philosophy, management, personality development and many more , and also books lke " how google works " will have multiple authors .

If we analyze our situation we have some more data for which this table is not sufficiant.

To solve this problem we have two ways.

1.  Add multiple authors and categories into the table in CSV format
2.  Identify or fix highest number of categories and authors a book can have, and add that many columns for eg. say you fix the max number of authors can be 4 and max number of categories can be 2 and add 4 + 2 columns to this table saying category1 category2 or author1, author2 etc ...

Lets examine our first solution, in this you are adding multiple values in a single column, but still you can not fetch them individually, and also it becomes very difficult to search for a particular author or category since it has multiple values.

In the secound solution we add multiple columns, lets say we find a book which has more authors than what you fixed, In that case you have to add new column to store that, calling it as author6 or author7, If we carefully observe both of our solutions are actually not a scalable solution, if the project for which we are building is an agile project, the continous change in the requirements will easily make our life hell.

To make our designs scalable, we have to apply first normal form rule to normalize this design, by some how avoiding the repeating group of data and multiple values. To achive this a technically feasible solution would be to have more tables, instead of having one table like this.

So to bring our design to first normal form we have to create two more related tables

1.  book\_has\_authors which stores book\_id and author
2.  book\_has\_categories which stores book\_id and cateogory

By doing so, you will be avoiding repeating group of data and also multi valued columns, Creating related tables to optimize database design is one of the most common approach, there are several creative ideas that you can get if you are having control over the bussiness architecture of your system

Now our design is optimized to first normal form.

### Secound Normal form ( 2nf )

The secound normal form actually adds to first normal form, meaning you cannot directly optimize your design to 2nf to do so you should frst optimize to 1nf, so the rules are hierarchical and it cannot be changed. Before defining 2nf rule, let me explain something which is very much required to understand 2nf

#### Functional Dependency

In simple terms,

> A functional dependency describes the relationship between attributes in a given relation R denoted as x -> Y. This means that the attribute Y is functionally dependent on the attribute X

for example,

SSN --> Name

The meaning of the above notation is the attribute Name is functionally dependent on SSN. That means SSN uniquely determines an attribute Name.

Another example

department\_no -> {dept\_name, dept\_location}

Here both dept\_name and dept\_location are dependent on department\_no, meaning department\_no can be used to identify both dept\_name as well as dept\_location.

A functional dependency can be either partial or full,

> In a functional dependency F, Y is fully functionally dependent on X if F implies X -> Y, but not W-> Y where W is a subset of X, meaning set of attributes in X contains at least one element which is not in the set of attributes W.

I know its really complex, let me give you an example.

Lets denote a functional dependency like below

{date, exam} -> room\_no

So in the above functional dependency, left hand side has 2 attributes date and exam, and room\_no is actually determined by date and exam, since room\_no is functionally dependent on determinants date and exam.So now if we remove exam or date in the determinants list, the dependency relation ship fails, reason is simple in our design there are multiple tuples which has same date and room\_no and same exam and room\_no.

> In a functional dependency F, A is partially functional dependent on X if X is a proper subset of some key K.

Example

{date, exam} -> room\_no

If lets say in the same example, if the dependency still holds good when we remove date or exam, attributes from LHS, then the functional dependency described here is partial

So now its time to describe 2nf : -

> Every non prime Attribute in a relational Schema, should be fully functionally dependent on primary key or every candidate key.

Lets say you have a table called employee\_project\_details with the columns SSN, project\_no, hours, emp\_name, project\_name, project\_location

The first step to optimize for 2nf is identify Functional dependencies .

Here you can identify three dependencies

1.  SSN -> emp\_name
2.  project\_no -> {project\_name, project\_location}
3.  {SSN, project\_no} -> hours

Here If you properly observe that we have a composite key for the table, {SSN,project\_no}. As per the 2nf definition every non prime should be fully functionally dependent on primary key or candidate key with in a composite key. So now if I remove project\_no I can still determine all the determinants of project as well as employee. So to optimize to 2nf we need to decompose the relationships to convert those partial dependencies to fully functional dependencies .

So now we can convert our design with single table called employee\_project\_details as three different tables for three dependencies identified

employee table with attributes SSN, emp\_name

project table with attributes project\_name, project\_location

employee\_has\_project with SSN, project\_no, hours

I think the easiest way to design a DB optimized to 2nf is to keep creating tables for each Functional dependency that you identify and then redo the same recursively on those tables by asking yourself a question

> can I figure out any of the values in this row from just part of the composite key that I have in my table ?

stop when you dont get any answer.

I am sure you got one billion dollor question, what is the problem in having partial functional dependencies

We design DB for an application layer, and if we have partial dependencies in the DB layer, we might end up storing wrong data since application layer might have some bug which might miss entering project data for an employee ( in the above example ) and DB layer treats it normally. Ensuring a bugfree application layer is really impractical but ensuring optimized DB makes our life easy to rectify those bugs easily.

### Third Normal form (3nf)

As I explianed before these rules are hierarchical, if you want to optimize to 3nf, you can do so only after optimizing upto 2nf. Before defining Third normal form, let me explain to you another important term called transitive dependency.

> A Functional dependency X -> Y in a relation schema is a transitive dependency if there is a set of attributes Z that is not a subset of any key of R, and both X -> Z and Z->Y holds good.

In simple terms, if there exists a chain of dependency between attributes like X -> z -> Y

So now let me define 3nf rule : -

Non non prime attribute is transitively dependent on Primary Key. So in simple terms we can say, if we have a design with several tables, optimized to 2nf, then we should not be able to figure out any of the values in a tuple from any of the other values in the same tuple. Lets take a simple example table employee\_department with columns

{ SSN, Name, dateofbirth, address, Dno, Dname, MgrSSN }

Lets identify functional dependencies before optimizing it to 3nf

SSN -> {Name, DOB, address, Dno, Dname, MgrSSN}

Dno -> {Dname, MgrSSN}

So now since we can see a transitive dependency here, SSN -> Dno -> {Dname, MGrSSN }. We need to decompose the table in to two different tables

Employees table : - SSN, Name , DOB, Addr, Dno

Departments Table : - Dno, Dname, MgrSSN

So now I am sure we wont get the answer to the question Can we figure out any of the values in a tuple from any of the other values ? Before we were actually able to do so in the example, like we were able to figure out Dname from Dno

Again a billion dollor question Why should avoid transitive relationship ?

Again its to avoid insert and update anamolies, lets say if we have transitive dependency and we are using the same table employee\_department, then in case if we need to create a new department with out any employee, then we need to have null values for employee related data.

In fact all these Normalization rules actually sugests us to maintain the semantics of the attributes, and avoid a situation where system generates spurious tuples, for example, the meaning of the employeee relation schema is that each tuple represents an employee record.

So, we should always take our database design through the first, second, and third normal forms. There are more criteria available. As I have already stated before, there are fourth, fifth, and sixth normal forms. There's something called Boyce-Codd normal form. But taking it to third normal form is the usual expectation in an agile project.

Some people might say " Normalization is not actually required since databases are highly efficiant and evolved and they are capable of storing millions of records " . To convince them I would say, Database is not only a collection of some data, it is a collection of meaningful and related data

Some people also say that Agile Methodology does not allow developers to normalize the database well, I totally disagree, if we properly understand normalization concepts It actually provides scalability for future changes

I hope you enjoyed reading my post, it is just an attempt to simplify those complex mathematical definitions of database concepts.





