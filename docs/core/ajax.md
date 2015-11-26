---
title: Ajax
layout: doc
group: core
---

Ajax is an object for making cross-domain HTTP requests which handles several typical application errors such as no internet connection and timeout reached.
This is a nice plugin to build your client-side API based on JSON responses.

Thanks to Cordova, you can set the **[whitelist](http://docs.phonegap.com/en/edge/guide_appdev_whitelist_index.md.html#Whitelist%20Guide)** in order to allow Urls.

Whitelist: domain whitelisting in Apache Cordova is a security model that controls access to outside domains, such as http://google.com. The default security policy is to block all network access.

---

# Usage

This module is included in **phonon-core.js**.

## RequireJS Compatible

	require(['phonon-core'], function(phonon)) {
	    phonon.ajax({...});
	});

## HTTP Requests

Example (optional parameters are commented).

	var req = phonon.ajax({
		method: 'GET',
		url: 'http://mysite.com/api/',
		//crossDomain: true,
		dataType: 'json',
		//contentType: '',
		//data: {key1: 'val1', key2: 'val2'}, (will be converted in string format)
		//timeout: 5000,
		/*headers: {
			'header-name1': 'value1',
			'header-name2': 'value2'
		},*/
		success: function(res) {
			console.log(res);
		}/*,
		error: function(err) {
			console.error(err);
		}*/
	});

Parameter     |        Type      |  Description  |
------------- | -------------    | ------------- |
method        |       string     |  The HTTP method to use for the request |
url           |       string     |  A string containing the URL to which the request is sent. |
crossDomain   |    boolean       |  force a crossDomain request |
dataType      |    string        |  The type of data that you're expecting back from the server. |
contentType   |    string        | When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases |
headers       |    object        | An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. |
data          | string or object | Data to be sent to the server. It is converted to a query string, if not already a string.
timeout       |      number      | Set a timeout (in milliseconds) for the request. |
success       |     function     | A function to be called if the request succeeds. |
error         |     function     | A function to be called if the request fails. |

## Cancel a Request

	req.cancel();

## Types of Error

In case of error, the error function will receive one of the following errors:

	NO_INTERNET_ACCESS
	TIMEOUT_EXCEEDED
	XMLHTTPREQUEST_UNAVAILABLE
	JSON_MALFORMED
	REQUEST_CANCELED
