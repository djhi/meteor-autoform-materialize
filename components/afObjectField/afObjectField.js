/*jshint esversion: 6 */

import { Template } from 'meteor/templating';

Template.afObjectField_material.helpers({
  quickFieldsAtts: function () {
    return _.pick(this, 'name', 'id-prefix');
  }
});
