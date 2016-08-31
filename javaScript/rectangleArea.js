// 223. Rectangle Area  QuestionEditorial Solution  My Submissions
// Total Accepted: 45921
// Total Submissions: 147933
// Difficulty: Easy
// Find the total area covered by two rectilinear rectangles in a 2D plane.

// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

// Rectangle Area
// Assume that the total area is never beyond the maximum possible value of int.

// Tags Math
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
	//area of ABCD
	var areaA = Math.abs(A - C) * Math.abs(D - B);
	//area of EFGH
	var areaE = Math.abs(G - E) * Math.abs(H - F);

	//check overlap
	//case 1 top-left corner overlapping for EFGH
	if ((A <= E && E <= C && C <= G) && (F <= B && B <= H && H <= D)) {
		var areaO1 = Math.abs(C - E) * Math.abs(H - B);
		return areaA + areaE - areaO1;
	}
	//case 2 top-right corner overlapping for EFGH
	else if ((E <= A && A <= G && G <= C) && (F <= B && B <= H && H <= D)){
		var areaO2 = Math.abs(G - A) * Math.abs(H - B);
		return areaA + areaE - areaO2;
	}
	//case 3 bottom-left corner overlapping for EFGH
	else if ((A <= E && E <= C && C <= G) && (B <= F && F <= D && D <= H)) {
		var areaO3 = Math.abs(C - E) * Math.abs(D - F);
		return areaA + areaE - areaO3;
	}
	//case 4 bottom-right corner overlapping for EFGH
	else if ((E <= A && A <= G && G <= C) && (B <= F && F <= D && D <= H)){
		var areaO4 = Math.abs(G - A) * Math.abs(D - F);
		return areaA + areaE - areaO4;
	}
	//case 5 one within another
	else if (((E <= A && C <= G) && (F <= B && D <= H)) || ((A <= E && G <= C) && (B <= F && H <= D))){
		return Math.max(areaA, areaE);
	}
	else{
		return areaA + areaE;
	}
    
};

//题目似乎一目了然，就是分别求出两个长方形的面积，再减去相交部分的面积
//本题一共有3000多个test case，过了2700+，但是发现这4个角的检测法，还是没有能够覆盖所有情况。
//我的想法是其实本题是游戏里面碰撞测试的变形，碰撞测试。于是走上了不归路……看讨论区一个跑过了的case，我差点想要笑出来
/*
This is utterly ridiculous. As I was writing this I knew I was going about it wrong but I wanted to finish it before I thought of a different method or looked at any other solutions.

  int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {
	int area1 = (D - B)*(C - A);
	int area2 = (H - F)*(G - E);
	int area3;
	if (area1 == 0) {
		return area2;
	}
	if (area2 == 0) {
		return area1;
	}
	if ((A == D) && (B == F) && (C == G) && (D == H)) {
		return area1;
	}
	if ((E >= C) | (G <= A) | (H <= B) | (D <= F)) {    //not overlapping
		return (area1 + area2);
	}
	if (((G - E) <= (C - A)) && ((H - F) <= (D - B)) && (E >= A) && (F >= B) && (G <= C) && (D >= H)) {                        //rect2 is inside rect1
		return area1;
	}
	if (((C - A) <= (G - E)) && ((D - B) <= (H - F)) && (E <= A) && (B >= F) && (G >= C) && (H >= D)) {                        //rect1 is inside rect2
		return area2;
	}
	if ((F >= B) && (E >= A) && (G >= C) && (H >= D)) {                       //overlapping upper right corner
		area3 = (C - E)*(D - F);
	}
	else if ((F >= B) && (E <= A) && (G <= C) && (H >= D)) {                       //overlapping upper left corner
		area3 = (G - A)*(D - F);
	}
	else if ((F <= B) && (E <= A) && (G <= C) && (H <= D)) {                       //overlapping bottom left corner
		area3 = (G - A)*(H - B);
	}
	else if ((F <= B) && (E >= A) && (G >= C) && (H <= D)) {                        //overlapping bottom right corner
		area3 = (H - B)*(C - E);
	}
	else if (((C - A) <= (G - E)) && (H <= D) && (G >= C) && (E <= A) && (F <= B)) {               //overlapping bottom side
		area3 = (C - A)*(H - B);
	}
	else if (((C - A) <= (G - E)) && (H >= D) && (G >= C) && (E <= A) && (F >= B)) {               //overlapping top side
		area3 = (C - A)*(D - F);
	}
	else if (((D - B) <= (H - F)) && (E <= A) && (F <= B) && (H >= D) && (G <= C)) {               //overlapping left side
		area3 = (G - A)*(D - B);
	}
	else if (((D - B) <= (H - F)) && (E >= A) && (F <= B) && (H >= D) && (G >= C)) {               //overlapping right side
		area3 = (C - E)*(D - B);
	}
	else if (((C - A) >= (G - E)) && (E >= A) && (F >= B) && (C >= G) && (D <= H)) {      //overlapping part of top side
		area3 = (G - E)*(D - F);
	}
	else if (((C - A) >= (G - E)) && (A <= E) && (B >= F) && (G <= C) && (D >= H)) {       //overlapping part of bottom side
		area3 = (G - E)*(H - B);
	}
	else if (((D - B) >= (H - F)) && (E <= A) && (F >= B) && (G <= C) && (H <= D)) {      //overlapping part of left side
		area3 = (G - A)*(H - F);
	}
	else if (((D - B) >= (H - F)) && (E >= A) && (F >= B) && (G >= C) && (H <= D)) {       //overlapping part of right side
		area3 = (C - E)*(H - F);
	}
	else if (((G - E) <= (C - A)) && (E >= A) && (F <= B) && (G <= C) && (H >= D)) {     //overlapping top and bottom
		area3 = (G - E)*(D - B);
	}
	else if (((H - F) <= (D - B)) && (E <= A) && (F >= B) && (C <= G) && (D >= H)) {     //overlapping left and right
		area3 = (C - A)*(H - F);
	}

	return (area1 + area2 - area3);
}

*/

//所以很显然……需要考虑别的算法
//目前我们拿到的点，是标记的长方形，最右最高，和，最左最低，的两个点
//所以不相交的情况是，一个长方形最右的点，比另一个长方形最右的点还小 或者一个长方形最高的点，比另一个长方形最低的点还低：只能一个在上一个在下，一个在左一个在右
var computeArea = function(A, B, C, D, E, F, G, H) {
	//area of ABCD
	var area1 = (C - A) * (D - B);
	//area of EFGH
	var area2 = (G - E) * (H - F);

	//check none overlap
	if (C <= E || G <= A || D <= F || H <= B) {
		return area1 + area2;
	}

	//不相交的情况考虑完了，剩下的情况肯定是有各种不同的相交了，但相交一定是最里面的面积
	var length = Math.min(C, G) - Math.max(A,E);
	var height = Math.min(D,H) - Math.max(B,F);

	return (area1 + area2) - length * height; 

};

// 以上代码AC了……Hmm，为自己的智商捉急





