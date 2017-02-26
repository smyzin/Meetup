var deadline = 'March 19 2017 23:59:59 GMT+03:00';


function getTime(endtime){
	var total = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (total/1000) % 60 );
	var minutes = Math.floor( (total/1000/60) % 60 );
	var hours = Math.floor( (total/(1000*60*60)) % 24 );
	var days = Math.floor( total/(1000*60*60*24) );
	return {
		'total': total,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.time__days');
	var hoursSpan = clock.querySelector('.time__hours');
	var minutesSpan = clock.querySelector('.time__minutes');
	var secondsSpan = clock.querySelector('.time__seconds');

	function updateClock(){
		var t = getTime(endtime);
		daysSpan.innerHTML = ('0' + t.days).slice(-2) + ' : ';
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ' : ';
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ' : ';
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if(t.total<=0){
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock,1000);
}

initializeClock('timeClock', deadline);