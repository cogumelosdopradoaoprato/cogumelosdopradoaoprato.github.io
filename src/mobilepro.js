function updateImage() {
  if ($(window).width() <= 768) {
    // Mobile view
    //First section
    $(".section-first .clouds-image").attr("src", "images/mobile_img/clouds.png");
    $(".section-first .grass-image-back").attr("src","images/mobile_img/relvaback.png");
    $(".section-first .grass-image-front").attr("src","images/mobile_img/relvafront.png");
    $(".section-first .grass-image-foliage").attr("src", "images/mobile_img/trees.png");
    $(".section-first .grass-image-extra").attr("src", "images/mobile_img/extra1.png");

    //Second section
    $(".section-second .clouds-image").attr("src", "images/mobile_img/clouds.png");
    $(".section-second .grass-image-back").attr("src","images/mobile_img/relvaback.png");
    $(".section-second .grass-image-front").attr("src","images/mobile_img/relvafront.png");
    $(".section-second .grass-image-foliage").attr("src", "images/mobile_img/trees.png");
    $(".section-second .grass-image-extra").attr("src", "images/mobile_img/extra2.png");

    //Third section
    $(".section-third .floor-image").attr("src", "images/mobile_img/bg3.png");
    $(".section-third .floor-image-furniture-1").attr("src", "images/mobile_img/extra3.png");
    $(".section-third .floor-image-furniture-2").attr("src", "images/mobile_img/extra32.png");

    //Fourth section
    $(".section-fourth .floor-image").attr("src", "images/mobile_img/bg4.png");
    $(".section-fourth .floor-image-furniture-1").attr("src", "images/mobile_img/extra4.png");
    $(".section-fourth .floor-image-furniture-2").attr("src", "images/mobile_img/extra42.png");

    //Fifth section
    $(".section-fifth .clouds-image").attr("src", "images/mobile_img/clouds.png");
    $(".section-fifth .grass-image-back").attr("src", "images/mobile_img/relvaback.png");
    $(".section-fifth .grass-image-front").attr("src", "images/mobile_img/relvafront.png");
    $(".section-fifth .grass-image-foliage").attr("src", "images/mobile_img/trees.png");
    $(".section-fifth .grass-image-extra").attr("src", "images/mobile_img/extra5.png");

  } else {
    //first section
    $(".section-first .clouds-image").attr(
      "src",
      "images/parallax/BG 125/clouds.png"
    );
    $(".section-first .grass-image-back").attr(
      "src",
      "images/parallax/BG 125/back.png"
    );
    $(".section-first .grass-image-front").attr(
      "src",
      "images/parallax/BG 125/front.png"
    );
    $(".section-first .grass-image-foliage").attr(
      "src",
      "images/parallax/BG 125/foliage.png"
    );
    $(".section-first .grass-image-extra").attr(
      "src",
      "images/parallax/1/extra1.png"
    );

    //second section
    $(".section-second .clouds-image").attr(
      "src",
      "images/parallax/BG 125/clouds.png"
    );
    $(".section-second .grass-image-back").attr(
      "src",
      "images/parallax/BG 125/back.png"
    );
    $(".section-second .grass-image-front").attr(
      "src",
      "images/parallax/BG 125/front.png"
    );
    $(".section-second .grass-image-foliage").attr(
      "src",
      "images/parallax/BG 125/foliage.png"
    );
    $(".section-second .grass-image-extra").attr(
      "src",
      "images/parallax/2/extra2.png"
    );
    //third section
    $(".section-third .floor-image").attr("src", "images/parallax/BG3/bg3.png");
    $(".section-third .floor-image-furniture-1").attr(
      "src",
      "images/parallax/3/furniture1.png"
    );
    $(".section-third .floor-image-furniture-2").attr(
      "src",
      "images/parallax/3/furniture2.png"
    );
    //fourth section
    $(".section-fourth .floor-image").attr(
      "src",
      "images/parallax/BG4/bg4.png"
    );
    $(".section-fourth .floor-image-furniture-1").attr(
      "src",
      "images/parallax/4/furniture1.png"
    );
    $(".section-fourth .floor-image-furniture-2").attr(
      "src",
      "images/parallax/4/furniture2.png"
    );

    //fifth section
    $(".section-fifth .clouds-image").attr(
      "src",
      "images/parallax/BG 125/clouds.png"
    );
    $(".section-fifth .grass-image-back").attr(
      "src",
      "images/parallax/BG 125/back.png"
    );
    $(".section-fifth .grass-image-front").attr(
      "src",
      "images/parallax/BG 125/front.png"
    );
    $(".section-fifth .grass-image-foliage").attr(
      "src",
      "images/parallax/BG 125/foliage.png"
    );
    $(".section-fifth .grass-image-extra").attr(
      "src",
      "images/parallax/1/extra5.png"
    );
  }
}

updateImage(); // On load
$(window).resize(updateImage); // On resize
