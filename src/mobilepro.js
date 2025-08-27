// src/mobilepro.js
function updateImage() {
  if ($(window).width() <= 768) {
    // 1ª secção
    $(".section-first .clouds-image").attr(
      "src",
      "images/mobile_img/clouds.png"
    );
    $(".section-first .grass-image-back").attr(
      "src",
      "images/mobile_img/relvaback.png"
    );
    $(".section-first .grass-image-front").attr(
      "src",
      "images/mobile_img/relvafront.png"
    );
    $(".section-first .grass-image-foliage").attr(
      "src",
      "images/mobile_img/trees.png"
    );
    $(".section-first .grass-image-extra").attr(
      "src",
      "images/mobile_img/extra1.png"
    );

    // 2ª secção
    $(".section-second .clouds-image").attr(
      "src",
      "images/mobile_img/clouds.png"
    );
    $(".section-second .grass-image-back").attr(
      "src",
      "images/mobile_img/relvaback.png"
    );
    $(".section-second .grass-image-front").attr(
      "src",
      "images/mobile_img/relvafront.png"
    );
    $(".section-second .grass-image-foliage").attr(
      "src",
      "images/mobile_img/trees.png"
    );
    $(".section-second .grass-image-extra").attr(
      "src",
      "images/mobile_img/extra2.png"
    );

    // 3ª secção (corrigido)
    $(".section-third .floor-image").attr("src", "images/mobile_img/bg3.png");
    $(".section-third .floor-image-furniture-1").attr(
      "src",
      "images/mobile_img/extra31.png"
    );
    $(".section-third .floor-image-furniture-2").attr(
      "src",
      "images/mobile_img/extra32.png"
    );

    // 4ª secção (corrigido)
    $(".section-fourth .floor-image").attr("src", "images/mobile_img/bg4.png");
    $(".section-fourth .floor-image-furniture-1").attr(
      "src",
      "images/mobile_img/extra41.png"
    );
    $(".section-fourth .floor-image-furniture-2").attr(
      "src",
      "images/mobile_img/extra42.png"
    );

    // 5ª secção
    $(".section-fifth .clouds-image").attr(
      "src",
      "images/mobile_img/clouds.png"
    );
    $(".section-fifth .grass-image-back").attr(
      "src",
      "images/mobile_img/relvaback.png"
    );
    $(".section-fifth .grass-image-front").attr(
      "src",
      "images/mobile_img/relvafront.png"
    );
    $(".section-fifth .grass-image-foliage").attr(
      "src",
      "images/mobile_img/trees.png"
    );
    $(".section-fifth .grass-image-extra").attr(
      "src",
      "images/mobile_img/extra5.png"
    );
  } else {
    // 1ª secção
    $(".section-first .clouds-image").attr(
      "src",
      "images/parallax/BG125/clouds.png"
    );
    $(".section-first .grass-image-back").attr(
      "src",
      "images/parallax/BG125/back.png"
    );
    $(".section-first .grass-image-front").attr(
      "src",
      "images/parallax/BG125/front.png"
    );
    $(".section-first .grass-image-foliage").attr(
      "src",
      "images/parallax/BG125/trees.png"
    );
    $(".section-first .grass-image-extra").attr(
      "src",
      "images/parallax/1/extra1.png"
    );

    // 2ª secção
    $(".section-second .clouds-image").attr(
      "src",
      "images/parallax/BG125/clouds.png"
    );
    $(".section-second .grass-image-back").attr(
      "src",
      "images/parallax/BG125/back.png"
    );
    $(".section-second .grass-image-front").attr(
      "src",
      "images/parallax/BG125/front.png"
    );
    $(".section-second .grass-image-foliage").attr(
      "src",
      "images/parallax/BG125/trees.png"
    );
    $(".section-second .grass-image-extra").attr(
      "src",
      "images/parallax/2/extra2.png"
    );

    // 3ª secção
    $(".section-third .floor-image").attr("src", "images/parallax/BG3/bg3.png");
    $(".section-third .floor-image-furniture-1").attr(
      "src",
      "images/parallax/3/extra31.png"
    );
    $(".section-third .floor-image-furniture-2").attr(
      "src",
      "images/parallax/3/extra32.png"
    );

    // 4ª secção
    $(".section-fourth .floor-image").attr(
      "src",
      "images/parallax/BG4/bg4.png"
    );
    $(".section-fourth .floor-image-furniture-1").attr(
      "src",
      "images/parallax/4/extra41.png"
    );
    $(".section-fourth .floor-image-furniture-2").attr(
      "src",
      "images/parallax/4/extra42.png"
    );

    $(".section-fifth .clouds-image").attr(
      "src",
      "images/parallax/BG125/clouds.png"
    );
    $(".section-fifth .grass-image-back").attr(
      "src",
      "images/parallax/BG125/back.png"
    );
    $(".section-fifth .grass-image-front").attr(
      "src",
      "images/parallax/BG125/front.png"
    );
    $(".section-fifth .grass-image-foliage").attr(
      "src",
      "images/parallax/BG125/trees.png"
    );
    $(".section-fifth .grass-image-extra").attr(
      "src",
      "images/parallax/5/extra5.png"
    );
  }

  // Recalcular triggers depois de trocar imagens
  if (
    window.ScrollTrigger &&
    typeof window.ScrollTrigger.refresh === "function"
  ) {
    setTimeout(() => window.ScrollTrigger.refresh(), 100);
  }
}

updateImage();
$(window).on("resize", updateImage);
