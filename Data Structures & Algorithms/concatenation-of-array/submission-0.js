class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let arr = new Array(2*n).fill(0)

        for(let i=0; i<arr.length; i++) {
            arr[i] = nums[i]
            if(i>n-1) arr[i] = nums[i-n]
        }

        return arr
    }
}
