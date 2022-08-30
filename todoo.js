//var hadou = document.getElementById("hadou");
let hadou = document.getElementById("titre");
let bin = document.getElementById("bin");

document.getElementById("a").addEventListener("click", function () {
//const li = document.createElement("li");
//i.textContent = hadou.value;
//ul.appendChild(li);
let map = titre.value;

if( map ==""){
    alert("remplisser le champ vite");
}
else{

bin.insertAdjacentHTML("afterbegin", `<li >${map} <button >suprimer <i> id=${map} onclick= suprimer(this.id)<i/></button><li/>`) ;
}


});

function suprimer(id){
document.getElementById(id).parentElement.outerHTML="";

}
/*function remove(map){
    console.log("ok")
}*/

