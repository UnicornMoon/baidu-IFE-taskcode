// ---------------------------餐厅开始工作------
// Promise对象
function Work(customerName) {
    var Pro = Promise.resolve();
    var cus = new Customer(customerName);
    Pro = Pro.then(() => {
        // 服务员接待
        return new Promise(function(resolve, reject) {
            console.log(cus);
            newWaiter.serveRecept();
            setTimeout(resolve, 1500);
        })
    }).then(() => {
        // 顾客入座
        cus.goseat();
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, 3000);
        })
    }).then(() => {
        // 顾客点餐及服务员确认
        var d = cus.orderDish(menu);
        newWaiter.serveOrder(d);
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(d);
            }, 3000);
        })

    }).then((value) => {
        customerTalk.innerHTML = "";
        MoveRight();
        newWaiter.tellCook(value);
        newCook.prepareCook();
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(value);
            }, 2000);
        })
    }).then((post) => {
        chefTalk.innerHTML = "";
        /*-----------------------------------------做菜-------------------*/
        var deskDishes = [];
        var dishObjArr = [];
        for (let i = 0; i < post.length; i++) {
            for (let j = 0; j < menu.length; j++) {
                if (post[i] == menu[j].name) {
                    var obj = {};
                    obj.dishName = post[i];
                    obj.price = menu[j].price;
                    obj.time = menu[j].time;
                    dishObjArr.push(obj);
                }
            }
        }
        var promise = Promise.resolve();
        var promise2 = Promise.resolve();
        for (let i = 0; i < dishObjArr.length; i++) {
            myCash += dishObjArr[i].price;

            promise = promise.then(() => {
                // 厨师做菜
                count(dishTime, dishObjArr[i].time);
                newCook.cookDishes(dishObjArr[i].dishName);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(dishObjArr[i].dishName);
                    }, dishObjArr[i].time * 1000);
                })
            }).then((value) => {
                newCook.tellWaiter(value);
                newWaiter.serveDishes(value);
                deskDishes.push(value); //将菜加到桌子上
                console.log("deskDishes是" + deskDishes)
                var dish = deskDishes[0];
                promise2 = promise2.then(() => {
                    //给顾客传菜
                    moveLeft();
                    var ul = cookIng.getElementsByTagName("ul")[0];
                    console.log(ul);
                    var li = cookIng.getElementsByTagName("li")[0];
                    ul.removeChild(li);
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(dish);
                        }, 2000);
                    })
                }).then((dish) => {
                    chefTalk.innerHTML = "";
                    waiterTalk.innerHTML = "";
                    MoveRight();
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(dish)
                        }, 500);
                    })
                }).then((dish) => {
                    orderMenu.getElementsByTagName('li')[i].style.backgroundColor = "red";
                    orderMenu.getElementsByTagName("span")[i].innerHTML = "(上菜完成)";
                    cus.eat(dish);
                    count(customerOrderTime, 3);
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(dish);
                        }, 3000);
                    })
                }).then((dish) => {
                    cus.finishEat(dish);
                })
                deskDishes.pop();
                if (i == dishObjArr.length - 1) {
                    promise2.then(() => {
                        customerTalk.innerHTML = "吃完了，我用支付宝支付吧";
                        customerStatus.innerHTML = "支付中";
                        count(customerOrderTime, 3);
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                            }, 3000);
                        })
                    }).then(() => {
                        customerTalk.innerHTML = "";
                        cus.pay(myCash);
                        customerStatus.innerHTML = "等待下一位客人";
                        count(customerOrderTime, 3);
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                            }, 3000);
                        })
                    }).then(() => {
                        var ul1 = cookIng.getElementsByTagName("ul")[0];
                        cookIng.removeChild(ul1);
                        var ul2 = orderMenu.getElementsByTagName("ul")[0];
                        orderMenu.removeChild(ul2);
                        Work(customerArr[1]);
                        waiterTalk.innerHTML = "本店打烊了，下班了！！！打工人";
                    })
                }
            })
        }
    })
}
Work(customerArr[0]);