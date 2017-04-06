/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './materializeTimePicker';
import './quickForm.html';

const TIME_FORMAT = 'h:mm A';

//add autoform input
AutoForm.addInputType('pickatime', {
  template: 'afInputPickatime_material',
  valueOut: function() {
    console.log('timePicker: valueOut.this', this);
    return this.val();
  }
});

//when created
Template.afInputPickatime_material.onCreated(function() {

  //initialise reactive var with value
  this.reactiveValue = new ReactiveVar(this.data.value);

});

//when rendered
Template.afInputPickatime_material.onRendered(function() {
  const modalId = 'pickatime_modal_'+this.data.atts.id;
  const blazeRootNode = $('#__blaze-root').get(0);
  Blaze.renderWithData(
    Template.materializeTimePickerModal,
    {
      id: modalId,
      value: this.reactiveValue
    },
    blazeRootNode
  );
});

//helpers
Template.afInputPickatime_material.helpers({
  reactiveValue() {
    return Template.instance().reactiveValue.get();
  },
  attr() {
    const instance = Template.instance();
    const atts = instance.data.atts;
    const val = instance.reactiveValue.get();
    return {
      'id'                : atts.id,
      'data-schema-key'   : atts['data-schema-key'],
      'class'             : 'js-pickatime-input',
      'type'              : 'text',
      'data-value'        : val,
      'value'             : val
    };
  }
});

//events
Template.afInputPickatime_material.events({
  'click .js-pickatime-input': function(event, instance) {
    const modalId = '#pickatime_modal_'+instance.data.atts.id;
    $(modalId).addClass('target');
    $(modalId).modal('open');
  }
});
