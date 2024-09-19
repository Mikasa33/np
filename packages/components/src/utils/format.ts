import { isFunction, isNil } from 'lodash-es'

export type Numeric = number | string

export function isNumeric(val: Numeric): val is string {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export function addUnit(value?: Numeric): string | undefined {
  if (!isNil(value)) {
    return isNumeric(value) ? `${value}px` : String(value)
  }
  return undefined
}

export function getMaybeFuncValue(val: any, params: any) {
  if (isFunction(val)) {
    return val(params)
  }
  return val
}
