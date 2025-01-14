export default {
    editor: {},
    actions: [
        {
            name: 'Download data as CSV',
            code: 'downloadCSV',
            /* wwEditor:start */
            edit: () => import('./src/components/DownloadCSV.vue'),
            copilot: {
                description: 'Downloads data as a CSV file. If the data is an array of objects, it will create columns for all unique keys. If the data is an array of primitive values, it will create a single column.',
                returns: 'void',
                schema: {
                    data: {
                        type: 'array',
                        description: 'The data to export to CSV format. Can be an array of objects or primitive values',
                        bindable: true
                    },
                    fileName: {
                        type: 'string',
                        description: 'The name of the file to download (without .csv extension)',
                        bindable: true
                    }
                }
            },
            /* wwEditor:end */
        },
    ],
};