---
title: Navigator
layout: doc
group: core
---

Navigator is a tiny JavaScript **page manager and router** and is inspired by <strong>Android Activities</strong>.
It is designed for handling the pages of a single page application by calling their activity.

The <a href="http://developer.android.com/reference/android/app/Activity.html" target="_blank">activity</a> takes care of creating a window for you in which you can place your UI with.
An activity is based on <strong>several window states</strong> that we call the activitiy life cycle:

Event Name        |  Description  |
-------------     | ------------- |
onCreate()        |     called when the activity is first created. This is where you should do all of your normal static set up. This callback is called once.    |
onReady()         |     called when the activity is becoming visible to the user.    |
onTransitionEnd() |    called when the page transition is finished.    |
onClose()         |    called when the activity is no longer active, but always visible.     |
onHidden()        |    called when the activity is no longer visible to the user.     |
onHashChanged()   |    called when the hash changes.     |
onTabChanged()    |    called when the user changes the active tab (tabs feature required).     |


### Cordova Backbutton

[This is a Phonegap/Cordova event](http://docs.phonegap.com/en/edge/cordova_events_events.md.html#backbutton) that fires when the user presses the back button on Android.
Navigator supports it and will navigate to the previous page automatically.

---

# Usage

This module is included in **phonon-core.js**.

## RequireJS Compatible

	require(['phonon-core'], function(phonon)) {
	    phonon.navigator(...);
	});

## Add a New Page in HTML

### Page Container

Create page containers inside your index.html file with the attribute **data.page="true"**.

<pre><code class="language-markup">&lt;home data-page=&quot;true&quot;&gt;&lt;/home&gt;
&lt;pagetwo data-page=&quot;true&quot;&gt;&lt;/pagetwo&gt;
</code></pre>

### Page Content

There are 2 options.

1) Create page templates files. We recommend this option because it reduces the index.html file size and because Navigator can load templates dynamically.

**home.html**
<pre><code class="language-markup">&lt;home class=&quot;app-page&quot;&gt;
	&lt;header class=&quot;header-bar&quot;&gt;
	    &lt;h1 class=&quot;title&quot;&gt;Home&lt;/h1&gt;
	&lt;/header&gt;
	&lt;div class=&quot;content&quot;&gt;
		&lt;!-- page content goes here --&gt;
	&lt;/div&gt;
&lt;/home&gt;</code></pre>



2)  **Put the page content inside its page container in index.html file**.

<pre><code class="language-markup">&lt;home data-page=&quot;true&quot;&gt;
	&lt;header class=&quot;header-bar&quot;&gt;
	    &lt;h1 class=&quot;title&quot;&gt;Home&lt;/h1&gt;
	&lt;/header&gt;
	&lt;div class=&quot;content&quot;&gt;
		&lt;!-- page content goes here --&gt;
	&lt;/div&gt;
&lt;/home&gt;</code></pre>

##  Navigation between Pages

Navigate to another page.

<pre><code class="language-markup">&lt;button data-navigation=&quot;page-name&quot;&gt;Go to page&lt;/button&gt;</code></pre>

Navigate to the previous page with **$previous-page**.

<pre><code class="language-markup">&lt;button data-navigation=&quot;$previous-page&quot;&gt;Back&lt;/button&gt;</code></pre>

Navigate with links.

<pre><code class="language-markup">&lt;a href=&quot;#!page-name&quot;&gt;Go to page&lt;/a&gt;</code></pre>

### data-param attribute

Set a parameter.

<pre><code class="language-markup">&lt;button class=&quot;btn&quot; data-navigation=&quot;page-name&quot; data-param=&quot;my-value&quot;&gt;Go to page&lt;/button&gt;</code></pre>

## JavaScript

### App Setup

**Navigation and i18n options** are defined in the **app options**.

    phonon.options({

        navigator: {
            defaultPage: 'home',
            hashPrefix: '!', // default !pagename
            animatePages: true,
            enableBrowserBackButton: true,
            templateRootDirectory: '',
            useHash: true // true to enable hash routing, false otherwise
        },

        i18n: { // i18n: null if you do not want to use internationalization
            directory: 'res/lang/',
            localeFallback: 'en',
            localePreferred: 'en-US'
        }
    });


### on(Object pageObject, Function activity)

The page namespace permits you to listen to the page events.
Furthermore, you can add options such as preventing the automatic close and adding a delay before calling the onReady callback.

**pageObject parameters**

Parameter     |      Type     |  Description  |
------------- | ------------- | ------------- |
page          |     string    |  The page name |
content       | string / null |  The page content if defined |
preventClose  |    boolean    |  true if you desire to prevent the automatic close, false otherwise |
readyDelay    |    number     |  add a delay when the onReady callback is called |


**The activity function is optional, use it in order to define page events.**

Example

	phonon.navigator().on({page: 'pagename', content: 'content.html', preventClose: false, readyDelay: 1}, function(activity) {

		activity.onCreate(function() {});

		activity.onReady(function() {});

		activity.onTransitionEnd(function() {});

		// activity.onClose(function(self) {}); // use it only if preventClose is true with self.close();

		activity.onHidden(function() {});

		activity.onHashChanged(function(req1, req2, ...) {});

		activity.onTabChanged(function() {});
	});

	// or
	phonon.navigator().on({page: 'pagename', content: 'content.html', preventClose: false, readyDelay: 1});


## Starting the App

	phonon.navigator().start();

## Change Page Programatically

You can also pass a parameter if you want to.

	phonon.navigator().changePage('page-name', 'optional-parameter');

## Get the Current Page

	phonon.navigator().currentPage;

## Get the Previous Page

	phonon.navigator().previousPage;
