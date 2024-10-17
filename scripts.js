/* Classes */
/*
class Hashmap {
    constructor() {
        this.object = [];
        this.capacity = 4;
        this.size = 0;
        this.loadFactor = 0.75;

        this.print = function() {
            console.log(this.object);
        }

        this.set = (key, value) => {
            if (this.size / this.capacity > this.loadFactor) {
                this.resize();
            }

            const index = this.hash(key);

            if (!this.object[index]) {
                this.object[index] = [
                    [key, value]
                ];
                this.size++;
            } else {
                let inserted = false;
                for (let i = 0; i < this.object[index].length; i++) {
                    if (this.object[index][i][0] === key) {
                        this.object[index][i][1] = value;
                        inserted = true;
                    }
                }
                if (inserted === false) {
                    this.object[index].push([key,value]);
                    this.size++;
                }
            }
        }

        this.get = (key) => {
            const index = this.hash(key);
            if (this.object[index]) {
                for (let i = 0; i < this.object[index].length; i++) {
                    return this.object[index][0][1];
                }
            } else {
                return null
            }
        }
        
        this.has = (key) => {
            const index = this.hash(key);
            if (this.object[index]) {
                return true;
            } else {
                return false;
            }
        }

        this.remove = (key) => {
            const index = this.hash(key);
            if (this.object[index]) {
                delete this.object[index];
                return true;
            } else {
                return false;
            }
        }

        this.length = () => {
            let counter = 0;

            for (let key of this.object) {
                if (key) {
                    counter += key.length;
                }
            }

            return counter;
        }

        this.clear = () => {
            this.object = [];
            this.size = 0;
            this.capacity = 4;
        }

        this.keys = () => {
            const array = [];

            for (let bucket of this.object) {
                if (bucket) {
                    for (let i = 0; i < bucket.length; i++) {
                        array.push(bucket[i][0]);
                    }
                }
            }
            return array;
        }
        
        this.values = () => {
            const array = [];

            for (let bucket of this.object) {
                if (bucket) {
                    for (let i = 0; i < bucket.length; i++) {
                        array.push(bucket[i][1]);
                    }
                }
            }
            return array;
        }

        this.entries = () => {
            const array = []

            for (let bucket of this.object) {
                if (bucket) {
                    for (let i = 0; i < bucket.length; i++) {
                        array.push(bucket[i]);
                    }
                }
            }
            return array;
        }

        this.resize = () => {
            this.capacity *= 2;
            const oldObject = this.object;
            this.object = [];
            this.size = 0;

            for (let bucket of oldObject) {
                if (bucket) {
                    for (let i = 0; i < bucket.length; i++) {
                        this.set(bucket[i][0], bucket[i][1]);
                    }
                }
            }
        }
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % this.capacity;
    }
}

const test = new Hashmap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('long', 'nose')
test.set('black', 'toe')
test.set('moon', 'silver')

test.print()

*/


/* Factory Functions */

function HashMaps() {
    let object = [];
    let size = 16;

    const set = (key, value) => {
        let index = hash(key);

        if (!object[index]) {
            object[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < object[index].length; i++) {
                if (object[index][i][0] === key) {
                    object[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                object[index].push([key, value]);
            }
        }
    };

    const get = (key) => {
        let index = hash(key);

        if (object[index]) {
            for (let i = 0; i < object[index].length; i++) {
                if (object[index][i][0] === key) {
                    return object[index][i][1];
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    };

    const has = (key) => {
        let index = hash(key);

        if (object[index]) {
            for (let i = 0; i < object[index].length; i++) {
                if (object[index][i][0] === key) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    const remove = (key) => {
        let index = hash(key);

        if (object[index]) {
            for (let i = 0; i < object[index].length; i++) {
                if (object[index][i][0] === key) {
                    delete object[index][i];
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    const length = () => {
        let counter = 0;

        for (let key of object) {
            if (key) {
                counter += key.length;
            }
        }

        return counter;
    }

    const clear = () => {
        object = [];
    }

    const keys = () => {
        const array = [];

        for (let key of object) {
            if (key) {
               for (let i = 0; i < key.length; i++) {
                array.push(key[i][0]);
               }
            }
        }

        return array;
    }

    const values = () => {
        const array = [];

        for (let key of object) {
            if (key) {
               for (let i = 0; i < key.length; i++) {
                array.push(key[i][1]);
               }
            }
        }

        return array;
    }

    const entries = () => {
        const array = [];

        for (let key of object) {
            if (key) {
               for (let i = 0; i < key.length; i++) {
                array.push(key[i]);
               }
            }
        }

        return array;
    }

    const hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % size;
    };

    return { object, set, get, has, remove, length, clear, keys, values, entries }
};

const test = HashMaps();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// test.set('long', 'nose')
// test.set('black', 'toe')
// test.set('moon', 'silver')

console.log(test.length())
console.log(test.object)
console.log(test.entries())