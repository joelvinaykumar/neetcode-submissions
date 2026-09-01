class MyHashSet {
    constructor() {
        this.arr = new Array(10*100000+1).fill(false)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.arr[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.arr[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.arr[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
