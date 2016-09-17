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
		this.level = new SNAKE.Level();
	},

	setupCanvas: function() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.canvas.style.border = '1px solid red';
		this.container.appendChild(this.canvas);
		this.drawContext = this.canvas.getContext('2d');
		console.log('canvas generated');
	},

	setRenderDimensions: function() {
		if (this.container.offsetWidth / 16 * 10 <= this.container.offsetHeight) {
			this.canvas.style.width = this.container.offsetWidth + 'px';
			this.canvas.style.height = this.container.offsetWidth / 16 * 10 + 'px';
		} else {
			this.canvas.style.height = this.container.offsetHeight + 'px';
			this.canvas.style.width = this.container.offsetHeight / 10 * 16 + 'px';
		}
	},
};
