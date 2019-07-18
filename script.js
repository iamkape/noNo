/*let left = 0;
var timer;
autoTimer();

function autoTimer (){
	timer = setTimeout(function(){
		var scr = document.getElementById('scroll');
		left=left-275;
		if (left<-1100){
			left= 0;
			clearTimeout(timer);
		}
		scr.style.left = left+'px';
		autoTimer();
	},1500);
}

*/

/*var link = document.getElementById("link");*/
/* var box = document.getElementById("abo");
link.onclick = function (){
	box.classList.add("open");
}*/var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.106028, lng: 8.745974},
          zoom: 17
        });
      }