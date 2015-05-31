var autoformHelpers = Template.afCheckboxGroup.__helpers;
Utility.helpersGroup = {
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = Utility.toggleInvalidClass(atts);
    if (this.selected) {
      atts.checked = '';
    }
    delete atts['data-schema-key'];
    return atts;
  },
  dsk: autoformHelpers[' dsk'],
  itemAtts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts.id = atts.id + "_" + this._id;
    delete atts['data-schema-key'];
    return atts;
  }
};
