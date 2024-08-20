import { NEmpty, NSpin, NTree } from 'naive-ui';
import { reactiveOmit } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { isArray } from 'lodash-es';
import { useSlotsFilter } from '../../_composables/useSlotsFilter';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    childrenField: 'children',
    disabledField: 'disabled',
    keyboard: true,
    keyField: 'key',
    labelField: 'label',
    selectable: true,
});
const slots = defineSlots();
const checkedKeys = defineModel('checkedKeys', { default: () => ([]) });
const expandedKeys = defineModel('expandedKeys', { default: () => ([]) });
const loading = defineModel('loading', { default: false });
const selectedKeys = defineModel('selectedKeys', { default: () => ([]) });
const treeProps = reactiveOmit(props, 'checkedKeys', 'expandedKeys', 'selectedKeys');
const data = ref([]);
const { slotKeys } = useSlotsFilter((key) => key.includes('label-'));
/**
 * 节点内容的渲染函数
 * @param node 节点相关信息
 * @param node.option 节点信息
 * @param node.checked 节点是否被勾选
 * @param node.selected 节点是否被选中
 */
function renderLabel(node) {
    const slotKey = slotKeys.value.find((key) => key.replace('label-', '') === node.option.key);
    // 插槽，优先级最高
    if (slotKey) {
        return slots[slotKey](node);
    }
    // 节点内容的渲染函数
    if (props.renderLabel) {
        return props.renderLabel(node);
    }
    // 节点内容
    return node.option[props.labelField];
}
/**
 * 请求数据
 * @param params 请求参数
 */
async function request(params) {
    loading.value = true;
    try {
        const res = await props.onRequest?.({ ...params });
        if (isArray(res)) {
            data.value = res;
        }
    }
    finally {
        loading.value = false;
    }
}
/**
 * 刷新
 * @param params 请求参数
 */
function refresh(params) {
    request(params);
}
onMounted(() => {
    // 立即请求数据
    if (props.immediate) {
        refresh();
    }
});
const __VLS_exposed = {
    refresh,
};
defineExpose({
    refresh,
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    childrenField: 'children',
    disabledField: 'disabled',
    keyboard: true,
    keyField: 'key',
    labelField: 'label',
    selectable: true,
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
const __VLS_defaults = {};
const __VLS_modelEmitsType = (await import('vue')).defineEmits();
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .NSpin;
    ({}.NSpin);
    ({}.NSpin);
    __VLS_components.NSpin;
    __VLS_components.NSpin;
    // @ts-ignore
    [NSpin, NSpin,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ show: ((__VLS_ctx.loading)), size: ("small"), }));
    const __VLS_2 = __VLS_1({ show: ((__VLS_ctx.loading)), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ show: ((__VLS_ctx.loading)), size: ("small"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .NTree;
    ({}.NTree);
    ({}.NTree);
    __VLS_components.NTree;
    __VLS_components.NTree;
    // @ts-ignore
    [NTree, NTree,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...(__VLS_ctx.treeProps), checkedKeys: ((__VLS_ctx.checkedKeys)), expandedKeys: ((__VLS_ctx.expandedKeys)), selectedKeys: ((__VLS_ctx.selectedKeys)), data: ((__VLS_ctx.data)), renderLabel: ((__VLS_ctx.renderLabel)), ...{ class: (({ 'opacity-50 pointer-events-none': __VLS_ctx.loading })) }, }));
    const __VLS_8 = __VLS_7({ ...(__VLS_ctx.treeProps), checkedKeys: ((__VLS_ctx.checkedKeys)), expandedKeys: ((__VLS_ctx.expandedKeys)), selectedKeys: ((__VLS_ctx.selectedKeys)), data: ((__VLS_ctx.data)), renderLabel: ((__VLS_ctx.renderLabel)), ...{ class: (({ 'opacity-50 pointer-events-none': __VLS_ctx.loading })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...(__VLS_ctx.treeProps), checkedKeys: ((__VLS_ctx.checkedKeys)), expandedKeys: ((__VLS_ctx.expandedKeys)), selectedKeys: ((__VLS_ctx.selectedKeys)), data: ((__VLS_ctx.data)), renderLabel: ((__VLS_ctx.renderLabel)), ...{ class: (({ 'opacity-50 pointer-events-none': __VLS_ctx.loading })) }, }));
    __VLS_styleScopedClasses = ({ 'opacity-50 pointer-events-none': loading });
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { empty: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'opacity-0': __VLS_ctx.loading })) }, });
        __VLS_styleScopedClasses = ({ 'opacity-0': loading });
        if (slots.empty) {
            __VLS_normalizeSlot(slots['empty'])?.({});
            // @ts-ignore
            [loading, loading, loading, treeProps, checkedKeys, expandedKeys, selectedKeys, data, renderLabel,];
        }
        else {
            // @ts-ignore
            const __VLS_13 = {}
                .NEmpty;
            ({}.NEmpty);
            __VLS_components.NEmpty;
            // @ts-ignore
            [NEmpty,];
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
            const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
            ({}({}));
            const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15));
        }
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    return slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NEmpty: NEmpty,
                NSpin: NSpin,
                NTree: NTree,
                checkedKeys: checkedKeys,
                expandedKeys: expandedKeys,
                loading: loading,
                selectedKeys: selectedKeys,
                treeProps: treeProps,
                data: data,
                renderLabel: renderLabel,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    props: {},
    emits: {},
});
export default {};
;
