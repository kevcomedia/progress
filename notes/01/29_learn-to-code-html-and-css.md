# Notes - Learn to Code HTML & CSS

_From now on I'm making these notes piecemeal. Doing everything in one go is not
a very good idea._

---

## Chapter 1: Building Your First Web Page

Web pages are built with a combination of HTML and CSS (most also have
JavaScript thrown in, but we'll not cover that here). **HTML (Hypertext Markup
Language)** defines and gives structure to content, like page headings,
paragraphs, images, forms, page sections, etc. **CSS (Cascading Style Sheets)**
is used to define the appearance of content, like the size of fonts, the page's
layout, neat eye candy, etc.

HTML is made of **elements**. Elements are things that you see on a web page,
like paragraphs or links, but there are also elements that are used for the web
page's meta-data, like the page's title, which files it has a relationship with,
etc. In HTML code, elements are marked with **tags**. An element's tags tell
where the element starts and stops. For example, a paragraph element can be
written in code as `<p>I am a paragraph.</p>`. The `<p>` and the `</p>` parts
are the element's tags. We can also embed additional information in an element
using **attributes**. Attributes can be things like the element's ID, its
classes, where the browser will take you if you clicked on it (the `href`
attribute in the case of `<a>` elements), etc. There are also elements that
don't have a closing tag, called **self-closing elements**. These elements
receive all of their information through attributes. An example of a
self-closing element is the `<img>` element.

HTML documents follow a structure. At the top of every HTML document is
`<!DOCTYPE html>`. It tells the browser that the document is an HTML5 document.
Following it is the `<html>` element, which is the document's root element.
Inside it is the `<head>` element, which contains the page's meta-data, and the
`<body>` element, which contains the elements that you see on the web page.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

It is considered good practice to indent elements that are nested, so the
document's overall structure is more evident.

Since humans are prone to making errors, including failing to write proper HTML
syntax, there are **code validation tools** that scan an HTML document and
reports malformed parts of the document, such as missing closing tags, missing
required attributes, etc.

CSS, on the other hand, is composed of **selectors**. A selector describes which
HTML elements are to receive a particular set of styles. Inside a selector is a
list of **properties**, which determine the styles to apply to the elements
targeted by the selector. Properties are paired with their **values**.

```css
h1 {
  font-size: 30px;
  color: orange;
}
```

In the code snippet above, `h1` is the selector. It has two properties
`font-size` and `color`, with `30px` and `orange` as their respective values.

There are different types of selectors. The **type selector** targets elements
by their type (e.g., the `p` selector targets all `<p>` elements). The **class
selector** targets elements with a specific value for their `class` attribute.
Class selectors are more specific than type selectors. Class selectors always
begin with a period (e.g., `.container`). The **ID selector** targets an element
with a specific `id` value. ID selectors always begin with a number sign (e.g.,
`#preview`) They are more specific than class selectors. Note that an ID must be
unique in an HTML document.

While it's possible to write CSS inside an HTML document, CSS is best written in
a separate file. This makes it easy to write styles for multiple web pages, and
makes the styles centralized in the website.

The `<link>` element defines a relationship between the HTML file and another
file. In the case of CSS, the `<link>` element is given the `rel` attribute with
the value `stylesheet`, and the `href` attribute which is a path to the CSS
file.

Browsers have default styles for elements. But since different browsers have
different defaults, there are web pages that use **CSS resets** as a sort of
"base" CSS that looks the same across different browsers.

## Chapter 2: Getting to Know HTML

When writing HTML, it is important to keep **semantics** in mind. By using the
proper elements for certain content, we give content meaning and structure.
Machines understand the semantic meaning behind elements, and things like screen
readers and search engines use these semantic meanings. Writing semantic code
also makes the HTML source code easier to read.

The **`<div>`** and **`<span>`** elements have no semantic value whatsoever.
They are used mainly to apply styles to parts of the web page.

In HTML, **block elements** are elements that stack together in the page. These
elements include the `<p>` element, the `<h1>` to `<h6>` elements, and the
`<div>` element. Block elements can also be nested in other block elements. By
default they span the entire width of their parent block element.

