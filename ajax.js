function load_ajax(){
    console.log("asda");
    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();

    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById("result").innerHTML=xmlhttp.responseText;

        }
    };
    xmlhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
    xmlhttp.send();

}