/**
 * LeetCode 706 https://leetcode.com/problems/design-hashmap/
 */

class MyHashMap {
    private class Pair {
        private int key;
        private int value;
    
        public Pair(int key, int value) {
            this.key = key;
            this.value = value;
        }
        
        public int getKey() {
            return key;
        }
        
        public int getValue() {
            return value;
        }
        
        public void setValue(int value) {
            this.value = value;
        }
    }
    
    private static final int BASE = 769;
    private LinkedList[] data;
    
    // initialize the data structure in constructor
    public MyHashMap() {
        data = new LinkedList[BASE];
        for (int i = 0; i < BASE; i++) {
            data[i] = new LinkedList<Pair>();
        }
    }
    
    // inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
    public void put(int key, int value) {
        int k = hash(key);
        Iterator<Pair> iterator = data[k].iterator();
        while (iterator.hasNext()) {
            Pair pair = iterator.next();
            if(pair.getKey() == key) {
                pair.setValue(value);
                return;
            }
        }
        data[k].offerLast(new Pair(key, value));
    }
    
    //  returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
    public int get(int key) {
        int k = hash(key);
        Iterator<Pair> iterator = data[k].iterator();
        while (iterator.hasNext()) {
            Pair pair = iterator.next();
            if (pair.getKey() == key) {
                return pair.value;
            }
        }
        return -1;   
    }
    
    // removes the key and its corresponding value if the map contains the mapping for the key.
    public void remove(int key) {
        int k = hash(key);
        Iterator<Pair> iterator = data[k].iterator();
        while(iterator.hasNext()) {
            Pair pair = iterator.next();
            if (pair.getKey() == key) {
                data[k].remove(pair);
                return;
            }
        }
        
    }
    
    private static int hash(int key) {
        return key % BASE;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */


class MyHashSet {
    private static int BASE = 769;
    private LinkedList[] data;

    // initialize the data structure in constructor
    public MyHashSet() {
        data = new LinkedList[BASE];
        for (int i = 0; i < BASE; i++) {
            data[i] = new LinkedList<Integer>();
        }
    }
    
    public void add(int key) {
        int k = hash(key);
        Iterator<Integer> iterator = data[k].iterator();
        while (iterator.hasNext()) {
            int element = iterator.next();
            if (element == key) {
                return;
            }
        }
        data[k].offerLast(key);
    }
    
    public void remove(int key) {
        int k = hash(key);
        Iterator<Integer> iterator = data[k].iterator();
        while (iterator.hasNext()) {
            Integer element = iterator.next();
            if (element == key) {
                data[k].remove(element);
                return;
            }
        }
    }
    
    public boolean contains(int key) {
        int k = hash(key);
        Iterator<Integer> iterator = data[k].iterator();
        while (iterator.hasNext()) {
            Integer element = iterator.next();
            if (element == key) {
                return true;
            }
        }
        return false;
    }
    
    private static int hash(int key) {
        return key % BASE;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */