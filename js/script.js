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

let contall = document.querySelector('.cont-all')
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let pics = document.querySelector('.pics');
let bigImgContainer = document.querySelector('.imgs');


next.addEventListener('click', handleNextPrev)
next.isNext = true
prev.addEventListener('click', handleNextPrev)
prev.isNext = false

let counter = 0;
let isOver = false;
let isRightDirection = true;

// -----------------


contall.addEventListener('mouseenter', () =>{

isOver = true ;

})

// --------


contall.addEventListener('mouseleave', () =>{

  isOver = false ;
  
  })
  

// --------


bigImgContainer.addEventListener('dblclick',() => {

  isRightDirection = !isRightDirection;
  
})

document.addEventListener('keypress', (event) =>{

  if(event.code === 'Space'){

    isOver = !isOver;

  }

})


// --------------------------------------------



init();
function init(){

  pics.innerHTML = '';
  bigImgContainer.innerHTML = '';

  imgs.forEach((image, index) => {

   bigImgContainer.innerHTML += getTemplateImage(image);

   pics.innerHTML += getTemplatePic(image,index);

  }) 

  activeImage()

}

// ----------------------

function handleNextPrev(){
 

  deactiveImage()
 
  nextPrev(this.isNext)
  
  activeImage()
}

// ----------------------

function nextPrev(isNext){

   if(isNext){
    counter++;
    if(counter === imgs.length){
      counter = 0;
    }
  }else{
    counter--
    if(counter < 0){
      counter = imgs.length -1;
    }
  
  } 

}


// ----------------------


function activeImage(){

document.getElementsByClassName('ogt')[counter].classList.add('visible')
document.getElementsByClassName('smlPic')[counter].classList.add('active')
}

function deactiveImage(){

  document.getElementsByClassName('ogt')[counter].classList.remove('visible')
  document.getElementsByClassName('smlPic')[counter].classList.remove('active')
  }
  


// ----------------------

  
function getTemplateImage(image){

const{titolo, desc, foto} = image;
   

return ` <div class="ogt ">

<h3 class ="title">${titolo}</h3>

<p class="desc">${desc}</p>

<img class= "" src="${foto}" alt="">

</div>
`

}

// ----------------------


function getTemplatePic(image , index){

  const{titolo,foto} = image

return `  <img class= "smlPic" onclick='hendleThumb(${index})' src="${foto}" alt="${titolo}">`
  
}

// ----------------------


function hendleThumb(index){

  deactiveImage();
  counter = index;
  activeImage();

}

// ----------------------


setInterval(() =>{


  if(!isOver){

    deactiveImage() ;

  nextPrev(isRightDirection)

  activeImage();
  }
  
 

},2000) 

// -----------------------