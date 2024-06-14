package collection.list;

public class Member {
    private String Id;
    private String Pw;
    private String name;
    private int age;

    public Member(){}
    public Member(String id, String pw, String name, int age) {
        Id = id;
        Pw = pw;
        this.name = name;
        this.age = age;
    }

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

    @Override
    public String toString() {
        return "Member{" +
                "Id='" + Id + '\'' +
                ", Pw='" + Pw + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
