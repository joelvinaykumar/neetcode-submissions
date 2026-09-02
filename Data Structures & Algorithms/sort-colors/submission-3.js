class Solution {
    swap(nums, left, right) {
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
    }
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        let curr = 0
        let left = 0
        let right = nums.length - 1

        while(curr <= right) {
            if(nums[curr] === 0) {
                this.swap(nums, curr++, left++)
            } else if (nums[curr] === 2) {
                this.swap(nums, curr, right--)
            } else {
                curr++
            }
        }
    }
}
