// Kardo Jõeleht 2016
SNAKE.SnakePart = function(sidei, xi, yi) {
	this.color = '#ABCDEF';
	this.side = sidei;
	this.x = xi;
	this.y = yi;

	this.drawFromCenter = function(context) {
		context.fillStyle = this.color;
		context.fillRect(
			this.x-this.side/2, this.y-this.side/2, this.side, this.side
		);
	};
};
