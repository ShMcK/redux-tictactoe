var reducer = require("../dist/model/reducer").reducer;
var hasWon = require("../dist/model/win").hasWon;
var simulate = require("./test-helper");
var assert = require("assert");

describe("win condition", function() {

  describe("3x3 grid", function() {

    it("should win on a horizontal win", function() {
      assert.equal(true, hasWon("x", ["x", "x", "x", 4, 5, 6, 7, 8, 9]));
      assert.equal(true, hasWon("x", [1, 2, 3, "x", "x", "x", 7, 8, 9]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, "x", "x", "x"]));
    });

    it("should win on a vertical win", function() {
      assert.equal(true, hasWon("x", ["x", 2, 3, "x", 5, 6, "x", 8, 9]));
      assert.equal(true, hasWon("x", [1, "x", 3, 4, "x", 6, 7, "x", 9]));
      assert.equal(true, hasWon("x", [1, 2, "x", 4, 5, "x", 7, 8, "x"]));
    });

    it("should win on a diagonal win", function() {
      assert.equal(true, hasWon("x", ["x", 2, 3, 4, "x", 6, 7, 8, "x"]));
      assert.equal(true, hasWon("x", [1, 2, "x", 4, "x", 6, "x", 8, 9]));
    });

  });



  describe("4x4 grid", function() {
    it("should win on a horizontal win", function() {
      assert.equal(true, hasWon("x", ["x", "x", "x", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, "x", "x", "x", 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, "x", "x", "x", 8, 9, 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, "x", "x", "x", 9, 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, 8, "x", "x", "x", 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, 8, 9, "x", "x", "x", 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "x", "x", "x", 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, "x", "x", "x"]));
    });

    it("should win on a vertical win", function() {
      assert.equal(true, hasWon("x", ["x", 2, 3, 4, "x", 6, 7, 8, "x", 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, "x", 6, 7, 8, "x", 10, 11, 12, "x", 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, "x", 3, 4, 5, "x", 7, 8, 9, "x", 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, "x", 7, 8, 9, "x", 11, 12, 13, "x", 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, "x", 4, 5, 6, "x", 8, 9, 10, "x", 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, "x", 8, 9, 10, "x", 12, 13, 14, "x", 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, "x", 5, 6, 7, "x", 9, 10, 11, "x", 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, "x", 9, 10, 11, "x", 13, 14, 15, "x"]));
    });

    it("should win on a diagonal win", function() {
      assert.equal(true, hasWon("x", ["x", 2, 3, 4, 5, "x", 7, 8, 9, 10, "x", 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, "x", 3, 4, 5, 6, "x", 8, 9, 10, 11, "x", 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, "x", 6, 7, 8, 9, "x", 11, 12, 13, 14, "x", 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, "x", 7, 8, 9, 10, "x", 12, 13, 14, 15, "x"]));
      assert.equal(true, hasWon("x", [1, 2, "x", 4, 5, "x", 7, 8, "x", 10, 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, "x", 5, 6, "x", 8, 9, "x", 11, 12, 13, 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, "x", 8, 9, "x", 11, 12, "x", 14, 15, 16]));
      assert.equal(true, hasWon("x", [1, 2, 3, 4, 5, 6, 7, "x", 9, 10, "x", 12, 13, "x", 15, 16]));
    });

  });

});
