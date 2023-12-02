// TASK 1
console.log('TASK 1');

let array1 = [5, 25, 89, 120, 36];

array1.push('javascript python');
array1.unshift('html css');

console.log(array1);

array1.pop()
array1.shift()

console.log(array1);



// TASK 2
console.log('TASK 2');

let array2 = ['ფორთოხალი', 'ბანანი', 'მსხალი']

console.log(array2.length);

array2.push('ვაშლი')
array2.push('ანანსი')
array2.unshift('საზამთრო')

console.log(array2.length);

array2.splice(2, 0, 'მანგო')
array2.shift()
array2.pop()

console.log(array2.length);



// TASK 3
console.log('TASK 3');


let array3 = [1, 2, 3, 4, 5]

array3.splice(3, 0, 'a', 'b', 'c')

console.log(array3);


// TASK 4
console.log('TASK 4');

let array4 = [1, 2, 3, 4, 5]

let result = 0;

array4.forEach(nombers => { result += nombers; })

console.log(result);


//TASK 5
console.log('TASK 5');

// let array5 = 0;
for (i = 0; i <= 100; i++) {
  console.log(i);
  // console.log(array5);
}



//TASK 6
console.log('TASK 6');

let array6 = [2, 15, 10, 24]

let deletenum = array6.splice(2, 1);

console.log(array6);


//TASK 7
console.log('TASK 7');


let array7 = [12, 25, 3, 6, 8, 14, 7, 23];

let NewArray7 = array7.map((array7) => {
  return array7 / 3
})

console.log(NewArray7)



//TASK 8
console.log('TASK 8');


let languages = ['html', 'css', 'javascript', 'python', 'php'];

languages.filter(ItLanguages => {
  if (ItLanguages.length > 3)
    console.log(ItLanguages);
})



//TASK 9
// console.log('TASK 9');


// let words = ['madrid', 'rome', 'milan', 'berlin'];




//TASK 10
console.log('TASK 10');

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let Allarrs = arr1.concat(arr2, arr3);

console.log(Allarrs);



//TASK 11
console.log('TASK 11');


let array11 = [-1, -2, -3, 4];

array1.some((element) => {
  if (element > 0) {
    return true;
  }
})         //   ჰმმმმმ?



//task 12
console.log('task 12');


let array12 = [23, 45, 32, 5, 87, 7, 3, 98]

array12.sort((a, b) => b - a)

console.log(array12);


//TASK 13
console.log('TASK 13');

function getinfo() {
  let nameuser = 'anna';
  console.log(nameuser);  
  //  დაბეჭდავს ანას

  function userinfo() {
    let info = `user name is ${nameuser}`;
    console.log(info);   
  }
  // იუზერის სახელი არის ანა


  userinfo();
  console.log(info);
}
// ?  ??


console.log(nameuser);
getinfo();
// ? ? ?

