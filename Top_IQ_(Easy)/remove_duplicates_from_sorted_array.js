// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

const removeDuplicates = (nums) => {
  let obj = {};
  let count = 0;
  nums.forEach(el => {
    if (!obj[`${el}`]) {
      nums[count] = el;
      obj[`${el}`] = true;
      count += 1;
    } 
  });
  return count;
};
