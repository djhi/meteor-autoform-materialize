Template.afSelectMultiple_materialize.helpers(Utility.helpers.optionAtts);

Template.afSelectMultiple_materialize.helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, 'browser-default');
    atts = Utility.toggleInvalidClass(atts);
    return atts;
  }
});
