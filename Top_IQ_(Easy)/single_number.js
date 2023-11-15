// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

const singleNumber = (nums) => {
  let obj = {};
  nums.forEach((el) => {
    if (obj[`${el}`]) obj[`${el}`] += 1;
    else obj[`${el}`] = 1;
  });

  let result;
  for (const el in obj) {
    if (obj[el] === 1) result = el;
  }
  return result;
};
