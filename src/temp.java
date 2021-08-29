import java.util.*;

public class Main
{
	public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	int size=sc.nextInt();
	int temp1,temp2,diff,sum=0;
	int arr[]=  new int[size];
	for(int i=0;i<size;i++)
	{   if(arr[i]<0)
	    return;
	    else{
	    diff=arr[i]-arr[i+1];
	    sum+=Math.abs(diff);
	    }
	}
	
	System.out.println(sum);
	}
}