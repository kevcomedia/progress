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

Relative lengths rely on other measurements. ~~For example, if a property has a
length value in **percentages** (`%` in units), it takes the percentage of the
value of the same property of its parent element.~~

**Actually,** percentages are more nuanced than that. According to MDN, they are
not really lengths, and the effects of a percentage differs between properties.

For example,

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

But when applied to properties such as `margin` or `width`, the percentage is
the percentage of the width of the parent element.

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
dimensions (width and height) are influenced by the box model. By default, an
element's width is the sum of the width of the content, the left and right
paddings, left and right borders, and left and right margins. The same reasoning
applies to an element's height. A major gotcha with widths and heights of an
element is that the `width` and `height` properties really just apply to the
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

## Chapter 5: Positioning Content

The **`float`** property removes an element from the document's normal flow and
moves it to the left or right. Content then flows around it. Floated elements
lose their default widths, so a `width` property has to be explicitly set.
Floating an element also changes its `display` to `block`.

`float` has been used to set a page's layout, but it was never intended to be
used for layout. Think of illustrations in textbooks, where you'll see an
illustration that is wrapped with text around them (or look at illustrations in
Wikipedia). If the page was a web page, then those illustrations are floated.

Since `float` was never intended for layout, using it as such has its set of
gotchas. One way to deal with such gotchas is by using the **`clear`** property
on the element after the floated element. The `clear` property returns the page
to its normal flow at that point.

We can also make a specialized container for floated elements. The floated
elements in such a container shouldn't be able to affect other parts of the page
with float-weirdness. The container is essentially a black box. This technique
is called a **clearfix**.

Aside from using floats, we can create side-by-side layouts with **inline block
elements**. It also has its own set of gotchas, though in my opinion it's more
appropriate for layouts (and more predictable too) than floats.

Taking positioning to another level, there is a **`position`** property that
specifies how that element is positioned on the page. When an element is
**relatively positioned** (`position: relative;`), we can offset its position on
the page (with the `top`, `left`, `bottom` and `right` properties) without
affecting the flow of the document. In other words its original position on the
page is preserved.

When an element is **absolutely positioned** (`position: absolute;`), the
element is removed from the normal flow. Changing the `top`, `left`, `bottom`
and right properties of an absolutely positioned element causes it to move
relative to the closest relatively positioned parent (or if there's none,
relative to the page itself).

## Chapter 6: Working with Typography

**Typeface** is often confused or used interchangeably with **font**. The
typeface is the actual appearance of the text, and is a work of art. Meanwhile,
the font is the file in the computer in which information about the typeface is
stored.

The **color** property allows changing the color of text.

When styling text, there is the set of `font` properties. The **`font-family`**
defines which fonts the text will use. It can take a comma-separated list of
font families. The browser will first try to use the first one in the list. If
it is not available, it will use the second, and so on. It is a good idea to
define fallbacks for fonts.

**`font-size`** affects how large the text will appear, and takes any length
values.

**`font-style`** is used if you want to make the text italicized (by giving it
the `italic` value).

**`font-variant`** is used if you want to use small caps for the text. It can
also take other values, though I'm only familiar with small caps.

**`font-weight`** is used to make text bold. It can also take numeric values
from 100 to 900 in increments of 100, corresponding to the thickness of the
text. The value must be available in the font, otherwise it will round to the
nearest available weight.

