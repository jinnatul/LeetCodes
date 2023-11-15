// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

const plusOne = (digits) => {
  let result = [], check = true, extra = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (check) {
      const num = digits[i] + extra;
      result = [num % 10, ...result]
      extra = Math.floor(num / 10);
      if (extra) check = true;
      else check = false;
    } else {
      result = [digits[i], ...result]
    }
  }
  if (extra) result = [extra, ...result]
  return result;
};
