---
title: Dialogs
layout: doc-live-device
live: dialogs
group: components
---

Dialog windows provide contextual feedback messages for typical user actions.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="dialogs.css">
```

Link to the JS file if you loaded **phonon-core.js only**:

```html
<script src="dialogs.js"></script>
```

## RequireJS Compatible

```js
require(['dialogs'], function(dialog)) {
    dialog().alert('...');
});
```

## Predefined Dialogs

text: the dialog's text (string)

title: the dialog's title (string)

cancelable: true if it is possible to close it by touching outside the dialog, false otherwise (boolean)


### Alert

```js
var alert = phonon.alert(text, title, cancelable, textOk);
alert.on('confirm', function() {} );
```

### Confirm

```js
var confirm = phonon.confirm(text, title, cancelable, textOk, textCancel);
confirm.on('confirm', function() {} );
confirm.on('cancel', function() {} );
```

### Prompt

```js
var prompt = phonon.prompt(text, title, cancelable, textOk, textCancel);
prompt.on('confirm', function(inputValue) {} );
prompt.on('cancel', function() {} );
```

### Indicator

```js
phonon.indicator(title, cancelable);
```

## Custom Dialogs

Place the code **outside the page tage**, right after the body tag.

```html
<div class="dialog" data-cancelable="false" id="custom-dialog">
    <div class="content">
        <div class="padded-full">
            <h3>Hey! <i class="icon icon-info-outline"></i></h3>
            <p>Do you like chocolate?</p>
        </div>
    </div>
    <ul class="buttons">
        <li><a class="btn btn-flat primary btn-confirm" data-dialog-close="true">YES</a></li>
        <li><a class="btn btn-flat negative btn-cancel" data-dialog-close="true">NO</a></li>
    </ul>
</div>
```

### Custom Indicator

### Triggers

Set the dialog's id with the attribute **data-dialog-id**.



---

# API Methods

Initialize a Dialog Object for using these methods.

`var myDialog = phonon.dialog('#my-dialog');`

## open()

`myDialog.open();`

## close()

`myDialog.close();`

## on(eventName, handler)

```myDialog.on('confirm', function() {});
myDialog.on('cancel', function() {});```

