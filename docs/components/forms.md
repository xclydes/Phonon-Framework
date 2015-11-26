---
title: Forms
layout: doc-live-device
live: forms
group: components
---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="forms.css">
```

Link to the JS file if you loaded **phonon-core.js only**:

```html
<script src="forms.js"></script>
```

## Simple Input

```html
<input type="text" placeholder="Full name">
```

## Input with Floating Label

```html
<div class="input-wrapper">
    <input class="with-label" type="email" id="input-1">
    <label class="floating-label" for="input-1">First Name</label>
</div>
```

## Checkbox

```html
<ul class="list">
    <li class="">
        <label class="checkbox">
            <input type="checkbox" class="">
            Checkbox1
            <span></span>
        </label>
    </li>
    <li class="">
        <label class="checkbox">
            <input type="checkbox" class="">
            Checkbox2
            <span></span>
        </label>
    </li>
</ul>
```

## Radio

```html
<ul class="list">
    <li class="padded-for-list">
        <label class="radio">
            <input type="radio" name="test">
            Radio1
            <span></span>
        </label>
    </li>
    <li class="padded-for-list">
        <label class="radio">
            <input type="radio" name="test">
            Radio2
            <span></span>
        </label>
    </li>
</ul>
```
