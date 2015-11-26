---
title: Side panels
layout: doc-live-device
live: side-panels
group: components
---

The side panel slides in from the left or from the right.
On tablets, you you can expose it.

We used/forked a tiny library called **[snap.js](https://github.com/jakiestfu/Snap.js/)** to support gestures.

---

# Usage

## Installation

Link to the CSS file if you loaded **phonon-base.css only**:

<pre><code class="language-markup">&lt;link rel=&quot;stylesheet&quot; href=&quot;side-panels.css&quot;&gt;</code></pre>

Link to the JS file if you loaded **phonon-core.js only**:

<pre><code class="language-markup">&lt;script src=&quot;side-panels.js&quot;&gt;&lt;/script&gt;</code></pre>


Include this code in your index.html file outside page declarations.
If the side panel should be visible from the left, add the class **.side-panel-left** or from the right **.side-panel-right**.

**Data attributes options**

Data-attribute    |      Type     |  Description |
-------------     | ------------- | -------------   |
data-expose-aside |     string    |  the side panel is visible on tablets only if the value is left or right |
data-disable      |     string    |  Disable drag and drop from the left or right |
data-page         |     string    |  The page that can enable the side panel  |

<pre><code class="language-markup">&lt;div class=&quot;side-panel side-panel-left&quot; data-expose-aside=&quot;none&quot; data-disable=&quot;right&quot; data-page=&quot;home&quot; id=&quot;side-home&quot;&gt;
    &lt;header class=&quot;header-bar&quot;&gt;
        &lt;button class=&quot;btn pull-right icon icon-close&quot; data-side-panel-close=&quot;true&quot;&gt;&lt;/button&gt;
        &lt;div class=&quot;pull-left&quot;&gt;
            &lt;h1 class=&quot;title&quot;&gt;Panel&lt;/h1&gt;
        &lt;/div&gt;
    &lt;/header&gt;

    &lt;div class=&quot;content&quot;&gt;
        &lt;ul class=&quot;list&quot;&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Profile&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Settings&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class=&quot;padded-list&quot;&gt;Login&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>