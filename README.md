## States
* ### Reset
    Occurs on boot, or after reset button is pressed
* ### Countdown
    Starts the countdown sequence
* ### Running
    Occurs after start/countdown button is pressed
* ### Paused
    Occurs after pause button is pressed

|              | **Reset**        | **Countdown**           | **Running**      | **Paused**       |
|--------------|------------------|-------------------------|------------------|------------------|
| **Active**   | Countdown, Start | Reset                   | Pause, Reset     | Start, Reset     |
| **Inactive** | Pause, Reset     | Countdown, Start, Pause | Countdown, Start | Countdown, Pause |

Everytime you press start, it sets a new startTime and starts running updateTime interval

When you reset, it cancels the interval

updateTime sets new time based on now-startTime and string formatting

whenever you pause it starts a new pausetime = now

if you rejoin start from pause, it subtracts now from pausetime to give the duration that the pause took. 

Now set startTime equal to startTime+pauseDuration;

if you rejoin reset from pause, nothing happens