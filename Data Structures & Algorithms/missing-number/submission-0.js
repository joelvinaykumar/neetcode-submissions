class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let xor = 0
        for(let i=0; i<n+1; i++) {
            xor = xor^i
        }

        for(let i=0; i<n; i++) {
            xor = xor^nums[i]
        }

        return xor

    }
}
