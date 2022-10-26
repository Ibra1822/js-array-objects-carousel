let imgs = [
   {
    titolo: 'Svezia',
    desc: 'Temperature molto basse, Capitale: Stockholma',
    foto: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
   },
   {
    titolo: 'Peru',
    desc: 'Molto soleggiata, Capitale: Lima',
    foto: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
   },
   {
    titolo: 'Chile',
    desc: 'Grossa popolazione, Capitale : Santiago',
    foto: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
   },
   {
    titolo: 'Argentina',
    desc: 'Belle persone, Capitale: Buenos Aires',
    foto: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
   },
   {
    titolo: 'Colombia',
    desc: 'Molto caldo, Capitale : Bogotà ',
    foto: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
   }   
]

// -----------------------------------------------------------

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let pics = document.querySelector('.pics');
let bigImgContainer = document.querySelector('.imgs');
let counter = 0;

// --------------------------------------------

imgs.forEach((content) => {

let fotos =`

   <div class="ogt ">

  <h3 class ="title">${content.titolo}</h3>
  
  <p class="desc">${content.desc}</p>

  <img class= "" src="${content.foto}" alt="">

  </div>

  `;


  bigImgContainer.innerHTML += fotos;

  let smallPic =`

  <img class= "smlPic" src="${content.foto}" alt="">

  `;

  pics.innerHTML += smallPic;

})

let fotoG = document.getElementsByClassName('ogt');

let fotoP = document.getElementsByClassName('smlPic');

fotoG[counter].classList.add('visible');

fotoP[counter].classList.add('active');

// --------------------------------------------


next.addEventListener('click', function(){

  fotoG[counter].classList.remove('visible');

   fotoP[counter].classList.remove('active');

  counter++;

  if(counter === imgs.length){

     counter = 0;

  }


  fotoG[counter].classList.add('visible');

  fotoP[counter].classList.add('active');

});

// --------------------------------------------


prev.addEventListener('click', function(){

  fotoG[counter].classList.remove('visible');

  fotoP[counter].classList.remove('active');

  counter--

  if(counter < 0 ){

    counter = imgs.length -1

  }

  fotoG[counter].classList.add('visible')

  fotoP[counter].classList.add('active')


})