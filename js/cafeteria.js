document.getElementsByClassName("btn-mobile")[0].onclick = ()=> {
    document.getElementsByTagName("nav")[0].style.marginLeft = "0px"
}
document.getElementsByTagName("main")[0].onclick = ()=>{
    document.getElementsByTagName("nav")[0].style.marginLeft = "-200px"
}