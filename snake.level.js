// Kardo Jõeleht 2016
SNAKE.Level = function() {
	var snake = [];
	var snakePartSide = 30;
	var initialPartCount = 3;

	this.start = function() {
		console.log('level started');
		this.populateInitialSnake();
		this.draw();
	};

	this.populateInitialSnake = function() {
		var totalLength = snakePartSide * initialPartCount + (initialPartCount-1)*1;
		var x = SNAKE.width/2-totalLength/2; // Start from the left and distribute evenly
		var midY = SNAKE.height/2; // Middle
		for (var i = 0; i < initialPartCount; i++) {
			var part = new SNAKE.SnakePart(snakePartSide, x, midY);
			snake.push(part);
			x += snakePartSide+1; // Parts one pixel apart
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
