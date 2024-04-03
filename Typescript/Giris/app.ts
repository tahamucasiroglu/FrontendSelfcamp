console.log("typescript")

let age:number = 29; // tip belirli olarak tanımlanır.
let firstName:string = "Ahmet";
let isUpdated:boolean = true;


function display(id:any, name:string) {
    console.log("id = " + id + "  name = " + name)
}


// number tipleri
let bir:number = 123; //number
let iki:number = 0x37CF; //hex
let üç:number = 0o377; //oct
let dört:number = 0b111001; //bin

let isim:string = "Ahmet";
let soyisim:string = "Mücasiroğlu";

// Esp 6 öncesi
let tamIsim1:string = isim + " " + soyisim;

// Esp 6 Sonrası
let tamIsim2:string = `${isim} ${soyisim}`


// arrayler

// yöntem 1
let firstNames1:string[] = ["ahmet", "taha"];


//yöntem iki
let firstNames2:Array<string> = ["ahmet", "taha"];

let karisik = [1,2,3,"asd","asdas",true,[1,"a",false]]

// Belli tipler için array

let ikiDeger1 : (string | number)[] = ["elma",1];
let ikiDeger2 : Array<string|number> = ["elma",1];

// tuple  bana çok mantıklı gelmedi

let tuple1:[number,string] = [1,"taha"];
let tuple2:[number,string,boolean];
tuple2 = [1,"asd",false];


let tupleArray:[number,string][];
tupleArray = [[1,"a"], [2,"b"]]




// object


let obje1 : object;


obje1 = {
    firstName: `Can`,
    lastName: `Boz`,
    age:29,
    jobTitle: "yazılım",
}


let obje2 : {
    firstName:string,
    lastName: string,
    age:number,
    jobTitle: string,
}

obje2 = {
    firstName: `Can`,
    lastName: `Boz`,
    age:29,
    jobTitle: "yazılım",
}



let obje3 : {
    firstName:string,
    lastName: string,
    age:number,
    jobTitle: string,
} = {
    firstName: `Can`,
    lastName: `Boz`,
    age:29,
    jobTitle: "yazılım",
}

// enum

enum Media{
    NewsPaper, //=0
    Magazine, //=1
    Book //=2
}

enum Media2{
    NewsPaper = 5,
    Magazine, // = 6
    Book // = 7
}

// union type

// boolean | number şeklinde birleştirmelere union type denir

// any type

let anyDeger : any; // ne olursa olsun kabul eder.

// void

// bu hiçbirşey return edemez
function fonksiyon1(): void {
    // return ; çalışır
}

// never tipi

// void içinde return; olarak fonksiyon bitir diyebilirsiin ama never kullanırsan hiç bir şekilde geriye dönüş yapılamaz. fonsiyonun sonunada ulaşamaz yolda bir hata ile işlem bitirilir. Tam kavramadım nerede nasıl lazım olacak çözmem lazım

function fonksiyon2(): never {
    // return ; çalışmaz

    throw new Error()
}



// tür dönüşümü

//tür dönüşümü için <tür> olarak atarsın

let sayi1: any = 123;

let sayi2: number = sayi1;

let sayi3: number = <number>sayi1;


//if else

let a = 5, b = 3;

if(a > b){

}else{

}

if(a > b)
{

}
else if( a < b)
{

}
else
{

}


a > b ? console.log() : console.log();


// switch case

let gun = "pazartesi"

switch (gun) {
    case "pazartesi":
        break;
    case "salı":
        break;
    case "çarşamba":
        break;
    case "perşembe":
        break;
    case "cuma":
        break;
    case "cumartesi":
        break;
    case "pazar":
        break;
    
    default:
        break;
}

//denk olan case içine girer yoksa default


// for

let array = ["a", "b", "c", "d", "e", "f"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

for (const item of array) {
    
}



// while do-while


while(5 > 3)
{

}


do{

}while(5 > 3)



// fonksiyonlar

function add(sayi1:number, sayi2:number): number {
    return sayi1 + sayi2;
}

function bastir(deger:any): void {
    console.log(deger);
}

function bastir2(deger:any="deger girlmedi"): void {
    console.log(deger);
}


// opsiyonel değerler

function carp(a:number, b:number, c?:number): number {
    if(typeof c !== `undefined`)
    {
        return a*b*c;
    }
    return a*b
    
}

//arrow func

let carp2 = (a:number, b:number, c?:number):number => {
    if(typeof c !== `undefined`)
    {
        return a*b*c;
    }
    return a*b
    
}


// overloading

function add2(a: string, b:string): string;
function add2(a: number, b:number): number;

function add2(a: any, b:any): any {
    return a+b;
}


// rest parametresi

// istediğin kadar sayı girebilirisni hepsini toplar. C++ daki args* mı neydi o işte
function toplam(...numbers:number[]): number {
    let total = 0;
    for (const item of numbers) {
        total = total + item;
    }
    return total;
}


// class


class Person {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.fistName = firstName;
        this.lastName = lastName;
    }
    id;
    fistName;
    lastName;

    getFullNAme(){
        return this.fistName + " " + this.lastName
    }
}

