// for(var i = 0; i < 5; i++) {

// document.write('Saylani Welfare <br />')

// }

// for (var i = 6; i >= 5; i++) {
//     document.write('Usama <br />')
// }


// var tableNum = 15
// var tableLength = 10
// for(var i = 1; i<=tableLength; i++) {
//     document.write(`
//         ${tableNum} x ${i} = ${tableNum*i}<br/> <br/>
//         `)
// }

//************************Loop********************************* */
// Question 1
// var multiArr = [ [] , [] , []]


// Question 2

// var multiArray = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1] ]
// document.write(multiArray[0] + '<br>' + multiArray[1] + '<br>' + multiArray[2] + '<br>')

// Question 3

// for (var i = 1; i <= 10; i++) {
//     document.write(i +"<br>")
// }


// Question 4

// var tableNum = prompt('Please Enter a number to show its muliplication table:')
// var tableLength = prompt('Enter a number of length to show its muliplication table:')
// for (var i = 1; i <= tableLength; i++ ) {
//     document.write(
//         `${tableNum} x ${i} = ${tableNum * i}<br/> <br/>
//         `
//     )
// }

// Question 5

// var fruit = ['Apple', 'Banana', 'Mango', 'Orange','Strawberry']
// for (var i = 0; i <fruit.length; i++) {
//     document.write(fruit[i] + "<br>")
// }

// Question 6
//a
// for (var i = 1; i <= 15; i++) {
//     document.write(i + '<br>')
// }
//b
// for (var i = 10; i>=1; i--){
//     document.write(i + '<br>')
// }
//c
// for (var i = 0; i<=20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + '<br>')
//     }
// }

//d
// for (var i = 0; i<=20; i++) {
//     if(i % 2 !== 0) {
//         document.write(i + '<br>')
//     }
// }

//e
// for (var i = 1; i<=20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + 'k<br>')
//     }
// }

// Question 7

var bakeryItem = ['cake', 'apple pie' , 'cookie', 'chips' , 'patties']
var searItem = prompt('Welcome to Saleem bakery what do you want sir/mam')
for (i=0; i < bakeryItem.length; i++) {
    if (searItem===bakeryItem[i]) {
        break;
    }
}
document.write(searItem +  ' is available at index ' + i +  ' in our bakery')


// Question 8
// var A = [24, 53, 78, 91, 12] 
// document.write(A + '<br>')
// document.write('The Largest number is ' + Math.max(...A))

// Question 9

// var B = [24, 53, 78, 91, 12]
// document.write(B + '<br>')
// document.write('The smallest number is ' + Math.min(...B))


// Question 10
// for (var i = 1; i<=100; i++) {
//     if (i % 5===0)
// { document.write(i + '<br>')
// }
// } 
    