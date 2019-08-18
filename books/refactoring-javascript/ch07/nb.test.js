const { classify, labelProbabilities, trainAll, songList } = require("./nb");
var wish = require("wish");

describe("the file", function() {
  songList.addSong("imagine", ["c", "cmaj7", "f", "am", "dm", "g", "e7"], 0);
  songList.addSong("somewhereOverTheRainbow", ["c", "em", "f", "g", "am"], 0);
  songList.addSong("tooManyCooks", ["c", "g", "f"], 0);
  songList.addSong(
    "iWillFollowYouIntoTheDark",
    ["f", "dm", "bb", "c", "a", "bbm"],
    1
  );
  songList.addSong("babyOneMoreTime", ["cm", "g", "bb", "eb", "fm", "ab"], 1);
  songList.addSong(
    "creep",
    ["g", "gsus4", "b", "bsus4", "c", "cmsus4", "cm6"],
    1
  );
  songList.addSong(
    "paperBag",
    [
      "bm7",
      "e",
      "c",
      "g",
      "b7",
      "f",
      "em",
      "a",
      "cmaj7",
      "em7",
      "a7",
      "f7",
      "b"
    ],
    2
  );
  songList.addSong(
    "toxic",
    ["cm", "eb", "g", "cdim", "eb7", "d7", "db7", "ab", "gmaj7", "g7"],
    2
  );
  songList.addSong("bulletproof", ["d#m", "g#", "b", "f#", "g#m", "c#"], 2);
  trainAll();

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

  it("label probabilities", function() {
    wish(labelProbabilities.get("easy") === 0.3333333333333333);
    wish(labelProbabilities.get("medium") === 0.3333333333333333);
    wish(labelProbabilities.get("hard") === 0.3333333333333333);
  });
});
