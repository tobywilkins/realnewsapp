(function(exports) {

  function Article(headline,link) {

    this.headline = headline;
    this.articleLink = link;

  }

  Article.prototype = {

    displayHeadline: function() {
      return this.headline;
    },

    displayLink: function() {
      return this.articleLink;
    }


  };

  exports.Article = Article;

})(this);
