/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './tel.html';

Template.afInputTel_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
