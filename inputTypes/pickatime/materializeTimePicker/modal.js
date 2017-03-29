/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './modal.html';
import './picker.js';

Template.materializeTimePickerModal.onRendered(() => {
  const instance = Template.instance();
  const modalId = '#'+instance.data.id;

  //init the modal
  $(modalId).modal({

    //when modal is opened
    ready: (modal, trigger) => {

      //render the picker in modal content
      const modalContentNode = $(modalId).find('.modal-content').get(0);
      Blaze.renderWithData(Template.materializeTimePicker, {value: instance.data.value}, modalContentNode);
    },

    //when modal is closed
    complete: () => {

      //remove all content from the modal
      $(modalId).find('.modal-content').empty();
    }
  });
});

Template.materializeTimePickerModal.events({
  'click .js-materialize-time-picker-modal-clear': function(event, template){
    const instance = Template.instance();
    instance.data.value.set(undefined);
  }
});
