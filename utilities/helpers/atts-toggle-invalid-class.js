Utility.helpers.attsToggleInvalidClass = function(atts) {
  var result = _.clone(atts);
  result = Utility.toggleInvalidClass(result);
  return result;
};
