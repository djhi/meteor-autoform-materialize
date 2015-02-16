Meteor [Autoform](https://github.com/aldeed/meteor-autoform) Materialize templates
======================

Adds [materialize](http://materializecss.com/) templates for autoform.

## Setup ##

1. ```meteor add gildaspk:autoform-materialize```
2. In a client file (ex: `/client/config/autoform.js`)
  ```
  AutoForm.setDefaultTemplate('materialize');
  ```

## Additional type ##

Materialize uses [pickadate](amsul.ca/pickadate.js/date) for date inputs.

You can apply it directly in your template:
```
{{> afFieldInput name='dateFieldName' type="pickadate"}}
```

You can also specify it at the schema level:
```
MySchema = new SimpleSchema({
  dateFieldName: {
    type: Date
    autoform: {
      type="pickadate"
    }
  }
});

```
