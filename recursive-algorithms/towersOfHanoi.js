// khan academy task link
// https://www.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/pc/challenge-solve-hanoi-recursively

// consider find less relying on libraries way to provide a solution for such problem

// ??? use stacks and queues as an option ???

// khan academy's approach
// without dependencies code, but with own algorithm-related comments

var solveHanoi = function(numDisks, fromPeg, toPeg) {
  // base case:  no disks to move
  if (numDisks === 0) {
      return;
  }
  // recursive case:
  var sparePeg = hanoi.getSparePeg(fromPeg, toPeg); // ref 0
  solveHanoi(numDisks - 1, fromPeg, sparePeg); // ref 1
  hanoi.moveDisk(fromPeg, toPeg); // ref 2 
  solveHanoi(numDisks - 1, sparePeg, toPeg);
};

// assume we have 4 disks to move from smallest to largest A, B, C, D

// (ref 0) is helping to define spare peg for certain subproblem;
// (ref 1) will move to sparePeg A, B, and C >>> D will be left exposed
// (ref 2) will move D to its end destination
// (ref 3) will move A, B and C from sparePeg to thier end destination. !!! in this particular subproblem initial fromPeg will become sparePeg.
