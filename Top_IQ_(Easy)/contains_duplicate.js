// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

const containsDuplicate = (nums) => {
    const obj = {};
    let check = false;
    nums.forEach(el => {
      if (obj[`${el}`]) {
        check = true;
      } else {
        obj[`${el}`] = true;
      }
    });
    return check;
};
