
  4th-oct-2024
//border image
//read up css counters


Unit 	Description
cm 	centimeters
mm 	millimeters
in 	inches (1in = 96px = 2.54cm)
px * 	pixels (1px = 1/96th of 1in)
pt 	points (1pt = 1/72 of 1in)
pc 	picas (1pc = 12 pt) 

Unit 	Description 	
em 	Relative to the font-size of the element (2em means 2 times the size of the current font) 	
ex 	Relative to the x-height of the current font (rarely used) 	
ch 	Relative to width of the "0" (zero) 	
rem 	Relative to font-size of the root element 	
vw 	Relative to 1% of the width of the viewport* 	
vh 	Relative to 1% of the height of the viewport* 	
vmin 	Relative to 1% of viewport's* smaller dimension 	
vmax 	Relative to 1% of viewport's* larger dimension 	
% 	Relative to the parent element

CSS Specificity

What is Specificity?

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.

//illustrate the use of tag, class and id

Specificity Hierarchy

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

  1  Inline styles - Example: <h1 style="color: pink;">
  2  IDs - Example: #navbar
  3  Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]
  4  Elements and pseudo-elements - Example: h1, ::before

Note: Inline style gets a specificity value of 1000, and is always given the highest priority!

Note 2: There is one exception to this rule: if you use the !important rule, it will even override inline styles!

CSS The !important Rule

CSS Math Functions

All CSS Math Functions
calc() 	Allows you to perform calculations to determine CSS property values
max() 	Uses the largest value, from a comma-separated list of values, as the property value
min() 	Uses the smallest value, from a comma-separated list of values, as the property value