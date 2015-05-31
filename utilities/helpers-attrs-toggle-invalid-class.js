Utility.helpersAttrsToggleInvalidClass = {
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = Utility.toggleInvalidClass(atts);
    return atts;
  }
};
