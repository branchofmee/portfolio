$(function () {
    for (i = 1; i <= 7; i++) {
        $('#li2').append('<li class="product product' + i + '"></li>');
    }
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "세븐 테크" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product1").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>44%<span class='line'>|</span>232분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "나는 나로 살기로 했다" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product2").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>45%<span class='line'>|</span>134분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "돈의 흐름에 올라타라" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product3").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>48%<span class='line'>|</span>143분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "12 1/2 부와 성공을 부르는 12가지 원칙" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product4").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>41%<span class='line'>|</span>108분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "조인계획" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product5").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>69%<span class='line'>|</span>306분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "그 해 우리는1" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
      .done(function (data) {
        $("#li2 .product6").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>41%<span class='line'>|</span>108분</p></div>");
      });
  
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "우리 모두 가끔은 미칠 때가 있지" },
      headers: { Authorization: "KakaoAK e8e9b4330ac23c780d6541aca91d9920" }
    })
  
      .done(function (data) {
        $("#li2 .product7").append("<img src='" + data.documents[0].thumbnail + "'/>").append('<p class="fontstyle4">' + data.documents[0].title + '</p>').append('<p class="fontstyle5">' + data.documents[0].authors + '</p>').append("<div class='sectiontext'><div class='plusicon'><img src='img/section4icon.svg'></div><p class='fontstyle5'>41%<span class='line'>|</span>108분</p></div>");
      });
  });