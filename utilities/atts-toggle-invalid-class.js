Utility.attsToggleInvalidClass = function() {
  var atts;
  atts = _.clone(this.atts);
  atts = Utility.toggleInvalidClass(atts);
  return atts;
};
