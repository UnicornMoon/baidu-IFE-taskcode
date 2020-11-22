function Restaurant(arr) {
    this.name = arr.name;
    this.cash = arr.cash;
    this.seat = arr.seat;
    this.staff = arr.staff;
}
Restaurant.prototype.hire = function(staffName) {
    this.staff.push(staffName);
}
Restaurant.prototype.fire = function(staffName) {
    this.staff = this.staff.filter(function(el) {
        return el !== staffName;
    })
}


function Staff(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Staff.prototype.work = function() {

}

function Waiter(id, name, salary) {
    Staff.call(this, id, name, salary);
}
Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.construstor = Waiter;
Waiter.prototype.serve = function(orderList) {
    if (list instanceof Array) {
        this.list = orderList;
    } else {
        console.log("上菜");
    }
}

function Cooker(id, name, salary) {
    Staff.call(this, id, name, salary);
}
Cooker.prototype = Object.create(Staff.prototype);
Cooker.prototype.construstor = Cooker;
Cooker.prototype.cook = function() {
    console.log("烹饪...");
}

function Customer() {

}
Customer.prototype.order = function() {
    console.log("点菜");
}
Customer.prototype.eat = function() {
    console.log("用餐");
}

function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.cost = price;
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