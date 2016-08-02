/*88. Merge Sorted Array  QuestionEditorial Solution  My Submissions
Total Accepted: 111690
Total Submissions: 365894
Difficulty: Easy
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 // the code below is keep the duplicated integers in two array, eg: [1,2,3]&[1,2,3] would return [1,1,2,2,3,3]
var merge = function(nums1, m, nums2, n) {
    //corner case

    if (nums1 === null || m === 0) {
    	nums1 = nums2;
        console.log(nums1);
    	return;
    }
    if (nums2 === null || n === 0) {
    	return;
    }


    var point1 = m - 1;
    var point2 = n - 1;

    while (point1 >= 0 && point2 >= 0) {
    	if (nums1[point1] <= nums2[point2] ) {
    		nums1[point1 + point2 + 1] = nums2[point2];
    		point2--;
    	} else {
    		nums1[point1 + point2 + 1] = nums1[point1];
    		point1--;
    	}
    }


    if (point1 >= 0 && point2 < 0) {
    	return;
    }

    if (point1 < 0 && point2 >= 0) {
    	for (var i = 0; i <= point2;i++) {
    		nums1[i] = nums2[i];
    	}
    	return;
    }
    return;

};
var numstest = [];
var numstest2 = [1,2,3];
merge(numstest,0,numstest2,3);
console.log(numstest); 



/*
undefined
Array[1, 2, 3]
Array[ ]
*/

/*
这道题目不难，却帮助我终于搞清了一个含混不清的概念，js里的参数到底是按值传递，还是按引用传递的：

答案是：  是按值传递的！！！！

以问题为例，要AC必须注释掉 corner case的第一个if，因为第一个if的情况是nums1为空时，把nums1指向nums2，但是这并没有修改传进来的numstest数组。

所以其实发生的事情是，在numstest数组传递进来的时候，传递进来的是它在内存里的地址，所以我们可以在程序里修改这个数组。
但是如果我直接把参数 nums1指向nums2，这是跟numstest不发生任何关系的。我修改了nums1所指向的内存地址，而并没有对numstest这个数组做任何实际改动。

//以下摘自网友
#数据类型
在 javascript 中数据类型可以分为两类：

原始数据类型值 primitive type，比如Undefined,Null,Boolean,Number,String。
引用类型值，也就是对象类型 Object type,比如Object,Array,Function,Date等。


#声明变量时不同的内存分配

原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 - 栈中。这样存储便于迅速查寻变量的值。
引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

#不同的内存分配机制也带来了不同的访问机制

在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。而原始类型的值则是可以直接访问到的。

#复制变量时的不同

原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
image

引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。（这里要理解的一点就是，复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了）
 
#参数传递的不同

首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。但是为什么涉及到原始类型与引用类型的值时仍然有区别呢，还不就是因为内存分配时的差别。 （我对比了一下，这里和复制变量时遵循的机制完全一样的嘛，你可以简单地理解为传递参数的时候，就是把实参复制给形参的过程）

原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象呀。


所以，如果是按引用传递的话，是把第二格中的内容（也就是变量本身）整个传递进去（就不会有第四格的存在了）。但事实是变量把它里面的值传递（复制）给了参数，让这个参数也指向原对象。因此如果在函数内部给这个参数赋值另一个对象时，这个参数就会更改它的值为新对象的内存地址指向新的对象，但此时原来的变量仍然指向原来的对象，这时候他们是相互独立的；但如果这个参数是改变对象内部的属性的话，这个改变会体现在外部，因为他们共同指向的这个对象被修改了呀！来看下面这个例子吧：（传说中的call by sharing）
var obj1 = {
    value:'111'
};

var obj2 = {
    value:'222'
};

function changeStuff(obj){
    obj.value = '333';
    obj = obj2;
    return obj.value;
}

var foo = changeStuff(obj1);

console.log(foo);// '222' 参数obj指向了新的对象obj2
console.log(obj1.value);
// '333' obj1仍然指向原来的对象,之所以value改变了,
//是因为changeStuff里的第一条语句，这个时候obj是指向obj1的 .
//再啰嗦一句，如果是按引用传递的话，这个时候obj1.value应该是等于'222'的

好了，以上就是关于这个问题的全部解释了。


//以下，另一位大神的解释
按共享传递 call by sharing
准确的说，JS中的基本类型按值传递，对象类型按共享传递的(call by sharing，也叫按对象传递、按对象共享传递)。最早由Barbara Liskov. 在1974年的GLU语言中提出。该求值策略被用于Python、Java、Ruby、JS等多种语言。

该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。

var obj = {x : 1};
function foo(o) {
    o = 100;
}
foo(obj);
console.log(obj.x); // 仍然是1, obj并未被修改为100.
然而，虽然引用是副本，引用的对象是相同的。它们共享相同的对象，所以修改形参对象的属性值，也会影响到实参的属性值。

var obj = {x : 1};
function foo(o) {
    o.x = 3;
}
foo(obj);
console.log(obj.x); // 3, 被修改了!
对于对象类型，由于对象是可变(mutable)的，修改对象本身会影响到共享这个对象的引用和引用副本。而对于基本类型，由于它们都是不可变的(immutable)，按共享传递与按值传递(call by value)没有任何区别，所以说JS基本类型既符合按值传递，也符合按共享传递。

var a = 1; // 1是number类型，不可变 var b = a; b = 6;

据按共享传递的求值策略，a和b是两个不同的引用(b是a的引用副本)，但引用相同的值。由于这里的基本类型数字1不可变，所以这里说按值传递、按共享传递没有任何区别。
*/