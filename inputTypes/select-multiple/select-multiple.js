/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select-multiple.html';

Template.afSelectMultiple_materialize.onRendered(function() {
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

Template.afSelectMultiple_materialize.helpers({
  optionAtts: Utility.optionAtts,
  atts: Utility.attsToggleInvalidClass.call(this),
  firstValueSelected: function () {
    if ((this.value.length===0) && (this.data.atts.firstOption)) {
      return true;
    }
    return false;
  }
});
