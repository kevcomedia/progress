# Notes - YDKJS: Scope & Closures

January 23 (Tuesday)

---

* Typical compilation steps:
  * **Tokenizing.** breaking up code into chunks/tokens
  * **Parsing.** converting a stream of tokens into an **abstract syntax
    tree.** The AST shows the grammatical structure of the code
  * **Code-generation.** converting the AST into executable code
  * Optimizations can be done by the compiler in these steps
* **Engine.** in charge of executing JS overall
* **Compiler.** part that does the actual compilation steps
* **Scope.** keeps rules on where and how variables can be accessed
* On variable assignment:
  * compiler declares variable in scope if applicable
  * engine looks up scope to see if there's the variable and performs assignment
    if found
* **LHS lookup.** engine looking up variable when the variable is at the
  left-hand side of an assignment operator
* **RHS lookup.** not-LHS; engine looking up variable for the purpose of
  retrieving its value
* Function declarations don't involve LHS lookup
* If a variable is not found in the immediate scope, the engine consults the
  outer scope, and so on until it's found or the global scope is reached
* When an RHS lookup fails, a `ReferenceError` is thrown
* When an LHS lookup fails, a global variable is implicitly created, or throw a
  `ReferenceError` in strict mode
* **`TypeError`.** thrown when RHS lookup is successful, but an operation can't
  be performed on the found value (e.g., executing a non-function)
* Variable declarations are done before the code executes

* **Lexical scope.** scope defined at the time the code is written
* A scope can only exist entirely within another outer scope. It can't be the
  case where a part of it exists in some outer scope, and the other part exists
  in another outer scope.
* Scope lookup starts at the innermost scope. If a variable is found, the lookup
  stops
* **Shadowing.** variable from an outer scope cannot be accessed from an inner
  scopebecause there's another variable of the same name in that inner scope
* Global variables are also properties of the global object, and can be accessed
  as such
* Lexical scope lookup only applies to variables and functions. Object property
  access follows a different set of rules.
* **`eval`** modifies the scope where it's ran
  * In strict mode `eval` has its own lexical scope; no modifications to other
    scopes are made
  * `setTimeout` and `setInterval` can behave like `eval` by passing them a
    string instead of a function
  * The `Function` constructor call too
* **`with`.** shorthand for multiple property accesses on the same object;
  **deprecated!**
  * `with` creates a new lexical scope from the object passed to it at runtime
    (with the object's properties as identifiers defined in that scope), and as
    such, it follows normal scope lookup rules (including the bad parts)
  * Disallowed in strict mode
* `eval` and `with` (i.e., cheating lexical scope) lead to poor performance,
  because their contents cannot be analyzed at compile time, so optimizations
  can't be made. The engine can't possible know what sorts of values you pass to
  them, so any optimizations it had in mind are moot

* Because variables can't be accessed by outer scopes, creating scopes with
  functions is a good way to hide code
* **Principle of least privilege.** in software design, expose only a minimal
  public interface, and hide everything else
* **Collision.** two identifiers with the same name but different purposes
  resolve to the same entity; can be avoided by hiding variables and functions
  in a scope
  * Collisions are likely to happen in the global scope. Usually libraries would
    declared a uniquely named "namespace" object in the global scope and expose
    its API via object properties
* **Module.** more modern approach to avoiding collisions. No libraries are
  added to the global scope, but rather are injected into specific scopes where
  they are needed.
* **Function declaration.** the function's name is bound to its enclosing scope
* **Function expression.** the function's name is bound only to its own scope
* **Anonymous function expression.** unnamed function expressions; commonly seen
  in callbacks and such
* Advantages to naming function expressions:
  * the function can be identified in a stack trace
  * the function can refer to itself without using deprecated techniques
  * it makes for self-documenting code
  * there are no real cons to naming function expressions; don't be cheap with
    names!
* **IIFE.** immediately-invoked function expression; function expression wrapped
  in a pair of parentheses and immediately followed by another pair
* **UMD.** Universal Module Definition. a function is passed to an IIFE, which
  the IIFE then executes. sort of like a reverse IIFE
* **Block scoping.** declaring variables as locally as possible to where they
  are used, in blocks
  * `with` and the `catch` block are block-scoped
* Variables declared with `let` are block-scoped
* `let` declarations are not hoisted
* Memory-heavy data can be declared with `let` in an explicit block. After the
  block executes, the object can then be garbage-collected
* `let` is useful for declaring for-loop counters
* `const` is like `let`, but you can't reassign new values to it or you'll get
  a `SyntaxError`

* Declarations (variables and functions) are done first before the rest of the
  code is executed
* Only declarations are hoisted. Assignments are not.
* Hoisting is done per scope
* Function expression assignments are not hoisted
* The name of a function expression is not available in the enclosing scope
* Functions are hoisted first over variables
* Variable declarations with the same names as function declarations are ignored
* Subsequent function declarations replace previous ones with the same name.
  Careful!
* Function declarations in blocks are hoisted out of the block to the top of the
  enclosing function (or global) scope. Avoid function declarations in blocks,
  as their behavior is unreliable.
* `var a = 2;` is two things: a variable declaration done at compile time and an
  assignment done at run time

* **Closures** are a consequence of lexical scope. They're everywhere: timers,
  event handlers, ajax requests, pretty much anywhere functions are passed
  around.
* Closure is a function's reference to its enclosing scope. Even though a
  function has finished running, closure gives its inner funcitons access to
  its scope.
* If a timer is done in a for-loop, the functions passed to each call to the
  timer share the reference to the same variable in the for-loop. When those
  timer callbacks kick in, they use the last value of that for-loop variable,
  because closure
* Closure can also work on block scopes. When a timer is run in a for-loop whose
  variable is declared with `let`, the timer callbacks don't have the same
  reference to that variable, since the variable is re-bound for each run of the
  loop. (yeah, this explanation looks sucky)
* **Revealing module.** most common implementation of the module pattern
  * There must be an outer enclosing function that's invoked at least once
  * The outer function must return at least one inner function, which has
    closure over the outer function's scope (and the variables in that scope can
    serve as private variables for that module)
* A **singleton** instance of a module can be created with an IIFE
* Modules, being functions themselves, can receive arguments
* We can name the object returned by the module from inside. That way the inner
  functions have access to this object, which can then add, remove, are change
  functions in the API
* Function-based modules are not static. **ES6 modules** are, so they can be
  statically analyzed by the compiler
* ES6 modules treat a file as a module.
  * `import` imports a part of the API exposed by a module and binds it to a
    variable
  * `module` imports the entire module and binds it to a variable
  * `export` exposes identifiers as part of the module's API
  * These can be done multiple times in a module as needed
* Closure is when a function remembers its lexical scope even though it's
  invoked outside of it

* **Dynamic scope.** scope is determined at runtime dynamically; scope is
  determined by the function's call site, not where it's declared
  * JS has no dynamic scope
  * `this` is sort of like dynamic scope. It's binding is determined at runtime,
    by the call site of the function it's in
* **Arrow function.** its `this` binding is bound to the `this` binding of its
  enclosing scope
