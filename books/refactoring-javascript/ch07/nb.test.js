const { classify } = require("./nb");
var wish = require("wish");

describe("the file", function() {
  it("works", function() {
    with (true);
  });

  it("classifies", function() {
    var classified = classify([
      "f#m7",
      "a",
      "dadd9",
      "dmaj7",
      "bm",
      "bm7",
      "d",
      "f#m"
    ]);
    // wish(classified.get("easy"), true); 로 특성화 테스트하여 값을 얻어봄
    wish(classified.get("easy") === 1.3433333333333333);
    wish(classified.get("medium") === 1.5060259259259259);
    wish(classified.get("hard") === 1.6884223991769547);
  });
});
