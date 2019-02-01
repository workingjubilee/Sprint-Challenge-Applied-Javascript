class Carousel {
  constructor(node) {
  // gotta shove this node in a...
  this.carousel = node;
  // now grab its local buttons...
  this.carouselLeft = this.carousel.querySelector(".left-button");
  this.carouselRight = this.carousel.querySelector(".right-button");
  // only selects images in local context of this Carousel, pretty sure?
  this.carouselImages = this.carousel.querySelectorAll("img");
  // now I need to make them sortable, so to an array?
  this.carouselImageArray = Array.from(this.carouselImages);
  // I think the simplest thing would be...
  // to declare a this.carouselOn now for later?
  this.carouselOn = this.carouselImageArray[0];
  // event Listeners for matching functions...
  this.carouselLeft.addEventListener('click', () => this.goLeft());
  this.carouselRight.addEventListener('click', () => this.goRight());
}
  // NOTE: the carousel images load in as display: none, so let's try...
  goLeft(){
    this.carouselImageArray.forEach(image => {image.style.display = 'none'});
    this.carouselImageArray.push(this.carouselImageArray.shift);
    this.carouselOn.style.display = 'block';
  }
  goRight(){
  }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(carousel => new Carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
