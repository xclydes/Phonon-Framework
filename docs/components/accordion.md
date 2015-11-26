---
title: Accordion
layout: doc-live-device
live: accordion
group: components
---

Accordion lists display collapsible content panels for presenting information in a limited amount of space.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="lists.css">
```

Link to the JS file if you loaded **phonon-core.js only**:

```html
<script src="accordion.js"></script>
```

## Basic

```html
<ul class="list">
    <li>
        <i class="pull-right icon icon-expand-more"></i>
        <a href="#link1" class="padded-list">Link 1</a>
        <div class="accordion-content">
          Element 1
        </div>
    </li>
    <li>
        <i class="pull-right icon icon-expand-more"></i>
        <a href="#link2" class="padded-list">Link 2</a>
        <div class="accordion-content">
          Element 2
        </div>
    </li>
    <li>
        <i class="pull-right icon icon-expand-more"></i>
        <a href="#link3" class="padded-list">Link 3</a>
        <div class="accordion-content">
          Element 3
        </div>
    </li>
</ul>
```