# nodejs-gravatar

#Getting Started
Install the module:

<pre> npm install nodejs-gravatar</pre>

Use it in your script:

<pre>
const gravatar = require('nodejs-gravatar');
// gravatar.url(email,options,https) // default is https
console.log(gravatar.url('arjunphp@gmail.com',{s:200}));
</pre>

By default, images are presented at 80px by 80px if no size parameter is supplied. you can set parameter by passing s or size via options. 

You may request images anywhere from 1px up to 2048px, however note that many users have lower resolution images, so requesting larger sizes may result in pixelation/low-quality images.

# License
Copyright (c) 2013 Modulus Licensed under the MIT license.