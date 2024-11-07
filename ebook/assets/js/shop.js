function checkout() {
  const popup = document.getElementById("checkout");
  const confirmation = confirm(
    "Apakah Anda yakin ingin melanjutkan ke halaman checkout?"
  );
  if (confirmation) {
    // Kode untuk melanjutkan ke halaman checkout
    popup.style.display = "block";
  } else {
    // Kode jika pengguna membatalkan checkout
    alert("Checkout dibatalkan.");
    popup.style.display = "none";
    // ... tambahkan tindakan lain yang sesuai jika checkout dibatalkan
  }
}

function hidePopup() {
  const popup = document.getElementById("checkout");
  popup.style.display = "none";
}
// css for fliping book
// Menambahkan event listener untuk setiap checkbox
// document.getElementById("page1").addEventListener("change", function () {
//   var pages = document.querySelectorAll(".pages div.page1");
//   if (this.checked) {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-120deg)";
//       pages[i].style.MozTransform = "rotateY(-120deg)";
//       pages[i].style.transform = "rotateY(-120deg)";
//     }
//   } else {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-26deg)";
//       pages[i].style.MozTransform = "rotateY(-26deg)";
//       pages[i].style.transform = "rotateY(-26deg)";
//     }
//   }
// });

// document.getElementById("page2").addEventListener("change", function () {
//   var pages = document.querySelectorAll(".pages div.page2");
//   if (this.checked) {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-130deg)";
//       pages[i].style.MozTransform = "rotateY(-130deg)";
//       pages[i].style.transform = "rotateY(-130deg)";
//     }
//   } else {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-28deg)";
//       pages[i].style.MozTransform = "rotateY(-28deg)";
//       pages[i].style.transform = "rotateY(-28deg)";
//     }
//   }
// });

// document.getElementById("page3").addEventListener("change", function () {
//   var pages = document.querySelectorAll(".pages div.page3");
//   if (this.checked) {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-140deg)";
//       pages[i].style.MozTransform = "rotateY(-140deg)";
//       pages[i].style.transform = "rotateY(-140deg)";
//     }
//   } else {
//     for (var i = 0; i < pages.length; i++) {
//       pages[i].style.webkitTransform = "rotateY(-30deg)";
//       pages[i].style.MozTransform = "rotateY(-30deg)";
//       pages[i].style.transform = "rotateY(-30deg)";
//     }
//   }
// });
// end css for fliping book
