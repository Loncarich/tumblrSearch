var tumblr = require('tumblr.js');
var keys= require('./tumblr.config.js');

var client = tumblr.createClient({
  consumer_key: keys.tumblr.consumer_key,
  consumer_secret: keys.tumblr.consumer_secret,
  token: keys.tumblr.token,
  token_secret: keys.tumblr.token_secret
});

module.exports = {
  tumblrSearch: function(req, res){
    var dataStr= '';
    req.on('data', function(data){
        dataStr += data;
    })
    req.on('end', function (){
      var parseData= JSON.parse(dataStr);
      if (parseData.blogQuery.length > 0 && parseData.tagQuery.length > 0){
        client.blogPosts(parseData.blogQuery, function(err, resp) {
          if (resp !== null){
            var results= resp.posts.filter(function(post){
              return post.tags.indexOf(parseData.tagQuery) !== -1;
            });
            res.send(results);
          }else{
            res.send([]);
          }
        })
      }else if (parseData.blogQuery.length > 0){
        client.blogPosts(parseData.blogQuery, function(err, resp) {
          resp !== null ? res.send(resp.posts) : res.send([]);
        })
      }else{
        client.taggedPosts(parseData.tagQuery, function(err, resp) {
          resp !== null ? res.send(resp) : res.send([]);
        })
      }
    });
  }
};