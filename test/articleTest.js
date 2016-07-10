/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;
var Article = require('../src/article.js').Article;


describe('Article', function(){

  it('can store a headline', function() {
    var article = new Article("hello");
    expect(article.displayHeadline()).to.include("hello");
  });


});
