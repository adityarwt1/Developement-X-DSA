package com.example;

public class Person {
    private String name;
    private int age;
    
    public Person(String namek, int age){
        this.name = namek;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public int getAge(){
        return age;
    }

    public void setName(String name){
        this.name = name;
    }
    public void setAge(int age){
        this.age = age;
    }
}
// Person aditya = new Person("Aditya Rawat", 18);

