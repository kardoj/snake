// Kardo Jõeleht 2016
SNAKE.SnakePart = function(side, x, y) {
	this.color = '#ABCDEF';
	this.side = side;
	this.x = x;
	this.y = y;

	this.drawFromCenter = function(context, screenWidth, screenHeight) {
		context.fillStyle = this.color;
		var screenPos = this.positionOnScreen(screenWidth, screenHeight);
		context.fillRect(
			screenPos.x,
			screenPos.y,
		 	this.side,
			this.side
		);
	};

	this.positionOnScreen = function(screenWidth, screenHeight) {
		var x = (this.x-this.side/2) % screenWidth;
		var y = (this.y-this.side/2) % screenHeight;
		if (x < 0) {
			x = screenWidth + x;
		}
		if (y < 0) {
			y = screenHeight + y;
		}

		return {
			x: x,
			y: y
		};
	};
};
