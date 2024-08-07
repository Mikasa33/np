import type dayjs from 'dayjs'

/**
 * 展示时间 props
 */
export interface NpViewTimeProps {
  /**
   * 时间值
   */
  value?: string | number | Date | dayjs.Dayjs
  /**
   * 格式化规则
   */
  format?: string
}
