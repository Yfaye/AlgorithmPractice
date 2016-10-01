/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var union_find = {
	createNew: function() {
		var ufObj = {
			uf:[],
			count:0
		};

		ufObj.init = function(n) {
			for (let i = 0; i < n; i++) {
				this.uf[i] = i;
			}
			this.count = n;
		};

		ufObj.find = function(p){
			while(this.uf[p] !== p) {
				var tmp = this.uf[p]
				this.uf[p] = this.uf[tmp];
				p = this.uf[p];
			}
			return p;
		};

		ufObj.union = function(p,q){
			var pBoss = this.find(p);
			var qBoss = this.find(q);
			if (pBoss === qBoss) { return; }
			this.uf[pBoss] = qBoss;
			this.count -= 1;
		}

		return ufObj;
	}
};

var test = union_find.createNew();
test.init(10);
test.union(3,9);
test.union(4,6);
test.union(7,8);
test.union(9,1);
test.union(4,9);
test.union(1,2);
console.log(test);
console.log(test.find(4));
console.log(test.find(9));
console.log(test.find(3));
console.log(test.uf);
console.log(test.count);