class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // No buying and selling. So, no profit.
        if(prices.length === 1) return 0

        let left = 0
        let profit = 0

        for(let right=1; right<prices.length; right++) {
            while(left<right && prices[left] > prices[right]) left++

            profit = Math.max(profit, prices[right]-prices[left])
        }

        return profit
    }
}
