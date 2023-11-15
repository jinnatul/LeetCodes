// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

const intersect = (nums1, nums2) => {
  const obj1 = {},
    obj2 = {};

  nums1.forEach((el) => {
    if (obj1[`${el}`]) obj1[`${el}`] += 1;
    else obj1[`${el}`] = 1;
  });

  nums2.forEach((el) => {
    if (obj2[`${el}`]) obj2[`${el}`] += 1;
    else obj2[`${el}`] = 1;
  });

  let result = [];
  for (const key in obj1) {
    if (obj2[`${key}`]) {
      result = [
        ...result,
        ...Array(Math.min(obj1[`${key}`], obj2[`${key}`])).fill(+key),
      ];
    }
  }
  return result;
};

intersect([4, 1, 2, 2, 1, 3], [2, 2, 4]);
