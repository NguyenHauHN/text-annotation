/**
 * Created by crawler on 30/11/2017.
 */

app.controller("TextAnnotation", function ($scope) {

  var tags = [
    ["Nhật ký", "N", "B-NP"],
    ["SEA", "Np", "B-NP"],
    ["Games", "Np", "B-NP"],
    ["ngày", "N", "B-NP"],
    ["21/8", "M", "B-NP"],
    [":", "CH", "O"],
    ["Ánh", "Np", "B-NP"],
    ["Viên", "Np", "I-NP"],
    ["thắng", "V", "B-VP"],
    ["giòn giã", "N", "B-NP"],
    ["ở", "E", "B-PP"],
    ["vòng", "N", "B-NP"],
    ["loại", "N", "B-NP"],
    [".", "CH", "O"]
  ];
  var tokens = _.map(tags, function(tag) {
    return tag[0];
  });
  var text = tokens.join(" ");
  var posTags = tags;
  var posEntities = generateEntitiesFromTags(posTags);
  $scope.pos_tag = {
    "config": POSTagBratConfig,
    "doc": {
      "text": text,
      "entities": posEntities
    }
  };

});
