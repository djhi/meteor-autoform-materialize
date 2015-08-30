Utility.helpers.optionAtts = function() {
    var atts = {
        value: this.value
    };

    if (this.selected) {
        atts.selected = '';
    }
    return atts;
};
