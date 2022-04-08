/**
 * LeetCode 752 https://leetcode.com/problems/open-the-lock/
 */

class Solution {        
    
    private String plusOne(String str, int index) {
        char[] ch = str.toCharArray();
        if (ch[index] == '9') {
            ch[index] = '0';
        } else {
            ch[index] += 1;
        }
        return new String(ch);
    }
        
    private String minusOne(String str, int index) {
        char[] ch = str.toCharArray();
        if (ch[index] == '0') {
            ch[index] = '9';
        } else {
            ch[index] -= 1;
        }
        return new String(ch);
    }
    
    
    public int openLock(String[] deadends, String target) {
        
        Queue<String> q = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        Set<String> dead = new HashSet<>();
        for (String s : deadends) {
            dead.add(s);
        }
        
        String start = "0000";
        int totalTurnAtEachDigit = 4;
        int impossible = -1;
        
        q.offer(start);
        visited.add(start);
        int step = 0;
        
        while (!q.isEmpty()) {
            int sz = q.size();
            for (int i = 0; i < sz; i++) {
                
                String cur = q.poll();
                
                if (target.equals(cur)) {
                    return step;
                }
                if (dead.contains(cur)) {
                    continue;
                }
                
                for (int j = 0; j < totalTurnAtEachDigit; j++) {
                    String tmpPlusOne = plusOne(cur, j);
                    // System.out.println("tmp up is " + tmpPlusOne);
                    if (!visited.contains(tmpPlusOne)) {
                        q.offer(tmpPlusOne);
                        visited.add(tmpPlusOne);
                    }

                    String tmpMinusOne = minusOne(cur,j);
                    // System.out.println("tmp down is " + tmpMinusOne);
                    if (!visited.contains(tmpMinusOne)) {
                        q.offer(tmpMinusOne);
                        visited.add(tmpMinusOne);
                    }
                }
            }
            step++;
        }
        
        return impossible;
    }
}