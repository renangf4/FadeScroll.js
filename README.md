
# FadeScroll.js

## Operation
**FadeScroll.js** is a lightweight and easy-to-use script for adding fade effects to HTML elements during page scrolling. Follow the instructions below to integrate and customize the animation according to your preference.

## Installation
1. Download the FadeScroll.js file.
2. Add the following code at the end of your HTML file's body:
```html
<script src="caminho/para/FadeScroll.js"></script>
```

## Usage
To apply the fade effect, add the class `<div class="fade-effect">` to the desired HTML element. Use the following attributes to customize the animation:

### Direction:
- Top: `<div class="fade-effect" fade-direction="top">`
- Bottom: `<div class="fade-effect" fade-direction="bottom">`
- Left: `<div class="fade-effect" fade-direction="left">`
- Right: `<div class="fade-effect" fade-direction="right">`

### Time:
Time is specified in seconds.
- For 1 second, use: `<div class="fade-effect" fade-time="1">`
- For 500 milliseconds, use: `<div class="fade-effect" fade-time=".5">`

## Example
```html
<div class="fade-effect" fade-direction="bottom" fade-time="2">
  <!-- Your content here -->
</div>
```

This example will apply a fade effect in the bottom direction with a duration of 2 seconds. Feel free to experiment and adjust the attributes as needed to suit your preferences.