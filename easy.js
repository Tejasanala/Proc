/*function fun(age) {
    let msg;
    if (age > 18) {
      msg = "yes";
    } else {
      msg = "No";
    }
  }
  fun(90);

  var e = "5";
  var t = 7;
  console.log(e + t);
  console.log(e - t);
  console.log(typeof e);
  //--------from below function examples

  //Function definition/declaration
  function double(n)
  {
    return n*2;
  }
 //Function call
 console.log(double(10));

const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
let arr=[]
for(let i of employes)
  {
    if(i.grade>=85)
      {
        var object={};
        // console.log("id :",i.id,"status : Promoted");
        arr.push({id: i.id,status:"Promoted"})
      }
    }
      console.log(arr)

const movies = [
        { title: "Inception", ratings: [5, 4, 5, 4, 5] },
        { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
        { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
        { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
        { title: "Memento", ratings: [4, 5, 4, 5, 4] },
      ];
   
    var sum1=0;
    let arr=[]
    let arr1=[]
  function fun(ratings)
  {
    for(let j of ratings)
      {
        sum1+=j
      
      }
      arr.push(sum1);
      sum1=0;
  }
  for(let i of movies)
    {
       fun(i.ratings)
       arr1.push(i.title)
  }
  var max=0;
  var e=0;
   for(let k=0;k<arr.length; k++)
    {
      if(arr[k]>arr[k+1])
        {
          max=arr[k];
          e=k;
        }
    }
    console.log(arr1[e]);

//DAY 4

let salaries = {
  name: "ravi",
  age: 23,
  gender: "M",
};
Object.values(salaries);
var e = Object.values(salaries);
console.log(e);


var movieUrl = (domain, genre, year) => "http://" + domain + "?genere=" + genre + "&year=" + year;

console.log(movieUrl("imdb.com", "thriller", 2020));

var movieUrl = (domain, genre, year) => `http:// ${domain}?genere=${genre}&year= ${year}`;

console.log(movieUrl("imdb.com", "thriller", 2020));

const avengers={
  name:"Tony",
  house:"🤠",
  networth:"🤑🤑🤑",
  power:"🦾",

};
console.log(name);
console.log(networth);
console.log(power);

const {name,networth,power}= avengers

this is by using object destructing
..................................................
const {name,networth,power}={
  name:"Tony",
  house:"🤠",
  networth:"🤑🤑🤑",
  power:"🦾",
};
console.log(name);
console.log(networth);
console.log(power);

const cart = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "banana", price: 0.25, quantity: 6 },
];
 
const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];
 
//   Ex 1.1: Combine cart + newItems
const comb = [...cart, ...newItems];

var result = 0;
for (let {price,quantity} of comb) {
  result =result+ price * quantity;
} 
console.log("The Total Price of all fruits : " + result);

function transformSentence(sentence){
  // Your code here
     var w=sentence.toUpperCase();//string method 
     var m=w.split(" ");
     var e=m.reverse();     
     return e.join(" ");
    //also optimally written as
    //sentence.toUpperCase.split(" ").reverse().join("")
  }
  
  // Task 6
  let sentence = "Hello world from JavaScript";
  let transformed = transformSentence(sentence);
  console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"
  */
 function processNames(names) {
  let result = [];
  for (let i=0;i<=names.length;i++) 
    {
      let re=names[i].toUpperCase().split(" ").join("_");
      result.push(re);
    }
  }
    console.log(result);
    

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));
