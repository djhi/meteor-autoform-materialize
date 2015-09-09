Utility.itemAttsWithUniqId = function() {
  var atts;
  atts = _.clone(this.atts);
  atts.id = atts.id + "_" + this._id;
  delete atts['data-schema-key'];
  return atts;
}
