/* wwEditor:start */
import './components/DownloadCSV.vue';
/* wwEditor:end */

export default {
    /*=============================================m_ÔÔ_m=============================================\
        CSV API
    \================================================================================================*/
    downloadCSV({ data, fileName }, wwUtils) {
        if (_.isObject(data) && data.data) data = data.data;
        /* wwEditor:start */
        wwUtils && wwUtils.log({ label: 'Data', preview: data });
        /* wwEditor:end */
        if (!Array.isArray(data)) throw new Error('Data must be an array (or a collection).');

        if (typeof data[0] === 'object') {
            const titles = [...new Set(data.map(item => Object.keys(item)).flat())];
            data = [titles, ...data.map(item => titles.map(title => item[title]))];
        } else {
            data = data.map(item => [item]);
        }

        const csvContent = data
            .map(e => e.map(i => `"${`${i !== undefined && i !== null ? i : ''}`.replace('"', '""')}"`).join(','))
            .join('\n');

        downloadFile(csvContent, fileName || 'file');
    },
};

function downloadFile(data, fileName) {
    const a = document.createElement('a');
    a.style.display = 'none';
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName}.csv`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    a.remove();
}
