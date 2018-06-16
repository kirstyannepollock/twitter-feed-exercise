# twitter-feed-exercise
##Exercise to create a twitter feed plug in

[index.html](https://github.com/kirstyannepollock/twitter-feed-exercise/blob/master/index.html) is the example

###To use in your own pages: 

include the file [js/plugin.js](https://github.com/kirstyannepollock/twitter-feed-exercise/blob/master/js/plugin.js)

```<script src="js/plugin.js"></script>```

declare a div

```
    <div id="twitter" class="twitter">
    </div>
```
  
call the plugin

```	
  $(document).ready(function () {

    $("#twitter").twitterFeed({
      url: "https://twitter.com/postmanclient",
      class: "twitter-timeline",
      data_height: "800",
      data_width: "100%",
      linkText: "Postman"
    });


  });

```
