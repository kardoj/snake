// Kardo Jõeleht 2016
SNAKE.Bait = function(x, y, side) {
	this.color = '#B3FFB3';
	this.side = side;
	this.x = x;
	this.y = y;

	this.drawFromCenter = function(context) {
		context.fillStyle = this.color;
		context.fillRect(
			this.x-this.side/2, this.y-this.side/2, this.side, this.side
		);
	};
};
