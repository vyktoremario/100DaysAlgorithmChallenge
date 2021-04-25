/**
 * Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process.

His hut has coordinates origin = [0, 0]. From that origin he walks a given distance d on a line that has a given angle ang with the x-axis. He gets to a point A. (Angles are measured with respect to the x-axis)

From that point A he walks the distance d multiplied by a constant distmult on a line that has the angle ang multiplied by a constant angmult and so on and on.

We have d0 = d, ang0 = ang; then d1 = d * distmult, ang1 = ang * angmult etc ...

Let us suppose he follows this process n times. What are the coordinates lastx, lasty of the last point?

The function crusoe has parameters;

n : numbers of steps in the process
d : initial chosen distance
ang : initial chosen angle in degrees
distmult : constant multiplier of the previous distance
angmult : constant multiplier of the previous angle
crusoe(n, d, ang, distmult, angmult) should return lastx, lasty as an array or a tuple depending on the language.

Example:
crusoe(5, 0.2, 30, 1.02, 1.1) ->

The successive x are : 0.0, 0.173205, 0.344294, 0.511991, 0.674744, 0.830674 (approximately)

The successive y are : 0.0, 0.1, 0.211106, 0.334292, 0.47052, 0.620695 (approximately)
 */




function crusoe(n, d, ang, distmult, angmult) {
    x = 0
    y = 0
      for (let i = 0; i < n; i++) {
        let newAngle = (Math.PI/180) * ang
        let valueX = d*Math.cos(newAngle)
        x+=valueX
        let valueY = d*Math.sin(newAngle)
        y+=valueY
        d = d * distmult
        ang = ang * angmult
      }
    return [x, y]
  }