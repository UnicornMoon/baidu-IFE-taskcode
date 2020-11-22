class Restaurant {
    constructor(arr) {
        this.name = arr.name;
        this.cash = arr.cash;
        this.seat = arr.seat;
        this.staff = arr.staff;
    }
    hire(staffName) {
        this.staff.push(staffName);
    }
    fire(staffName) {
        this.staff = this.staff.filter(function(el) {
            return el !== staffName;
        })
    }
}
class Staff {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    work() {}
}
class Waiter extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    serve(orderList) {
        if (list instanceof Array) {
            this.list = orderList;
        } else {
            console.log("上菜");
        }
    }
}
class Cooker extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    cook() {
        console.log("烹饪...");
    }
}
class Customer {
    order() {
        console.log("点餐");
    }
    eat() {
        console.log("用餐");
    }
}
class Dish {
    Customer(name, cost, price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}
var ifeRestaurant = new Restaurant({
    name: "Moon",
    cash: 1000000,
    seat: 20,
    staff: []
});
var newCook = new Cooker(929, "Charlie", 10000);
var newWaiter = new Waiter(599, "MoonLuo", 20000);
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter);
console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);