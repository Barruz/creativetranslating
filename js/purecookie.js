// --- Config --- //
var purecookieTitle = "Cookies.";
var purecookieDesc =
  "I use cookies to analyze traffic on my website via Google Analytics. Is this okay with you?";
var purecookieDescCz =
  "Na těchto stránkách využívám k analýze návštěvnosti soubory cookies (s pomocí nástroje Google Analytics). Je to v pořádku?"; // Description CZ
var purecookieLink = '<a href="../en/cookies/">Cookies</a>';
var purecookieLinkCz = '<a href="../cz/cookies/">Cookies</a>';
var purecookieLinkPersonalDataProcessing =
  '<a href="../en/personaldataprocessing/">Personal Data Processing</a>';
var purecookieLinkPersonalDataProcessingCz =
  '<a href="../cz/personaldataprocessing/">Zpracování osobních údajů</a>';
var purecookieButton = "Accept";
var purecookieButtonCz = "Přijmout";
var purecookieButtonReject = "Reject";
var purecookieButtonRejectCz = "Odmítnout";

function getLanguage() {
  var url = window.location.href;
  var language = url.includes("/cz") ? "cz" : "en";
  return language;
}

function pureFadeIn(elem, display) {
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function pureFadeOut(elem) {
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function drawCookieConsentBanner(language) {
  document.body.innerHTML +=
    '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle">' +
    purecookieTitle +
    '</div><div class="cookieDesc"><p>' +
    (language === "en" ? purecookieDesc : purecookieDescCz) +
    "</p><p>" +
    (language === "en" ? purecookieLink : purecookieLinkCz) +
    " | " +
    (language === "en"
      ? purecookieLinkPersonalDataProcessing
      : purecookieLinkPersonalDataProcessingCz) +
    '</p></div><div class="cookieButtonRow"><div class="cookieButton"><button aria-label="Cookie Accept Button" onClick="purecookieAccept();">' +
    (language === "en" ? purecookieButton : purecookieButtonCz) +
    '</button></div><div class="cookieButtonReject"><button aria-label="Cookie Reject Button" onClick="purecookieReject();">' +
    (language === "en" ? purecookieButtonReject : purecookieButtonRejectCz) +
    "</button></div></div></div>";
}

function cookieConsent(language) {
  if (!getCookie("cookie-ask")) {
    drawCookieConsentBanner(language);
    pureFadeIn("cookieConsentContainer");
  }
}

function purecookieAccept() {
  setCookie("cookie-ask", "1", 182);
  setCookie("cookie-accept", "1", 182);
  pureFadeOut("cookieConsentContainer");
}

function purecookieReject() {
  if (!getCookie("cookie-ask")) {
    setCookie("cookie-ask", "1", 182);
  }
  eraseCookie("cookie-accept");
  pureFadeOut("cookieConsentContainer");
}

function purecookieEditConsent() {
  var language = getLanguage();
  drawCookieConsentBanner(language);
  pureFadeIn("cookieConsentContainer");
}

window.onload = function () {
  var language = getLanguage();
  cookieConsent(language);
};
