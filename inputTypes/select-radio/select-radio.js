/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select-radio.html';

Template.afRadioGroup_materialize.helpers({
  dsk:      Utility.dsk,
  itemAtts: Utility.selectedAttsAdjust
})
