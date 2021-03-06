function newForm(date, proLen, regLen) {
    var html = "";
    html = `<table border="1px">`;
    html += `<tr>`;
    if (regLen == 1 && proLen > 1) {
        html += `<th>地区</th><th>商品</th>`;
    } else {
        html += `<th>商品</th><th>地区</th>`;
    }
    html += `<th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>`;
    for (var i = 0; i < date.length; i++) {
        html += `<tr>`;
        if (regLen == 1 && proLen > 1) {
            html += `<td>` + date[i].region + `</td>`;
            html += `<td>` + date[i].product + `</td>`;
        } else {
            html += `<td>` + date[i].product + `</td>`;
            html += `<td>` + date[i].region + `</td>`;
        }
        for (var j = 0; j < date[i].sale.length; j++) {
            html += `<td>` + date[i].sale[j] + `</td>`;
        }
        html += `</tr>`;
    }
    html += `</table>`;
    result.innerHTML = html;
    mergeTable(0, date.length, 0);
}

function mergeTable(startRow, endRow, col) {
    var tb = document.getElementsByTagName("table")[0];
    for (var i = startRow; i < endRow; i++) {
        if (tb.rows[startRow].cells[col].innerHTML == tb.rows[i + 1].cells[col].innerHTML) { //如果相等就合并单元格,合并之后跳过下一行
            tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col]);
            tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1;
        } else {
            mergeTable(i + 1, endRow, col);
            break;
        }
    }
}