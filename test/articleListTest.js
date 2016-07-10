/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;
var ArticleList = require('../src/articleList.js').ArticleList;
var sinon = require('sinon');
var Article = sinon.stub();
Article.returnsArg(0);

describe('Article', function(){

  it('can create an article', function() {
    var articlelist = new ArticleList(Article);
    articlelist.createArticle("test article");
    expect(articlelist.displayListInHTML()).to.include("test article");
  });


});