There are also **inline elements**. These elements don't stack like block
elements do, but rather they go with the flow of the document. Generally,
elements that deal with text are inline elements. Examples are the `<a>`
element, `<span>`, `<b>`, and `<i>`. Block elements cannot be nested in inline
elements (`<a>` is an exception; though it is an inline element it can be used
to wrap around a block element).

HTML elements can also be given **class names**. Class names are often used to
mark elements that should receive a particular set of styles (via CSS class
selectors). The class name should pertain to the element's function or content,
not styles. That's because styles can change more often than an element's
function or content. Naming classes after appearance means changing the class
name when its associated appearance changes.

HTML has elements for different types of text. The heading elements **`<h1>`**
to **`<h6>`** are used to mark section titles and the like. They establish the
hierarchy of content, like you see when you're looking at an outline of a book.
They are not supposed to be used to make text big and bold.

The `<p>` element is used for paragraphs or block chunks of text.

HTML also provides elements for making text bold or italicized. However, they
shouldn't be used for styling purposes (e.g., use them to make text bold just
because we want them to be bold). Like other HTML elements, they have semantic
value. Also note that these default style changes can be changed with CSS.

By default, the **`<strong>`** and **`<b>`** elements make text bold. The
`<strong>` element is used to apply strong emphasis on text. Think of making
text stand out to draw particular attention to it (because reading it is
important, etc.). Then the `<b>` element is used to stylistically offset text.
Think of the bold text at the beginning of most Wikipedia articles.

```html
<p>You are about to do something. <strong>You can't undo this.</strong></p>

<p>In combinatorics, a <b>derangement</b> is a particular permutation of a collection of entities such that...</p>
```

On the other hand, the **`<em>`** and **`<i>`** elements make text italicized by
default. The `<em>` element is used to apply stressed emphasis on text. Think of
changing how you say a word in a sentence to put emphasis on that particular
word (like "There were three bears in the forest." vs. "There were _three_ bears
in the forest." vs. "There were three _bears_ in the forest."; the first is
pretty neutral, the second puts emphasis on "three" (there were bears, but this
emphasizes that there were three of them, not some other number), the third puts
emphasis on "bears" (there were indeed three creatures in the forest, but this
emphasizes that they were bears, not some other creature)). The `<i>` element is
used when the text has an alternative tone. Think of words borrowed from another
language, or scientific names, etc.

```html
<p>You were supposed to push the <em>blue</em> button, not the green one!</p>

<p>The word <i>kato</i> means cat in Esperanto.</p>
```

Aside from HTML elements for text, there are also elements that provide
structure to the page (not to be confused with _layout_; layout is
presentational). In the past, `<div>`'s used to provide most of the structure,
but HTML5 provides structure elements with semantic value, and they should be
used wherever appropriate.

The **`<header>`** element is usually placed at the top of the page, article,
section, etc. Think of page banners at the top.

The **`<nav>`** element is used as the primary navigation section of the page.
Often this will contain links to other parts of the page, or to other pages of
the website.

The **`<article>`** element is used for self-contained content, that even if
that section is moved somewhere else, it would still make sense on its own.
Think of newspaper or magazine articles.

The **`<section>`** element is used for thematic grouping of content. It's
perhaps the most generic of the structure elements (aside from the `<div>`), but
it's contents should share a common theme. Honestly I'm not really sure, but the
way I'd like to think about it is that if it doesn't make sense to use
`<article>`, and the grouping is not for the sake of styling (it's the `<div>`'s
job), use `<section>`.

