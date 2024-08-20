import type { Component, ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { formItemProps, formProps } from './props'

export type FormProps = ExtractPublicPropTypes<typeof formProps>

export type FormItemProps = ExtractPublicPropTypes<typeof formItemProps>

export type FormItemComponentType =
  | 'NAutoComplete'
  | 'NCascader'
  | 'NColorPicker'
  | 'NDatePicker'
  | 'NDynamicInput'
  | 'NInput'
  | 'NInputNumber'
  | 'NSelect'
  | 'NSlider'
  | 'NSwitch'
  | 'NTimePicker'
  | 'NTreeSelect'
  | Component

export interface FormSlots {
  [key: `item-${string}`]: (props: { props: FormItemProps, path: string, value: Record<string, any> }) => VNodeChild
  'gi-suffix': (props: { overflow: boolean }) => VNodeChild
}
