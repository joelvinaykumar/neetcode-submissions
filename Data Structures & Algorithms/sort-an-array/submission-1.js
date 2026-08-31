class Solution {

    mergeArray(arr, low, mid, high) {
        let temp = []
        let left = low
        let right = mid+1

        while(left<=mid && right<=high) {
            if(arr[left] <= arr[right]) {
                temp.push(arr[left++])
            } else {
                temp.push(arr[right++])
            }
        }

        while(left<=mid) {
            temp.push(arr[left++])
        }

        while(right<=high) {
            temp.push(arr[right++])
        }

        for(let i=low; i<=high; i++) {
            arr[i] = temp[i-low]
        }

    }

    mergeSort(arr, low, high) {
        if(low >= high) return arr

        const mid = Math.floor((low+high)/2)
        this.mergeSort(arr, low, mid)
        this.mergeSort(arr, mid+1, high)
        this.mergeArray(arr, low, mid, high)
        return arr
    }

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let low = 0
        let high = nums.length-1

        return this.mergeSort(nums, low, high)
    }
}