**`line-height`** is used to adjust the distance between lines. Around 150% of
the text's font size is a good value for the `line-height` for making text
legible. It can also be used to vertically center one-liner text in block
elements (in conjunction with setting the element's `height`). I'm gonna
remember this one :P

Like the `margin` and `padding` properties, there is also a shorthand for font
properties, aptly named `font`. It takes various font property values in a
specific order, but the important values are the font size and the font family.

Aside from the font-based properties, there are also text-based properties.
These properties don't require information from the font.

**`text-align`** adjusts the text's horizontal alignment within its block. It
can be set to `left`, `right`, `center`, or `justified` (like in word
processors).

**`text-decoration`** deals with things like underlining text. Until now I never
knew you can set its color and style separately from the text's color, but it
looks like they're not widely supported.

**`text-indent`** sets how much indentation the first line of text gets.

**`text-shadow`** is used to add pretty shadows on text. Text can also have
multiple shadows.

**`text-transform`** is used to change the capitalization of text, whether to
make everything `lowercase`, `uppercase`, or `capitalize` the first letter of
every word.

**`letter-spacing`** affects how much space there is between letters in text.
Likewise, **`word-spacing`** affects how much space there is between words.

There is a set of fonts that are already installed in most devices, called
**web-safe fonts**. Among others, the list includes Arial, Courier, and Times.
Since they're widely available, they are perfect as fallback fonts.

We can also embed fonts that are not installed in devices. By using
**`@font-face`**, we can specify where to fetch the font files and then give
them names (which is then used as normal `font-family` value). However, just
because we can doesn't mean we should, since typefaces are works of art, and
fonts often have licences attached with them. Fortunately there are freely
available fonts that we can use, such as those found in Google Fonts.

The **`<cite>`** element is used for referencing an author or some other
resource. If applicable, there should be a hyperlink nearby that links to the
cited resource.

The **`<q>`** element is used for short inline quotes. Quotation marks are
provided by the browser, which can vary depending on the `lang` attribute
(though unfortunately the CSS reset strips off these quotation marks). They also
have the `cite` attribute for adding a reference URL. It's not visible to
browsers (though used by screen readers), so it's helpful to place an actual
hyperlink nearby.

The **`<blockquote>`** element is for larger blocks of text from some external
source. It also has the `cite` attribute, and we can embed a `<cite>` element in
it.

## Chapter 7: Setting Backgrounds & Gradients

The background color or image of an element can be set with the **`background`**
property or its related properties. The **`background-image`** property accepts
a URL to an image as its value (but it must be used this way:
`background-image: url("path/to/image")`). By default the background image will
repeat horizontally and vertically inside the element. This can be controlled
with the **`background-repeat`** property, using which we can specify whether
the image repeats in both dimension, horizontally (`repeat-x`), vertically
(`repeat-y`), or doesn't repeat at all (`no-repeat`).

The background image also starts at the top left corner of the element by
default. It can be changed with the **`background-position`** property. We can
give it two lengths to specify it's position horizontally and vertically
respectively relative to the top left corner. Setting one of them to 50% centers
the image on that direction. Or we can set it to be on one of the corners or at
the center using keywords (`top`, `left`, `right`, `bottom`, `center`). If only
one position is set, the other defaults to 50%.

There is also the shorthand `background` property. It accepts values for the
other background properties in this order: **color, image, position, repeat**
(the actual values are only separated by a space, like
`background: green url("path/to/image") center no-repeat`).

In CSS3 it's also possible to create **gradients**. Gradients are treated as
images, and so they are set with either the `background` or the
`background-image` property. The **`linear-gradient`** function accepts a
comma-separated list of colors. The browser will do the dirty work of actually
computing the gradient based on the colors we give it. By default the gradients
run from top to bottom and are evenly spaced. We can change its direction by
giving it the direction (either words like `to right` or `to bottom left`, or
degree values like `45deg`; `0deg` is equivalent to changing the direction from
bottom to top, and each increase rotates the gradient clockwise) at the
beginning of the list.

```css
background-image: linear-gradient(120deg, red, yellow);
```

There is also the **`radial-gradient`** function. The gradient it produces start
with the first color at the middle, then subsequent colors are added around
that, while the last color is the outermost gradient.

The colors we provide in the gradient functions are actually **color stops**.
They are like the color transition points for the gradient. If you have a linear
gradient from red to green to blue, the browser will first calculate the
gradient from red to green, then calculate the gradient from green to blue.
Remember that they are evenly spaced by default, so the green will actually sit
halfway throughout the gradient. Red and blue are at the opposite ends. The
default positions of the color stops can be changed, by specifying a length or
percentage after the color (separated by a space). So if you have

```css
background-image: linear-gradient(to right, red, green 70%, blue);
```

The browser will calculate a red-to-green gradient up until 70% of the whole
gradient. Then it will draw the rest of the gradient, 30% green-to-blue.

Note that there are some browsers that don't support gradients. In cases where
there's a need to support such browsers, it's a good idea to provide a fallback
background color.

```css
background: orange;
background: linear-gradient(red, yellow);
```

Because of the way cascades work, the second `background` property will take
effect on browsers that support it. Meanwhile, browsers that don't support
gradients will just ignore it, and use the first `background` property.

It is possible to combine or stack together different backgrounds, by using
multiple values for the `background` property, separated by commas. The first
background in the list will be the topmost background, while the last is "at the
rear".

By default, the background image's size is used, but it can be changed with the
**`background-size`** property. It can accept lengths for width or height. If
`auto` is used, say for the width, the width will automatically be calculated
based on the set height so the image's aspect ratio is preserved.

It can also accept the **`cover`** keyword. What it does is the image is scaled
so it _covers_ the element's width and height. Usually this will crop out some
parts of the image. There is also the **`contain`** keyword, where the image is
scaled so that it is _contained_ in the element. No parts of the image are
cropped out.

**`background-clip`** specifies which parts of the box model the background
extends to. By default it is set to `border-box`, meaning the background bleeds
through the border. This is more apparent with a thick dashed border.

**`background-origin`** sets the background's positioning area. By default it is
set to `padding-box`, meaning the background's top left corner sits at the top
left corner of the padding.

## Chapter 8: Creating Lists

An **unordered list (`<ul>`)** is a collection of items where order doesn't
matter. They have vertical margins and a left padding by default. Each item is
preceded by a solid circle.

An **ordered list (`<ol>`)** is pretty much like an unordered list, except the
order of the list items matter. It also has a couple of special attributes.

The **`start`** attribute sets the starting count for the ordered list. The
**`reversed`** boolean attribute reverses the ordering of the list. The value
attribute is attached to the list item (**`<li>`** for both lists) to change its
number in the ordered list. Subsequent items will continue counting from that
value.

A **description list (`<dl>`)** is a list of (usually) pairs of **terms
(`<dt>`)** and **descriptions (`<dd>`)**. There can be multiple terms for a
description, or multiple descriptions for a single term. The term(s) must be
before the corresponding description(s).

`<li>` is the only valid child for `<ul>` and `<ol>`. But an `<li>` is free to
have other elements as children. Even another list, which makes it a **nested
list**. List markers change with each level of nesting.

The **`list-style-type`** property sets the list marker, ranging from circles
and squares, to Latin letters, to Roman numerals, to glyphs that you didn't know
are used somewhere else in the world.

We can also set an image as a "list marker", by setting `list-style-type` to
`none`, and by setting the image as the list items' background image (plus using
other properties so the background image doesn't repeat and that there is ample
margin or padding so the list item doesn't sit on top of the image).

Or just use **`list-style-image`**.

The **`list-style-position`** property can be set to `outside` (default) or
`inside`. When set to `inside`, the marker is inline with the content of the
list item, and lines can wrap around it.

There is a shorthand **`list-style`** property that accepts a value for
`list-style-type` and `list-style-position` in that order.

It's possible to make **horizontal lists**. Setting `<li>` as an inline block
makes the list horizontal, but the markers are removed. Floating preserves the
markers, but horizontal margins for the list items is necessary so the marker is
not on the same space as the previous list item. Note that both techniques come
with the same gotchas mentioned earlier. Horizontal lists are also used often in
navs.

## Chapter 9: Adding Media

The **`<img>`** element is used to embed an image on the page. It is a
self-closing element that requires an **`src`** and **`alt`** attribute. The
`src` attribute takes a URL to an image as its value. The `alt` attribute takes
a string of text that describes what the image is. If the image doesn't load for
some reason, the alt text is displayed instead. Additionally, assistive
technologies use the alt text.

The most common formats used for images are **GIF**, **JPG** and **PNG**. GIFs
are those animated images you see in web pages. JPG is for images with high
color counts, like photographs. PNGs are for images with lower color counts or
transparencies (like icons).

The `<img>` element also has the `width` and `height` attributes, which take the
respective dimensions of the image itself. For resizing the image, the `width`
and `height` _CSS properties_ are used. Either way, when the dimensions are
explicitly set, the browser can allocate the space needed by the image, so
content on the page don't suddenly jump when an image starts to load. The page
also loads faster (because it doesn't have to do recalculations and re-rendering
of the page when the image starts to load).

If only one dimension is specified, the other takes an implicit value so the
aspect ratio of the image is preserved. Setting both might distort the image.

`<img>` elements are inline by default.

`<img>` is preferred if the image has semantic value, and is related to the
content. Otherwise, CSS `background-image` is used.

The **`<audio>`** element allows adding audio to the page. It has the boolean
attributes `autoplay`, `controls` and `loop`. When `autoplay` is set, the audio
plays as soon as it can. When `controls` is set, audio controls appear on the
page. `loop` causes the audio to play non-stop.

The `preload` attribute specifies which additional information about the audio
is loaded. By default it is set to `auto`, loading all information about the
audio. `metadata` loads only some. `none` doesn't load anything else. It's a
good idea to set this to `metadata` or `none` if conserving bandwidth is
important.

It has the `src` attribute, which takes a URL to an audio file. If fallback
files (in different formats) are needed, the `src` attribute is not used, and
multiple **`<source>`** elements are nested inside the `<audio>` tag instead. It
will try to load the listed audio sources in order. If all else fails, a link to
the audio file can be placed at the bottom.

The **`<video>`** element is pretty much the same as `<audio>`, except is for,
well, video. It also has the `poster` attribute, which takes a URL to a poster
image. The image is displayed until the video is played.

`<audio>` and `<video>` controls are determined by the browser. A more
customized player can be made by throwing in JavaScript, if need be.

The **`<iframe>`** element is used to embed another web page inside the current
page. It is often used for embedding media like a YouTube video or Google Maps.
The page in an iframe is independent of the host page, and it will not inherit
styles from the host.

The **`<figure>`** element is used for wrapping self-contained content. Think of
figures in textbooks. Similarly, it can be used for images, tables, charts, code
snippets, etc. Not every image needs to be wrapped in a `<figure>`.

The **`<figcaption>`** element goes with `<figure>`. Inside a `<figure>`
element, it describes what the figure is about. There can only be one
`<figcaption>` per `<figure>`. If it describes an image, the image's `alt`
attribute can be omitted.

## Chapter 10: Building Forms

**Forms** are used to get input from the user. The **`<form>`** element declares
a form on the web page. Inside it we put various input controls for the user to
use. The `<form>` element has the **`action`** attribute, which takes a URL to
which the data will be sent for processing. The **`method`** attribute
determines which HTTP method the browser will use to send the data.

The most common form of input is textual input. We can create text fields using
the **`<input>`** element. By default its **`type`** attribute is `text`.
`<input>`s also have the `name` attribute, which is the name associated with the
data (i.e., the name is used to identify which data is which when processing the
form).

There are also new input types, including `email`, `tel`, `number`, `date`,
`color`, etc. If the browser supports the input type, it will use the
appropriate user interface. Otherwise it will just fallback to the `text` type.
These different input types are quite noticeable when the form is accessed on a
smartphone (e.g., when the focus is on an `email` type, the keyboard shows the
most common characters in email addresses, including the `@` symbol; when the
focus is on a `number` type, the keyboard shows numbers; when the focus is on a
`date` type, a date picker shows instead of a keyboard).

The **`<textarea>`** control is for larger chunks of text. It can also accept
multi-line inputs.

The **`radio`** input type is used when a choice among a list of choices is
needed. The choices should have the same value for their `name` attributes. As
for their values, it is set with the **`value`** attribute.

The **`checklist`** input type is pretty much like a radio button, except the
user can choose multiple items from the list.

For larger lists of choices, it's better to use a drop-down menu. The
**`<select>`** control is used to make a drop-down menu. Inside it is a list of
**`<option>`** elements, each corresponding to an item in the drop-down. A
`name` attribute should be attached to the `<select>` control, while `value`
attributes should be attached to the `<option>`s. It's also possible to make the
`<select>` control accept multiple selections by adding the `multiple` boolean
attribute.

When the input's type is `submit`, it becomes a submit button. Clicking it sends
the data on the form to the URL specified in the `action` attribute for
processing. If more control over the contents of the button is needed, there's
the **`<button>`** control. Unlike `<input>`'s, a `<button>` has an opening and
closing tag, so there's more flexibility over what the button value will be.
`<button>`s behave like submit inputs by default.

The **`hidden`** type is for data that is not entered by the user. It is used
for tracking codes, IDs, keys, etc. Since its value can be inspected using the
browser's dev tools, **it should not be used for sensitive data**.

The **`file`** type is for file uploads/attachments. Styling them is not very
straightforward.

**Labels (`<label>`)** are used to associate some prompt to an input field. They
have the `for` attribute that takes an ID of an input element. Clicking on a
label that's associated with an input causes the input to receive focus. It can
also wrap around an input, which removes the need for the `for` attribute.

**Field sets (`<fieldset>`)** are like sections, but for form elements. Inside
it you can put a **`<legend>`** element as its first child, and serves as a
caption for that field set.

The **`disabled`** boolean attribute prevents an input from activating. Any data
it might have is also not sent when the form is submitted. Field sets can be
disabled too, disabling everything inside them.

The **`placeholder`** attribute can be used to provide hints for what the
input's value should be. It is not a replacement for labels.

The **`required`** boolean attribute makes an input a required field. The input
field should have a valid value, otherwise the form won't submit and a
browser-controlled error message appears.

Browsers have different default styles for form controls, so it's a good idea to
style them yourself.

## Chapter 11: Organizing Data with Tables

For marking up tabular data, there's the **`<table>`** element. At the minimum
it is composed of **table rows (`<tr>`)**, each of which contains **table cells
(`<td>`)**. If the table cell contains a heading instead of data, it's more
semantically correct to use the **`<th>`** element instead of a `<td>` element.
By default, a table heading's scope is the column of data below it, but if the
heading's scope is the row it's in, we can set its `scope` attribute to `row`.

The **`<caption>`** element serves as the table's caption or title. It must be
placed at the beginning of the table. The table can also be split into three
major sections: the header (**`<thead>`**), the body (**`<tbody>`**) and the
footer (**`<tfoot>`**). The header is often used to contain the row of table
headings. It must also be the top section of the table. The body is where most
of the table's contents reside. The footer is used for summaries of data (e.g.,
in a table of expenses, it can contain the total expenses).

