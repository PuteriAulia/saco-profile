let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

$(document).ready(function () {
  $(".toggle-kh").click(function () {
    $(".anggota-kh").slideToggle(2000);
  });

  $(".toggle-humas").click(function () {
    $(".anggota-humas").slideToggle(2000);
  });

  $(".toggle-danus").click(function () {
    $(".anggota-danus").slideToggle(2000);
  });

  $(".toggle-kominfo").click(function () {
    $(".anggota-kominfo").slideToggle(2000);
  });
});


