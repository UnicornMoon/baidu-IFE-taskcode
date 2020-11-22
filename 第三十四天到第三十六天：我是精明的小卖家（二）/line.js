function polyLine(data) {
    var ctx = poly.getContext('2d');
    var h = 700, //区域
        w = 600,
        axisX = 500, //坐标横轴长度
        axisY = 513; //坐标纵轴长度
    var r = 5,
        pointColor = "red",
        lineColor = "blue",
        liWid = 1;
    var interval = 35;
    console.log(ctx)
    ctx.clearRect(0, 0, 500, 515);
    // ctx.translate(10, 510);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = liWid;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, axisY);
    ctx.lineTo(0, -axisY);
    ctx.moveTo(0, axisY);
    ctx.lineTo(axisX, axisY);
    ctx.stroke();
    ctx.moveTo(interval, axisY - data[0]);
    ctx.beginPath();
    for (var i = 0; i < data.length; i++) {
        var positionX = 5 + interval * (i + 1) + r * i;
        var positionY = 510 - (data[i]);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = liWid;
        // ctx.fillStyle = pointColor;
        ctx.arc(positionX, positionY, r / 2, 0, Math.PI * 2);
        if (i != 0) {
            ctx.lineTo(positionX, positionY);
            ctx.stroke()
        }
    }
}