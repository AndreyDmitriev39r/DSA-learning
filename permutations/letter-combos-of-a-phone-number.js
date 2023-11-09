const letterCombinations = (digits) => {
  const lookup = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  
  if (!digits.length) return "";//edge case
  
  let result = lookup[digits[0]];//intializing varaiable for accumulating result.
  console.log(`the intial result value, before loops for ${digits}`)
  console.log(result);
  let newGen = [];//temporary variable for storing intermediate result
  
  for (let i = 1; i < digits.length; i++) {
    for (const combo of result) {
      for (const char of lookup[digits[i]]) {
        newGen.push(combo + char);
      }
    }
    result = newGen;
    newGen = [];
  }
  
  return result;
}


//TIME COMPLEXITY is n^3
console.log(letterCombinations("72"));