$.getScript("https://raw.githubusercontent.com/nnnick/Chart.js/master/Chart.min.js", function(){

    var getParticipants = function() {
	var p = document.getElementsByClassName("thebutton-participants")[0];
	if (!p) return 0;
	return parseInt(p.innerHTML.replace(",", ""), 10);
    };

    var chart = $("<canvas width=300 height=200 id=buttonChart style='background-color:white;'></canvas>");
    console.log(chart);
    $(".side").prepend(chart);

    var data = {
	labels: [],
	datasets: [
            {
		label: "Participants",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: []
            }
	]
    };

    
    var ctx = document.getElementById("buttonChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data, {
	animation: false,
	bezierCurve : false
    });
    var last = getParticipants();
    setInterval(function() {
	var part = getParticipants();
	myNewChart.addData([part-last], "");
	last = part;
	myNewChart.update();
    }, 5000);
});
