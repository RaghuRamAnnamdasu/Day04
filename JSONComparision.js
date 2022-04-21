var JSON1 = { "name": "Person 1", "age": "5" };
var JSON2 = { "age": "5", "name": "Person 1"}; 
var isEqual;
if(Object.keys(JSON1).length===Object.keys(JSON2).length){
  for(var i in JSON1){
      if(JSON2[i] && JSON1[i]===JSON2[i]){
        isEqual = true;
      } else{
        isEqual = false;
        break;
      }
  }
}else{
  isEqual = false;
}
if(isEqual) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
