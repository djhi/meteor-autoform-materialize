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
- [poetic:materialize-scss](https://atmospherejs.com/poetic/materialize-scss) `meteor add poetic:materialize-scss`

## Usage and demo

You can checkout [the playground](https://github.com/djhi/meteor-autoform-materialize-playground) which is running [here](http://autoform-materialize-playground.meteor.com/).

## Additional type

### PickADate
Materialize uses [pickadate](https://github.com/amsul/pickadate.js) for date inputs.

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
      type:"pickadate"
    }
  }
});
```
#### Choosing a Timezone

By default, the field's value will be a `Date` object representing the selected date and time in the browser's timezone (i.e., based on the user's computer time settings). In most cases, you probably want the `Date` object relative to some other timezone that you have previously stored. For example, if the form is setting the start date of an event, you want the date to be relative to the event venue's timezone. You can specify a different IANA timezone ID by adding a `timezoneId` attribute.

```js
{
  date: {
    type: Date,
    autoform: {
      type: "pickadate",
      timezoneId: "America/New_York"
    }
  }
}
```

Or:

```js
{{> afFieldInput name="typeTest" type="pickadate" timezoneId="America/New_York"}}
```

#### Automatic Type Conversions

This input type is intended to be used with `type: Date` schema keys, but it also works with other schema types. Here's a list:

* `Date`: Value is stored as a `Date` object representing the selected date and time in the timezone you specified with the `timezoneId` attribute. By default, the timezone is that of the browser (i.e., the user's computer time settings).
* `String`: Value is stored as a string representation of the selected date in ISO format, e.g., "2014-11-25T00:00:00".
* `Number`: Value is stored as the result of calling `getTime()` on the `Date` object (representing the selected date and time in the timezone you specified).
* `Array`: If the schema expects an array of `Date` or `String` or `Number`, the value is converted to a one-item array and stored.

To provide pickadate options, set a `pickadateOptions` attribute equal to a helper that returns the options object.

### Switch

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
      type:"switch"
    }
  }
});
```

You may specify the `trueLabel` or `falseLabel` options to customize the switch.

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch" trueLabel="Online" falseLabel="Offline"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type:"switch"
      trueLabel:"Online"
      falseLabel:"Offline"
    }
  }
});
```
If you need other values than boolean, you may specify the `trueValue` or `falseValue` options to customize the switch.

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch" trueValue="online" falseValue="offline"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type:"switch"
      trueValue:"online"
      falseValue:"offline"
    }
  }
});
```

### Input with prepended icon
You can add icon to any field like this:
```
{{> afQuickField name='subject' icon='person'}}
```
For blank space in place of icon, just use "none":
```
{{> afQuickField name='subject' icon='none'}}
```

It also works for textarea:
```
{{> afQuickField name='message' type='textarea' icon='person'}}
```

# Troubleshooting

## Extra carets on selects

This happen when using materialize version `0.97.0`. A fix has been released with version `0.97.1` but there are other issues.

You should use `poetic:materialize-scss` until those problems are corrected.

## Contributors
- Gildas Garcia (@djhi)
- Razvan Teslaru (@rteslaru)
- Chun Yang (@Chun-Yang)

## License
autoform-materialize is licensed under the [MIT Licence](LICENSE), courtesy of [marmelab](http://marmelab.com).
