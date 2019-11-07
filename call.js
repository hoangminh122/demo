var person ={
    fullName : function (firstName,b){
        return this.firstName +" "+b;
    }
}
var demo=person.fullName.call({firstName:"minh",lastName:"asd"},"ok","o");
// var demo=person.fullName("asd","asdaasd")
console.log(demo);