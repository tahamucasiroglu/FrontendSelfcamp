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

```
array.filter( arr =>{
    return koşul
}) 
```

true olan durumları tutar false olanları çıkartarak yeni array döner.

```

array.map(arr => {
    return işlem sonucu
}) 

```

arraydeki bütün elemanları günceller. güncel arrayi farklı array olarak döner

```
const result=array.reduce((value,arr) =>{
if(arr >50)
{
    value++;
}
return value;
},ValueBaşlangıçDeğeri);

```

dizi içinde gezerek hesaplama yapar ve onu döner


```
const result=array.find(arr =>{
    return arr koşulu
});
```

içerisi true olunca olan değeri verir kalanlara bakmaz

```
array.push(value) => arraye eleman ekler
array.pop() => son elemanı çeker
```
push ile veriş ekler pop ile son ver içekilir


```
const result=array.findIndex(arr => arr koşulu);
```
true olanın indexini verir

```
array.reverse() => ters döndürür
array.sort() sıralar
array.sort(()=>koşul) => şeklinde sıralama için özel durum verilir.
```

```
TARİH İŞLEMLERİ  [Moment.js kullanılabilir.]

const now=new Date();
console.log(now);
console.log(typeof now);

console.log('Year:',now.getFullYear());
console.log('Month:',now.getMonth()+1);
console.log('Date:',now.getDate());
console.log('Day:',now.getDay());
console.log('Hours:',now.getHours());
console.log('Minutes:',now.getMinutes());
console.log('Seconds:',now.getSeconds());


console.log('timestamp:',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


const timestamp=1627727162629;
console.log(new Date(timestamp));


```

```

setTimeout(() => {
  console.log('Can Boz');
}, 2000);

```
2000 milisaniye yani 2 saniye sonra çalışır ve bu sürede ilerleyişi blocklamaz async olarak çalışır. 2000 yerine 0 dersek thread olarak çalışır gibi

```
const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    //  console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      // console.log('Başarılı cevap alamadık!');
      callback('Başarılı cevap alamadık!', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();
};

getTodos((err, data) => {
  // console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

callback çağrılınca alttaki todos çağrılacak


```

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // callback(undefined, data);
      } else if (request.readyState === 4) {
        reject('Başarılı cevap alamadık!');
        // callback('Başarılı cevap alamadık!', undefined);
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodos('example/can.json')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

```


resolve başarılı ve reject başarısız olarak callback gibi aşağıyı çalıştırır.
<br>
then başarılıda catch ise hatalı durumda çalışır

























