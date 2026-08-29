class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Number.MAX_SAFE_INTEGER
        let maxProfit = 0

        if(prices.length === 0) return 0

        for(let i=0; i<prices.length; i++) {
            min = Math.min(prices[i], min)
            maxProfit = Math.max(maxProfit, prices[i]-min)
        }

        return maxProfit
    }
}
