Template.afBooleanRadioGroup_materialize.helpers({
    atts: function() {
        return Utility.helpers.attsToggleInvalidClass(this.atts);
    },
    falseAtts: function() {
        var atts;
        atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');
        if (this.value === false) {
            atts.checked = '';
        }
        return atts;
    },
    trueAtts: function() {
        var atts;
        atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');
        if (this.value === true) {
            atts.checked = '';
        }
        return atts;
    },
    dsk: function() {
        return {
            'data-schema-key': this.atts['data-schema-key']
        };
    }
});
