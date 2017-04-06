/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select-checkbox-inline.html';

Template.afCheckboxGroupInline_materialize.helpers({
  dsk:      Utility.dsk,
  itemAtts: Utility.selectedAttsAdjust
})
