//header : h1,h2 로 문서 타이틀 자동 완성
window.onload = function () { 
var maintitle = document.getElementsByTagName('h1')[0].childNodes[0].nodeValue;
var subtitle = document.getElementsByTagName('h2')[0].childNodes[0].nodeValue;
document.title = (maintitle + " - " + subtitle); }

/* 네비 생성 (사용 안함)
document.getElementById("navi").innerHTML =
"<ul>" +
"<li><a href='/index.html'>HOME</a></li>" +
"<li><a href='/notice.html'>NOTICE</a></li>" +
"<li><a href='http://ngcquest.bbs.fc2.com/'>BBS</a></li>" +
"</ul>";
*/

/* 목차 설정 */
$('#content').toc({context: '#article', exclude: 'h1, h2', autoId: true});

/* 표 정렬 정의 */
$(document).ready(function() 
    { 
        $("#tsts").tablesorter(); 
    } 
);
