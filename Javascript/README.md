### Javascript Notları


` alert('Merhaba Dünyam') ` <br>

Ekrana üsttren popup uyarı basar<br>


` console.log("Can Boz"); `<br>
` console.log("ahmet"+14) => ahmet14 yazar`<br>

print karşılığı<br>


` let -> değişebilir değişken `<br>

` const -> değişemez değişken `<br>

` var -> otomatik olarak atamasını yapar`<br>


` undefined -> tanımlanmadı demek ` <br>

` Nan -> Not a number `

` 23 == 23 => true `<br>
` 23 == "23" => true `<br>
` 23 === 23 => true `<br>
` 23 === "23" => false `<br>
== tipten bağımsız denklik kontrol edilir. <br>
=== ise tip ve değer oarak eşitleğe bakar <br>

` 23 != 23 => false `<br>
` 23 != "23" => false `<br>
` 23 !== 23 => false `<br>
` 23 !== "23" => true `<br>



```
let = {
    değişkenler...;
}

```
şeklinde obje tanımlaması yapılır. methodda eklenir


` const elements =document.querySelectorAll('p'); `

bütün `<p>` olan etiketleri döndürür.

` const elements =document.querySelectorAll('.sinif'); `

`sinif` adlı classları döndürür.<br>
all demez isen ilk olanı döndürür galiba 
<br>

bunları direk özel olarak

` const baslik=document.getElementById('can'); ` <br>
` const hatalar=document.getElementsByClassName('error'); ` <br>
` const pEtiketleri=document.getElementsByTagName('p'); ` <br>

fonksiyonları ile çağırabilirsin. <br>

```
const icerik=document.querySelector('.icerik');
icerik.innerHTML+='<h2>Vue JS, React JS, Angular JS</h2>';
```

şeklinde safyanın html yapısını değiştirebilriiz. <br>

```
const pDegeri=document.querySelector('p');
pDegeri.setAttribute('class','error');
pDegeri.setAttribute('style','color:blue');
```

```
const link=document.querySelector('a');
link.setAttribute('href','http://www.boztraining.com');
link.textContent='Boz Training';
```

şeklinde html etiket eklentileri ile oynayabilriiz

```
const baslik=document.querySelector('h1');

1. yöntem
baslik.setAttribute('style','padding:50px;');

2. yöntem
baslik.style.padding='50px';
```
şeklinde css değişiklikleri yapılabilri

```
const icerik =document.querySelector('p');
icerik.classList.add('can');
icerik.classList.remove('error');
```

şeklinde class eklenip çıkartılabilir.
<br>

```
const button=document.querySelector('button');
button.addEventListener('click',(e) =>{
    console.log('Tıklandı');
})
```

şeklinde elementlere özellik eklenebilir. dinleme özelliği oalrak

`e.target.remove();`

<br>
şeklinde çoklu atamada (örneğin tün li için döngü ile verdiğinde) hengi element olduğunu target ile anlarsın

<br>








