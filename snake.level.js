// Kardo Jõeleht 2016
SNAKE.Level = function(settings) {
	var level = this;

	this.controls = settings.controls;
	this.drawContext = settings.drawContext;
	this.height = settings.height;
	this.width = settings.width;
	this.mover = null;
	this.moveSpeed = 300;
	this.minMoveSpeed = 50;
	this.reduceSpeedOnBait = 10;
	this.moveStep = this.snakePartSide;
	this.baits = [];
	this.started = false;
	this.baitSide = 64;
	this.controllerTicks = 10; // Checks per second
	this.controller = null;
	this.snake = null;

	this.start = function() {
		if (!this.started) {
			this.started = true;
			this.snake = new SNAKE.Snake(this.width, this.height);
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
			this.snake = null;
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
			var inRangeX = level.snake.head().x >= level.baits[i].x &&
						   level.snake.head().x <= level.baits[i].x + level.baits[i].side;
			var inRangeY = level.snake.head().y >= level.baits[i].y &&
						   level.snake.head().y <= level.baits[i].y + level.baits[i].side;
			if (inRangeX && inRangeY) {
				console.log('hit bait');
				level.baits.pop();
				if (level.moveSpeed > level.minMoveSpeed) {
					level.moveSpeed -= level.reduceSpeedOnBait;
					console.log('moveSpeed=' + level.moveSpeed);
				}
				level.snake.increaseSnakeLength();
			}
		}
	};

	this.generateBait = function() {
		this.baits.push(
			new SNAKE.Bait(this.width, this.height, this.baitSide)
		);
		console.log('bait generated');
	};

	this.move = function() {
		// Moves the snake by one step
		var oldPosition;
		var previousPosition;
		for (var i in this.snake.parts) {
			oldPosition = {
				x: this.snake.parts[i].x,
				y: this.snake.parts[i].y
			};
			if (i == 0) {
				// Set new head location according to direction
				var headPosition = this.controls.getNewHeadPosition(
													this.snake.parts[i].x,
													this.snake.parts[i].y,
													this.snake.side + this.snake.spaceBetweenParts
												 );
				this.snake.parts[i].x = headPosition.x;
				this.snake.parts[i].y = headPosition.y;
			} else {
				// Move all other parts to previous' part's position
				this.snake.parts[i].x = previousPosition.x;
				this.snake.parts[i].y = previousPosition.y;
			}
			previousPosition = {
				x: oldPosition.x,
				y: oldPosition.y
			};
		}
	};

	this.draw = function() {
		level.clear();
		level.snake.draw(level.drawContext);
		for(var i in level.baits) {
			level.baits[i].draw(level.drawContext);
		}
		if (level.started) requestAnimationFrame(level.draw);
	};

	this.clear = function() {
		this.drawContext.clearRect(0, 0, this.width, this.height);
	};
};
