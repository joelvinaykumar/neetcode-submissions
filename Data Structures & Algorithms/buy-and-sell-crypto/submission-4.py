class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        min_value = prices[0]
        max_profit = 0

        for right in range(1, n):
            min_value = min(min_value, prices[right])
            current_profit = prices[right]-min_value
            max_profit = max(max_profit, current_profit)
        
        return max_profit