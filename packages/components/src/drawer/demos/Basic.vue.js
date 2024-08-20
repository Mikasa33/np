import { ref } from 'vue';
import { NButton } from 'naive-ui';
import { NpDrawer } from '..';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const show = ref(false);
const drawerProps = {
    title: '标题信息',
};
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
        .NButton;
    ({}.NButton);
    ({}.NButton);
    __VLS_components.NButton;
    __VLS_components.NButton;
    // @ts-ignore
    [NButton, NButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.show = true;
            // @ts-ignore
            [show,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    const __VLS_8 = {}
        .NpDrawer;
    ({}.NpDrawer);
    ({}.NpDrawer);
    __VLS_components.NpDrawer;
    __VLS_components.NpDrawer;
    // @ts-ignore
    [NpDrawer, NpDrawer,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }));
    const __VLS_10 = __VLS_9({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }));
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    // @ts-ignore
    [show, drawerProps,];
    __VLS_nonNullable(__VLS_13.slots).default;
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
                NButton: NButton,
                NpDrawer: NpDrawer,
                show: show,
                drawerProps: drawerProps,
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
