package class_basic.man;

public class Student {
    //Student 클래스는 이름, 나이, 주소, 학번, 연락처
    private String name;
    private int age;
    private String addr;
    private int stunum;
    private int phonnum;

    //각각의 멤버를 선언하고 모든 멤버를 초기화
    public Student(String name, int age, String addr, int stunum, int phonnum) {
        this.name = name;
        this.age = age;
        this.addr = addr;
        this.stunum = stunum;
        this.phonnum = phonnum;
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

    public int getStunum() {
        return stunum;
    }

    public void setStunum(int stunum) {
        this.stunum = stunum;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public int getPhonnum() {
        return phonnum;
    }

    public void setPhonnum(int phonnum) {
        this.phonnum = phonnum;
    }
}
