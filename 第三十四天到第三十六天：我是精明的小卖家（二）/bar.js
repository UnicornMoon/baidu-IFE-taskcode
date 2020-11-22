function svg(data) {
    // 定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    var w = 600, //绘图宽度
        h = 500, //绘图高度
        axisX = 500, //坐标横轴长度
        axisY = 500, //坐标纵轴长度
        startX = 20, //原点X坐标
        startY = 500; //原点Y坐标
    // 定义好每一个柱子的宽度及柱子的间隔宽度
    var barWidth = 32, //柱宽度
        interval = 9; //柱与柱的间距
    var max = Number(data[0]);
    for (var i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = Number(data[i]);
        }
    }
    // console.log(max);
    // var percent = max / axisY;

    var svgStart = `<svg width="` + w + `" height="` + h + `" version="1.1"
    xmlns="http://www.w3.org/2000/svg">`
    var endStart = `</svg>`;
    // 横轴
    var row = "<line x1=" + `"` + startX + `" y1="` + startY + `" x2="` + (startX + axisX) + `" y2="` + startY + '" style="stroke:black;stroke-width:3"/>';
    // 纵轴
    var col = "<line x1=" + `"` + startX + `" y1="` + startY + `" x2="` + startX + `" y2="` + (startY - axisY) + '" style="stroke:black;stroke-width:3"/>';
    var svgT = svgStart + row + col;
    // 遍历数据，计算将要绘制柱子的高度和位置，绘制每一根柱子
    for (var i = 0; i < data.length; i++) {
        let rectStartX = startX + interval * (i + 1) + barWidth * i;
        let rectStartY = startY - data[i];
        var bar = `"<rect x="` + rectStartX + `" Y="` + rectStartY + `" width="` + barWidth + `" height="` + data[i] + `" style="fill:rgb(0,0,225);stroke-width:1;stroke:rgb(0,0,0)"/>`;
        svgT += bar;
    }
    svgT += endStart;
    return svgT;
}