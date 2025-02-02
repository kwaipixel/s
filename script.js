// UT01 //
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
    iframe1.src = 'intent://minigame/launch?gameId=1001893&gameid=1001893&userId=150001403941200&deviceId=ANDROID_6794c019ba25dd6b&from=WHATS_APP&scene_from=h5_share&share_item_type=ug_task_任务ID__1179&sharequery=undefined&pruneFallback=1&target_url=https://m-game.kwai.com/share/game-invite?pruneFallback=1&share_uid=150001403941200&share_id=ANDROID_6794c019ba25dd6b_1738505192615&gameId=1001893&share_item_type=mini_game&af_channel=WHATS_APP&af_deeplink=true&af_dp=ikwai://minigame/launch?gameId=1001893&gameid=1001893&userId=150001403941200&deviceId=ANDROID_6794c019ba25dd6b&from=WHATS_APP&scene_from=h5_share&share_item_type=ug_task_%E4%BB%BB%E5%8A%A1ID__1179&sharequery=undefined&pruneFallback=1&target_url=https%3A%2F%2Fm-game.kwai.com%2Fshare%2Fgame-invite%3FpruneFallback%3D1%26share_uid%3D150001403941200%26share_id%3DANDROID_6794c019ba25dd6b_1738505192615%26gameId%3D1001893%26share_item_type%3Dmini_game&af_force_deeplink=true&af_sub1={"shareId":"ANDROID_6794c019ba25dd6b_1738505192615","shareInfo":{"target_url":"https://m-game.kwai.com/share/game-invite?gameId=1001893&gameFrom=ug_task_%E4%BB%BB%E5%8A%A1ID&sceneFrom=1179&shareQuery=%7B%22fromNative%22%3Afalse%7D&isLite=false&app_package_name=com.kwai.bulldog&shareInfo=%7B%22key%22%3A%22game-share%22%2C%22title%22%3A%22Duit%20Berputar%22%2C%22description%22%3A%22Putar%20roda%2C%20Anda%20memiliki%20kesempatan%20untuk%20memenangkan%20IDR%202.8%20juta.%22%2C%22imageUrl%22%3A%22https%3A%5C%2F%5C%2Fs21-def.ap4r.com%5C%2Foversea-game%5C%2FkwaiGame%5C%2Fjpg%5C%2FFyiPdrAVqO-share.jpg%22%7D&share_item_type=mini_game&cc=WHATS_APP&share_id=ANDROID_6794c019ba25dd6b_1738505192615&share_device_id=ANDROID_6794c019ba25dd6b&share_uid=150001403941200&shareEnter=0&kpn=KWAI_BULLDOG&translateKey=k_242560&shareBucket=in&pwa_source=share&shareCountry=IDN&shareBiz=mini_game&short_key=BmdwK4g5"}}&campaign=None&deep_link_value=ikwai://minigame/launch?gameId=1001893&gameid=1001893&userId=150001403941200&deviceId=ANDROID_6794c019ba25dd6b&from=WHATS_APP&scene_from=h5_share&share_item_type=ug_task_%E4%BB%BB%E5%8A%A1ID__1179&sharequery=undefined&pruneFallback=1&target_url=https%3A%2F%2Fm-game.kwai.com%2Fshare%2Fgame-invite%3FpruneFallback%3D1%26share_uid%3D150001403941200%26share_id%3DANDROID_6794c019ba25dd6b_1738505192615%26gameId%3D1001893%26share_item_type%3Dmini_game&is_retargeting=true&media_source=game_referral';
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
  }, 5000);
}
