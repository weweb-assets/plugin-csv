<template>
    <wwEditorInputRow label="Data" type="array" required bindable :model-value="data" @update:modelValue="setData" />
    <wwEditorInputRow
        label="File name"
        type="query"
        required
        bindable
        placeholder="Enter a value"
        :model-value="fileName"
        @update:modelValue="setFileName"
    />
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Array, default: () => [{ __wwtype: 'f', code: '' }, null] },
    },
    emits: ['update:args'],
    computed: {
        data() {
            return this.args[0];
        },
        fileName() {
            return this.args[1];
        },
    },
    methods: {
        setData(data) {
            this.$emit('update:args', [data, this.fileName]);
        },
        setFileName(fileName) {
            this.$emit('update:args', [this.data, fileName]);
        },
    },
};
</script>
