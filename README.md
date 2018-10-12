# parc
Projector aspect ratio correction. A small piece of JavaScript that allows you to adjust your browser's aspect ratio.

## What this does

This library is to be used in cases where you are displaying a browser window on a projector, but for whatever reason the projector isn't displaying the correct aspect ratio. Including this JavaScript file in your HTML should allow you to adjust the scale and offset (or translation) of your HTML page. 

See a demo page at [the GutHub Pages site for this repo.](https://manminusone.github.io/parc/)

**BIG DISCLAIMER:** This code was designed to work with a single-page non-scrolling Web application, so if your HTML page is scrolling, then you're going to see some weird jumping layout changes when you try to adjust the page. This may or may not be addressed in the future; until then, assume this code is specifically for use on a non-scrolling page.

## How do?

Just include the file in your HTML page.
```
    <script src="parc.js"></script>
```
Once you load up the page, assuming there are no JavaScript errors, you should be able to now adjust your window by hitting the following keys:

Key | Notes
----|------
V   | Hit this key to display a square in order to adjust scaling. You simply use the arrow keys to adjust your vertical/horizontal scaling until the square actually looks square. Hit the V key again to hide the square.
B   | Hit this key to display a square in order to adjust the offset. Again, you use the arrow keys to adjust, and hit the B key again to hide the square.
X   | If the color of the square makes it hard to see on your screen, hit the X key to flip the color between black and white.

If your HTML page is already intercepting keyboard presses and the above keys are already mapped to other functions, you can change the default values of these keys (and the stroke color) by including the following script block before the script include line and making adjustments where needed.
```
    <script>
        window.parc = {
            aspectKey:    'V',
            translateKey: 'B',
            invertKey:    'X',
            strokeColor:  '#fff'
        };
    </script>
```

## Who me?

This code was written by James Allenspach <james.allenspach@gmail.com> for the purpose of using the code in another HTML project: [20x2 Chicago Slideshow](https://github.com/manminusone/20x2chi-slides)
