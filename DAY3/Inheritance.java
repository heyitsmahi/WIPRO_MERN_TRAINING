interface BaseClass
{




}
interface  SubClass extends BaseClass{

public void amount();
}
class ChildClass  implements SubClass
{
public void amount()
{

}

}
public static void main(String[] args) {
    SubClass sc = new SubClass();
    sc.amount();
}

