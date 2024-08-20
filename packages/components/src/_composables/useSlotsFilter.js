import { computed, useSlots } from 'vue';
/**
 * 筛选插槽
 * @param fn 筛选条件
 */
export function useSlotsFilter(fn) {
    const _slots = useSlots();
    const slotKeys = computed(() => {
        return Object.keys(_slots).filter(fn);
    });
    const slots = computed(() => {
        return slotKeys.value.reduce((acc, key) => {
            acc[key] = _slots[key];
            return acc;
        }, {});
    });
    return {
        slotKeys,
        slots,
    };
}
