// Kardo Jõeleht 2016
window.onload = function(){
	SNAKE.start();
};

var SNAKE = SNAKE || {};

SNAKE = {
	container: null,
	canvas: null,
	drawContext: null,
	width: 1920,
	height: 1080,
	events: null,
	level: null,

	start: function() {
		this.setup();
	},

	setup: function() {
		this.container = document.getElementById('snake-container');
		this.setupCanvas();
		this.setRenderDimensions();
		this.setupModules();
		//this.events.openStartScreen();
		this.events.startLevel();
	},

	setupModules: function() {
		this.events = new SNAKE.Events();
		this.controls = new SNAKE.Controls();
		this.level = new SNAKE.Level({
			drawContext: this.drawContext,
			height: this.height,
			width: this.width
		});
	},

	setupCanvas: function() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.container.appendChild(this.canvas);
		this.drawContext = this.canvas.getContext('2d');
		console.log('canvas generated');
	},

	setRenderDimensions: function() {
		var longer = 16;
		var shorter = 10;
		if (this.container.offsetWidth / longer <= this.container.offsetHeight / shorter) {
			this.canvas.style.width = this.container.offsetWidth + 'px';
			this.canvas.style.height = this.container.offsetWidth / longer * shorter + 'px';
		} else {
			this.canvas.style.height = this.container.offsetHeight + 'px';
			this.canvas.style.width = this.container.offsetHeight / shorter * longer + 'px';
		}
	}
};
