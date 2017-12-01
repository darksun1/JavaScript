<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=800">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>JavaScript Test</title>
		<link rel="stylesheet" href="css/style.css">
		<script src="js/jquery-3.2.1.js"></script>
		<script src="js/app.js"></script>
	</head>
	<body>
		<header>
			<div class="nav">
				<div class="menu">
					<ul>
						<li><a id="a_countdown" class="active" onclick="show('countdown','flip')">Countdown Timer</a></li>
						<li><a id="a_flip" onclick="show('flip','countdown')">Coin Flip</a></li>
					</ul>
				</div>
			</div>
		</header>
		<div class="clear"></div>
		<div id="countdown">
			<div class="title">New Year's Countdown</div>
			<div class="content-count">
				<div class="cont">
					<div id="day" class="numbers"></div>
					<p class="sub">Days</p>
				</div>
				<div class="cont">
					<div id="hour" class="numbers"></div>
					<p class="sub">Hours</p>
				</div>
				<div class="cont">
					<div id="min" class="numbers"></div>
					<p class="sub">Minutes</p>
				</div>
				<div class="cont">
					<div id="sec" class="numbers"></div>
					<p class="sub">Seconds</p>
				</div>
			</div>
			<div class="text">Monday, January 1, 2018</div>
		</div>
		<div id="flip" class="none">
			<div class="title">Random Number Generator</div>
			<div class="text2">Enter a number greater than 0 and less than 1,000,000</div>
			<div class="cont2">
				<label for="n">n= </label>
				<input type="text" id="n" class="input-txt"/>
				<button id="btn_random" class="btn">Get number!</button>
			</div>
			<div class="cont-res">
				<div id="n_random" class="result"></div>
			</div>
		</div>
	</body>
</html>