// Kardo Jõeleht 2016
SNAKE.Bait = function(xi, yi, sidei) {
	this.color = '#B3FFB3';
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
