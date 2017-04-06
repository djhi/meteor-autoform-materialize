/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './color.html';

Template.afInputColor_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
