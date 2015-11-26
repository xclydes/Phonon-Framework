---
title: Tabs
layout: doc-live-device
live: tabs
group: components
---

Tabs make it easy to explore and switch between different views.
Tab contents can be swipeable with a horizontal finger gesture.
They are located at the top or bottom of the screen

We used/forked a tiny library called **[dragend.js](http://stereobit.github.io/dragend/)** to support gestures.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

<pre><code class="language-markup">&lt;link rel=&quot;stylesheet&quot; href=&quot;tabs.css&quot;&gt;</code></pre>

Link to the JS file if you loaded **phonon-core.js only**:

<pre><code class="language-markup">&lt;script src=&quot;tabs.js&quot;&gt;&lt;/script&gt;</code></pre>


## Enable/Disable Swipe gestures

Edit the value of the attribute **data-disable-swipe**. This attribute is used with the class **.content**

## Header Tabs

Page example with a **header-bar** and a **header-tabs**.

<pre><code class="language-markup">&lt;pagesample data-page=&quot;true&quot;&gt;
    &lt;header class=&quot;header-bar&quot;&gt;
        &lt;div class=&quot;center&quot;&gt;
        &lt;h1 class=&quot;title&quot;&gt;Tabs &lt;span class=&quot;tab-number&quot;&gt;1&lt;/span&gt;&lt;/h1&gt;
        &lt;/div&gt;
    &lt;/header&gt;
    &lt;nav class=&quot;tabs header-tabs&quot;&gt;
        &lt;div class=&quot;tab-items&quot;&gt;
            &lt;a class=&quot;tab-item&quot; &gt;Home&lt;/a&gt;
            &lt;a class=&quot;tab-item&quot; &gt;&lt;i class=&quot;icon icon-edit&quot;&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;a class=&quot;tab-item&quot; &gt;&lt;i class=&quot;icon icon-settings&quot;&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-indicator&quot;&gt;&lt;/div&gt;
    &lt;/nav&gt;
    &lt;div class=&quot;content&quot; data-tab-contents=&quot;true&quot; data-disable-swipe=&quot;false&quot;&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 1&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 2&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 3&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt; 
&lt;/pagesample&gt;
</code></pre>

## Footer Tabs

Page example with a **header-bar** and **bottom tabs**.
The difference is that you need to remove the class .header-tabs and to put the tab-indicator **before** tabs.

<pre><code class="language-markup">&lt;pagesample data-page=&quot;true&quot;&gt;
    &lt;header class=&quot;header-bar&quot;&gt;
        &lt;div class=&quot;center&quot;&gt;
        &lt;h1 class=&quot;title&quot;&gt;Tabs &lt;span class=&quot;tab-number&quot;&gt;1&lt;/span&gt;&lt;/h1&gt;
        &lt;/div&gt;
    &lt;/header&gt;
    &lt;nav class=&quot;tabs&quot;&gt;
        &lt;div class=&quot;tab-indicator&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;tab-items&quot;&gt;
            &lt;a class=&quot;tab-item&quot; &gt;Home&lt;/a&gt;
            &lt;a class=&quot;tab-item&quot; &gt;&lt;i class=&quot;icon icon-edit&quot;&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;a class=&quot;tab-item&quot; &gt;&lt;i class=&quot;icon icon-settings&quot;&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;/div&gt;
    &lt;/nav&gt;
    &lt;div class=&quot;content&quot; data-tab-contents=&quot;true&quot; data-disable-swipe=&quot;false&quot;&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 1&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 2&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;tab-content&quot;&gt;
            &lt;div class=&quot;padded-full&quot;&gt;
                &lt;h1&gt;Tab 3&lt;/h1&gt;
                &lt;p&gt;Swipe me!&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt; 
&lt;/pagesample&gt;
</code></pre>
