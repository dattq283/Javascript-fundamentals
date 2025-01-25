// 1.1
    var greet = () => "Hello World!";

// 1.2
    var x = 5;
    var square = (num) => num * num; 
    console.log(square(x));

// 1.3
    var numbers = [3, 62, 234, 7, 23, 74, 323, 76, 92];
    var above70 = numbers.filter(num => num > 70);
    console.log(above70); 

// 1.4
    var inventory = [
        { type:     "machine",  value: 5000 },
        { type:     "machine",  value: 650 },
        { type:        "duck",  value: 10 },
        { type:   "furniture",  value: 1200 },
        { type:     "machine",  value: 77 }
    ];
    var machineItem = inventory.filter(inventory => inventory.type == "machine");
    var totalMachineValue = machineItem.reduce((total, inventory) => total + inventory.value, 0);
    console.log(totalMachineValue);

// 1.5 
    function Car() {
        var that = this;
        that.speed = 0;
        setTimeout(function()
        {
            that.speed += 10;
        },100);
    }
    var c = new Car();
    setTimeout(function()  {
        console.log(c.speed);
    },200);
    // using bind() method
    /* 
    function Car() {
        this.speed = 0;
        setTimeout((function(){
            this.speed += 10;
        }).bind(this),100);
    }
    var c = new Car();
    setTimeout(function()  {
        console.log(c.speed);
    },200);
    */

// 2.1
    class Animal
    {
        constructor(name)
        {
            this.name = name;
            this.thirst = 100;
            this.belly = [];
        }
        // 2.2
        drink(thirst)
        {
            this.thirst -= 10;
        }
        // 2.3
            eat(food)
        {
            this.belly.push(food);
        }
    }
// 2.4
    class Dog extends Animal {
        constructor(name, breed)
        {
            super(name);
            this.breed = breed;
        }
        bark()
        {
            console.log("Gâu! Gâu!");
        }
    }

// 3.1
    function getFrice(service) {
      var price = 50.0;
      return {
        service: service,
        _price: price,
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
    var priceDetail = getFrice("EXPERESS");
    priceDetail.discount(0.2);  
    console.log(priceDetail.getPrice());

// 5
    var person = {
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
    var {Name, Age} = person;
    console.log(Name);
    console.log(Age);

// 5.2
    var {Name : myName, Age : myAge} = person;
    console.log(myName);
    console.log(myAge);

// 5.3
    var [hobby1, hobby2] = person.Hobbies;
    console.log(hobby1);
    console.log(hobby2);

// 5.4
    var getMarried =() => person.Married;
    console.log(getMarried());

//5.5
    function getContact({Contact : {phone, email ='you@gmail.com'}})
    {
        return {phone, email};
    }
    console.log(getContact(person));
    //Arrow Function
    /*getContact = ({Contact : {phone, email ='you@gmail.com'}}) => ({phone, email});
    console.log(getContact(person));*/