var n_year=new Date("January 01, 2018 00:00:00");
function show(div1,div2){
	if($('#'+div1).hasClass('none'))
		$('#'+div1).removeClass('none')
	$('#'+div2).addClass('none');
	$('#a_'+div1).addClass('active');
	$('#a_'+div2).removeClass('active');
}
function calculateDiff(){
	var today=new Date();
	var dif=n_year-today;
	var s=1000;
	var m=s * 60;
	var h=m * 60;
	var d=h * 24;
	var days=Math.floor(dif / d);
	var hours=Math.floor((dif % d) / h);
	var minutes=Math.floor((dif % h) / m);
	var seconds=Math.floor((dif % m) / s);
	if(days<10)
		days='0'+days;
	if(hours<10)
		hours='0'+hours;
	if(minutes<10)
		minutes='0'+minutes;
	if(seconds<10)
		seconds='0'+seconds;
	$('#day').text(days);
	$('#hour').text(hours);
	$('#min').text(minutes);
	$('#sec').text(seconds);
}
function flip(){
    return Math.random()>=0.5;
}
function randomNumber(n){
	var res;
	if(n>0 && n<1000000){
		var d=n;
		do{
	    	var c=Math.round(Math.log2(n));
	    	var s='';
	    	for(i=0;i<c;i++){
	        	var r=Number(flip());
	        	s+=r;
	      	}
	    	d=parseInt(s,2);
		}while(d>=n);
	    res=d;
	}
	else{
		res='n must be greater than 0 and less than 1,000,000';
	}
	$('#n_random').text(res);
}
$(document).ready(function(){
	calculateDiff();
	setInterval(function(){
		calculateDiff();
	},1000);
	$('#btn_random').click(function(){
		var num=$('#n').val();
		if(num!='' && $.isNumeric(num))
			randomNumber(num);
		else
			$('#n_random').text('Only numeric values...');
	});
});