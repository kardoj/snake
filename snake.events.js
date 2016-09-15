// Kardo Jõeleht 2016
SNAKE.Events = function() {
	this.createEvent = function(eventName){
		var event = document.createEvent("HTMLEvents");
	    event.initEvent(eventName, true, true);
		SNAKE.canvas.dispatchEvent(event);
	};

	this.openStartScreen = function() {
		this.createEvent('snakeOpenStartScreen');
	};

	this.startLevel = function() {
		this.createEvent('snakeStartLevel');
	};

	SNAKE.canvas.addEventListener('snakeOpenStartScreen', function() {
		console.log('start screen opened');
	});

	SNAKE.canvas.addEventListener('snakeStartLevel', function() {
		SNAKE.level.start();
	});

	window.addEventListener('resize', function() {
		console.log('drawing');
		SNAKE.level.draw();
	});
};
