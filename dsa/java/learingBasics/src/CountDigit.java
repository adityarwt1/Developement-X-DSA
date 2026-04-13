public class CountDigit {
    public int countDigit(int digit){
        int count = 0;
        while(digit > 0){
            count++;
            digit = digit/10;
        }
        return count;
    }
    
}
