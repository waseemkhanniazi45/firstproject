// var sts = 0;
// document.getElementById("burger").addEventListener("click",()=>{
//     if(sts == 0){
//         document.getElementById("links").style.display="block"
//         document.getElementById("links").style.maxHeight="300px"
//         sts=1;
//     }
//     else{
//         document.getElementById("links").style.display="none"
//         document.getElementById("links").style.maxHeight="0"
//         sts = 0;
//     }
// });
var MenuItems = document.getElementById("links");
MenuItems.style.maxHeight = "0px"
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}