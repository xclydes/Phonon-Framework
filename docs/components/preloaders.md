---
title: Preloaders
layout: doc-live-device
live: preloaders
group: components
---

Disabled buttons with an amazing animation, linear and circle progress bars.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

<pre><code class="language-markup">&lt;link rel=&quot;stylesheet&quot; href=&quot;preloaders.css&quot;&gt;</code></pre>

Link to the JS file if you loaded **phonon-core.js only**:

<pre><code class="language-markup">&lt;script src=&quot;preloaders.js&quot;&gt;&lt;/script&gt;</code></pre>

## RequireJS Compatible

    require(['preloaders'], function(preloader)) {
        preloader('#id').show();
    });


## Circle progress bars

Place this code inside the **.content** of your page.

<pre><code class="language-markup">&lt;div class=&quot;circle-progress&quot;&gt;
    &lt;div class=&quot;spinner&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>

## Linear progress bars

### Determinate linear progress bars

Place this code inside the **.content** of your page.

<pre><code class="language-markup">&lt;div class=&quot;progress&quot;&gt;
    &lt;div class=&quot;determinate&quot; style=&quot;width: 60%;&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>

## Indicator with Dialog

Also, there is a indicator with the [dialog module](dialogs/).

## Show and hide preloaders

    phonon.preloader('#my-preloader').show();
    phonon.preloader('#my-preloader').hide();
