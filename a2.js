function raiz(){
    var n = parseInt(document.getElementById("a").value);
    var r=2;
    var ff=1;
    for (i=1;i<=n;i++) {
        ff=ff*(((2*i)**2)/((2*i)**2-1));
    }
    var ffff=ff*r
    document.getElementById("raiz").innerHTML=(ffff)
    document.getElementById("pi2").innerHTML=("3.141592") 
}
function pi2(){
}