// Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("white-mod");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the images - use its "alt" text as a caption
var images = document.getElementsByClassName('modal-img')

// for every image, add event listener to insert it's content into modal and display it when clicked
for(var i=0;i<images.length;i++)
    images[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// while (modal.style.display === "block"){
//   // Detect all clicks on the document
//   document.addEventListener("click", function(event) {
//     // If user clicks inside the element, do nothing
//     if (event.target.closest(".modal-img")) return
//     // If user clicks outside the element, close it
//     modal.style.display = "none";
//   })
// };
