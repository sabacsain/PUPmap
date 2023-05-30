function openModal(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById("photo").style.filter = "grayscale(100%)";
  document.getElementById("photo").style.opacity = "0.2";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById("photo").style.filter = "grayscale(0%)";
  document.getElementById("photo").style.opacity = "1";
}

document.querySelector(".close").addEventListener("click", closeModal);
