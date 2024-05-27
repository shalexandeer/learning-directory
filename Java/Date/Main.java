import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class Main {
  public static void main(String[] args){
    LocalDate myObj = LocalDate.now();
    LocalTime myTime = LocalTime.now();
    LocalDateTime date = LocalDateTime.now();
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

    System.out.println(myObj);
    System.out.println(myTime);
    System.out.println(date);

    String formattedDate = date.format(myFormatObj);

    System.out.println("after formatting: " + formattedDate);
  }
}