By default table cells sit at the intersection of just one row and one column.
But if there's a need for a cell to occupy multiple rows or columns, we can set
its `rowspan` or `colspan` attributes to some positive integer respectively.

When applying borders to table cells, their borders might sit next to each
other, giving the effect of a much thicker border than intended. The
**`border-collapse`** property (for `<table>` elements) affects the behavior of
table borders. When set to `collapse`, the borders of the table cells collapse
into one (i.e., they will share the same border instead of having their own
separate borders; that's what happens when `border-collapse` is set to
`separate`).

**`border-spacing`** determines the space between borders. It only works for
tables with `border-collapse` set to `separate`. When given two lengths, the
first length will affect horizontal spacing while the second will affect
vertical spacing.

Borders can't be applied to table rows or the table structural elements, which
makes applying borders slightly tricky.

**Striping** is often applied to a table to make the rows more legible.

The **`vertical-align`** property is used to vertically align text for inline or
table elements (kinda like `text-align`, but vertical).

The **`:first-of-type`** pseudo-class selects the element which is the first of
its type in some parent element. Same with **`:last-of-type`**.

```html
<div>
  <h1>Hello</h1>
  <p>I am red because of :first-of-type</p>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
  <p>I am blue because of :last-of-type</p>
  <h2>Hello</h2>
</div>
```

