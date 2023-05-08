// UT10 //
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
    iframe1.src = 'ikwai://webview?url=https%3A%2F%2Fincentive.kwai.com%2Factivity%2Finvitation-return-ladder%3Fpage%3DreturnLadder%26share_item_type%3Dreturn_ladder%26share_device_id%3DANDROID_d346449f6d525dda%26share_uid%3D150001430087132%26countryInfo%3DIDN%26language%3Did-id%26sourcePlatform%3DANDROID%26ft%3Dpromotion%26taskId%3D75%26countryCode%3DIDN%26cc%3DCOPY_LINK%26share_id%3DANDROID_d346449f6d525dda_1683516327527%26kpn%3DKWAI_BULLDOG%26fishId%3D2176%26sharePageType%3D0%26innerPage%3Dhttps%253A%252F%252Fincentive.kwai.com%252Factivity%252Finvitation-return-ladder%253Fwebview%253Dyoda%2526need_login%253Dtrue%2526loginCheck%253D1%2526showLoading%253Dtrue%2526hyId%253Dincentive_main%2526source%253DSEAMLESS%2526share_uid%253D150001430087132%26shareInfo%3D%257B%2522key%2522%253A%2522encourage-share-config%2522%252C%2522title%2522%253A%2522Bantu%2520saya%2520klik%2520dan%2520berpartisipasi%2520bersama%2520di%2520aktivitas%2520ini%2520untuk%2520menangkan%2520uang%2520Rp%252058.600.%2520Pengguna%2520lama%2520juga%2520dapat%2520berpartisipasi%2520dan%2520dapatkan%2520uang%2520tunai!%2522%252C%2522description%2522%253A%2522%2522%252C%2522imageUrl%2522%253A%2522https%253A%252F%252Fcdn-static.kwai.net%252Fkos%252Fs101%252Fnlav11312%252Fkwai-pro%252Ffish%252F1680097674141843316703.jpg%2522%252C%2522siteName%2522%253A%2522SnackVideo%2522%252C%2522extra%2522%253A%255B%257B%2522property%2522%253A%2522twitter%253Aimage%2522%252C%2522content%2522%253A%2522https%253A%252F%252Fcdn-static.kwai.net%252Fkos%252Fs101%252Fnlav11312%252Fkwai-pro%252Ffish%252F1680097674141843316703.jpg%2522%257D%252C%257B%2522property%2522%253A%2522twitter%253Adescription%2522%252C%2522content%2522%253A%2522%2522%257D%255D%257D%26sign%3DTc65Wa5%252BjEKLgmdzRPeRPc1j28cNUCUfmA3yqqda37CK0Au9f1jida7Kb08MRuS3AyNcILfGXPOh%252B%252B6DGMP8CtiMcvc5wuGDTXOCprrKS4wkpnNccuUVQ7Orsz6E5WU0ayxU32gtT5RVHC8QZel3f6Sb%252B13Ulhc1iy3qAo6DVm8%253D%26shareEnter%3D1%26shareBucket%3Din%26pwa_source%3Dshare%26shareCountry%3DIDN%26shareBiz%3Dh5_activity%26short_key%3DrDux9wdf%26hideNavBar%3D1&target_url=https%3A%2F%2Fincentive.kwai.com%2Fshare%2Fincentive%2Freturn-ladder%3Fpage%3DreturnLadder%26share_item_type%3Dreturn_ladder%26share_device_id%3DANDROID_d346449f6d525dda%26share_uid%3D150001430087132%26countryInfo%3DIDN%26language%3Did-id%26sourcePlatform%3DANDROID%26ft%3Dpromotion%26taskId%3D75%26countryCode%3DIDN%26cc%3DCOPY_LINK%26share_id%3DANDROID_d346449f6d525dda_1683516327527%26kpn%3DKWAI_BULLDOG%26fishId%3D2176%26sharePageType%3D0%26innerPage%3Dhttps%253A%252F%252Fincentive.kwai.com%252Factivity%252Finvitation-return-ladder%253Fwebview%253Dyoda%2526need_login%253Dtrue%2526loginCheck%253D1%2526showLoading%253Dtrue%2526hyId%253Dincentive_main%2526source%253DSEAMLESS%2526share_uid%253D150001430087132%26shareInfo%3D%257B%2522key%2522%253A%2522encourage-share-config%2522%252C%2522title%2522%253A%2522Bantu%2520saya%2520klik%2520dan%2520berpartisipasi%2520bersama%2520di%2520aktivitas%2520ini%2520untuk%2520menangkan%2520uang%2520Rp%252058.600.%2520Pengguna%2520lama%2520juga%2520dapat%2520berpartisipasi%2520dan%2520dapatkan%2520uang%2520tunai!%2522%252C%2522description%2522%253A%2522%2522%252C%2522imageUrl%2522%253A%2522https%253A%252F%252Fcdn-static.kwai.net%252Fkos%252Fs101%252Fnlav11312%252Fkwai-pro%252Ffish%252F1680097674141843316703.jpg%2522%252C%2522siteName%2522%253A%2522SnackVideo%2522%252C%2522extra%2522%253A%255B%257B%2522property%2522%253A%2522twitter%253Aimage%2522%252C%2522content%2522%253A%2522https%253A%252F%252Fcdn-static.kwai.net%252Fkos%252Fs101%252Fnlav11312%252Fkwai-pro%252Ffish%252F1680097674141843316703.jpg%2522%257D%252C%257B%2522property%2522%253A%2522twitter%253Adescription%2522%252C%2522content%2522%253A%2522%2522%257D%255D%257D%26sign%3DTc65Wa5%252BjEKLgmdzRPeRPc1j28cNUCUfmA3yqqda37CK0Au9f1jida7Kb08MRuS3AyNcILfGXPOh%252B%252B6DGMP8CtiMcvc5wuGDTXOCprrKS4wkpnNccuUVQ7Orsz6E5WU0ayxU32gtT5RVHC8QZel3f6Sb%252B13Ulhc1iy3qAo6DVm8%253D%26shareEnter%3D1%26shareBucket%3Din%26pwa_source%3Dshare%26shareCountry%3DIDN%26shareBiz%3Dh5_activity%26short_key%3DrDux9wdf/';
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
