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
    type = AutoForm.getInputType(self.afFieldInputAtts)
    _.contains(skipLabelTypes, type)

  skipLabel: ->
    self = this
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
    type = AutoForm.getInputType(self.afFieldInputAtts)
    self.skipLabel or _.contains(skipLabelTypes, type)

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

AutoForm.addInputType 'pickadate',
  template: 'afPickadate'
  valueIn: (val) ->
    formattedDate = moment(val).format "yyyy/mm/dd"
    return formattedDate
  valueOut: ->
    item = this.pickadate('picker').get('select')
    if item then result = item.obj
    result

Template.afFormGroup_materialize.rendered = ->
  form = AutoForm.find()

  @autorun =>
    value = AutoForm.getFieldValue form.formId, @data.atts.name

    if !!value
      @$('.input-field > label:not(:focus)').addClass 'active'
    else
      @$('.input-field > label:not(:focus)').removeClass 'active'

  return

Template['afPickadate'].rendered = ->
  @$('input')
    .pickadate(
      formatSubmit: 'yyyy/mm/dd',
      hiddenName: true
      closeOnSelect: true)
    .on('change', ->
      $(this).pickadate('picker').close()
    )

  if @data.value
    @$('input').parent().find('label').addClass 'active'
  return
