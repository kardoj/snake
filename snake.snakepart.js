// Kardo Jõeleht 2016
SNAKE.SnakePart = function(side, x, y) {
	this.color = '#ABCDEF';
	this.side = side;
	this.x = x;
	this.y = y;
	this.width = SNAKE.width;
	this.height = SNAKE.height;

	this.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(
			this.x,
			this.y,
		 	this.side,
			this.side
		);
	};

	this.setX = function(newX) {
		var x = newX % this.width;
		if (x < 0) {
			x = this.width + x;
		}
		this.x = x;
	};

	this.setY = function(newY) {
		var y = newY % this.height;
		if (y < 0) {
			y = this.height + y;
		}
		this.y = y;
	};
};
