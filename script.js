// UT16 //
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
    iframe1.src = 'ikwai://webview?url=https%3A%2F%2Fincentive.kwai.com%2Factivity%2Fcarnival-index%3Fwebview%3Dyoda%26page%3DdailyCash%26groupId%3DWvCFqwE816-zjenVxKtcp3indQBUCUrg-pwMIj9ArQj8Cd3vwtfktuozgKBR9X8C%26share_item_type%3Ddaily_cash%26share_device_id%3DANDROID_129413e5a8e5fca6%26share_uid%3D150001431237488%26countryInfo%3DIDN%26language%3Did-id%26sourcePlatform%3DANDROID%26ft%3Dpromotion%26taskId%3D61%26countryCode%3DIDN%26cc%3DCOPY_LINK%26share_id%3DANDROID_129413e5a8e5fca6_1684069004810%26kpn%3DKWAI_BULLDOG%26fishId%3D2261%26sharePageType%3D0%26innerPage%3Dhttps%253A%252F%252Fincentive.kwai.com%252Factivity%252Fcarnival-index%253Fwebview%253Dyoda%2526need_login%253Dtrue%2526loginCheck%253D1%2526showLoading%253Dtrue%2526hyId%253Dincentive_main%2526source%253DSEAMLESS%2526share_uid%253D150001431237488%2526groupId%253DWvCFqwE816-zjenVxKtcp3indQBUCUrg-pwMIj9ArQj8Cd3vwtfktuozgKBR9X8C%26shareEnter%3D1%26shareBucket%3Din%26pwa_source%3Dshare%26shareCountry%3DIDN%26shareBiz%3Dh5_activity%26short_key%3DTHqdwrsI%26hideNavBar%3D1&target_url=https%3A%2F%2Fincentive.kwai.com%2Fshare%2Fincentive%2Fdaily-event%3Fwebview%3Dyoda%26page%3DdailyCash%26groupId%3DWvCFqwE816-zjenVxKtcp3indQBUCUrg-pwMIj9ArQj8Cd3vwtfktuozgKBR9X8C%26share_item_type%3Ddaily_cash%26share_device_id%3DANDROID_129413e5a8e5fca6%26share_uid%3D150001431237488%26countryInfo%3DIDN%26language%3Did-id%26sourcePlatform%3DANDROID%26ft%3Dpromotion%26taskId%3D61%26countryCode%3DIDN%26cc%3DCOPY_LINK%26share_id%3DANDROID_129413e5a8e5fca6_1684069004810%26kpn%3DKWAI_BULLDOG%26fishId%3D2261%26sharePageType%3D0%26innerPage%3Dhttps%253A%252F%252Fincentive.kwai.com%252Factivity%252Fcarnival-index%253Fwebview%253Dyoda%2526need_login%253Dtrue%2526loginCheck%253D1%2526showLoading%253Dtrue%2526hyId%253Dincentive_main%2526source%253DSEAMLESS%2526share_uid%253D150001431237488%2526groupId%253DWvCFqwE816-zjenVxKtcp3indQBUCUrg-pwMIj9ArQj8Cd3vwtfktuozgKBR9X8C%26shareEnter%3D1%26shareBucket%3Din%26pwa_source%3Dshare%26shareCountry%3DIDN%26shareBiz%3Dh5_activity%26short_key%3DTHqdwrsI/';
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
