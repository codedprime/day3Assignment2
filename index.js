#!/usr/bin/env node

var request = require('request');

	//console.log('Hello, world!');

        

    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    

   request.get(url, function(err, response){

	if (err)throw err;

	//no error, use your response here

	console.log(response.body);

})

  