class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x < 2) return x

        let left = 1
        let right = parseInt(x/2)

        while (left <= right) {
            let mid = left + parseInt((right - left)/2)
            
            if(mid === parseInt(x/mid)) return mid
            else if (mid > parseInt(x/mid)) right = mid - 1
            else left = mid + 1
        }

        return right
    }
}
