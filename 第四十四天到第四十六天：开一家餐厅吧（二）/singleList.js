function Restaurant(arr) {
    this.name = arr.name;
    this.cash = arr.cash;
    this.seat = arr.seat;
    this.staff = arr.staff;
}
Restaurant.prototype = {
    hire: function(staffName) {
        staff.push(staffName);
    },
    fire: function(staffName) {
        this.staff = this.staff.filter(function(el) {
            return el !== staffName;
        })
    }
}

function Staff(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

var singleWaiter = (function() {
    let waiter = null;

    function Waiter(id, name, salary) {
        Staff.call(this, id, name, salary);
    };
    Waiter.prototype = {
        construstor: Waiter,
        serveOrder: function(dish) {
            console.log("服务员：一份" + dish.dishname);
            //告知厨师
            newCook.cookDish(dish);
            secondCook.cookDish(dish);
        },
        serveDish: function(dish) {
            console.log("服务员：" + dish.dishname + "好了")
        }
    };
    return {
        getWaiter: function(id, name, salary) {
            if (waiter == null) {
                return waiter = new Waiter(id, name, salary);
            }
            return waiter;
        }
    }
})();
var singleCook = (function() {
    let cook = null;

    function Cook(id, name, salary) {
        Staff.call(this, id, name, salary);
    };
    Cook.prototype = {
        construstor: Cook,
        cookDish(dish) {
            console.log("烹饪中...");
            console.log("厨师：" + dish.dishname + "烹饪好了");
            newWaiter.serveDish(dish);
        }
    }
    return {
        getCook: function(id, name, salary) {
            if (cook == null) {
                return cook = new Cook(id, name, salary);
            }
            return cook;
        }
    }
})();

function Customer(name) {
    this.name = name;
    this.order = function(dish) {
        console.log(name + "点了一份" + dish.dishname);
        newWaiter.serveOrder(dish);
    };
    this.eat = function() {
        console.log(name + "正在享用美食....");
        console.log("用餐完毕");
    };
}

function Dish(name, cost, price) {
    this.dishname = name;
    this.cost = cost;
    this.price = price;
}

function getDish(list) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        let obj = {};
        obj.dishname = list[i].dishname;
        obj.price = list[i].price;
        arr.push(obj);
    }
    return arr;
}
var myRestaurant = new Restaurant({
    name: "Moon",
    cash: 1000000,
    seat: 1,
    staff: []
});
var newCook = singleCook.getCook(929, "Charlie", 10000);
var secondCook = singleCook.getCook(204, "moon", 120000);
var newWaiter = singleWaiter.getWaiter(129, "婷婷", 15000);
var ifeDishes = [
    new Dish("麻辣小龙虾", 30, 88),
    new Dish("酸辣土豆丝", 8, 18),
    new Dish("肉末茄子", 12, 28),
    new Dish("水煮肉片", 30, 58),
]
var customerQueue = ["鸡鸡", "庆庆", "杰杰", "鸭鸭"];
var menu = getDish(ifeDishes);
console.log(menu);
let cloneCus = customerQueue.slice();
console.log(cloneCus);
for (let i = 0; i < customerQueue.length; i++) {
    let newCus = new Customer(cloneCus.shift());
    let j = Math.floor(Math.random() * (menu.length));
    newCus.order(menu[j]);
    newCus.eat();
    console.log("-----------");
    if (i == customerQueue) {
        console.log("客人都走了！下班了！打工人");
    }
}