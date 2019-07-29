// Facebook async loading of JSAPI -->
(function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId: "237778732920749",
      status: true,
      cookie: true,
      xfbml: true
    }); //
  };
  var e = document.createElement("script");
  e.async = true;
  e.src =
    document.location.protocol + "//connect.facebook.net/en_US/all.js#xfbml=1";
  document.getElementById("fb-root").appendChild(e);
})();
//Google plusone  -->
(function() {
  var po = document.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.src = "https://apis.google.com/js/plusone.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);
})();

$(function() {
  $("a.ga-track").click(function() {
    if ($(this).attr("data-kpi")) {
      _gaq.push(["_trackPageview", $(this).attr("data-kpi")]);
    } else {
      _gaq.push(["_trackPageview", $(this).attr("href")]);
    }
  });

  $("form.ga-track").submit(function() {
    _gaq.push(["_trackPageview", $(this).attr("data-kpi")]);
  });
});
