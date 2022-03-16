$(function () {
    for (i = 1; i <= 7; i++) {
        $('#li4').append('<li class="product product' + i + '"></li>');
    }
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "만나러갈게" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product1").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>727분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "세이브 미" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product2").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>774분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "슬기로운 회귀생활1" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product3").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>772분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "일교차" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product4").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>774분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "고은 나의 고은" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product5").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>774분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "천룡팔부" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li4 .product6").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>774분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "npc로 각성한 헌터" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
  
      .done(function (data) {
        $("#li4 .product7").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>21%<span class='line'>|</span>774분</p></div>");
      });
  });