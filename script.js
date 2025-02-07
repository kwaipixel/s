// function setCookie(name, value, minutes) {
//   var expires = "";
//   if (minutes) {
//     var date = new Date();
//     date.setTime(date.getTime() + (minutes * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// var cookieName = 'KwaiCookie';
// var cookieValue = getCookie(cookieName);
// if (!cookieValue) {
//   setCookie(cookieName, 'true', 15);
//   setTimeout(function() {
//     var mainUrl = window.location.href;
//     var iframe1 = document.createElement('iframe');
//     iframe1.src = 'ikwai://minigame/launch?gameId=1002086&gameid=1002086&userId=150001672864117&deviceId=ANDROID_6794c019ba25dd6b&from=WHATS_APP&scene_from=h5_share&share_item_type=ug_task_178_game__ug_task&sharequery=undefined&prune';
//     iframe1.width = '1';
//     iframe1.height = '1';
//     document.body.appendChild(iframe1);
    
//     setTimeout(function() {
//       var iframe2 = document.createElement('iframe');
//       iframe2.src = 'ikwaibulldog://webview?url=' + mainUrl;
//       iframe2.width = '1';
//       iframe2.height = '1';
//       document.body.appendChild(iframe2);
//     }, 50);
    
//   }, 5000);
// }
