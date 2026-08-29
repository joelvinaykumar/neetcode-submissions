class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let arr = nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;
            let initial = arr[i];
            let target = -initial;
            let left_p = i + 1;
            let right_p = arr.length - 1;

            while (left_p < right_p) {
                if (arr[left_p] + arr[right_p] === target) {
                    res.push([initial, arr[left_p], arr[right_p]]);
                    left_p++
                    right_p-- 
                    while(left_p < right_p && arr[left_p]===arr[left_p-1]) left_p++
                    while(left_p < right_p && arr[right_p]===arr[right_p+1]) right_p--
                } else if (arr[left_p] + arr[right_p] > target) {
                    right_p--;
                } else {
                    left_p++;
                }
            }
        }

        return res;
    }
}
