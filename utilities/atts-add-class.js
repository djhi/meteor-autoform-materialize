Utility.attsAddClass = function() {
  var atts = _.clone(this.atts)
  atts = AutoForm.Utility.addClass(
    atts,
    'btn waves-effect waves-light'
  )
  return atts
}
