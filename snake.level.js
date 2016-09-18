// Kardo Jõeleht 2016
SNAKE.Level = function(settings) {
	var level = this;

	this.controls = settings.controls;
	this.drawContext = settings.drawContext;
	this.height = settings.height;
	this.initialPartCount = 3;
	this.midX = SNAKE.width/2;
	this.midY = SNAKE.height/2;
	this.mover = null;
	this.moveSpeed = 300;
	this.minMoveSpeed = 50;
	this.reduceSpeedOnBait = 10;
	this.snakePartSide = 32;
	this.moveStep = this.snakePartSide;
	this.snake = [];
	this.baits = [];
	this.spaceBetweenParts = 3;
	this.started = false;
	this.width = settings.width;
	this.baitSide = 64;
	this.controllerTicks = 10; // Checks per second
	this.controller = null;

	this.start = function() {
		if (!this.started) {
			this.started = true;
			this.setupSnake();
			this.controller = setInterval(function() { level.control(); }, level.controllerTicks);
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
			clearInterval(this.controller);
		} else {
			console.log('not started');
		}
	};

	this.control = function() {
		if (level.baits.length == 0) {
			level.generateBait();
		}
		// Check if snake's head hit bait
		for (var i in level.baits) {
			var inRangeX = level.snake[0].x >= level.baits[i].x && level.snake[0].x <= level.baits[i].x + level.baitSide;
			var inRangeY = level.snake[0].y >= level.baits[i].y && level.snake[0].y <= level.baits[i].y + level.baitSide;
			if (inRangeX && inRangeY) {
				console.log('hit bait');
				level.baits.pop();
				if (level.moveSpeed > level.minMoveSpeed) {
					level.moveSpeed -= level.reduceSpeedOnBait;
					console.log('moveSpeed=' + level.moveSpeed);
				}
				level.increaseSnakeLength();
			}
		}
	};

	this.increaseSnakeLength = function() {
		var part;
		// Check two last parts and decide where to put the new part
		if (this.snake[this.snake.length-1].x < this.snake[this.snake.length-2].x) {
			// Add to right
			part = new SNAKE.SnakePart(
				this.snakePartSide,
				this.snake[this.snake.length-1].x + this.snakePartSide + this.spaceBetweenParts,
				this.snake[this.snake.length-1].y
			);
		} else if (this.snake[this.snake.length-1].x > this.snake[this.snake.length-2].x) {
			// Add to left
			part = new SNAKE.SnakePart(
				this.snakePartSide,
				this.snake[this.snake.length-1].x - this.snakePartSide - this.spaceBetweenParts,
				this.snake[this.snake.length-1].y
			);
		} else if (this.snake[this.snake.length-1].y < this.snake[this.snake.length-2].y) {
			// Add to bottom
			part = new SNAKE.SnakePart(
				this.snakePartSide,
				this.snake[this.snake.length-1].x,
				this.snake[this.snake.length-1].y + this.snakePartSide + this.spaceBetweenParts
			);
		} else if (this.snake[this.snake.length-1].y > this.snake[this.snake.length-2].y) {
			// Add to top
			part = new SNAKE.SnakePart(
				this.snakePartSide,
				this.snake[this.snake.length-1].x,
				this.snake[this.snake.length-1].y - this.snakePartSide - this.spaceBetweenParts
			);
		}
		this.snake.push(part);
		console.log('snake length increased');
	};

	this.generateBait = function() {
		this.baits.push(
			new SNAKE.Bait(
				Math.ceil(Math.random() * this.width) - this.baitSide/2,
				Math.ceil(Math.random() * this.height) - this.baitSide/2,
				this.baitSide
			)
		);
		console.log('bait generated');
	};

	this.setupSnake = function() {
		var totalLength =
				this.snakePartSide * this.initialPartCount +
				(this.initialPartCount-1) * this.spaceBetweenParts;
		var x = this.midX + totalLength/2; // Start from the right and distribute evenly
		for (var i = 0; i < this.initialPartCount; i++) {
			var part = new SNAKE.SnakePart(this.snakePartSide, x, this.midY);
			this.snake.push(part);
			x -= this.snakePartSide + this.spaceBetweenParts;
		}
	};

	this.move = function() {
		// Moves the snake by one step
		var oldPosition;
		var previousPosition;
		for (var i in this.snake) {
			oldPosition = {
				x: this.snake[i].x,
				y: this.snake[i].y
			};
			if (i == 0) {
				// Set new head location according to direction
				var headPosition = this.controls.getHeadPosition(
													this.snake[i].x,
													this.snake[i].y,
													this.snakePartSide + this.spaceBetweenParts
												 );
				this.snake[i].x = headPosition.x;
				this.snake[i].y = headPosition.y;
			} else {
				// Move all other parts to previous' part's position
				this.snake[i].x = previousPosition.x;
				this.snake[i].y = previousPosition.y;
			}
			previousPosition = {
				x: oldPosition.x,
				y: oldPosition.y
			};
		}
	};

	this.reverseSnake = function() {
		this.snake.reverse();
		console.log('direction reversed');
	};

	this.draw = function() {
		level.clear();
		for (var i in level.snake) {
			level.snake[i].drawFromCenter(level.drawContext, level.width, level.height);
		}
		for(i in level.baits) {
			level.baits[i].drawFromCenter(level.drawContext);
		}
		if (level.started) requestAnimationFrame(level.draw);
	};

	this.clear = function() {
		this.drawContext.clearRect(0, 0, this.width, this.height);
	};
};
