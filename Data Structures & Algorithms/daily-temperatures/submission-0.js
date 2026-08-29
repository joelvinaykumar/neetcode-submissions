class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length
        let arr = new Array(n).fill(0)
        let stack = []

        for(let i=0; i<n; i++) {
            while(stack.length!==0 && temperatures[i]>temperatures[stack[stack.length-1]]) {
                let stackIdx = stack.pop()
                arr[stackIdx] = i-stackIdx
            }
            stack.push(i)
        }
        

        return arr
    }
}
