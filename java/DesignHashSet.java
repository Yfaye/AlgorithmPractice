/**
 * LeetCode 705 https://leetcode.com/problems/design-hashset/
 * 
 * Mistakes made: using IntStream iterator on Arrays for Add and Remove function, it won't change the original value in the original Array. In only changes the value in that iterator.
 */


 // Solution below got Time Limit Exceeded on test case
 // ["MyHashSet","contains","remove","add","add","contains","remove","contains","contains","add","add","add","add","remove","add","add","add","add","add","add","add","add","add","add","contains","add","contains","add","add","contains","add","add","remove","add","add","add","add","add","contains","add","add","add","remove","contains","add","contains","add","add","add","add","add","contains","remove","remove","add","remove","contains","add","remove","add","add","add","add","contains","contains","add","remove","remove","remove","remove","add","add","contains","add","add","remove","add","add","add","add","add","add","add","add","remove","add","remove","remove","add","remove","add","remove","add","add","add","remove","remove","remove","add","contains","add"]
 // [[],[72],[91],[48],[41],[96],[87],[48],[49],[84],[82],[24],[7],[56],[87],[81],[55],[19],[40],[68],[23],[80],[53],[76],[93],[95],[95],[67],[31],[80],[62],[73],[97],[33],[28],[62],[81],[57],[40],[11],[89],[28],[97],[86],[20],[5],[77],[52],[57],[88],[20],[48],[42],[86],[49],[62],[53],[43],[98],[32],[15],[42],[50],[19],[32],[67],[84],[60],[8],[85],[43],[59],[65],[40],[81],[55],[56],[54],[59],[78],[53],[0],[24],[7],[53],[33],[69],[86],[7],[1],[16],[58],[61],[34],[53],[84],[21],[58],[25],[45],[3]]

class MyHashSet {
    private int SIZE = 20;
    private int[] data;

    public MyHashSet() {
        data = new int[SIZE];
        Arrays.fill(data, -1);
    }
    
    public void add(int key) {
        boolean ableToAdd = false;
        
        // check if we already have the key
        for (int i = 0; i < SIZE; i++) {
            if (data[i] == key) {
                ableToAdd = true;
                return;
            }
        }
        
        // check if we could add the key
        for (int j = 0; j < SIZE; j++) {
            if (data[j] == -1) {
                data[j] = key;
                ableToAdd = true;
                return;
            }
        }
        
        // double the array size when it is full
        if (!ableToAdd) { 
            SIZE *= 2;
            int[] doubledData = Arrays.copyOf(data, SIZE);
            data = doubledData;
        }
        data[SIZE/2] = key;
        return;
    }
    
    public void remove(int key) {
        for (int k = 0; k < SIZE; k++) {
            if (data[k] == key) {
                data[k] = -1;
            }
        }
        return;
    }
    
    public boolean contains(int key) {
        Iterator<Integer> iterator = IntStream.of(data).boxed().iterator();
        while (iterator.hasNext()) {
            int cur = iterator.next();
            if (cur == key) {
                return true;
            }
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */