/* wwEditor:start */
import './components/DownloadCSV.vue';
/* wwEditor:end */

export default {
    /*=============================================m_ÔÔ_m=============================================\
        CSV API
    \================================================================================================*/
    async downloadCSV(data, fileName, wwUtils) {
        /* wwEditor:start */
        wwUtils && wwUtils.log({ label: 'Data', preview: data });
        /* wwEditor:end */

        if (_.isObject(data) && data.data) data = data.data;
        if (!Array.isArray(data)) throw new Error('Data must be an array (or a collection).');

        const titles = [...new Set(data.map(item => Object.keys(item)).flat())];
        data = [titles, ...data.map(item => titles.map(title => item[title]))];

        const csvContent = data
            .map(e => e.map(i => `"${`${i !== undefined && i !== null ? i : ''}`.replace('"', '""')}"`).join(','))
            .join('\n');

        return downloadFile(csvContent, fileName || 'file.csv');
    },
};

function downloadFile(data, fileName) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = `data:text/csv;charset=utf-8,${encodeURI(data)}`;
    a.download = `${fileName}.csv`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    a.remove();
    return data;
}
