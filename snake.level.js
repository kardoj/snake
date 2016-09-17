// Kardo Jõeleht 2016
SNAKE.Level = function(settings) {
	this.drawContext = settings.drawContext;
	this.height = settings.height;
	this.initialPartCount = 3;
	this.midX = SNAKE.width/2;
	this.midY = SNAKE.height/2;
	this.mover = null;
	this.moveSpeed = 1000;
	this.snakePartSide = 32;
	this.moveStep = this.snakePartSide;
	this.snake = [];
	this.spaceBetweenParts = 1;
	this.started = false;
	this.width = settings.width;

	var level = this;

	this.start = function() {
		if (!this.started) {
			this.started = true;
			this.setupSnake();
			this.mover = setInterval(function() { level.move(); }, level.moveSpeed);
			requestAnimationFrame(this.draw);
			console.log('level started');
		} else {
			console.log('already started');
		}
	};

	this.stop = function() {
		if (this.started) {
			console.log('level stopped');
			this.started = false;
			this.snake = [];
			clearInterval(this.mover);
		} else {
			console.log('not started');
		}
	};

	this.setupSnake = function() {
		var totalLength =
				this.snakePartSide * this.initialPartCount +
				(this.initialPartCount-1) * this.spaceBetweenParts;
		var x = this.midX - totalLength/2; // Start from the left and distribute evenly
		for (var i = 0; i < this.initialPartCount; i++) {
			var part = new SNAKE.SnakePart(this.snakePartSide, x, this.midY);
			this.snake.push(part);
			x += this.snakePartSide + this.spaceBetweenParts; // Parts one pixel apart
		}
	};

	this.move = function() {
		// Moves the snake by one step
		for (var i in this.snake) {
			this.snake[i].x += this.moveStep;
		}
	};

	this.draw = function() {
		level.clear();
		for (var i in level.snake) {
			level.snake[i].drawFromCenter(level.drawContext);
		}

		if (level.started) requestAnimationFrame(level.draw);
	};

	this.clear = function() {
		this.drawContext.clearRect(0, 0, this.width, this.height);
	};
};
