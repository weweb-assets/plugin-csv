export default {
    editor: {},
    functions: [
        {
            name: 'Download data to csv',
            code: 'downloadCSV',
            parameters: [
                { name: 'data', type: 'array' },
                { name: 'fileName', type: 'string' },
            ],
            /* wwEditor:start */
            edit: () => import('./src/components/DownloadCSV.vue'),
            /* wwEditor:end */
        },
    ],
};
