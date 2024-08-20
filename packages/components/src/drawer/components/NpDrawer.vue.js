import { reactiveOmit, reactivePick, useToggle } from '@vueuse/core';
import { NCard, NDrawer, NFlex } from 'naive-ui';
import Icon from '../../_components/Icon.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    closable: true,
    fullscreenable: true,
});
const __VLS_slots = defineSlots();
const show = defineModel('show');
const drawerProps = reactiveOmit(props, 'show', 'closable', 'fullscreenable', 'title');
const cardProps = reactivePick(props, 'title');
const [fullscreen, toggleFullscreen] = useToggle();
const __VLS_withDefaultsArg = (function (t) { return t; })({
    closable: true,
    fullscreenable: true,
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
        .NDrawer;
    ({}.NDrawer);
    ({}.NDrawer);
    __VLS_components.NDrawer;
    __VLS_components.NDrawer;
    // @ts-ignore
    [NDrawer, NDrawer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.drawerProps), show: ((__VLS_ctx.show)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .NCard;
    ({}.NCard);
    ({}.NCard);
    __VLS_components.NCard;
    __VLS_components.NCard;
    // @ts-ignore
    [NCard, NCard,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ bordered: ((false)), ...(__VLS_ctx.cardProps), }));
    const __VLS_8 = __VLS_7({ bordered: ((false)), ...(__VLS_ctx.cardProps), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ bordered: ((false)), ...(__VLS_ctx.cardProps), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "header-extra": __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_normalizeSlot(__VLS_slots['header-extra'])?.({});
        // @ts-ignore
        [drawerProps, show, cardProps,];
        // @ts-ignore
        const __VLS_13 = {}
            .NFlex;
        ({}.NFlex);
        ({}.NFlex);
        __VLS_components.NFlex;
        __VLS_components.NFlex;
        // @ts-ignore
        [NFlex, NFlex,];
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ align: ("center"), justify: ("end"), size: ("small"), }));
        const __VLS_15 = __VLS_14({ align: ("center"), justify: ("end"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        ({}({ align: ("center"), justify: ("end"), size: ("small"), }));
        const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15));
        if (__VLS_ctx.fullscreenable) {
            // @ts-ignore
            [Icon, Icon,];
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(Icon, new Icon({}));
            const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({}));
            const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Icon, __VLS_20));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen')) }, ...{ class: ("text-16px") }, });
            __VLS_styleScopedClasses = (fullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen');
            // @ts-ignore
            [fullscreenable, fullscreen,];
            __VLS_nonNullable(__VLS_23.slots).default;
        }
        if (__VLS_ctx.closable) {
            // @ts-ignore
            [Icon, Icon,];
            // @ts-ignore
            const __VLS_24 = __VLS_asFunctionalComponent(Icon, new Icon({}));
            const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
            ({}({}));
            const __VLS_28 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Icon, __VLS_25));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("i-icon-park-outline-close text-16px") }, });
            // @ts-ignore
            [closable,];
            __VLS_nonNullable(__VLS_28.slots).default;
        }
        __VLS_nonNullable(__VLS_18.slots).default;
    }
    __VLS_normalizeSlot(__VLS_slots['default'])?.({});
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-16px'];
        __VLS_styleScopedClasses['i-icon-park-outline-close'];
        __VLS_styleScopedClasses['text-16px'];
    }
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NCard: NCard,
                NDrawer: NDrawer,
                NFlex: NFlex,
                Icon: Icon,
                show: show,
                drawerProps: drawerProps,
                cardProps: cardProps,
                fullscreen: fullscreen,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
export default {};
;
