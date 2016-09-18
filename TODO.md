## Needs to be done
* Clean up events, it's kind of weird at the moment
* Better structure for generating bait and level controller
* Reduce movespeed (reset interval) on bait hit
* Snake hit detection
* Better bait hit detection
* Fullscreen 1920 * 1080 does not display 1920 * 1080
* Controls need reworking (snake direction?)
* New snakepart addition is ugly

## Is done

* Canvas size independent from resolution (1920*1080), always in proportion
* Running out of the window makes the snake appear from the other side
* Make sure bait does not appear out of the game area
* Change drawing from center to back to left top corner
* Bait not hit when snake has made a few over the screen trips (coordinates don't match)
* Snake into it's own class, takes up too much of level
