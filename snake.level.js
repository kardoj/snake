// Kardo Jõeleht 2016
SNAKE.Level = function() {
	var snake = [];
	var snakePartSide = 32;
	var initialPartCount = 3;
	var spaceBetweenParts = 1;
	var midX = SNAKE.width/2;
	var midY = SNAKE.height/2;

	this.start = function() {
		console.log('level started');
		this.populateInitialSnake();
		this.draw();
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
		this.clear();
		for (var i in snake) {
			snake[i].drawFromCenter(SNAKE.drawContext);
		}
	};

	this.clear = function() {
		SNAKE.drawContext.clearRect(0, 0, SNAKE.width, SNAKE.height);
	};
};
