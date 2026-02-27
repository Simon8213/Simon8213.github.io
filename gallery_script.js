const imageGallery = [
    "https://media.istockphoto.com/id/148983155/photo/disc-golf-putt-shot.jpg?s=1024x1024&w=is&k=20&c=J6dw_SJ5OuGLr6qexW-_1TmZPcJzMxZTR9l1iy_9IDM=",
    "https://media.istockphoto.com/id/852268124/photo/disc-golf-hole-basket-in-autumn-park.jpg?s=1024x1024&w=is&k=20&c=Jae3ZoDw09S3nzCKjkJJ6J2rmuaKT6zAoPQfZNWWUpc=",
    "https://media.istockphoto.com/id/483063356/photo/silhouette-of-disc-golf-basket-against-sunset.jpg?s=1024x1024&w=is&k=20&c=mZKzkL4v1M7Zv0Vw9NjPo40klbKpoXZO4QTd-PPgX_0=",
    "https://media.istockphoto.com/id/1488341713/photo/people-playing-flying-disc-golf-sport-game.jpg?s=1024x1024&w=is&k=20&c=ANpcQRhjpWtsWeQTEMV30RjZ7AkI2A-LeD7CEy3WrbM="
];

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('pre-btn');
const nextButton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();

nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    
});