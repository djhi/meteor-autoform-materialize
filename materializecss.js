/* global AutoForm */

/*
 * Template helpers for "materializecss" templates
 */

// Template.registerHelper(
//   'attsPlusFormControlClassMaterializeCss',
//   function (oirginAtts) {
//     var atts = _.clone(oirginAtts)
//     // Add materializecss class
//     atts = AutoForm.Utility.addClass(atts, "form-control")
//     return atts
//   }
// )

Template.registerHelper(
  'attsPlusBtnClassMaterializeCss',
  function (context) {
    var atts = _.clone(context.atts)
    // Add materializecss class
    atts = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light')
    return atts
  }
)
