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
        args: { type: Object, default: () => ({ data: { __wwtype: 'f', code: '' }, fileName: null }) },
    },
    emits: ['update:args'],
    computed: {
        data() {
            return this.args.data;
        },
        fileName() {
            return this.args.fileName;
        },
    },
    methods: {
        setData(data) {
            this.$emit('update:args', { ...this.args, data });
        },
        setFileName(fileName) {
            this.$emit('update:args', { ...this.args, fileName });
        },
    },
};
</script>
