// Kardo Jõeleht 2016
window.onload = function(){
	SNAKE.start();
};

var SNAKE = SNAKE || {};

SNAKE = {
	canvas: null,
	drawContext: null,
	width: 0,
	height: 0,
	events: null,
	level: null,

	start: function() {
		this.setup();
	},

	setup: function() {
		this.setupPageStyles();
		this.setupCanvas();
		this.setDimensions();
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
		var canvas = document.createElement('canvas');
		canvas.style.width = window.innerWidth + 'px';
		canvas.width = window.innerWidth;
		canvas.style.height = window.innerHeight + 'px';
		canvas.height = window.innerHeight;
		document.body.appendChild(canvas);
		this.drawContext = canvas.getContext('2d');
		this.canvas = canvas;
		console.log('canvas generated');
	},

	setDimensions: function() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	},
};
