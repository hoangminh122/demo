//   let a= document.forms["myForm"]["fname"].value;
let a=document.getElementById("fname").value;
function validateForm(){
console.log(a)
if(a=="")
{
  document.getElementById("error").innerHTML="asdas"
  return false;
}
}