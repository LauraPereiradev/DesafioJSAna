
<<<<<<< HEAD
// const cabecalho = document.getElementById("cabecalho")
// const carousel = document.getElementById("carousel")
// alert(cabecalho)


// cabecalho.innerHTML = 'esse é meu cabecalho'
// carousel.innerHTML += '<img src = "img/ford-96.png" alt="link"

// cabecalho.style.border = '8px solid pink';
// cabecalho.style.color = "pink";

// let carouselArr = [];


//class Carousel
class Carousel {
    constructor(marca,cor,modelo){
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
    }
}
const carroluan = new Carousel('compass','black','jeep');

console.log(carroluan.marca);





    
      
    // static Start(arr){
    //     if(arr){

    //         if(arr.length > 0){
    //             Carousel._sequence = 0;
    //             Carousel._size = arr.length;
    //             Carousel.Next(); //start
    //             Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
    //         }
            
    //     } else {
    //         throw "Method Start need a Array Variable.";
    //     }
    // }

    // static Next(){
        
    // }

=======
var carouselArr = [];

class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  
  static Start(arr) {
    if (!arr || arr.length === 0) return;
    this.carouselArr = arr;
    this.currentIndex = 0;
    this.Show(this.carouselArr[this.currentIndex]);

    
    this.timer = setInterval(() => {
      this.Next();
    }, 3000);
  }

  
  static Show(item) {
    const carouselDiv = document.getElementById("carousel");
    const titleDiv = document.getElementById("carousel-title");

    if (carouselDiv && titleDiv) {
        carouselDiv.style.backgroundImage = `url('img/${item.image}')`;
        carouselDiv.style.backgroundSize = "contain";
        carouselDiv.style.backgroundRepeat = "no-repeat";
        carouselDiv.style.backgroundPosition = "top center";
        carouselDiv.style.height = "900px";
        carouselDiv.style.transition = "background-image 1s ease-in-out";

     
      titleDiv.innerHTML = `<a href="${item.url}" style="color:#003399; text-decoration:none; font-size:22px; font-weight:bold;">${item.title}</a>`;
      titleDiv.style.textAlign = "center";
      titleDiv.style.padding = "20px";
    }
  }

 
  static Next() {
    if (!this.carouselArr || this.carouselArr.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.carouselArr.length;
    this.Show(this.carouselArr[this.currentIndex]);
  }
}
a
>>>>>>> 0046f73c264cd301ce9d505a72d6d56210ccd1fa
