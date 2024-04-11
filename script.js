console.log("Bine ai venit la cursul JS avansat")

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 10];
// const c = [...a, ...b];

// console.log(c)

/* a.forEach((val, index) => {
    console.log(val, index)
}); */

//const elem = a.find((val) => val % 4 === 0);

//const  elems = a.filter((val) => val % 4 === 0);

//const elems = a.map((value ) => value +=100);

//const result = a.reduce((a, b) => a + b);

//const result = a.some((val) => val % 4);

//const result = a.every((val) => val % 4);


// Object.setPrototypeOf()
const obj = {};
const parent = { pro: "cold" };

console.log(obj.pro);

Object.setPrototypeOf(obj, parent);

console.log(obj.pro);