class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // let me try 2-pointer method

        let left = 0
        let right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]
        let water = 0

        while(left < right) {
            if(maxLeft < maxRight) {
                left++
                maxLeft = Math.max(maxLeft, height[left])
                water += maxLeft - height[left]
            } else {
                right--
                maxRight = Math.max(maxRight, height[right])
                water += maxRight - height[right]
            }
        }

        return water
    }
}