```css
p:first-of-type {
  color: red;
}

p:last-of-type {
  color: blue;
}
```

The **`only-of-type`** pseudo-class selects the element only if its the only one
of its type in some parent element.

```html
<div>
  <h1>Hello</h1>
  <p>I am green because of :only-of-type</p>
  <h2>Hello</h2>
</div>
<div>
  <h1>Hello</h1>
  <p>Hello</p>
  <p>Hello</p>
  <h2>Hello</h2>
</div>
```

```css
p:only-of-type {
  color: green;
}
```

## Chapter 12: Writing Your Best Code

**Write standards-compliant markup.** Browsers don't complain if you give it
malformed HTML code. But such code can become unpredictable, as different
browsers might have different ways to interpret the same malformed code. ID
names should be unique. Elements should be closed properly, closing them in the
reverse order as they were opened. Standards-compliant markup doesn't have
gotchas.

**Make use of semantic elements.** Using semantic elements properly leads to a
more accessible website. The pages are also easier to style. The source code is
more readable. Sometimes research is needed to determine which element is the
most appropriate to use in a given situation.

**Use the proper document structure.** It makes sure the page renders as
intended in every browser. It's also a step towards standards-compliant code.

**Keep the syntax organized.** Write tags and attributes in lowercase. Use
proper indentation. Use double quotes for attribute value delimiters.
Self-closing elements don't need a forward slash at the end of their tags.
Boolean attributes don't need values; their presence _is_ their value.

