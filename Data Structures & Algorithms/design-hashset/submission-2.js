class MyHashSet {
    constructor() {
        this.size = 769
        this.buckets =  Array.from({ length: this.size }, ()=>[] )
    }

    _hash(key) {
        return key%this.size
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const idx = this._hash(key)
        const hasKey = this.buckets[idx].includes(key)
        if(!hasKey) {
            this.buckets[idx].push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = this._hash(key)
        const keyIdx = this.buckets[idx].indexOf(key)
        if(keyIdx !== -1) {
            this.buckets[idx].splice(keyIdx, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const idx = this._hash(key)
        return this.buckets[idx].includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
