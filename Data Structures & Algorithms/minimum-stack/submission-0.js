class MinStack {
    constructor() {
        this.array = []
        this.minArray = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val)
        if(this.minArray.length === 0 || this.minArray[this.minArray.length-1] >= val) {
            this.minArray.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.minArray.length !== 0 && this.minArray[this.minArray.length-1] === this.top()) {
            this.minArray.pop()
        }
        this.array.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArray[this.minArray.length-1]
    }
}
