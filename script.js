
let filterA = document.getElementById('blur');
let filterB = document.getElementById('contrast');
let filterC = document.getElementById('hue-rotate');
let filterD = document.getElementById('sepia');

let noflipbtn = document.getElementById('no-flip');
let flipxbtn = document.getElementById('flip-x');
let flipybtn = document.getElementById('flip-y');


let uploadbtn = document.getElementById('upload-button');
let image = document.getElementById('chosen-image')


function resetfilter(){
filterA.value = '0';
filterB.value = "100";
filterC.value = "0";
filterD.value = "0";
noflipbtn.checked = true;
addfilter();
flipimages();

}
