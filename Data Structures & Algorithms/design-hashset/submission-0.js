class MyHashSet {
    constructor() {
        this.arr = new Array()
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.contains(key)) {
            this.arr.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.contains(key)) {
            const idx = this.arr.indexOf(key)
            this.arr.splice(idx, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.arr.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
