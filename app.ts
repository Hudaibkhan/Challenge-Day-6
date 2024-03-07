// // QUESTION 16
//  let guestList1:string[]=['Absar','Aliyan','Fabi']
// console.log('Great news! I found big table so, I decide to invite more guest.');

// guestList1.unshift('Izhan');
// guestList1.splice(guestList1.length/2,0, 'Minhaj');
// guestList1.push('Abdullah');
 
// for(let i=0; i<guestList1.length; i++){
//     console.log('Dear ' + guestList1[i] + ' You invite the Dinner.')
// }

// // QUESTION 17
// let guestList:string[]=['Absar','Aliyan','Fabi'];
// guestList.unshift('Izhan');
// guestList.splice(guestList.length/2,0, 'Minhaj');
// guestList.push('Abdullah');
 
// console.log('Unfortunatily we can not arrange big table ,we invite only two people');
// while(guestList.length>2){
//     let remove_guest=guestList.pop();
//     console.log(`Sorry ${remove_guest} You are not invited Dinner.`);
// }
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear ' + guestList[i] + ' You still invite the Dinner.')
// }
// guestList.splice(0,2)
// console.log(guestList)






// QUESTION 18
let places: string[] = ["Turkey","Scotland","Canada","America",
"Switzerland"];

console.log("Original order:",places);

console.log("Alphabetical order:",[...places].sort());

console.log("Original order:",places);

console.log("Reverse alphabetical order:",[...places].sort().
reverse());

console.log("Original order:",places);

places.reverse();
console.log("Reversed order:",places);

places.reverse();
console.log("Original order:",places);

places.sort();
console.log("Alphabetical order:",places);

places.reverse();
console.log("Reverse alphabetical order:",places);









