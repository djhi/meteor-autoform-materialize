/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './text.html';

Template.afInputText_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
})
