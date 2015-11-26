---
title: List
layout: doc-live-device
live: lists
group: components
---

Lists present multiple line items in a vertical arrangement as a single continuous element.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

```html
<link rel="stylesheet" href="lists.css">
```

## Basic

```html
<ul class="list">
    <li class="divider">Basic</li>
    <li class="padded-list">Item</li>
    <li class="padded-list">Item</li>
</ul>
```

### With Links

```html
<ul class="list">
    <li><a href="#item" class="padded-list">Link</a></li>
    <li><a href="#item" class="padded-list">Link</a></li>
    <li><a href="#item" class="padded-list">Link</a></li>
</ul>
```

## Left action

<pre><code class="language-markup">&lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Left action&lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;span class=&quot;padded-list&quot;&gt;Item&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left&quot;&gt;Text&lt;/a&gt;
        &lt;span class=&quot;padded-list&quot;&gt;Item&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;
&lt;/ul&gt;
</code></pre>

### With Links

<pre><code class="language-markup">&lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Left action&lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;a href=&quot;#item&quot; class=&quot;padded-list&quot;&gt;Link&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left&quot;&gt;Text&lt;/a&gt;
        &lt;a href=&quot;#item&quot; class=&quot;padded-list&quot;&gt;Link&lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>

## Right action

<pre><code class="language-markup">&lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Right action&lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;span class=&quot;padded-list&quot;&gt;Item&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right&quot;&gt;Text&lt;/a&gt;
        &lt;span class=&quot;padded-list&quot;&gt;Item&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;
&lt;/ul&gt;
</code></pre>

### With Links

<pre><code class="language-markup"> &lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Right action&lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;a href=&quot;#item&quot; class=&quot;padded-list&quot;&gt;Item&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right&quot;&gt;Text&lt;/a&gt;
        &lt;a href=&quot;#item&quot; class=&quot;padded-list&quot;&gt;Item&lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>

## Left and right actions

<pre><code class="language-markup">&lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Left and right actions&lt;/li&gt;
    &lt;li class=&quot;item-expanded&quot;&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;div class=&quot;item-content&quot;&gt;
            &lt;span class=&quot;title&quot;&gt;Item&lt;/span&gt;
            &lt;span class=&quot;body&quot;&gt;Small text&lt;/span&gt;
        &lt;/div&gt;
    &lt;/li&gt;
    &lt;li class=&quot;item-expanded&quot;&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right&quot;&gt;Text&lt;/a&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left&quot;&gt;Text&lt;/a&gt;
        &lt;div class=&quot;item-content&quot;&gt;
            &lt;span class=&quot;title&quot;&gt;Item&lt;/span&gt;
            &lt;span class=&quot;body&quot;&gt;Small text&lt;/span&gt;
        &lt;/div&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>

### With Links

<pre><code class="language-markup">&lt;ul class=&quot;list&quot;&gt;
    &lt;li class=&quot;divider&quot;&gt;Left and right actions&lt;/li&gt;
    &lt;li class=&quot;item-expanded&quot;&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left icon icon-edit&quot;&gt;&lt;/a&gt;
        &lt;a href=&quot;#item&quot;&gt;
            &lt;div class=&quot;item-content&quot;&gt;
                &lt;span class=&quot;title&quot;&gt;Item&lt;/span&gt;
                &lt;span class=&quot;body&quot;&gt;Small text&lt;/span&gt;
            &lt;/div&gt;
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;item-expanded&quot;&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-right&quot;&gt;Text&lt;/a&gt;
        &lt;a href=&quot;#action&quot; class=&quot;pull-left&quot;&gt;Text&lt;/a&gt;
        &lt;a href=&quot;#item&quot;&gt;
            &lt;div class=&quot;item-content&quot;&gt;
                &lt;span class=&quot;title&quot;&gt;Item&lt;/span&gt;
                &lt;span class=&quot;body&quot;&gt;Small text&lt;/span&gt;
            &lt;/div&gt;
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>