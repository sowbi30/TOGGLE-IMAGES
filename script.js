// Get a reference to the image element
const imageElement = document.getElementById("imageDisplay");

// Define an array of image URLs
const imageUrls = [
  "https://wallpapercave.com/wp/wp3088742.jpg",
  "https://images2.alphacoders.com/281/281202.jpg",
  "https://wallpaperaccess.com/full/2267405.jpg",
  "https://th.bing.com/th/id/R.d93d43d08ddc0bc771337daafd81ff97?rik=lxcP2c9GmIHRhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fCreative-kids-wallpaper-HD-photo-download.jpg&ehk=U8lrqNznuEhLil4L6g5V88%2fkqOpUW91q5O%2bIyonkjR0%3d&risl=&pid=ImgRaw&r=0",
  "https://cdn.wallpapersafari.com/62/68/PvbBXN.jpg",

  ];

// Create a variable to track the current image index 
let currentImageIndex = 0;

// Function to toggle the displayed image
function toggleImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  imageElement.src = imageUrls[currentImageIndex];
}

// Add a click event listener to the image
imageElement.addEventListener("click", toggleImage);
