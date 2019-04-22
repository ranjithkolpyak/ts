import { PI } from './app/decoratorsModule/decoratorsTest';

console.log(PI);
// console.log(genericEcho({name: "Ranjith", age: 27}));

//using jQuery with typescript 

//to resolve the error with $ as undefined you can declare it as a var
// declare var $:any;
//this will remove the compiler error
//instead of this aaproach, you can define or use type defintions of other libraries 
//tsc will use these type definitions to compile the library specific functions

// $('button').click(function() { alert('Button Clicked!')})
