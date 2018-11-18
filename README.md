# parc
Projector aspect ratio correction. A small piece of JavaScript that allows you to adjust your page's aspect ratio.

## What this does

This library is to be used in cases where you are displaying a browser window on a projector, but for whatever reason the projector isn't displaying the correct aspect ratio. Including this JavaScript file in your HTML should allow you to adjust the scale and offset (or translation) of the body of your HTML page. 

See a demo page at [the GitHub Pages site for this repo.](https://manminusone.github.io/parc/)

**BIG DISCLAIMER:** This code was designed to work with a single-page non-scrolling Web application, so if your HTML page is scrolling, then you're going to see some weird jumping layout changes when you try to adjust the page. This may or may not be addressed in the future; until then, assume this code is specifically for use on a non-scrolling page. (Or live with the weird rendering glitches.)

## History

This utility was written for use in the [20x2 Chicago Slideshow project](https://github.com/manminusone/20x2chi-slides) as an embedded utility, after the first field test of that slideshow code was fouled up by the projector being set for the wrong aspect ratio. The code eventually became complex enough that it made sense to break it out into its own project, so other people could use it in their own pages.

## How do?

Just include the file in your HTML page at the end of your `<body>` tag.
```
    <script src="parc.js"></script>
```

The HTML body has to exist for the code to add an event listener to it; if you include the file at the top of the page, or if there is no `<body>` tag defined, you'll get a window.alert popup.

Once you load up the page, assuming there are no JavaScript errors (check your console!), you should be able to now adjust the aspect ratio of your content by hitting the following keys:

Key  | Notes
-----|------
V    | Hit this key to display a square in order to adjust scaling. You simply use the arrow keys to adjust your vertical/horizontal scaling until the square actually looks square. Hit the V key again to hide the square.
B    | Hit this key to display a square in order to adjust the offset. Again, you use the arrow keys to adjust, and hit the B key again to hide the square.
X    | If the color of the square makes it hard to see on your screen, hit the X key to flip the color between black and white.
Home | Resets the currently displayed setting (sets scaling to 1x1, or sets offset to +0,+0)

Note that while the scaling values are limited to a range between 0.5 and 1.0, the offset is not limited, for cases where your page has been scaled down, and the empty space at the top and left of the projection can be filled up with your content.

### Custom keyboard shortcuts

If your HTML page is already intercepting keyboard presses and the above keys are already mapped to other functions, you can change the default values of these keys (and the stroke color) by including the following script block before the script include line and making adjustments where needed.
```
    <script>
        window.parc = {
            aspectKey:    'V',
            translateKey: 'B',
            invertKey:    'X',
            resetKey:     'Home',
            strokeColor:  [ '#fff', '#000' ]
        };
    </script>
```

The **strokeColor** attribute is an Array of colors to cycle through (you can use two colors, such as black & white, or you can include a whole series of different colors). If the value is a non-Array (i.e., a String) then that value will be the only stroke color used, and the invert key won't appear to do anything.

## Who me?

This code was written by James Allenspach <james.allenspach@gmail.com> for the purpose of using the code in another HTML project: [20x2 Chicago Slideshow](https://github.com/manminusone/20x2chi-slides)
