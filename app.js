//console.log(window.document);

//recuperation de l'élément input par son id firstcolor
const firstcolorElt = document.getElementById('firstColor');
//console.log(firstcolorElt);

//recuperation de l'élément input par son id secondecolor
const secondecolorElt = document.getElementById('secondColor');
//console.log(secondecolorElt);

//recuperation de l'élément body
const bodyElt= document.querySelector('body '); 
//console.log(bodyElt); 


firstcolorElt.addEventListener('input',function() {
    //console.log(firstcolorElt.value);
    bodyElt.style="background: linear-gradient(to right,"+firstcolorElt.value+","+secondecolorElt.value+");";
});

secondecolorElt.addEventListener('input',function() {
    //console.log(secondecolorElt.value);
    //bodyElt.style="background: linear-gradient(to right,"+firstcolorElt.value+","+secondecolorElt.value+");";
    bodyElt.style=`background: linear-gradient(to right,${firstcolorElt.value},${secondecolorElt.value});`
});