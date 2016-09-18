// Kardo Jõeleht 2016
SNAKE.Snake = function(screenWidth, screenHeight) {
	this.initialPartCount = 3;
	this.spaceBetweenParts = 3;
	this.side = 32;
	this.parts = [];
	this.screenWidth = screenWidth;
	this.screenHeight = screenHeight;

	// Setup
	var midX = this.screenWidth/2;
	var midY = this.screenHeight/2;
	var totalLength =
			this.side * this.initialPartCount +
			(this.initialPartCount-1) * this.spaceBetweenParts;
	var x = midX + totalLength/2 - this.side; // Start from the right and distribute evenly
	var y = midY - this.side/2;
	for (var i = 0; i < this.initialPartCount; i++) {
		var part = new SNAKE.SnakePart(this.side, x, y);
		this.parts.push(part);
		x -= this.side + this.spaceBetweenParts;
	}

	this.head = function() {
		return this.parts[0];
	};

	this.draw = function(drawContext) {
		for (var i in this.parts) {
			this.parts[i].draw(drawContext, this.screenWidth, this.screenHeight);
		}
	};

	this.reverse = function() {
		this.parts.reverse();
	};

	this.increaseSnakeLength = function() {
		var part;
		// Check two last parts and decide where to put the new part
		if (this.parts[this.parts.length-1].x < this.parts[this.parts.length-2].x) {
			// Add to right
			part = new SNAKE.SnakePart(
				this.side,
				this.parts[this.parts.length-1].x + this.side + this.spaceBetweenParts,
				this.parts[this.parts.length-1].y
			);
		} else if (this.parts[this.parts.length-1].x > this.parts[this.parts.length-2].x) {
			// Add to left
			part = new SNAKE.SnakePart(
				this.side,
				this.parts[this.parts.length-1].x - this.side - this.spaceBetweenParts,
				this.parts[this.parts.length-1].y
			);
		} else if (this.parts[this.parts.length-1].y < this.parts[this.parts.length-2].y) {
			// Add to bottom
			part = new SNAKE.SnakePart(
				this.side,
				this.parts[this.parts.length-1].x,
				this.parts[this.parts.length-1].y + this.side + this.spaceBetweenParts
			);
		} else if (this.parts[this.parts.length-1].y > this.parts[this.parts.length-2].y) {
			// Add to top
			part = new SNAKE.SnakePart(
				this.side,
				this.parts[this.parts.length-1].x,
				this.parts[this.parts.length-1].y - this.side - this.spaceBetweenParts
			);
		}
		this.parts.push(part);
		console.log('snake length increased');
	};
};
