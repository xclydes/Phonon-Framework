---
title: Panels
layout: doc-live-device
live: panels
group: components
---

Panels are designed to fire from buttons and links, but you can open/close panels programatically too.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```js
<link rel="stylesheet" href="panels.css">
```

Link to the JS file if you loaded **phonon-core.js only**:

<pre><code class="language-markup">&lt;script src=&quot;panels.js&quot;&gt;&lt;/script&gt;</code></pre>

## RequireJS Compatible

    require(['panels'], function(panel)) {
        panel('#id').open();
    });


## Triggers

Triggers are placed inside page content.
Set the panel's id with the attribute **data-panel-id**.

<pre><code class="language-markup">&lt;a href=&quot;#&quot; class=&quot;btn primary&quot; data-panel-id=&quot;myPanelexample&quot;&gt;Open Panel&lt;/a&gt;
</code></pre>

## Panel [Action Sheet]

Place the code at the top of the body.

<pre><code class="language-markup">&lt;div id=&quot;myPanelexample&quot; class=&quot;panel&quot;&gt;
        &lt;header class=&quot;header-bar&quot;&gt;
            &lt;a class=&quot;btn icon icon-close pull-right&quot; href=&quot;#&quot; data-panel-close=&quot;true&quot;&gt;&lt;/a&gt;
            &lt;h1 class=&quot;title&quot;&gt;Panel&lt;/h1&gt;
        &lt;/header&gt;

        &lt;div class=&quot;content&quot;&gt;
            &lt;p class=&quot;padded-full&quot;&gt;The contents of my panel go here.&lt;/p&gt;
        &lt;/div&gt;
&lt;/div&gt;
</code></pre>

## Full Panel

Full height panels.

<pre><code class="language-markup">&lt;div id=&quot;myPanelexample&quot; class=&quot;panel-full&quot;&gt;
        &lt;header class=&quot;header-bar&quot;&gt;
            &lt;a class=&quot;btn icon icon-close pull-right&quot; href=&quot;#&quot; data-panel-close=&quot;true&quot;&gt;&lt;/a&gt;
            &lt;h1 class=&quot;title&quot;&gt;Panel&lt;/h1&gt;
        &lt;/header&gt;

        &lt;div class=&quot;content&quot;&gt;
            &lt;p class=&quot;padded-full&quot;&gt;The contents of my panel go here.&lt;/p&gt;
        &lt;/div&gt;
&lt;/div&gt;
</code></pre>

## Open or Close Panels Programatically

You can also call these methods to open, close and toggle panels.

    phonon.panel('#my-panel-id').open();
    phonon.panel('#my-panel-id').close();