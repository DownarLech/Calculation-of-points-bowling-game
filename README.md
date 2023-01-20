a simple application to calculate points in a bowling game

Rules: 

The game consists of ten rounds (frames) for each player. At the beginning of each round, the pins are reset. Each round, the player has two throws. The round ends when the player knocks down all the pins or runs out of throws. For every pin knocked down, the player gets 1 point.

Exceptions:

"strike" - the player scores 10 points + a number of points equal to the number of pins knocked down in the next two throws.
    Example: 
    a player scores a strike in the first round, throws a 3 in the second and a 6 in the second, 
    so he has 10 + 3 + 6 = 19 points (a total of 19 pins knocked down).

"spare" - the player scores 10 points + a number of points equal to the number of pins knocked down in the next throw.
    Example: 
    a player has scored a spare in the first round (e.g. 6 + 4), in the first roll of the next round knocked off 3 pins, in the second 6. So he scores (6 + 4) + 3 = 13 points (a total of 13 pins knocked down).

Note: If a player makes a strike (or spare) in the last round, he has two (or one) extra throws to determine the value of that strike (spare). Points from extra throws are counted only once as extra points.