// const dersler=[
//     {isim:'matematik',puan:90},
//     {isim:'fizik',puan:80},
//     {isim:'kimya',puan:85},
// ]


let ogrenci={
    ad:'Can',
    yas:29,
    email:'cnboz@hotmail.com',
    sinif:12,
    dersler:[
    {isim:'matematik',puan:90},
    {isim:'fizik',puan:80},
    {isim:'kimya',puan:85},],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        // console.log(this);
        this.dersler.forEach(a =>{
            console.log(a.isim,a.puan);
        })
    }
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();
