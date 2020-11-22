// -----餐厅类
function Restaurant(arr) {
    this.name = arr.name;
    this.cash = arr.cash;
    this.seat = arr.seat;
    this.staff = arr.staff;
    this.hire = function(staffName) {
        this.staff.push(staffName);
    }
    this.fire = function(staffName) {
        this.staff = this.arr.filter((el) => {
            return el != staffName;
        })
    }
}
// -----职员类
function Staff(id, name, salary) {
    this.id = id;
    this.name = name;
    this, salary = salary;
}
Staff.prototype.work = function() {
    console.log("工作中");
}

//-----服务员类(代理型单列模式)
function Waiter(id, name, salary) {
    Staff.call(this, id, name, salary);
}
Waiter.prototype = {
    construstor: Waiter,
    // 接待服务
    serveRecept: function() {
        moveLeft();
        waiterTalk.innerHTML = "欢迎光临，请问有预定吗";
    },
    // 点菜服务
    serveOrder: function(dishes) {
        console.log(dishes);
        waiterTalk.innerHTML = "好的,马上来";
        return dishes;
    },
    // 告诉厨师
    tellCook: function(dishes) {
        waiterTalk.innerHTML = "一份" + dishes;
        chefStatus.innerHTML = "准备做菜";
        packDish(cookIng, dishes);
    },
    // 上菜服务
    serveDishes: function(dishes) {
        waiterTalk.innerHTML = dishes + "来了";
        console.log("服务员上菜");
    }
};
var singleWaiter = (function() {
    var waiter = null;
    return {
        getWaiter: function(id, name, salary) {
            if (waiter == null) {
                return waiter = new Waiter(id, name, salary);
            }
            return waiter;
        }
    }
})();

// -----厨师类(代理型单列模式)
function Cook(id, name, salary) {
    Staff.call(this, id, name, salary);
}
Cook.prototype = {
    construstor: Cook,
    // 准备做菜
    prepareCook: function() {
        chefTalk.innerHTML = "好的，马上做";
    },
    // 做菜
    cookDishes(dish) {
        chefStatus.innerHTML = "正在做" + dish;
    },
    // 告诉服务员菜做好了
    tellWaiter: function(dish) {
        console.log(dish + "做好了");
        chefTalk.innerHTML = dish + "做好了";
    }
}
var singleCook = (function() {
    var cook = null;
    return {
        getCook: function(id, name, salary) {
            if (cook == null) {
                return cook = new Cook(id, name, salary);
            }
            return cook;
        }
    }
})();

// -----顾客类
function Customer(name) {
    this.name = name;
    // 进店
    this.goseat = function() {
            customerName.innerHTML = this.name;
            customerStatus.innerHTML = '点餐中';
            customerTalk.innerHTML = "我叫" + this.name + ",我有预定位置";
            console.log(customerTalk.innerHTML)
            count(customerOrderTime, 3);
        }
        // 吃
    this.eat = function(dish) {
            customerStatus.innerHTML = "正在吃" + dish;
        }
        // 吃完了
    this.finishEat = function(dish) {
        customerStatus.innerHTML = dish + "已吃完";
    }
}
Customer.prototype = {
    // 顾客点餐
    orderDish: function(dish) {
        var dishes1 = [];
        //随机点菜
        for (let i = 0; i < randomOrder(1, dish.length); i++) {
            dishes1.push(dish[randomOrder(0, dish.length)].name);
        }
        // 防止点菜重复
        var dishes = [];
        for (let j = 0; j < dishes1.length; j++) {
            if (dishes.indexOf(dishes1[j]) == -1) {
                dishes.push(dishes1[j]);
            }
        }
        customerTalk.innerHTML = "我要点一份" + dishes;
        customerStatus.innerHTML = "点菜完成";
        //图形化菜品
        packDish(orderMenu, dishes);
        return dishes;
    },
    pay: function(money) {
        cash.innerHTML = '餐厅现金:' + money;
    }
}

// -----菜品类
function Dish(name, price, time) {
    this.name = name;
    this.price = price;
    this.time = time;
}
// 随机点餐方法
function randomOrder(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// 定义餐厅
var ifeRestaurant = new Restaurant({
    name: "Moon",
    cash: 1000000,
    seat: 20,
    staff: []
});

//定义菜品
var D1 = new Dish('红烧鲫鱼', 100, 8);
var D2 = new Dish('豆腐', 100, 6);
var D3 = new Dish('龙虾', 200, 10);
var D4 = new Dish('鱼', 300, 5);
var D5 = new Dish('米饭', 200, 5);
var D6 = new Dish('蛋糕', 120, 5);
var D7 = new Dish('北京烤鸭', 90, 10);
var D8 = new Dish('拌海蜇', 70, 4);
var menu = [D1, D2, D3, D4, D5, D6, D7, D8];

// 定义顾客队列
var customerArr = ["婷婷", "鸡鸡", "庆庆"];
//定义员工
var newWaiter = singleWaiter.getWaiter(929, "周深深", 10000);
var newCook = singleCook.getCook(204, "罗星星", 10000);
var cloneCus = customerArr.slice();
// -----------------图形化--------
var chefStatus = document.getElementById("chef-status");
var chefTalk = document.getElementById("chef-talk");
var dishTime = document.getElementById("dishtime");
var cookIng = document.getElementById("cooking");
var waiter = document.getElementById("waiter");
var waiterTalk = document.getElementById("waiter-talk");
var customerTalk = document.getElementById("customer-talk");
var customerName = document.getElementById("customer-name");
var customerStatus = document.getElementById("customer-status");
var customerOrderTime = document.getElementById("ordertime");
var orderMenu = document.getElementById("order-menu");
var cash = document.getElementById("cash");
var myCash = 0;