---
title: Events
layout: doc
group: core
---

This module is included in **phonon-core.js**.

## RequireJS Compatible

```js
require(['phonon-core'], function(phonon)) {
    phonon.onReady(function() {...});
});
```

## Tap

Phonon has its own tap event that is **compatible both** on browser and touch enabled devices.

```js
document.querySelector('.element').on('tap', handler);
```

## onReady

There is a global onReady event that is called when Phonon is ready.

```js
phonon.onReady(function() {} );
```

## On

The on function is a shortcut for addEventListener.

```js
document.querySelector('.element').on('click', handler);
document.querySelector('.element').on('tap', handler);
```

## Off

The off function is a shortcut for removeEventListener.

```js
document.querySelector('.element').off('click', handler);
document.querySelector('.element').off('tap', handler);
```

## Global Page Event when created

	document.on('pagecreated', function(evt) {
		console.log(evt.detail.page + ' is opened for the first time (created)');
	});

## Global Page Event when opened

```js
document.on('pageopened', function(evt) {
	console.log(evt.detail.page + ' is opened');
});
```

## AnimationEnd

Returns the functional event working with the browser/WebView.

```js
phonon.event.animationEnd; // example: webkitAnimationEnd
```

## TransitionEnd

Returns the functional event working with the the browser/WebView.

```js
phonon.event.transitionEnd; // example: webkitTransitionEnd
```
