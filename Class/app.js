// class Animal{
//     constructor(name,age,food){
//          this.name
//          this.age
//          this.food
//     }
// }




// presontesion

// -------------------destructuring---------------------

// let user = 



// ---------------Itrator-------------

// let nam = [100,200,300];
// let itr = num[Symbol.itrator]()
// itr.next()

// -----------generator-------------

// function *generator()
// {
//     console.log("hellow1")
//     yield  "hellow2"
//     console.log("hellow3")
    
// }
// let g = generator()
// console.log(g.next))


// ------------Object Optional Chaing-----------------

// ------------promise----------------------

// ---------------inhens----------

// ------------------modules----------
// ---------------Higher-oder function------


// 1.--------------class Animal----------------
    //     constructor(name,age,food){
    //         this.name = name
    //         this.age= age
    //         this.food= food
    //     }
    //     eat(){
    //         console.log(`${this.name} eats ${this.food}`);
    //     }
    //     isCute(){
    //         if(this.age<2){
    //             console.log(`${this.name} is cute`)
    //         }
    //     }
    // }
    // let cat = new Animal("cat", 2, "fish")
    // cat.eat()
    // cat.isCute()
    // console.log(cat);

    
    // class Fish extends Animal{
    //     constructor(name,age,food,isAquatic){
    //         super(name,age,food)
    //         this.isAquatic = isAquatic
    //     }
    //     swim(){
    //         if(this.isAquatic){
    //             console.log(`${this.name} can swim`)
    //         }
    //     }
    // }
    // const shark = new Fish("Shark", 2, "fish", true)
    // shark.eat()
    // shark.isCute()
    // shark.swim()
    // console.log(shark);
    
    //2. ----------- CLOSURE ----------- 
    // function init() {
    //     var name = "Mozilla"; // name is a local variable created by init
    //     function displayName() {
    //         var name = "APPLE";
    //       console.log(name); // use variable declared in the parent function
    //     }
    //     displayName();
    //   }
    //   init();
    
    // 3.--------------- destructuring ------------- 
    // let user =  [15 , 25 , 50, 125 , 254 , 540]
    // let [a, , ,b,...rest] = user
    // console.log(a , b , rest);
    
    
    
    // let x = 15;
    // let z;
    // (x>10) ? z ="true" : z = "False"
    // document.write(z);
   
    
    // 4.------------------------Iterator-----------------
    
    // let num = [100 , 200 , 300];
    // let itr = num[Symbol.iterator]()
    // let a = itr.next()
    // console.log(a)
    // console.log("Hello")
    // let b = itr.next()
    // console.log(b.value)
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // let c = itr.next()
    // console.log(c.value)
    
    // 5. -----------generater-----------------
    // // function *abc(){
//   yield console.log("hello");
//   yield console.log("hello friends chai pelo");
//   yield console.log("for real");

  //  return "returning"
  // }

  
  
  // let generator = abc()
  // console.log(generator.next());
  // console.log(generator.next());
  // console.log(generator.next());
  // console.log(generator.next());
  
  
  // 6.-------------Optional chaining----------------
  
  // const shabana={
  //   location:"korangi",
  //   age:20,
  //   skills:["one cycling","wearing abaya"],
  //   street:{
  //    galeNO : 420,
  //    phoneNUm : "jb milao jb bnd"
  //   }
  // }
  
  
  // console.log(shabana?.street?.phoneNUm?.zong?.sim1);
  
  
  
  
  // import {ourClass,modules} from "./file1.js"
  // import  abc from "./file1.js"

  
  // console.log(abc);
  // console.log(ourClass,modules);
  
  
  
  
  
  // 7.------------- Promises------------
  
  // let meetingPromise = new Promise((resolve,reject)=>{
  
  
  
  //     setTimeout(()=>{
      
  
  //         let weatherCondition = "barish horhe hai"
  //     },1500)
        
  
  
  // if(weatherCondition == "barish horhe hai"){
  //     reject("dosre din chle jaengen")
  // }
  
  
  // else{
  //     resolve("hurrahhhh hm jare hain")
  // }
  
  
  // })

  
  // meetingPromise.then((message)=>{
  // console.log(message);
  
  
  // }).catch((error)=>{
  //     console.log(error);
  
  
  // })
  
  // console.log("running");
  // setTimeout(()=>{
  // console.log("lo me agya");

  
  // },1000)
  
  
  //  console.log("hello");
   