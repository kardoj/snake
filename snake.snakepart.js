// Kardo Jõeleht 2016
SNAKE.SnakePart = function(sidei, xi, yi) {
	var color = '#ABCDEF';
	var side = sidei;
	var x = xi;
	var y = yi;

	this.drawFromCenter = function(context) {
		context.fillStyle = this.color;
		context.fillRect(x-side/2, y-side/2, side, side);
	};
};
