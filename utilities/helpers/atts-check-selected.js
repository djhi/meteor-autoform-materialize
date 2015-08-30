Utility.helpers.attsCheckSelected = function(atts, selected) {
    var result = _.clone(atts);
    if (selected) {
        result.checked = '';
    }
    return result;
};
