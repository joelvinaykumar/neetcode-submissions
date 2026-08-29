class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i=0; i<nums.length; i++) {
            let a = nums[i]
            let b = target - a
            if(map.has(b)) {
                return [i, map.get(b)]
            } else {
                map.set(a, i)
            }
        }
    } 
}