**Use practical ID & class names.** These names should be related to what the
element is or what it does, not based on the element's appearance.

**Use alt text on images.** The alt text is used by screen readers and stuff. It
should detail what's in the image. If there's nothing to describe in the image,
give it an empty alt text (don't omit the `alt` attribute altogether!). If the
image is part of the UI, it's better to include it as a background image.

**Separate content from style.** Avoid inline styles. They cannot be reused, and
it's a major headache if multiple elements have the same inline styles and the
styles have to change. It also makes the HTML code focused solely on markup.

**Avoid "Divitis".** It can get hard to track multiple `<div>`s nested together.
It might also bloat the page. If possible use less of these, or use structural
elements.

**Continually refactor code.** Code becomes cluttered over time as it grows.
Every once in a while go back and refactor code.

**Organize code into comments.** CSS can get really big, so it's a good idea to
group related styles and separate them with comments. A table of contents at the
top can be helpful as well.

**Write CSS using multiple lines and spaces.** Place each selector in its own
line. Properties too. The opening bracket should be one space after the last
selector. The closing bracket is in its own line. There should be a space after
a colon. Put semicolons after values. Indent the properties.

**Comments and whitespace for code organization also apply to other languages.**

**Use proper class names.** Class names should be modular and related to the
content of the element they're attached to. They should be written in lowercase
and words are separated by a hyphen (so they mesh well with CSS syntax).

**Build proficient selectors.** Don't use overly qualified selectors, as they
increase its specificity. Avoid using ID selectors too as they are very
specific. Two to three levels should be enough.

**Use specific classes when necessary.** When a selector becomes too long,
better use a class instead. Long selectors are fragile and not good for
performance.

**Use shorthand properties and values.** They are simply concise (and the order
of their values can be looked up anyway). However if only a specific value
requires styling, don't use the shorthand, so the other values are not affected
unnecessarily.

**Use shorthand hexadecimal color values.** If applicable, use the
three-character hex code instead of the usual six. Also use lowercase.

**Drop units from zero values.** `0px` is the same as `0em` is the same as...
you get the point; the unit can be dropped. However if I recall correctly there
are a few specific cases where you can't just drop the unit (like `0deg`?).

**Group and align vendor prefixes.** The main name of the prefixed property or
value should align. Vendor prefixes are becoming less relevant though, and there
are tools that automatically do the prefixing.

**Modularize styles for reuse.** Make styles that can be shared between elements
via classes. An example I can think of is Bootstrap's `.btn` class, or the
`.panel` class.