let user = new Person(43, "ahmet", "Mücasiroğlu");


// public private protected



class Person2 {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.fistName = firstName;
        this.lastName = lastName;
    }
    public id; //her yerden erişilir
    private fistName; // sadece olduğu sınıf içinden erişilir
    protected lastName; // olduğu ve miras verdiği sınıflar içinden erişilir.

    getFullNAme(){
        return this.fistName + " " + this.lastName
    }
}


//readonly

class Person3 {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.fistName = firstName;
        this.lastName = lastName;
    }
    readonly TcNo; // ilk atama sonrası değiştirilemez
    public id; //her yerden erişilir
    private fistName; // sadece olduğu sınıf içinden erişilir
    protected lastName; // olduğu ve miras verdiği sınıflar içinden erişilir.

    getFullNAme(){
        return this.fistName + " " + this.lastName
    }
}


// inheritance


class Person4 {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.fistName = firstName;
        this.lastName = lastName;
    }
    readonly TcNo; // ilk atama sonrası değiştirilemez
    public id; //her yerden erişilir
    private fistName; // sadece olduğu sınıf içinden erişilir
    protected lastName; // olduğu ve miras verdiği sınıflar içinden erişilir.

    getFullNAme(){
        return this.fistName + " " + this.lastName
    }
}


class Eployee extends Person4{
    
    states;
    
    constructor(id, firstName, lastName, states) {
        super(id, firstName, lastName)
        this.states = states
    }
}

new Eployee(1, " a", "b", "developer").getFullNAme()


// static methods

class Circle{
    static pi:number = 3.14;
}

Circle.pi;



// abstract class

// abstract ekli olan methodlar child içlerinde mecburi olur

abstract class Departmant{

    constructor(public name: string){

    }

    printName(): void{
        console.log("departman name = " + this.name)
    }

    abstract printMeeting(): void;

}

class AccountingDepartmant extends Departmant{
    printMeeting(): void {
        throw new Error("Method not implemented.");
    }

    printName(): void {
        
    }
    constructor(){
        super("According")
    }
}




// interface 


let person ={
    firstName: "ahmet",
    lastName:"mücasiroğlu"
}

function fullName(person:{firstName:string, lastName:string}) {
    return person.firstName + " " + person.lastName
}

// yukarısı uzun ve zahmetli tip belirtme bunun yerine interface ile hızlıca hallederiz


interface IPerson{
    firstName:string,
    lastName:string
}


function fullName2(person:IPerson) {
    return person.firstName + " " + person.lastName
}




// optional ve readonly



interface IPerson2{
    firstName:string,
    lastName:string,
    middleName?:string
}


function fullName22(person:IPerson) {
    return person.firstName + " " + person.lastName
}


// extend

interface IPerson3{
    firstName:string,
    lastName:string
}

interface IEmployee extends IPerson3{
    empNumber:number,
}


let e:IEmployee ={
    firstName:"asd",
    lastName: "asdasd",
    empNumber:123,

}



// type işlemleri

interface BusinessPartner{
    name:string;
    credit:number;
}

interface Identity{
    name:string,
    id:number,
}

interface Contact{
    email:string,
    phone:string,
}

// iki interface'i birleştirir
type EmployeeType = Identity & Contact

let kisi:EmployeeType={
    id:1,
    name:"string",
    email:"string",
    phone:"string",
}

// bunu ben yaptım bunu interface extend etmek daha mantıklı
type ContactWithId = Contact & {id:number}

let contactId:ContactWithId = {
    email:"asd",
    id:123,
    phone:"asd"
}


// type guard   adı farklıda geneli aynı gibi. geçtim

type tip = string | number

function addType(a:tip, b:tip) {
    if(typeof a === 'number' && typeof b === 'number')
    {
        return a+b
    }
    if(typeof a === 'string' && typeof b === 'string')
    {
        return a.concat(b)
    }
    throw new Error("HATAAAAAAA")
}



// generic


function getRandomNumber(items:number[]):number {
    let randomIndex = Math.floor(Math.random()*items.length)
    return items[randomIndex]
}

let numbers = [1,54,65,7,8,1,2,3,4,5,6,7,78,89,9]




function GetRandomNumberGeneric<T>(items:T[]): T {
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}

GetRandomNumberGeneric(numbers)


// birden fazla tip tanımlşanır
function ornek1<T,V>() {
    
}

// T tipi obje olmalıdır
function ornek2<T extends object,V>() {
    
}

// interface içinde

interface Months<T>{
    id:number,
    add(o:T):void,
}

class Sinif<T> implements Months<T>{
    id: number;
    add(o: T): void {
        throw new Error("Method not implemented.");
    }

}













