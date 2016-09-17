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

	window.addEventListener('keyup', function(e) {
		if ([37, 38, 39, 40].indexOf(e.which) != -1) {
			SNAKE.controls.setMoveDirection(e.which);
		}
	});

	window.addEventListener('resize', function() {
		console.log('resizing');
		SNAKE.setRenderDimensions();
		SNAKE.level.draw();
	});
};
