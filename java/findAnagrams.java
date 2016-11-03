import java.util.Hashtable;

public class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        if (s == null || p == null || s.length() < p.length()) {
            return null;
        }
        
        Hashtable<Character, Integer> dict = new Hashtable<Character, Integer>();
        List<Integer> res = new ArrayList<Integer>();
        int scanLength = p.length();
        boolean redFlag = false;
        
        //init the dict
        for (int i = 0; i < scanLength; i++) {
            if (!dict.contains(p.charAt(i))) {
                dict.put(p.charAt(i), 1);
            } else {
                dict.put(p.charAt(i), dict.get(p.charAt(i)) + 1);
            }
        }
        
        // check
        for (int i = 0; i < s.length(); i++) {
            Hashtable<Character, Integer> scan = new Hashtable<Character, Integer>();
            for (int j = i; j < scanLength; j++) {
                if (!dict.contains(s.charAt(j))) {
                    break;
                }
                if (!scan.contains(s.charAt(j))) {
                    scan.put(s.charAt(j), 1);
                } else {
                    scan.put(s.charAt(j), scan.get(s.charAt(j)) + 1);
                }
            }
            System.out.println(scan.size());
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
                i = i+scanLength;
            }
        }
        
        return res;
        
    }
}