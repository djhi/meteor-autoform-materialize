Utility.attsCheckSelected = function() {
  var atts = Utility.attsToggleInvalidClass.call(this);
  if (this.selected) {
    atts.checked = '';
  }
  return atts;
};
