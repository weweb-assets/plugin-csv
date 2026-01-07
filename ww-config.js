export default {
    editor: {},
    actions: [
        {
            name: 'Download data as CSV',
            code: 'downloadCSV',
            deprecated: true,
            deprecatedMessage: 'This action is deprecated. Use the native "Download CSV" action instead.',
            /* wwEditor:start */
            edit: () => import('./src/components/DownloadCSV.vue'),
            /* wwEditor:end */
        },
    ],
};
