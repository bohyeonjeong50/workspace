import java.util.Optional;

public class FriendTest {
    public static void main(String[] args) {
        ContactInfo contact = new ContactInfo("010-1111-2222", "울산시");
        Company c = new Company("자바회사", contact);
        Friend f = new Friend("홍길동", c);

        //originPrint(f);

        Optional<Friend> optional = Optional.ofNullable(f);
        optionalPrint(optional);
    }

    //Optional사용 코드
    public static void optionalPrint(Optional<Friend> optional){
        //Function<T> -> R apply(T t)
        String addr = optional.map(friend -> friend.getCompany()) //Company객체가 상자에 들어감
                .map(company -> company.getContactInfo()) //ContacyInfo 객체가 상자에 들어감
                .map(contact -> contact.getAddr()) //String객체가 상자에 들어있음
                .orElse("주소 정보가 없습니다.");

        System.out.println(addr);
    }

    //기존 방식 코드 : 주소 출력
    public static void originPrint(Friend f){
        String addr = null;
        if(f != null){
            Company company = f.getCompany();
            if(company != null){
                ContactInfo contactInfo = company.getContactInfo();
                if(contactInfo != null){
                    addr = contactInfo.getAddr();
                }
            }
        }

        if(addr != null){
            System.out.println(addr);
        }
        else{
            System.out.println("주소 정보가 없습니다.");
        }
    }


}
