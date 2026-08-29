class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = Number.MIN_SAFE_INTEGER
        let left = 0
        let right = heights.length-1

        while(left <= right) {
            let distance = right - left
            if(heights[left] > heights[right]) {
                maxArea = Math.max(maxArea, distance*heights[right])
                right--
            } else {
                maxArea = Math.max(maxArea, distance*heights[left])
                left++
            }
        }


        return maxArea
    }
}
