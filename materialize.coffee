###
* Template helpers for "materialize" template
###
Template['quickForm_materialize'].helpers
  submitButtonAtts: ->
    qfAtts = @atts
    atts = {}
    if typeof qfAtts.buttonClasses == 'string'
      atts['class'] = qfAtts.buttonClasses
    else
      atts['class'] = 'btn waves-effect waves-light'
    atts

Template['afFormGroup_materialize'].helpers
  labelFirst: ->
    skipLabelTypes = [
      'select'
      'boolean-select'
      'select-multiple'
    ]
    type = AutoForm.getInputType(@afFieldInputAtts)
    _.contains(skipLabelTypes, type)

  skipLabel: ->
    skipLabelTypes = [
      'checkbox'
      'checkbox-group'
      'boolean-checkbox'
      'select-radio'
      'select-radio-group'
      'select-radio-group-inline'
      'boolean-radio'
      'boolean-radio-group'
      'toggle'
    ]
    type = AutoForm.getInputType(@afFieldInputAtts)
    @skipLabel or _.contains(skipLabelTypes, type)

_.each [
  'afInputButton_materialize'
  'afInputSubmit_materialize'
  'afInputReset_materialize'
], (tmplName) ->
  Template[tmplName].helpers atts: ->
    atts = _.clone(@atts)
    # Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light')
    atts
  return

Template['afRadio_materialize'].helpers
  atts: ->
    atts = _.clone(@atts)
    if @selected
      atts.checked = ''
    atts

Template['afTextarea_materialize'].helpers
  atts: ->
    atts = _.clone(@atts)
    atts = AutoForm.Utility.addClass(atts, "materialize-textarea")
    atts

_.each [
  'afCheckboxGroup_materialize'
  'afRadioGroup_materialize'
  'afCheckboxGroupInline_materialize'
  'afRadioGroupInline_materialize'
], (tmplName) ->
  Template[tmplName].helpers
    atts: ->
      atts = _.clone(@atts)
      if @selected
        atts.checked = ''
      # remove data-schema-key attribute because we put it
      # on the entire group
      delete atts['data-schema-key']
      return atts
    dsk: ->
      { 'data-schema-key': @atts['data-schema-key'] }
  return

selectHelpers = optionAtts: ->
  item = this
  atts = value: item.value
  if item.selected
    atts.selected = ''
  atts

Template['afSelect_materialize'].helpers selectHelpers
Template['afSelectMultiple_materialize'].helpers selectHelpers
Template['afBooleanSelect_materialize'].helpers selectHelpers

Template['afBooleanRadioGroup_materialize'].helpers
  falseAtts: ->
    atts = _.omit(@atts, 'trueLabel', 'falseLabel', 'data-schema-key')
    if @value == false
      atts.checked = ''
    atts
  trueAtts: ->
    atts = _.omit(@atts, 'trueLabel', 'falseLabel', 'data-schema-key')
    if @value == true
      atts.checked = ''
    atts
  dsk: ->
    { 'data-schema-key': @atts['data-schema-key'] }

Template.afSelect_materialize.rendered = ->
  @$('select').material_select()

  # ensure the dropdown is reset when options change
  Tracker.autorun =>
    options = @data.items
    @$('select').material_select()

  return

Template.afBooleanSelect_materialize.rendered = ->
  @$('select').material_select()

  # ensure the dropdown is reset when options change
  Tracker.autorun =>
    options = @data.items
    @$('select').material_select()

  return

Template.afSelectMultiple_materialize.rendered = ->
  console.warn "materialize does not support select with multiple"
  @$('select').material_select()

  # ensure the dropdown is reset when options change
  Tracker.autorun =>
    options = @data.items
    @$('select').material_select()

  return

Template.afFormGroup_materialize.rendered = ->
  form = AutoForm.find()

  @autorun =>
    value = AutoForm.getFieldValue form.formId, @data.atts.name

    if !!value
      @$('.input-field > label:not(:focus)').addClass 'active'
    else
      @$('.input-field > label:not(:focus)').removeClass 'active'

  return

DEFAULT_PICKADATE_FORMAT = 'yyyy/mm/dd'
DEFAULT_PICKADATE_FORMAT_SUBMIT = 'yyyy/mm/dd'

AutoForm.addInputType 'pickadate',
  template: 'afPickadate'
  valueIn: (val) ->
    result = val
    # datetimepicker expects the date to represent local time,
    # so we need to adjust it if there's a timezoneId specified
    timezoneId = atts.timezoneId
    if typeof timezoneId == 'string'
      if typeof moment.tz != 'function'
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app')
      if val instanceof Date
        result = moment(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId), 'YYYY-MM-DD[T]HH:mm:ss.SSS').toDate()
    result

  valueOut: ->
    item = this.pickadate('picker').get('select')
    if item then result = item.obj
    result
  valueConverters:
    'string': (val) ->
      if val instanceof Date then val.toString() else val
    'stringArray': (val) ->
      if val instanceof Date
        return [ val.toString() ]
      val
    'number': (val) ->
      if val instanceof Date then val.getTime() else val
    'numberArray': (val) ->
      if val instanceof Date
        return [ val.getTime() ]
      val
    'dateArray': (val) ->
      if val instanceof Date
        return [ val ]
      val
  contextAdjust: (context) ->
    if context.atts.timezoneId
      context.atts["data-timezone-id"] = context.atts.timezoneId

    delete context.atts.timezoneId
    context

Template['afPickadate'].rendered = ->
  opts = _.defaults data.atts.pickadateOptions,
    format: DEFAULT_PICKADATE_FORMAT_SUBMIT,
    hiddenName: true
    closeOnSelect: true

  picker = @$('input').pickadate opts

  @$('input').on 'change', ->
    $(this).pickadate('picker').close()

  if @data.value
    @$('input').parent().find('label').addClass 'active'

  # set and reactively update values
  @autorun ->
    data = Template.currentData()

    if data.value instanceof Date
      picker.set 'select', data.value
    else
      picker.set 'clear'

    # set start date if there's a min in the schema
    if data.min instanceof Date
      picker.set 'min', data.min

    # set end date if there's a max in the schema
    if data.max instanceof Date
      picker.set 'max', data.max

  return

Template.afPickadate.helpers
  atts: ->
    atts = _.clone @atts
    delete atts.dateTimePickerOptions;
    atts

AutoForm.addInputType 'switch',
  template: 'afSwitch'
  valueIn: (value) ->
    console.log value
    return value
  valueOut: ->
    input = this[0]
    checked = input.checked
    if checked
      result = (input.attributes.trueValue?.value) || true
    else
      result = (input.attributes.falseValue?.value) || false

    result

Template.afSwitch.rendered = ->
  input = @$('input')
  @autorun =>
    data = Template.currentData()
    trueValue = (@data.atts.trueValue || true)
    input.prop 'checked', (data.value == trueValue)
