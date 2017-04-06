/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select-checkbox.html';

Template.afCheckboxGroup_materialize.helpers({
  dsk:      Utility.dsk,
  itemAtts: Utility.selectedAttsAdjust,
})
