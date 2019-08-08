'use strict';

// We need this to create the MD5 hash
const crypto = require('crypto');
const querystring = require('querystring');

function getHash(email){
    // Gravatar uses MD5 hashes from an email address to get the image
    return crypto.createHash('md5').update(email).digest('hex');
}

function getQueryString(options){
  const queryData = querystring.stringify(options);
  return (queryData && "?" + queryData) || "";
}

const gravatar = module.exports = {
    url: function (email, options, https=true) {
      // The Gravatar image service
      const gravatarUrl = https ? 'https://www.gravatar.com/avatar' : 'http://www.gravatar.com/avatar';
      const query = getQueryString(options);
      const hash = getHash(email);
      return `${gravatarUrl}/${hash}${query}`;
    }
};