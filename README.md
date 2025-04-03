# FadeScroll.js

**FadeScroll.js** is a lightweight and easy-to-use script that adds fade effects to HTML elements during page scrolling.

## Installation

1. Download the `FadeScroll.js` file.  
2. Add the following script at the end of your HTML file's `<body>` tag:

   ```html
   <script src="path/to/FadeScroll.js"></script>
   ```

## Usage

To apply the fade effect, add the class `fade-effect` to the desired HTML element. You can customize the animation using the following attributes:

### Direction:
- **Top:** `<div class="fade-effect" fade-direction="top">`
- **Bottom:** `<div class="fade-effect" fade-direction="bottom">`
- **Left:** `<div class="fade-effect" fade-direction="left">`
- **Right:** `<div class="fade-effect" fade-direction="right">`

### Duration:
- Specify the duration in seconds:
  - **1 second:** `<div class="fade-effect" fade-time="1">`
  - **500 milliseconds:** `<div class="fade-effect" fade-time=".5">`

### Example:
```html
<div class="fade-effect" fade-direction="bottom" fade-time="2">
  <!-- Your content here -->
</div>
```
This will apply a fade-in effect from the bottom with a duration of 2 seconds.

## License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it as needed.

## References

This script is also available on [jQueryScript.net](https://www.jqueryscript.net/animation/fade-slide-scroll.html), where it has been published to make it more accessible to other developers.
