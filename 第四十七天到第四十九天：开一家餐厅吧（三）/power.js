// ---------------功能函数-----------
// 倒计时函数
function count(target, time) {
    var countFun = setInterval(() => {
        target.innerHTML = time;
        time = (time - 0.1).toFixed(1);
        if (time < 0) {
            clearInterval(countFun);
        }
    }, 100);
}

// 将菜品打包
function packDish(orderMenu, dishes) {
    var ul = document.createElement("ul");
    orderMenu.appendChild(ul);
    for (let i = 0; i < dishes.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = dishes[i] + "<span>(还未上)</span>";
        ul.appendChild(li);
    }
}
// 服务员移动
function moveLeft() {
    var pos = 350;
    var m = setInterval(() => {
        pos = pos + 104.4;
        waiter.style.left = pos + 'px';
        if (pos > 620) {
            clearInterval(m);
        }
    }, 100);
}

function MoveRight() {
    var pos = 620;
    var m = setInterval(() => {
        pos = pos - 100;
        document.getElementById('waiter').style.left = pos + 'px';
        if (pos < 412) {
            clearInterval(m);
        }
    }, 100);
}