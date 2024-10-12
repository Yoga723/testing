document.getElementById('showMorePartner').addEventListener('click', function () {
    var hiddenImages = document.querySelectorAll('#hiddenImages');
    hiddenImages.forEach(function (image) {
      image.classList.toggle('d-none');
    });
    this.textContent = this.textContent === 'Show More' ? 'Show Less' : 'Show More';
  });