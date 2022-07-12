<template>
  <button :class="['switch', checked && 'switch--active']" role="switch" @click="handleChange" />
</template>

<script setup lang="ts">
/*
 * @author: Lew
 * @e-mail: yl617341586@163.com
 * @date: 2022/07/12 22:07:24
 * @description: 选择开关
 */
import { ref, watchEffect } from 'vue';
const props = withDefaults(defineProps<{
    checked: boolean
}>(), {
    checked: false,
});
const emit = defineEmits<{
    (e: 'update:checked', checked: boolean): void;
    (e: 'change', checked: boolean): void;
}>();
const checked = ref<boolean>(false);
const handleChange = () => {
    checked.value = !checked.value;
    emit('update:checked', checked.value);
    emit('change', checked.value);
};
watchEffect(() =>  checked.value = props.checked);
</script>

<style scoped lang="less">
.switch {
    width: 44px;
    height: 22px;
    user-select: none;
    position: relative;
    border-radius: 100px;
    border: 1px solid transparent;
    line-height: 20px;
    background-color: #cccccc;
    transition: all ease-out 0.36s;
    cursor: pointer;

    &--active {
        background-color: #1890ff;

        &::after {
            transform: translateX(-100%);
            margin-left: -1px;
            left: 100% !important;
        }
    }

    &::after {
        box-shadow: 0 2px 4px #00230b33;
        transition: all ease-out 0.3s;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 1px;
        background-color: #fff;
        cursor: pointer;
    }
}
</style>