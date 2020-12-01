var boxval1 = document.querySelector('#moz');
var boxval2 = document.querySelector('#web');
var boxval3 = document.querySelector('#def');
var hl;
var vl;
var br;
var sr;
var op;
var shaColor;
var boxcol;
document.querySelector('#HL').addEventListener("change", boxSha);
document.querySelector('#HL').addEventListener("change", boxSha);
document.querySelector('#VL').addEventListener("change", boxSha);
document.querySelector('#BR').addEventListener("change", boxSha);
document.querySelector('#SR').addEventListener("change", boxSha);
document.querySelector('#OP').addEventListener("change", boxSha);
document.querySelector('.v-box').addEventListener("change", boxSha);




document.querySelector('#HLN').addEventListener("change", boxSha1);
document.querySelector('#VLN').addEventListener("change", boxSha1);
document.querySelector('#BRN').addEventListener("change", boxSha1);
document.querySelector('#SRN').addEventListener("change", boxSha1);
document.querySelector('#OPN').addEventListener("change", boxSha1);
document.querySelector('.v-box').addEventListener("change", boxSha1);
document.querySelector('.color1').addEventListener("change", boxSha1);
document.querySelector('.color2').addEventListener("change", boxSha1);

document.querySelector('#toggle').addEventListener("change", boxSha);

function boxSha() {
    var hl = document.querySelector('#HL').value;
    document.querySelector('#HLN').value = document.querySelector('#HL').value;
    var vl = document.querySelector('#VL').value;
    document.querySelector('#VLN').value = document.querySelector('#VL').value;
    var br = document.querySelector('#BR').value;
    document.querySelector('#BRN').value = document.querySelector('#BR').value;
    var sr = document.querySelector('#SR').value;
    document.querySelector('#SRN').value = document.querySelector('#SR').value;
    var op = document.querySelector('#OP').value;
    document.querySelector('#OPN').value = document.querySelector('#OP').value;
    var box = document.querySelector('.v-box');
    var shaColor = document.querySelector('.color1').value;
    var inset=document.querySelector('#toggle').value;
    var boxColor=document.querySelector('.color2').value;
    box.style.background =  'rgb(' + parseInt(boxColor.slice(-6, -4), 16) + ','
    + parseInt(boxColor.slice(-4, -2), 16) + ',' + parseInt(boxColor.slice(-2), 16)
    +  ')';
    var rgbaCol = 'rgba(' + parseInt(shaColor.slice(-6, -4), 16) + ','
        + parseInt(shaColor.slice(-4, -2), 16) + ',' + parseInt(shaColor.slice(-2), 16)
        + ',' + op + ')';
    if(inset==="1"){
        box.style.boxShadow ="inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval1.innerHTML="-webkit-box-shadow: : inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval2.innerHTML="-moz-box-shadow: inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval3.innerHTML="box-shadow: inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
    }
    else{
        box.style.boxShadow = hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval1.innerHTML="-webkit-box-shadow: : " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval2.innerHTML="-moz-box-shadow: " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval3.innerHTML="box-shadow: " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
    }
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}

function boxSha1() {
    var hl = document.querySelector('#HLN').value;
    document.querySelector('#HL').value = document.querySelector('#HLN').value;
    var vl = document.querySelector('#VLN').value;
    document.querySelector('#VL').value = document.querySelector('#VLN').value;
    var br = document.querySelector('#BRN').value;
    document.querySelector('#BR').value = document.querySelector('#BRN').value;
    var sr = document.querySelector('#SRN').value;
    document.querySelector('#SR').value = document.querySelector('#SRN').value;
    var op = document.querySelector('#OPN').value;
    document.querySelector('#OP').value = document.querySelector('#OPN').value;
    var box = document.querySelector('.v-box');
    var shaColor = document.querySelector('.color1').value;
    var inset=document.querySelector('#toggle').value;
    var boxColor=document.querySelector('.color2').value;
    box.style.background =  'rgb(' + parseInt(boxColor.slice(-6, -4), 16) + ','
    + parseInt(boxColor.slice(-4, -2), 16) + ',' + parseInt(boxColor.slice(-2), 16)
    +  ')';
    var rgbaCol = 'rgba(' + parseInt(shaColor.slice(-6, -4), 16) + ','
        + parseInt(shaColor.slice(-4, -2), 16) + ',' + parseInt(shaColor.slice(-2), 16)
        + ',' + op + ')';
    if(inset==="1"){
        box.style.boxShadow ="inset "  + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval1.innerHTML="-webkit-box-shadow: : inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval2.innerHTML="-moz-box-shadow: inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval3.innerHTML="box-shadow: inset " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
    }
    else{
        box.style.boxShadow =  hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval1.innerHTML="-webkit-box-shadow: : " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval2.innerHTML="-moz-box-shadow: " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
        boxval3.innerHTML="box-shadow: " + hl + "px " + vl + "px " + br + "px " + sr + "px " + rgbaCol;
    }
}
