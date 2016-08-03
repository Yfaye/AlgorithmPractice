//generate random Array with no duplicate element
var getRandArray = function(arrayLength, min, max){
	//corner case
	if (arrayLength >= max - min) {
		return "failed in random array generation";
	}
	var result = [];
	for (var i = 0; i < arrayLength; i++) {
		var rand = Math.floor(Math.random()*(max - min + 1) + min);
		while (result.indexOf(rand) !== -1) {
			rand = Math.floor(Math.random()*(max - min + 1) + min);
		}
		result[i] = rand;
	}
	return result;
}


//quick sort in place with recursion
var quickSort = function(arr, left, right) {
	if (arr.length <= 1) {
		return arr;
	}
	var partition = function(arr, left, right) {
		var base = arr[left];
		while (left < right) {
			while (left < right && arr[right] >= base) {
				right--;
			}
			arr[left] = arr[right];
			while (left < right && arr[left] <= base) {
				left++;
			}
			arr[right] = arr[left];
		}
		arr[left] = base;
		return left;
	}

	if (left < right) {
		var i = partition(arr,left,right);
		//console.log(i);
		quickSort(arr, left, i-1);
		quickSort(arr, i+1, right);	
	}
	return;

}
/*
var testArr = getRandArray(10, 10, 100);
console.log(testArr); //Array [ 84, 42, 47, 80, 87, 38, 24, 94, 17, 92 ]
quickSort(testArr,0,9);
console.log(testArr);//Array [ 17, 24, 38, 42, 47, 80, 84, 87, 92, 94 ]
*/

var testArr10000= getRandArray(10000, 10, 20000);
console.log(testArr10000); 
quickSort(testArr10000,0,9999);
console.log(testArr10000);

// 在Firefox中测试，这样递归调用的快速排序算法，用10万个数字的数组，浏览器就会弹出，是否要stop script的窗口了

// 这个快速排序算法是用的课程中C语言的写法，
// 用本文的写法，pivot必须是arr[left]了，而且必须先从右边比较起，发现第一个比pivot小的，就把值放到之前的arr[left]上去。（因为arr[left]的值已经存到pivot里面了）。然后这时再从left开始看，找到第一个大于pivot的值，放到arr[right]去（因为之前arr[right]的值已经存到arr[left]里面了）。
// 就这样，直到最外面的while循环结束，因为此时arr[left]的值已经赋给了arr[right], 所以在循环结束时，再把arr[left]的值赋成pivot，这样就形成了，左边都比pivot小，右边都比pivot大了。然后此时又能知道pivot的位置，所以左右arr的起始位置也就都知道了。

//也可以用逻辑更明了的写法，在方法里再定义两个数组left right，然后随机选一个pivot或者折中选， 最后return quickSort(left).concat([pivot], quickSort(right))
//下面code直接copy自阮一峰的博客
/*
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
*/