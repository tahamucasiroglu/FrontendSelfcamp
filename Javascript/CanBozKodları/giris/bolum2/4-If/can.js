const yas =20;

if(yas > 18)
{
    // console.log("18 yaşından büyüktür");
}

const adSoyad = ['can', 'tuce', 'elif'];

if(adSoyad.length > 4)
{
    console.log("İşte benim öğrencilerim");
}

const sifre="dasda";

if(sifre.length >=8)
{
    console.log("Şifre yeterince uzun");
}
else
{
    // console.log("Şifreyi yeniden giriniz");
}

const yeniSifre="dasda";
if(yeniSifre.length >=12)
{
    console.log("Şifre güçlü");
}
else if(yeniSifre.length >=8)
{
    console.log("Şifre yeterli");
}
else
{
    console.log("Şifreyi yeniden giriniz");
}
