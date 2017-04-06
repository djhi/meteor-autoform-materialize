/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './password.html';

Template.afInputPassword_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});

Template.afInputPassword_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
