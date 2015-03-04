Meteor Autoform Materialize templates
=========================

Adds [materialize](http://materializecss.com/) templates for autoform.

## Setup

1. `meteor add gildaspk:autoform-materialize`
2. In a client file (ex: `/client/config/autoform.js`)
  ```
  AutoForm.setDefaultTemplate('materialize');
  ```

You must add materialize CSS and JavaScript yourself. Some packages can help:

- [materialize:materialize](https://atmospherejs.com/materialize/materialize) `meteor add materialize:materialize`
- [d0minikk:materialize-meteor](https://atmospherejs.com/d0minikk/materialize-meteor) `meteor add d0minikk:materialize-meteor`
- [grigio:materialize-sass](https://atmospherejs.com/grigio/materialize-sass) `meteor add grigio:materialize-sass`
  Note this one doesn't add the scripts but allows you to customize the CSS with SASS

## Additional type

Materialize uses [pickadate](https://github.com/gildaspk/meteor-autoform-materialize/blob/master/amsul.ca/pickadate.js/date) for date inputs.

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

You an also use [switches](http://materializecss.com/forms.html#switches)

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type="switch"
    }
  }
});
```
