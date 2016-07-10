// $(document).ready(function(){
// $.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/",
// function(data) {
//   $("data").text(data);
//   console.log(data);
// }, "json");
// });


var articlelist = new ArticleList();

function checkAPI(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI(
"http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=headline/"));
  request.onreadystatechange = function(response) {

    if (request.readyState === 4) {

      var doc = window.document.createElement("doc");
      var a = request.responseText;
      console.log(a);
      var results = JSON.parse(a);
      console.log(results.response.results);
      createArticles(results.response.results);

      callback(response);
    }
  };

  request.send();

  function createArticles(array) {
    console.log(array);
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++ ) {
      articlelist.createArticle(array[i].webTitle,array[i].webUrl);
    }
  }

}

window.onload = function() {
  checkAPI(function(){
      reload();
  });
};

function reload() {
  document.getElementById("articles").innerHTML = articlelist.displayListInHTML();
}
