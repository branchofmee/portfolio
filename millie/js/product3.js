$(function () {
    for (i = 1; i <= 7; i++) {
        $('#li3').append('<li class="product product' + i + '"></li>');
    }
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "어서 오세요, 휴남동 서점입니다" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product1").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>49%<span class='line'>|</span>127분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "불편한 편의점" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product2").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>20%<span class='line'>|</span>479분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "아침에는 죽음을 생각하는 것이 좋다" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product3").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>20%<span class='line'>|</span>451분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "세상에서 가장 재미있는 28가지 세계사 이야기" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product4").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>55%<span class='line'>|</span>42분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "달러구트 꿈 백화점" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product5").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>45%<span class='line'>|</span>39분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "나일강의 죽음" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li3 .product6").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>16%<span class='line'>|</span>628분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "웰씽킹" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
  
      .done(function (data) {
        $("#li3 .product7").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>52%<span class='line'>|</span>107분</p></div>");
      });
  });