---
title: Grid
layout: doc-live-device
live: grid
group: components
---

Create smartphone and tablet layouts with the default 10-column.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="grid.css">
```

## The Grid

Then, create an element with .row class.
This will create a horizontal block to contain vertical columns. Then add divs with a column class within that row.
Phonon's grid system is inspired by [Foundation](http://foundation.zurb.com/docs/components/grid.html).

```html
<div class="content">
    <div class="padded-full">
    
        <div class="row text-center">
            <div class="tablet-4 column" style="background-color:#ccc;">phone-12 tablet-4</div>
            <div class="tablet-4 column" style="background-color:#ddd;">phone-12 tablet-4</div>
            <div class="tablet-4 column" style="background-color:#eee;">phone-12 tablet-4</div>
        </div>

        <div class="padded-bottom"></div>

        <div class="row text-center">
            <div class="phone-6 tablet-2 column" style="background-color:#ccc;">phone-6 tablet-2</div>
            <div class="phone-4 tablet-4 column" style="background-color:#ddd;">phone-4 tablet-4</div>
            <div class="phone-2 tablet-6 column" style="background-color:#eee;">phone-2 tablet-6</div>
        </div>

        <div class="padded-bottom"></div>
        
        <div class="row text-center">
            <div class="tablet-6 column" style="background-color:#ccc;">phone-12 tablet-6</div>
            <div class="tablet-6 column" style="background-color:#ddd;">phone-12 tablet-6</div>
        </div>

        <div class="padded-bottom"></div>

        <div class="row text-center">
            <div class="phone-4 tablet-6 column" style="background-color:#ccc;">
                <div class="padded-full">
                    phone-4 tablet-6 padded</div>
                </div>
            <div class="phone-8 tablet-6 column" style="background-color:#ddd;">
                <div class="padded-full">
                    phone-8 tablet-6 padded
                </div>
            </div>
        </div>
    </div>
</div>
```