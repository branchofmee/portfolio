$(function () {
  for (i = 1; i <= 7; i++) {
    $('#li1').append('<li class="product product' + i + '"></li>');
  }

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product1").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'> 86% <span class='line'>|</span>173분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오즈의 의류 수거함" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product2").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>78%<span class='line'>|</span>186분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "구의 증명" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product3").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>75%<span class='line'>|</span>122분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘밤, 세계에서 이 사랑이 사라진다해도" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product4").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>75%<span class='line'>|</span>211분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "달러구트 꿈 백화점2" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product5").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>74%<span class='line'>|</span>282분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "천개의 파랑" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })
    .done(function (data) {
      $("#li1 .product6").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>73%<span class='line'>|</span>303분</p></div>");
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "구미호 식당" },
    headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
  })

    .done(function (data) {
      $("#li1 .product7").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>73%<span class='line'>|</span>303분</p></div>");
    });
});



