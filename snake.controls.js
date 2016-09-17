// Kardo Jõeleht 2016
SNAKE.Controls = function() {
	// Arrow codes for reference and prettier usage
	var leftBtn = 37;
	var upBtn = 38;
	var rightBtn = 39;
	var downBtn = 40;

	this.moveDirection = rightBtn;

	this.getHeadPosition = function(currentX, currentY, step) {
		switch (this.moveDirection) {
			case rightBtn:
				return {
					x: currentX + step,
					y: currentY
				};
			case leftBtn:
				return {
					x: currentX - step,
					y: currentY
				};
			case upBtn:
				return {
					x: currentX,
					y: currentY - step
				};
			case downBtn:
				return {
					x: currentX,
					y: currentY + step
				};
		}
	};

	this.setMoveDirection = function(direction) {
		if (direction != this.moveDirection) {
			var reverse = this.moveDirection == leftBtn && direction == rightBtn ||
						  this.moveDirection == rightBtn && direction == leftBtn ||
						  this.moveDirection == upBtn && direction == downBtn ||
						  this.moveDirection == downBtn && direction == upBtn;
			if (reverse) {
				SNAKE.level.reverseSnake();
			}
			this.moveDirection = direction;
			console.log('direction changed');
		}
	};
};
