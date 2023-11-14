// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

const rotate = (nums, k) => {
  let step = k % nums.length;
  [
    ...nums.slice(nums.length - step),
    ...nums.splice(0, (nums.length - step)),
  ].forEach((el, idx) => {
    nums[idx] = el;
  });
};

rotate([1,2], 3);
