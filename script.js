
document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.querySelector("[data-HireMe]");
  const contactSection = document.querySelector("[data-contactMe]");

  if (hireMeBtn && contactSection) {
    hireMeBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});




// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var buttons = document.querySelectorAll('.read-more-btn');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal and set the content
buttons.forEach(function(button) {
  button.onclick = function() {
    // Find the project details within the same project card
    var projectDetails = this.closest('.project-card').querySelector('.project-details').innerHTML;
    document.getElementById("modal-description").innerHTML = projectDetails;
    modal.style.display = "block";
  }
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
