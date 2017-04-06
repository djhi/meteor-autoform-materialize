/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select-radio-inline.html';

Template.afRadioGroupInline_materialize.helpers({
  dsk:      Utility.dsk,
  itemAtts: Utility.selectedAttsAdjust
})
