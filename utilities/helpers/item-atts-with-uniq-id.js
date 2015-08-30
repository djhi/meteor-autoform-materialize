Utility.helpers.itemAttsWithUniqId = function(atts) {
  var result;
  result = _.clone(atts);
  result.id = result.id + "_" + this._id;
  delete result['data-schema-key'];
  return result;
}
