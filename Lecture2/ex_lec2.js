// 1.1
const greet = () => "Hello World!";

// 1.2
const x = 5;
const square = (num) => num * num; 
console.log(square(x));

// 1.3
const numbers = [3, 62, 234, 7, 23, 74, 323, 76, 92];
const above70 = numbers.filter(num => num > 70);
console.log(above70);

// 1.4
const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
];
const machineItem = inventory.filter(item => item.type === "machine");
const totalMachineValue = machineItem.reduce((total, item) => total + item.value, 0);
console.log(totalMachineValue);

// 1.5
function Car() {
    this.speed = 0;
    setTimeout(() => {
        this.speed += 10; // Arrow function giữ đúng ngữ cảnh `this`
    }, 100);
}
const c = new Car();
setTimeout(() => {
    console.log(c.speed); // 10
}, 200);

// 2.1 - 2.4
class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    // 2.2
    drink() {
        this.thirst -= 10;
    }
    // 2.3
    eat(food) {
        this.belly.push(food);
    }
}
// 2.4
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("Gâu! Gâu!");
    }
}

// 3.1
function getFrice(service) {
    const price = 50.0; // const vì giá trị khởi tạo không đổi
    return {
        service,
        _price: price, // Biến riêng bên trong object
        discount(rate) {
            if (rate <= 0 || rate > 1) {
                throw new Error("Invalid discount rate");
            }
            this._price *= 1 - rate;
        },
        getPrice() {
            return this._price;
        },
    };
}
const priceDetail = getFrice("EXPRESS");
priceDetail.discount(0.2);
console.log(priceDetail.getPrice());

// 5
const person = {
    Name: 'Joe',
    Age: 21,
    Married: true,
    Hobbies: ['football', 'tennis', 'cooking'],
    Contact: {
        phone: '0123456789',
        email: 'name@example.com',
    },
};

// 5.1
const { Name, Age } = person;
console.log(Name);
console.log(Age);

// 5.2
const { Name: myName, Age: myAge } = person;
console.log(myName);
console.log(myAge);

// 5.3
const [hobby1, hobby2] = person.Hobbies;
console.log(hobby1);
console.log(hobby2);

// 5.4
const getMarried = () => person.Married;
console.log(getMarried());

// 5.5
const getContact = ({ Contact: { phone, email = 'you@gmail.com' } }) => ({ phone, email });
console.log(getContact(person));
