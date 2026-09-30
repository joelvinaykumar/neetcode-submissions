class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length
        const prefix = new Array(n).fill(0)
        const suffix = new Array(n).fill(0)
        let water = 0
        let maxLeft = Number.NEGATIVE_INFINITY
        let maxRight = Number.NEGATIVE_INFINITY

        for(let i=0; i<n; i++) {
            prefix[i] = Math.max(maxLeft, height[i])
            maxLeft = Math.max(maxLeft, height[i])
        }

        for(let i=n-1; i>=0; i--) {
            suffix[i] = Math.max(maxRight, height[i])
            maxRight = Math.max(maxRight, height[i])
        }

        for(let i=0; i<n; i++) {
            water += Math.min(prefix[i], suffix[i]) - height[i]
        }

        return water
    }
}
