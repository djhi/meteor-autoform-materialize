/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './afQuickField.html';

Template.afQuickField.helpers({
  isGroup: function afQuickFieldIsGroup() {
    var c = AutoForm.Utility.getComponentContext(this, "afQuickField");
    // Render a group of fields if we expect an Object and we don't have options
    // and we have not overridden the type
    const isObjectNpmSimplSchema = _.chain(c.defs.type.definitions).pluck('type').contains(Object).value();
    const isObjectOldSimpleSchema = c.defs.type === Object;
    const isObject = isObjectNpmSimplSchema || isObjectOldSimpleSchema;
    const result = (isObject && !c.atts.options && !c.atts.type);
    return result;
  },
  isFieldArray: function afQuickFieldIsFieldArray() {
    var c = AutoForm.Utility.getComponentContext(this, "afQuickField");
    // Render an array of fields if we expect an Array and we don't have options
    // and we have not overridden the type
    return (c.defs.type === Array && !c.atts.options && !c.atts.type);
  },
  groupAtts: function afQuickFieldGroupAtts() {
    // afQuickField passes `fields` and `omitFields` on to `afObjectField`
    // and `afArrayField`, but not to `afFormGroup`
    return _.omit(this, 'fields', 'omitFields');
  },
  isHiddenInput: function afQuickFieldIsHiddenInput() {
    var c = AutoForm.Utility.getComponentContext(this, "afQuickField");
    var inputType = c.atts.type;
    if (inputType) {
      var componentDef = AutoForm._inputTypeDefinitions[inputType];
      if (!componentDef) {
        throw new Error('AutoForm: No component found for rendering input with type "' + inputType + '"');
      }
      return componentDef.isHidden;
    }

    return false;
  }
});
