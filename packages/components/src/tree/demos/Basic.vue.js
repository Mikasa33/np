import { reactive } from 'vue';
import { NpTree } from '..';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const treeProps = reactive({
    blockLine: true,
    expandOnClick: true,
    immediate: true,
    onRequest: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        key: '1',
                        label: '道生一',
                        children: [
                            { key: '1-1', label: '一生二' },
                        ],
                    },
                    {
                        key: '2',
                        label: '道生一',
                        children: [
                            { key: '2-1', label: '一生二' },
                        ],
                    },
                    { key: '3', label: '道生一' },
                ]);
            }, 1000);
        });
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
        .NpTree;
    ({}.NpTree);
    __VLS_components.NpTree;
    // @ts-ignore
    [NpTree,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.treeProps), }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.treeProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.treeProps), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [treeProps,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NpTree: NpTree,
                treeProps: treeProps,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
