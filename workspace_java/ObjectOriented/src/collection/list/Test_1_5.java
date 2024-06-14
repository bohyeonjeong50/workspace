package collection.list;

public class Test_1_5 {

        //아이디와 비밀번호, 이름, 나이를 정보로 가지는 Member 클래스

        String Id;
        String Pw;
        String name;
        int age;

        //해당 클래스에서 각 필드에 대한 setter와 getter를 만들고

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getPw() {
        return Pw;
    }

    public void setPw(String pw) {
        Pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    //아이디, 비밀번호, 이름, 나이 정보를 출력할 수 있게 toString() 메소드를 오버라이딩하여 구현


    @Override
    public String toString() {
        return "Test_1_5{" +
                "Id='" + Id + '\'' +
                ", Pw='" + Pw + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public void printTest_1_5info() {

    }
}

