var reducer = require("../dist/model/reducer");
var Action = require("../dist/model/actions")
var simulate = require("./test-helper");
var assert = require("assert");

describe("GRID_SIZE", function() {

  it("should create a 3x3 grid", function() {
    var state = {};
    var action = Action.gridSize(3);
    assert.equal([1, 2, 3, 4, 5, 6, 7, 8, 9], reducer(state, action));
  });

  it("should create a 4x4 grid", function() {
    var state = {};
    var action = Action.gridSize(4);
    assert.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], reducer(state, action));
  });


});
