---
title: Notifications
layout: doc-live-device
live: notifications
group: components
---

Simple notifs!

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="notifications.css">
```

Link to the JS file if you loaded **phonon-core.js only**:

```html
<script src="notifications.js"></script>
```

## RequireJS Compatible

```js
require(['notifications'], function(notification)) {
    notification('#id').show();
});
```

## Predefined Notification

```js
phonon.notif(text, timeout, showButton);
```

Example

```js
phonon.notif('Hello', 3000, false);
```

## Custom Notification

```html
<div class="notification" id="my-notif">
    <button class="btn pull-right icon icon-close" data-hide-notif="true"></button>
    Hello World! <i class="icon icon-star"></i>
</div>
```

## Show a Notification

```js
phonon.notif('#id').show();
```

## Hide a Notification

```js
phonon.notif('#id').hide();
```
