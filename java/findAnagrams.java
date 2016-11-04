import java.util.Hashtable;

public class Solution {
    List<Integer> res = new ArrayList<Integer>();
    public List<Integer> findAnagrams(String s, String p) {
        if (s == null || p == null || s.length() < p.length()) {
            return res;
        }
        
        Hashtable<Character, Integer> dict = new Hashtable<Character, Integer>();
        
        int scanLength = p.length();
        boolean redFlag = false;
        
        //init the dict
        for (int i = 0; i < scanLength; i++) {
            if (!dict.containsKey(p.charAt(i))) {
                dict.put(p.charAt(i), 1);
            } else {
                dict.put(p.charAt(i), dict.get(p.charAt(i)) + 1);
            }
        }
        //System.out.println(dict);
        // check
        for (int i = 0; i <= s.length()-scanLength; i++) {
            Hashtable<Character, Integer> scan = new Hashtable<Character, Integer>();
            for (int j = 0; j < scanLength; j++) {
                //System.out.println(dict.containsKey(s.charAt(i+j)));
                if (!dict.containsKey(s.charAt(i+j))) {
                    break;
                }
                if (!scan.containsKey(s.charAt(i+j))) {
                    scan.put(s.charAt(i+j), 1);
                } else {
                    scan.put(s.charAt(i+j), scan.get(s.charAt(i+j)) + 1);
                }
            }
            //System.out.println(scan.size());
            if (scan.size() != dict.size()) {
                continue;
            }
            for (int k = 0; k < scan.size(); k++) {
                if (scan.get(p.charAt(k)) != dict.get(p.charAt(k))) {
                    redFlag = true;
                    break;
                }
            }

            if (!redFlag) {
                res.add(i);
            }
        }
        
        return res;
        
    }
}

// 这个解法在长字符串匹配的时候 TLE 了， 以下，改用快慢指针，才终于被接收了T_T

public class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> res = new ArrayList<Integer>();
        if (s == null || p == null || s.length() < p.length()) {
            return res;
        }
        
        int[] dict = new int[26];
        int count = p.length();
        int begin = 0;
        int end = 0;
        
        //ini
        for (char c : p.toCharArray()) {
            dict[c - 'a']++;
        }
        
        //check
        while (end < s.length()) {
            if (dict[s.charAt(end)- 'a'] > 0) {
                count--;
            }
            dict[s.charAt(end)- 'a']--;
            end++;
            
            if (count == 0) {
                res.add(begin);
            }
            
            if (end - begin == p.length()) {
                if (dict[s.charAt(begin)- 'a'] >= 0) {
                    count++;
                }
                dict[s.charAt(begin)- 'a']++;
                begin++;
            }
            
        }
        return res;
        
    }
}