---
title: Popovers
layout: doc-live-device
live: popovers
group: components
---

Popovers allow users to take an action by selecting from a list of choices revealed upon opening a temporary, new sheet of material. They are located on the **.header-bar** or on the **.btn-popover** button. They are fired from button actions and from the title.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

<pre><code class="language-markup">&lt;link rel=&quot;stylesheet&quot; href=&quot;popovers.css&quot;&gt;</code></pre>

Link to the JS file if you loaded **phonon-core.js only**:

<pre><code class="language-markup">&lt;script src=&quot;popovers.js&quot;&gt;&lt;/script&gt;</code></pre>

## RequireJS Compatible

    require(['popovers'], function(popover)) {
        popover('#id').open();
    });


## Triggers

Set the menu's id with the following attribute **data-popover-id**.

<pre><code class="language-markup">&lt;header class=&quot;header-bar&quot;&gt;
    &lt;button class=&quot;btn pull-left icon icon-menu&quot; data-popover-id=&quot;my-popover&quot;&gt;&lt;/button&gt;
    &lt;button class=&quot;btn pull-right icon icon-menu&quot; data-popover-id=&quot;my-popover&quot;&gt;&lt;/button&gt;
    &lt;h1 class=&quot;title pull-left arrow&quot; data-popover-id=&quot;my-popover&quot;&gt;Title&lt;/h1&gt;
&lt;/header&gt;

&lt;div class=&quot;content padded-full&quot;&gt;
    &lt;button class=&quot;btn btn-popover fit-parent primary&quot; data-autobind=&quot;true&quot; data-popover-id=&quot;btn-popover&quot;&gt;Select&lt;/button&gt;
&lt;/div&gt;
</code></pre>

## Popover

Place the code where you want in the page content.

<pre><code class="language-markup"> &lt;!-- Hidden popovers in the page content --&gt;
    &lt;div class=&quot;popover&quot; id=&quot;my-popover&quot;&gt;
        &lt;ul class=&quot;list&quot;&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Item&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Help &amp; Feedback&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Settings&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Sign out&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;

    &lt;div class=&quot;popover&quot; id=&quot;btn-popover&quot;&gt;
        &lt;ul class=&quot;list&quot;&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Item 1&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Item 2&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Item 3&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Item 4&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
</code></pre>

## Open/close popovers programatically


    phono.popover('#my-popover').open();
    phono.popover('#my-popover').close();