(function(exports) {

function ArticleList(article = Article) {
  this.list = [];
  this.Article = article;
}

ArticleList.prototype = {

  createArticle: function(headline,link){
    this.list.push( new this.Article(headline,link));
  },

  displayListInHTML: function() {
    var arrayLength = this.list.length;
    var returnArray = ['<div id="list">\n<ul>','\n'];
    for (var i = 0; i < arrayLength; i++) {
    returnArray.push('<li>' + '<a href="' + this.list[i].displayLink() + '">' + this.list[i].displayHeadline() + '</a> </li>' + '\n');
    }
    returnArray.push('</ul>\n</div>');
    return returnArray.join("");
  }

};


exports.ArticleList = ArticleList;

})(this);
