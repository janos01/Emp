
import java.IO.FileWriter;

public class Emp {
	public void about() {
		System.out.println("Nagy János");
	}
	
	public void writeFile() throws IOException {
		FileWriter fw = new FileWriter("adat.txt");
		PrintWriter pw = new PrintWriter(fw);
		
		pw.println("teszt");
		
		pw.close();
	}

	public static void main(String[] args) {
		about();
	}
}
