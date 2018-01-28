# Notes - YDKJS: this & Object Prototypes

## Chapter 1: _this_ Or That?

**`this`** is a reference to the function's context object. Unlike lexical
scope, `this`-binding is determined at runtime, and can change over the course
of the program's life.

`this` doesn't refer to the function it's in, so it can't be used for a function
to self-refer (though you kind of can, but it's convoluted and you'll end up
self-referring with the function's name anyway:
<https://repl.it/@kevcomedia/Self-Referring-Function-with-this>). It's also not
a reference to the function's lexical scope, and there's no way you can use it
to try to "bridge" together two different lexical scopes.

The `this` mechanism is can be leveraged to provide a cleaner API, since there's
no need to provide an explicit parameter for a context object.

## Chapter 2: _this_ All Makes Sense Now!

`this`-binding is determined at the function's **call-site**. Sometimes the
call-site can be determined just by reading the source code, but there are times
when the call-site is not-so obvious. Either way, a more reliable way of knowing
a function's call-site is by examining the **call-stack**. The call-stack is a
record of what functions were running at the moment the current function itself
is running. The function's call-site is always the function before it in the
call-stack. The call-stack can be inspected by going to the browser's dev tools
and placing a breakpoint on the debugger. Placing `debugger;` on the source code
itself also causes the browser to pause execution an that point.

There is a short list of rules to follow to determine the `this`-binding:

**Default binding.** When a function is called plainly, like `someFunction();`,
`this` is normally bound to the global object. When the function on Strict mode,
`this` is undefined. The default rule for default binding is often troublesome,
because it's possible to inadvertently declare a new global variable when
variables in a function are not formally declared with the `var` keyword.

**Implicit binding.** When a function is called like `someObj.someFunction();`,
`this` is bound to `someObj`. In cases where there's a property lookup chain,
like `someObj.anotherObj.someFunction();`, `this` is bound to the object
immediately preceding the function call (`anotherObj`). Note that when a
function that's defined as an object property is passed around, it becomes a
plain function reference, and when called, default binding is used.

**Explicit binding.** Most functions come with `call` and `apply` methods. These
methods accept a context object as their first argument. When a function is
invoked with either method, `this` is bound to the passed context object
argument. Note that the context argument is expected to be an object. If a
simple primitive is passed, that value is boxed to its object form.

**Hard binding.** A variation of explicit binding. It turns out that even the
`this`-binding from explicit binding can still get lost (like in implicit
binding, though I don't know how to make it so). We can create a function that
invokes a function call with `call` or `apply`.

```javascript
function hardBound(obj) {
  someFunction.call(obj);
}
```

That call to `someFunction` will always be `this`-bound to `obj`, regardless of
`hardBound`'s `this`-binding.

JavaScript has a built-in utility called `bind`, which returns a hard-bound
version of some original function.

**`new` binding.** When a function is invoked with the `new` keyword, that
function creates a brand new object, to which the function call is `this`-bound.

When different ways of function invocation are mixed together, there are a few
things to keep in mind:

* Both explicit binding and `new` binding are more precedent than implicit
  binding.
* `new` binding is more precedent than the hard binding by the function return
  by `bind`.
* Default binding has the lowest priority.
* Unlike regular functions, arrow functions use the `this`-binding of their
  enclosing scope. The binding cannot be overridden.

## Chapter 3: Objects

**Objects** are collections of key/value pairs (the keys are called
**properties** in object terminology). They can be constructed using the literal
form (plain old `{}`), or using the constructed form (`new Object()`), though
the literal form is much more common because it's less verbose and you can
define properties at the same time the object is defined.

There are also object sub-types. The wrapper objects for the simple primitives
are sub-types, as well as arrays, functions, date objects, regular expressions
and errors.

Some notes on object sub-types:

* When an operation is performed on primitives using object syntax (e.g.,
  `'abc'.toUpperCase()`), the primitive is automatically boxed in its wrapper
  object. The primitives themselves don't have these operations internally, but
  the wrappers do.
* `null` and `undefined` have no wrapper objects.
* `Date` has no literal form.
* `Error` objects are not commonly created in code, but they are automatically
  created when exceptions are thrown.
* Literal forms are strongly preferable over their constructed forms, because
  they're much easier to read.

Values in objects can be accessed using **dot notation** (`obj.prop`) or
**bracket notation** (`obj.['prop']`). Dot notation can only be used if the
property name is a valid identifier, but is preferable over bracket notation
because again it's easier to read. Since you use strings in bracket notation, it
is used for programmatically accessing values in objects (by storing property
names in variables).

**Computer property names** are used when dynamically setting a property name at
the same time an object is created. They are primarily used when defining
properties using Symbols as names (since directly using a Symbol's underlying
string value is discouraged and unreliable).

```javascript
var somePrefix = 'prefix-';
var obj = {
  [somePrefix + 'blue']: 'I am blue',
  [somePrefix + 'red']: 'I am red',
  [Symbol.yellow]: 'I am yellow',
};
```

**Properties and functions.** A property referencing a function doesn't make the
function a method in the traditional OOP sense, but rather it's just another
reference to that function. Only the `this`-binding is affected by such
references, and only at runtime. We can say that the terms "function" and
"method" are interchangeable in JavaScript. Even if a function is defined as an
object property, it is still just a property referencing that function.

**Arrays** are a more structured object that use numerically indexed properties.
They can still contain regular properties, but using arrays as regular
properties is discouraged because arrays are optimized to be used as arrays.
Also, when a property that looks like a number (e.g., strings that can be parsed
as numbers) is added to an array, it ends up as a new index, and this in turn
affects its built-in `length` property, so care must be taken.

**Copying objects.** Objects that are JSON-safe can be safely duplicated (i.e.,
deep-copied). There's also the `Object.assign()` utility for making shallow
copies of objects (i.e., the simple primitive values and _references_ to objects
are copied).

**Property descriptors** are sort of like meta-data about a given property (is
the property writable? Configurable? Enumerable? Is the property a plain data
property or is it a getter/setter?)

* **Writable.** The property can be changed with a `=` assignment. If set to
  `false`, the assignment fails silently, or throws a `TypeError` in strict
  mode.
* **Configurable.** The property descriptors can be changed with
  `Object.defineProperty()`. A `TypeError` is thrown when an attempt to
  "reconfigure" an unconfigurable property is made. Setting this to `false` is a
  one-way thing! Unconfigurable properties also cannot be removed with the
  `delete` operator. It will fail silently or throw a `TypeError` in strict
  mode. There's an exception with unconfigurable properties. If they are
  writable, they can still be made unwritable, though the reverse is not
  possible.
* **Enumerable.** The property appears in `for-in` loops or other enumerations.
  If set to `false`, the property won't appear in enumerations but are still
  otherwise accessible.

**Making objects (or parts of them) immutable.** I haven't used any of the
following techniques, though they maybe more useful to API/library creators.

* **Making a property unwritable and unconfigurable.** This essentially makes
  the property a constant. While `=` assignments are disallowed, if the property
  is a reference to an object, that object can still be modified (e.g.,
  adding/changing its properties).
* **`Object.preventExtensions()`.** Prevents adding new properties to an object.
  Existing properties can still be modified. If in strict mode, extension
  attempts throw a `TypeError`.
* **`Object.seal()`.** Prevents extensions and makes existing properties
  unconfigurable.
* **`Object.freeze()`.** Seals an object and makes existing properties
  unwritable. This is as immutable as it can get for an object.

**`[[Get]]`.** This is an internal algorithm that is used when a property's
value is retrieved. When doing property lookups, the object itself is inspected
to see if it has the requested property. If it has it, great, the value is
retrieved (or if the property is a **getter**, call that getter). Otherwise, the
lookup continues up on the object's `[[Prototype]]` chain, checking each object
in the chain until the lookup succeeds, or the end of the chain is reached. If
the lookup fails, the `[[Get]]` operation returns `undefined`.

**`[[Put]]`.** If the property is a **setter**, the setter is called. If the
property is an unwritable data descriptor, fail silently or throw a `TypeError`
in strict mode. Otherwise, set the value as usual. This is more nuanced when
lookups involve the object's `[[Prototype]]` chain.

**Accessors.** Aside from properties being used to hold data, properties can
also be used as **getters** or **setters**. These are like special hidden
functions that return or set a value, respectively, but are used as if they are
regular properties. If a property is a getter or setter, its descriptor has no
`value` and `writable` properties, and in their place there are `get` or `set`.

**Testing a property's existence.** The `in` operator checks if a property
exists in an object, or higher up in its `[[Prototype]]` chain. On the other
hand, `Object.prototype.hasOwnProperty()` only checks the object itself.

**Enumerating over an object's properties.** The `for-in` loop iterates over an
object's enumerable properties, as well as enumerable properties in its
`[[Prototype]]` chain. Note that the `for-in` loop iterates over the property
names, not the values.

**`Object.keys()`** returns an array of an object's own enumerable property
names. **`Object.getOwnPropertyNames()`** returns every own property names.

**The order of iteration over an object's properties varies between different
engines. Any observed ordering is unreliable.** On the other hand, we can always
safely iterate over them as long as we don't need to consider any ordering among
the property names.

**`for-of` loop.`** A new syntax that consumes an object's iterator for
iterating over properties on that object. An **iterator** is an object that has
a `next` property, which is a function that should return another object with
the `value` and `done` properties. The `for-of` loop keeps calling this `next()`
function, until the `next()` function returns an object whose `done` property is
`true`.

For an object to be usable by a `for-of` loop, that object must have a special
function, called `@@iterator`, that returns an actual iterator. The `@@iterator`
can be set/accessed using the `Symbol.iterator` property. Arrays are examples of
objects with a built-in `@@iterator`, and you can use a `for-of` loop out of the
box to iterate over an array's values.

## Chapter 4: Mixing (Up) "Class" Objects

Traditional OOP says that data has behavior associated to it intrinsically, so
they should be bundled together in one entity (known as a **data structure** in
computer science).

A **class** is a description of what an object based on it should be and how it
should behave. Objects created from classes are called **instances**. These are
essentially a "physical, tangible" version of a class, which are abstract.

A **constructor** is a special method in a class that is called when
instantiating an instance. They typically have the same name as their containing
class.

**Inheritance** is when a child class copies behavior from a parent class. The
child class can then extend the copied behavior, or override some behavior to
specialize it. When an overriding behavior references its base behavior, it's
called **relative polymorphism**.

**JavaScript doesn't have classes.** But since the class pattern is so widely
used, various techniques have been done to emulate class behavior in JS. JS also
seemingly has support for the class pattern, because it has class-like syntax in
it (like the `new` operator, for instance).

**Mixins** are used in JS to emulate the class pattern. However, problem arises
when a "class" has to inherit behavior. In inheritance, behavior is copied. But
behavior is not copied with emulated classes; only references to behavior are
copied. Also, when an object modifies one of its reference type properties, any
"copies" that also share a reference to that reference type will also be
"affected".

Use only **explicit mixins** where it can actually make the code readable.
Otherwise there isn't really much of an advantage, and it might even make code
harder to maintain. On the other hand, **implicit mixins** (a method calls a
method of another object and using its owning object as the context) rely on
brittle absolute reference and should be avoided if possible.

## Chapter 5: Prototypes

Objects have an internal **`[[Prototype]]`** property which is a reference to
another object. Since the object referred to by `[[Prototype]]` also has its own
`[[Prototype]]`, we can say that an object has a `[[Prototype]]` chain. The top
of the `[[Prototype]]` chain of most objects is `Object.prototype`.

**`[[Put]]` revisited.** If you set a property on an object, and the property
already exists (as a writable data descriptor), that property is overridden. If
you set a property on an object and the property is nowhere to be found, even in
the `[[Prototype]]` chain, a new property is created on the object.

If the property is not in the object but is in the `[[Prototype]]` chain, one of
three things can happen:

* If the property is a writable data descriptor, a new property is created on
  the base object, **shadowing** the property higher up.
* If the property is unwritable, it fails silently, or throw a `TypeError` in
  strict mode.
* If the property is a setter, the setter is called.

`Object.defineProperty` can shadow properties higher up. **Avoid shadowing if
possible**.

**Functions and prototypes.** All functions have a non-enumerable property
called `prototype`, which is a reference to an arbitrary object. **In no way is
that a function's `[[Prototype]]`!**

When a constructor call is made (with the `new` operator), the following happen:

1. A brand new object is created.
2. The function is `this`-bound to that object.
3. The object's `[[Prototype]]` is set to refer to the function's `prototype`
   property.
4. If the function doesn't return its own object, the new object is returned.
   Otherwise the function returns its own object (as if it's a regular function
   call).

When an object is `[[Prototype]]`-linked to another object, nothing ever gets
copied like in inheritance. A reference is merely set.

A function's `prototype` object also has a property called `constructor`, which
is a reference back to the function. When an object is created with a
constructor call, the object can access this `constructor` property (via its
`[[Prototype]]` link to the `prototype` property; kind of confusing I know), and
now it seems that the object has information about which function spawned that
object. But `constructor` is not reliable. It's not a property owned by objects
from a constructor call, and the `prototype` property can be changed. By
changing a function's default `prototype` property, we lose this `constructor`
property as well. We can put it back, but it's a pain.

There is an operator called `instanceof` which accepts an object and a function
as operands. It returns `true` if the function's `prototype` property is in the
object's `[[Prototype]]` chain. There is also a method called
`Object.prototype.isPrototypeOf()` which returns true if the context object is
in the argument's `[[Prototype]]` chain.

**`Object.create()`** accepts an object as an argument and returns a new object
that is `[[Prototype]]`-linked to that argument. It allows us to create linked
objects without using `new` and without dealing with traditional class stuff.
`Object.create` also returns objects that have no `[[Prototype]]` if `null` is
passed as an argument.

Combining `this`-binding rules and `[[Prototype]]` chains, we can have an object
be `[[Prototype]]`-linked to another, then call one of the `[[Prototype]]`'s
methods using the object as the context (using implicit `this`-binding). But by
exposing the `[[Prototype]]`'s method as part of the object's API, we're
introducing magic and surprises to the API (i.e., the method is part of the API,
but at the same time, it's not really a method of the object; like, huh?).
Instead, it's better for the object to define a method, then have this method
call the `[[Prototype]]`'s method as an implementation detail. That way the API
is more explicit and less surprising. This pattern is called the **delegation
design pattern** and is a powerful one.

## Chapter 6: Behavior Delegation

In JS, it's all about objects linked to other objects (**OLOO**), or objects
delegating behavior to other objects. **Behavior delegation** is when an object
delegates tasks to another object if it can't perform the behavior itself. When
doing behavior delegation,

* You want state to be in the delegators. The delegate has the behavior.
* Avoid giving delegating methods the same name as the method they're delegating
  to. This makes for easier to understand code as the delegators' names are more
  specific.

Behavior delegation is cool and all, but you can't have two objects
`[[Prototype]]`-linked to each other, so you can't have them delegating behavior
to each other.

When coding in OLOO style, the class-like parts of JS become irrelevant. You
don't touch things like `new`, `constructor`, or `instanceof`.

Unlike in class-oriented design where classes are arranged in a vertical
hierarchy, objects in OLOO style are horizontal peers of each other.

OLOO leads to simpler design because it has a simpler mental model and fewer
entities involved. Without the bloat that comes with trying to fit class
semantics in. Introspection is also simpler with OLOO because there's only
objects and delegation (`[[Prototype]]`) links. No `prototype` or `constructor`
involved.

## Appendix: ES6 _class_

**`class`** is just syntactic sugar over the `[[Prototype]]` mechanism. Classes
implies copies, but when using `class`, nothing gets copied. If a change is made
to the class at runtime, subclasses and instances are affected too.
