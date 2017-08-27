/**
* Create Constructor
* https://stackoverflow.com/questions/1889014/can-i-construct-a-javascript-object-without-using-the-new-keyword
*/
function SomeConstructor(){

  // Allows constructor to be called without new
  if (!(this instanceof SomeConstructor)){
    return new SomeConstructor();
  }
  //the constructor properties and methods here
}