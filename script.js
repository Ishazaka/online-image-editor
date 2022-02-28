
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


// to upload image on image-container
uploadbtn.onchange = () =>{
  resetfilter();
  document.querySelector('.image-container').style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadbtn.files[0]);
reader.onload = () =>{
 image.setAttribute("src", reader.result);
}

}


let sliders = document.querySelectorAll('.filter input[type="range"]');
sliders.forEach( slider =>{
  slider.addEventListener("input", addfilter)

});

function addfilter(){
  image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;

}

let radiobtns = document.querySelectorAll('.flip-option input[type ="radio"]');

radiobtns.forEach(radiobtn =>{
  radiobtn.addEventListener("click", flipimages)

})

function flipimages(){
  if(flipxbtn.checked){
    image.style.transform = "scaleX(-1)"
  }else if(flipybtn.checked){
    image.style.transform = "scaleY(-1)"
}else{
   image.style.transform = "scale(1,1)"
}
}

