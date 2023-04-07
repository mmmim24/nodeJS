var tot = 0
var x = [0,0];
function MyFunction1(){
    x[0] = parseFloat(document.getElementById("cr1").value);
    // totcred += Number(x);
    // alert(x);
    // console.log(totcred*10);
}
function MyFunction11(){
    tot = tot + x[0] * parseFloat(document.getElementById("g1").value);
}
function MyFunction21(){
    tot = tot + x[1] * parseFloat(document.getElementById("g2").value);
}
function MyFunction2(){
    x[1] = parseFloat(document.getElementById("cr2").value);
    // totcred += Number(x);
    // document.getElementById("show").value = "";
    // alert(x);
    // console.log(totcred*10);
}

function result(){
    ccclear();
    alert(tot/(x[0]+x[1]));
    tot = 0;
}
function ccclear(){
    document.getElementById("cr1").value = "";
    document.getElementById("cr2").value = "";
    document.getElementById("g2").value = "";
    document.getElementById("g1").value = "";
}