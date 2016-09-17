// Kardo Jõeleht 2016
window.onload = function(){
	SNAKE.start();
};

var SNAKE = SNAKE || {};

SNAKE = {
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
		this.setupPageStyles();
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

	setupPageStyles: function() {
		document.querySelector('html').style.margin = 0;
		document.querySelector('html').style.padding = 0;
		document.querySelector('body').style.margin = 0;
		document.querySelector('body').style.padding = 0;
		document.querySelector('body').style.overflow = 'hidden';
		console.log('page styles loaded');
	},

	setupCanvas: function() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		document.body.appendChild(this.canvas);
		this.drawContext = this.canvas.getContext('2d');
		console.log('canvas generated');
	},

	setRenderDimensions: function() {
		if (window.innerWidth / 16 * 10 <= window.innerHeight) {
			this.canvas.style.width = window.innerWidth + 'px';
			this.canvas.style.height = window.innerWidth / 16 * 10 + 'px';
		} else {
			this.canvas.style.height = window.innerHeight + 'px';
			this.canvas.style.width = window.innerHeight / 10 * 16 + 'px';
		}
	},
};
