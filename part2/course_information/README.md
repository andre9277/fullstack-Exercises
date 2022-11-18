2.1: Course information step6
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:
App
Course
Header
Content
Part
Part
...

2.2: Course information step7

Show also the sum of the exercises of the course.

2.3\*: Course information step8

If you haven't done so already, calculate the sum of exercises with the array method reduce.

Pro tip: when your code looks as follows: const total =
parts.reduce((s, p) => someMagicHere)

and does not work, it's worth to use console.log, which requires the arrow function to be written in its longer form:
const total = parts.reduce((s, p) => {
console.log('what is happening', s, p)
return someMagicHere
})

2.4: Course information step9

Let's extend our application to allow for an arbitrary number of courses:

2.5: separate module

Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course into the same module.
