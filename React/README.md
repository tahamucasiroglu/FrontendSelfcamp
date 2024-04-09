react notları

<br>

react açılışı değişti

<br>

öncelikle vite kurulmalı onun için `npm create vite@latest` yazılır terminale. kurulu değilse kuruyor galiba otomatik. ekranda sonraki adımlar yazar.

<br>

`--host 192.168.1.100:1111` ile localde herkese açarsın. Bazen çalışmıyor o zaman `-- --host 192.168.1.100:1111` yaparsan çalışır

<br>

sonra `react` -> `javascript yada typescript` şeklinde ilerlersin.

<br>

[https://babeljs.io/repl](https://babeljs.io/repl) kodların dönüştürülmüş halini veriyor. ufak kod testleri için

<br>

* Html tag'leri içine {} ile değişken değeri eklenir.
* `{dogruMu ? <p>Öğrenci</p> : <p>Öğretmen</p>}` şeklinde koşullu etkileşim yapılabilir.
* inline css olarak css yazmak istersen `style={{ backgroundColor:"blue",}}` şeklinde iki adet süslü parantez ve camelcase olarak yazman lazım
* bulma css kütüphanesi `npm install bulma`





<br>


```
{courses.map((course,index)=>{
    return <Course key={index} courseName={course} />
})}
```
stateMantigi adlı projede kullanılan bu kod `Course` adlı yeri çalıştırır. Burada `courseName` aynı isimlere sahip olabileceği için `React` özel `key` property'sini almak istiyor. Burada `key` yazılımcı için değil `React` için konuldu.
































