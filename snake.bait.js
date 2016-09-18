// Kardo Jõeleht 2016
SNAKE.Bait = function(screenWidth, screenHeight, side) {
	this.color = '#B3FFB3';
	this.side = side;
	// New bait with random coordinates
	this.x = Math.ceil(Math.random() * (screenWidth - this.side));
	this.y = Math.ceil(Math.random() * (screenHeight - this.side));

	this.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(
			this.x, this.y, this.side, this.side
		);
	};
};
