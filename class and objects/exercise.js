/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread,meat,vegetables){
    this.bread=bread;
    this.meat=meat;
    this.vegetables=vegetables;
    this.eaten=function(){
        console.log(`I have taken a sandwich with ${this.bread} and ${this.meat} and weird but add ${this.vegetables}`);
    }
    
}

const EatSomething = new Sandwich('Festive',['chicken','beef','bacon'],['brocolli','terere']) //najua

EatSomething.eaten();