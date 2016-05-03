public class RightTriangle{
	public static void main(String[] args){
		int height = 100;
		for(int row=0; row < height; row++){
			for (int spaceIcon=height-1; spaceIcon > row;spaceIcon--){
				System.out.print(" ");
			}
			for (int poundIcon=0; poundIcon < row+1; poundIcon++){
				System.out.print("#");
			}
		System.out.println("");
		}
	}
}