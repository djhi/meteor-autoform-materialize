/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './afQuickField.html';

Template.afObjectField_materialize.helpers({
  quickFieldsAtts: function () {
    return _.pick(this, 'name', 'id-prefix');
  }
});
