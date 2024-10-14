class Hashmap {
    constructor() {
        this.object = [];

        this.print = function() {
            console.log(this.object);
        }

        this.set = (key, value) => {
            const index = this.hash(key);
            if (!this.object[index]) {
                this.object[index] = [
                    [key, value]
                ];
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
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }
}

const newHashmap = new Hashmap();

newHashmap.set("Logie", "Law");
newHashmap.set("Tina", "Scott");
newHashmap.set("Leya", "Lam");
newHashmap.set("Renee", "Xie");

console.log(newHashmap.get("Renee"));

newHashmap.print()