The **`<aside>`** element is for content that is somewhat related to the main
content. Think of sidebars, soapboxes in textbooks, or the Blue Box in some of
the Wait But Why articles
([here's an example](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html),
though you'll have to do a bit of scrolling down; just open your browser's find
tool and enter "blue box").

The **`<footer>`** element is sort of the opposite of the `<header>`. It is
placed at the bottom of the page, section, etc. Think of the section at the
bottom of many web pages that contain contact information or copyright.

## Chapter 3: Getting to Know CSS

**All styles cascade from top to bottom.** In general, styles at the bottom are
more precedent than those at the top.

```css
h1 {
  font-size: 20px;
}

h1 {
  font-size: 24px;
}
```

In this example, `<h1>` elements will get a 24px font size, not 20px.

The cascade also applies to properties within a single selector.

```css
h1 {
  font-size: 20px;
  font-size: 24px;
}
```

Here the 24px font size will also apply.

A selector's **specificity weight** determines which styles will be applied when
multiple selectors change a particular style. As mentioned, ID selectors have
higher specificity than class selectors, and class selectors have higher
specificity than type selectors.

Suppose you have a `<p class="lead">` element, and these styles:

```css
p {
  font-size: 18px;
}

.lead {
  font-size: 22px;
}
```

Since the `.lead` class selector has higher specificity than the `p` type
selector, the 22px font size will apply. Note that higher-specificity selectors
break the cascade, so above, it doesn't matter whether the `p` selector comes
before `.lead`, or vice versa.

It is best practice to keep a selector's specificity as low as possible, so as
not to break the cascade and to keep the styling more predictable. An approach
to keep specificity low is by writing modular styles.

When applying color, there are different classes of values available. You can
identify a color by its **name**, or use **hex codes**, **RGB values**, or **HSL
values**.

There are two types of length values: **absolute lengths** and **relative
lengths**. Absolute lengths are based on some physical measurement, like inches
or centimeters. The most common unit is the **pixel** (1/96 of an inch; `px` in
units). It's a good unit to start with, but it is not very flexible, since
there's now a wide array of displays with varying screen sizes.

Relative lengths rely on other measurements. For example, if a property has a
length value in **percentages** (`%` in units), it takes the percentage of the
value of the same property of its parent element. For example,

```html
<div>
  <p>Hello</p>
</div>
```

```css
div {
  font-size: 24px;
}

p {
  font-size: 60%;
}
```

The `<p>` element's font size is going to be 60% that of its parent's font size,
in this case 60% of 24px, or 14.4px.

Percentages are usually used for properties like `width` or `height`.

The **`em`** unit is the multiple of an element's font size. If the element has
not font size specified, it will take that of the closest parent with a
specified font size. If nothing else, it uses the font size of the `<body>`,
whatever that may be.

```css
div {
  font-size: 24px;
}

p {
  font-size: 0.8em;
}
```

Using the same HTML snippet, the `<p>` element will use 0.8 \* 24px as its font
size, or 19.2px.

## Chapter 4: Opening the Box Model

The **`display`** property changes how an element is displayed on the page.
Among other things, it can make an element behave like a block, an inline
element, or as an inline block, or not display the element at all, among other
things.

Every element in the page is a rectangular box. The **CSS box model** consists
of the **content**, **padding**, **border**, and **margin**. An element's
dimensions (width and height) are inflenced by the box model. By default, an
element's width is the sum of the width of the content, the left and right
paddings, left and right borders, and left and right margins. The same reasoning
applies to an element's height. A major gotcha with widths and heights of an
element is that the `width` and `height` properies really just apply to the
width and height of the _content_ by default, not including how much padding or
border or margins there are.

Block elements take up the full width of their container by default. Inline
elements only take as much width as their content. Both types take the height of
their content.

Inline elements also ignore `width` and `height` values entirely.

The **margin** determines the space around the element, outside the border. It
is useful for adding space between elements.

The **padding** determines the space inside the borders.

Inline elements also have gotchas regarding margins and paddings. They ignore
vertical margins. They accept vertical padding, though it might overlap with
lines above or below the element.

There are also longhand forms, where `margin` and `padding` are followed by a
dash, then followed by the side (e.g., `margin-top`, `padding-left`, etc.).

The **border** lies between the margin and padding of an element. Borders have
width, style, and color. Borders can be made rounded by adding the
`border-radius` property to an element.

The **`box-sizing`** property affects how widths and heights are determined. By
default it is set to `content-box`, but it can also be changed to `border-box`
(there was a `padding-box` value, but it's deprecated). When it is set to
`border-box`, the element's `width` property will consist of the width of the
content, and the sizes of the left and right padding and borders. Any change to
the padding or border sizes won't increase the element's width, but rather the
inner widths will adjust accordingly. It's also the same with heights. Setting
the `box-sizing` of elements to `border-box` makes it easier to work with widths
and heights.
