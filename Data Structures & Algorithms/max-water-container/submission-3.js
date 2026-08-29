class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let mostWater = 0

        let left = 0
        let right = heights.length-1

        while(left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right])
            if(heights[left] <= heights[right]) {
                left++
            } else {
                right --
            }
            mostWater = Math.max(mostWater, area)
        }

        return mostWater
    }
}
