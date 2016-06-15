/*70. Climbing Stairs
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //corner case
    if (n < 1) {
        return 0;
    }
    
    //init
    var numberOfClimbWays = [1,1];  //Got something wrong here when doing initialization
    
    //dp
    for (var i = 2; i <= n; i++) {
        numberOfClimbWays[i] = numberOfClimbWays[i - 1] + numberOfClimbWays[i - 2];
    }
    
    return numberOfClimbWays[n];
     
};