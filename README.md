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