var fs = require('fs');
var XLSX = require('xlsx')
var workbook = XLSX.readFile('/Users/maksymkaliberda/Downloads/GHGCalculator.xls');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);

let jsonData = [];

Object(xlData).forEach(el => {
    jsonData.push({
        zip: el.Zip,
        state: el.state,
        sub_region: el['Primary eGRID Subregion'],
        emmision: el['Subregion annual CO2e output emission rate (lb/MWh)'],
    })
})

console.log(jsonData);

fs.writeFile("./test.txt", JSON.stringify(jsonData), function(err) {
    if (err) {
        console.log(err);
    }
});
// console.log(xlData);
