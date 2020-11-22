//生成checkbox appendChild
function checkChild(box, date) {
    //创建一个全选节点
    let all = document.createElement("input");
    all.setAttribute("value", "0");
    all.setAttribute("type", "checkbox");
    all.setAttribute("check-type", "all");
    let txtall = document.createTextNode("全选");
    box.appendChild(all);
    box.appendChild(txtall);
    //创建数据的节点
    for (let i = 0; i < date.length; i++) {
        let inputs = document.createElement("input");
        inputs.setAttribute("type", "checkbox");
        inputs.setAttribute("value", date[i].text);
        inputs.setAttribute("check-type", "single");
        box.appendChild(inputs);
        let txt = document.createTextNode(date[i].text); //创建文字节点
        box.appendChild(txt);
    }
    box.onclick = function(ev) {
        let e = ev || window.event;
        let target = e.target || e.srcElement;
        let len = box.childNodes.length;
        let count = 0; //选中个数
        let decount = 0;
        let productDate = [];
        let regionDate = [];
        if (target.type == "checkbox") {
            let checkType = target.getAttribute("check-type");
            switch (checkType) {
                case "all":
                    for (let i = 2; i < len; i += 2) {
                        box.childNodes[i].checked = true;
                    }
                    console.log("全选了");
                    if (target.checked == false) {
                        console.log('取消全选')
                        for (let i = 2; i < len; i += 2) {
                            box.childNodes[i].checked = false;
                        }
                    }
                    break;
                case "single":
                    for (let i = 2; i < len; i += 2) {
                        if (box.childNodes[i].checked == true) {
                            count++;
                        } else if (box.childNodes[i].checked == false) {
                            decount++;
                        }
                    }
                    //判断此选中框选中后是否为全选状态
                    if (target.checked == true && count == 3) {
                        box.childNodes[0].checked = true;
                        console.log("选了所有");
                    }
                    //判断此选中框取消后 
                    else {
                        box.childNodes[0].checked = false;
                        if (target.checked == false && decount == 3) {
                            target.checked = true;
                            console.log("禁止取消")
                        }
                    }
            }
            //获取选择的数据
            for (let i = 2; i < len; i += 2) {
                if (product.childNodes[i].checked == true) {
                    productDate.push(product.childNodes[i].value);
                }
            }
            for (let i = 2; i < len; i += 2) {
                if (region.childNodes[i].checked == true) {
                    regionDate.push(region.childNodes[i].value);
                }
            }
            var date = getData(productDate, regionDate);
            var productLen = productDate.length;
            var regionLen = regionDate.length;
            var saledate = [];
            newForm(date, productLen, regionLen);
            for (var i = 0; i < date.length; i++) {
                saledate = date[i].sale;
            }
            bar.innerHTML = svg(saledate);
            polyLine(saledate);
        }
    }
}
//返回选中的原始数据
function getData(products, regions) {
    var data = sourceData.filter(function(item) {
        var index1 = products.indexOf(item.product);
        var index2 = regions.indexOf(item.region);
        if (index1 > -1 && index2 > -1) {
            return true;
        }
    })
    return data;
}
