class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let most_water = 0

        while (left < right) {
            most_water = Math.max(most_water, Math.min(heights[left], heights[right])*(right-left))
            if(heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return most_water
    }
}
