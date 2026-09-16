class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let left = new Array(n).fill(1)
        let right = new Array(n).fill(1)
        let res = new Array(n).fill(1)

        left[0] = 1
        for(let i=1; i<n; i++) {
            left[i] = left[i-1]*nums[i-1]
        }

        right[n-1] = 1
        for(let i=n-2; i>=0; i--) {
            right[i] = right[i+1]*nums[i+1]
        }

        for(let i=0; i<n; i++) {
            res[i] = left[i]*right[i]
        }

        return res
    }
}
