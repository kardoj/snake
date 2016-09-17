// Kardo Jõeleht 2016
SNAKE.Level = function() {
	var snake = [];
	var snakePartSide = 32;
	var initialPartCount = 3;
	var spaceBetweenParts = 1;
	var midX = SNAKE.width/2;
	var midY = SNAKE.height/2;
	var redrawDelay = 1000/SNAKE.fps;
	var started = false;
	var that = this;

	this.start = function() {
		console.log('level started');
		started = true;
		this.populateInitialSnake();
		requestAnimationFrame(this.draw, redrawDelay);
	};

	this.stop = function() {
		console.log('level stopped');
		started = false;
	};

	this.populateInitialSnake = function() {
		var totalLength = snakePartSide * initialPartCount + (initialPartCount-1) * spaceBetweenParts;
		var x = midX - totalLength/2; // Start from the left and distribute evenly
		for (var i = 0; i < initialPartCount; i++) {
			var part = new SNAKE.SnakePart(snakePartSide, x, midY);
			snake.push(part);
			x += snakePartSide + spaceBetweenParts; // Parts one pixel apart
		}
	};

	this.draw = function() {
		that.clear();
		for (var i in snake) {
			snake[i].drawFromCenter(SNAKE.drawContext);
		}

		if (started) requestAnimationFrame(that.draw, redrawDelay);
	};

	this.clear = function() {
		SNAKE.drawContext.clearRect(0, 0, SNAKE.width, SNAKE.height);
	};
};
