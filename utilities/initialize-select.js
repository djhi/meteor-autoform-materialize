Utility.initializeSelect = function() {
  var template = this
  var select = template.$('select')
  select.material_select()

  var initialize = _.debounce(function () {
    select.material_select()
  }, 500)

  template.autorun(function () {
    // reinitialize select when data changes
    Template.currentData()
    initialize()
  })
}
