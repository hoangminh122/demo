// let arr=["minh","nam","khanh","toan"];
// for(i in arr){
//     console.log(arr[i]);
// }

var arr={
    "name": "Hoang minh",
    "tuoi":19,
    get hello(){
        console.log(this.tuoi);
    },
    set hello(tuoi){
      this.tuoi=20
    }
};

console.log(arr.hello=20)