export default function fetchTumblr (param, blogQuery, tagQuery){
  fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogQuery: blogQuery,
        tagQuery: tagQuery
      })
    }).then(response => {
      return response.json();
    }).then(responseJSON => {
        var results= responseJSON;
        console.log(results);
        param.setState({results: results, hasSearched: true});
      }).catch(err => console.log(err));
}