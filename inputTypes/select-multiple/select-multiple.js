/*jshint esversion: 6 */

Template.afSelectMultiple_material.onRendered(function() {
  //init select
  $('select').material_select();

  //get select wrapper
  const select = $('#'+this.data.atts.id);
  const selectWrapper = select.parent();

  //if no value is defined and firstOption is defined
  if ((this.data.value.length===0) && (this.data.atts.firstOption)) {

    //initialise value
    this.value.set(this.data.atts.firstOption);
    const input = selectWrapper.find('input.select-dropdown:first');
    input.attr('value', this.data.atts.firstOption);
  }
});

Template.afSelectMultiple_material.helpers({
  optionAtts: Utility.optionAtts,
  atts: Utility.attsToggleInvalidClass.call(this),
  firstValueSelected: function () {
    if ((this.value.length===0) && (this.data.atts.firstOption)) {
      return true;
    }
    return false;
  }
});
