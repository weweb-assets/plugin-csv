export default {
    editor: {},
    actions: [
        {
            name: 'Download data as CSV',
            code: 'downloadCSV',
            /* wwEditor:start */
            edit: () => import('./src/components/DownloadCSV.vue'),
            /* wwEditor:end */
        },
    ],
};
