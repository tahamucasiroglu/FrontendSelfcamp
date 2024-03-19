CSS Notları<br>


<h1>Başlıklar<h1><br>


* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>
* [](#) <br>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


<div style="border-style: double; border-color: green">

### Color Etiketi

```

<p style="color: red"> Hello World </p>

```

<hr style="color: green">

```

p{
    color: red;
}

```

<p style="color: red"> Hello World </p>


</div>


<div style="border-style: double; border-color: green">

### Backgraund Color

```

<h1 style="color: blue; background-color: yellow;"> Hello World </h1>


```

<hr style="color: green">

```

h1 {
  color: blue;
  background-color: yellow;
}

```

<h1 style="color: blue; background-color: yellow;"> Hello World </h1>


</div>

### Özel Backgraund Color

```

<h1 style="background-color: rgb(255, 0, 0); color: #f9f4f8;"> Hello World </h1>


```

<hr style="color: green">

```

h1 {
  background-color: rgb(255, 0, 0);
  color: #f9f4f8;
}

```

<h1 style="background-color: rgb(255, 0, 0); color: #f9f4f8;"> Hello World </h1>


</div>

<div style="border-style: double; border-color: green">

### Font Özellikleri

```

<p style="font-weight: bold; font-style: italic; font-size: 12px;"> Hello World </p>

```

<hr style="color: green">

```

{
    font-weight: bold;
    font-style: italic;
    font-size: 12px;
}

```

<p style="font-weight: bold; font-style: italic; font-size: 12px;"> Hello World </p>


</div>

<div style="border-style: double; border-color: green">

### Text Align

```

<p style="text-align: center;">Hello World</p>

```

<hr style="color: green">

```

{
    text-align: center;
}

```

<p style="text-align: center;">Hello World</p>

</div>
<div style="border-style: double; border-color: green">

### 

```

<p style="font-weight: bold; font-style: italic; font-size: 14px; line-height: 30px; word-spacing: 40px; letter-spacing: 5px;">Hello World</p>

```

<hr style="color: green">

```

{
    font-weight: bold; 
    font-style: italic; 
    font-size: 14px; 
    line-height: 30px; 
    word-spacing: 40px; 
    letter-spacing: 5px;
}

```

<p style="font-weight: bold; font-style: italic; font-size: 14px; line-height: 30px; word-spacing: 40px; letter-spacing: 5px;">Hello World</p>



</div>
<div style="border-style: double; border-color: green">

### Font Family

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">
<p style="font-family: 'Sofia', sans-serif; font-size: 30px;">Hello World</p>

```

<hr style="color: green">

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">
{
    font-family: 'Sofia', sans-serif; font-size: 30px;
}

```
<div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">
<p style="font-family: 'Sofia', sans-serif; font-size: 30px;">Hello World</p>
</div>

</div>



<div style="border-style: double; border-color: green">


### Test Transform

```

<p style="text-decoration-line: line-through; text-decoration-style: dotted; text-decoration-color: red; text-decoration: line-through dotted red;">Hello World</p>

```

<hr style="color: green">

```

{
    text-decoration-line: line-through; 
    text-decoration-style: dotted; 
    text-decoration-color: red; 
}

yada

{
    text-decoration: line-through dotted red
}

```

<p style="text-decoration-line: line-through; text-decoration-style: dotted; text-decoration-color: red; text-decoration: line-through dotted red;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Test Shadow

```

<p style="text-shadow: -2px 2px 5px red;">Hello World</p>

```

<hr style="color: green">

```

{
    text-shadow: -2px 2px 5px red;
}

```

<p style="text-shadow: -2px 2px 5px red;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Test Shadow

```

<p style="text-shadow: 0 -15px green, 0 -7.5px blue, 0 7.5px red, 0 15px yellow;">Hello World</p>

```

<hr style="color: green">

```

{
    text-shadow: 0 -15px green, 0 -7.5px blue, 0 7.5px red, 0 15px yellow;
}

```

<p style="text-shadow: 0 -15px green, 0 -7.5px blue, 0 7.5px red, 0 15px yellow;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Selectorlar
 
```

* {  } => Bütün elementlere etki eder
* input {  } => bütün input elementlere css verir 
* input [type='text'] {  } => input elementi olan ve type = text olan elementlere css verir 
* h1, h2 {  } => birden çok elemente aynı anda css verme
* ul > span {  }  ul etiketi içindeki span etiketine css verir. > konmadanda oluyor
* ul#idAdi {  } ==>  ul etikenden id'si belirtilen yerlere css verir
* ul.classAdi {  } ==>  ul etikenden class'i belirtilen yerlere css verir
* .menu .secenekler:nth-child(1) {  } => .menu içindeki seceneklerden ilkini alır 
```

</div>


<div style="border-style: double; border-color: green">

### Box Border

```

<p style="width: 300px; border: 15px solid red; padding: 50px; margin: 20px;">Hello World</p>

```

<hr style="color: green">

```

{
    width: 300px; 
    border: 15px solid red; 
    padding: 50px; 
    margin: 20px;
}

```

<p style="width: 300px; border: 15px solid red; padding: 50px; margin: 20px;">Hello World</p>


</div>

<div style="border-style: double; border-color: green">

### Box Border 

```

<p style="border-top: 4px dashed blue; border-left: 1px dotted pink; border-right: 8px dotted green; border-bottom: 2px solid red;">Hello World</p>

```

<hr style="color: green">

```

{
    border-top: 4px dashed blue;
    border-left: 1px dotted pink;
    border-right: 8px dotted green;
    border-bottom: 2px solid red;
}

```

<p style="border-top: 4px dashed blue; border-left: 1px dotted pink; border-right: 8px dotted green; border-bottom: 2px solid red;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Box Border

```

<p style="width: 500px; height: 200px; border: 1px solid red;">Hello World</p>

```

<hr style="color: green">

```

{
    width: 500px; 
    height: 200px; 
    border: 1px solid red;
}

```

<p style="width: 500px; height: 200px; border: 1px solid red;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Box Border Padding

```

<p style="width: 220px; border: 1px solid blue; padding: 20px;">Hello World</p>

```

<hr style="color: green">

```

{
    width: 220px;
    border: 1px solid blue;
    padding: 20px;
}

```

<p style="width: 220px; border: 1px solid blue;">Padding Olmadan</p>

<p style="width: 220px; border: 1px solid blue; padding: 20px;">Hello World</p>


</div>


<div style="border-style: double; border-color: green">

### Box Border Margin

```

<p style="border: 1px solid red; margin: 25px;">Hello World</p>

```

<hr style="color: green">

```

{
    border: 1px solid red; 
    margin: 25px;
}

```

<p style="border: 1px solid red; margin: 25px;">Hello World</p>


</div>
<div style="border-style: double; border-color: green">

### Border Box;

```

<p style="box-sizing: border-box;">Hello World</p>

```

<hr style="color: green">

```

{
    box-sizing: border-box;
}

```

<p style="box-sizing: border-box;">Hello World</p>

</div>



<div style="border-style: double; border-color: green">

### Display

[Mozilla Kaynağı](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

```

<p style="display: block; background-color: yellow;">Hello World</p>
<p style="display: block; background-color: yellow;">Hello World</p>


<p style="display: inline; background-color: yellow;">Hello World</p>
<p style="display: inline; background-color: yellow;">Hello World</p>

```

<hr style="color: green">

```

{

    display: block; 
    background-color: yellow;


    display: inline;
    background-color: yellow;

}

```

```
    Display 

inline sonrasında geleni aynı satırda devam ettirir
block sonrasında geleni bir alt satırdan başlatır
inline-block width ve height ile beraber uygulanır.
none 
```

<p style="display: block; background-color: yellow;">Hello World</p>
<p style="display: block; background-color: yellow;">Hello World</p>


<p style="display: inline; background-color: yellow;">Hello World</p>
<p style="display: inline; background-color: yellow;">Hello World</p>


</div>


<div style="border-style: double; border-color: green">

### Border Radius

```

<p style="background-color: yellow; width: 100px; height: 100px; border-radius: 0px 30px 30px 0px; margin: 10px;">Hello World</p>


<p style="background-color: yellow; width: 100px; height: 100px; border-radius: 50%; margin: 10px;">Hello World</p>


```

<hr style="color: green">

```

{
    background-color: yellow;
    width: 100px;
    height: 100px;
    border-radius: 0px 30px 30px 0px;
    margin: 10px;


    background-color: yellow;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px;
}

```

<p style="background-color: yellow; width: 100px; height: 100px; border-radius: 0px 30px 30px 0px; margin: 10px;">Hello World</p>

<p style="background-color: yellow; width: 100px; height: 100px; border-radius: 50%; margin: 10px;">Hello World</p>

</div>



<div style="border-style: double; border-color: green">

### Position

[Kaynak Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

```

<p style="border: 1px solid black; background-color: yellow; margin: 30px; font-size: 30px; position: static; top: 50px; left: 50px;">Hello World</p>

```

<hr style="color: green">

```

{
    border: 1px solid black;
    background-color: yellow;
    margin: 30px;
    font-size: 30px;
    position: static;
    top: 50px;
    left: 50px;
}

```

<p style="border: 1px solid black; background-color: yellow; margin: 30px; font-size: 30px; position: static; top: 50px; left: 50px;">Hello World</p>


```

<p style="position: relative;">Hello World</p>

```

<hr style="color: green">

```

{
    position: relative;
}

```

<p style="position: relative;">Hello World</p>


```

* position fixed = sabit kalması sağlanır. sayfada işlendiği yerde aşağı yukarı hareketlerde sabit kalır

* position sticky = aşağı indiğinde verilen elemen üstte gelirse sayfa başı sabit kalır ve oradan ayrılmaz. bir nevi fixed gibi ama olduğu yere odaklanırsan sayfa ortasına gelir.

```




</div>



<div style="border-style: double; border-color: green">

### Transition

```

hover gibi ek özellikler değişirken değişim süresi belirtilebilir.

.btn {
  transition: background-color 2s;
}

.btn:hover {
  background-color: blue;
}

burada normalde üzerinegelince bir anda mavi olucaktı ama transition sebebi ile 2 sn içinde değişecek. hover içine koyarsan mouse üzerinden çıktığı anda geri rengine dönerdi

```

<hr style="color: green">

```

.btn {
  transition: color 2s, background-color 2s; 
}
.btn:hover {
  background-color: blue;
  color: white;
}

şeklinde birden fazla elemente farklı transition özelliği verilebilir. hepsi için all demen gerekşir


```



</div>



<div style="border-style: double; border-color: green">

### Transform

```
  transform: translate(300px, 100px);

  ekrana basarken başlangıç nktasını ayarlar

  burada rotate ve scale gibi ek özellikelrde var. 

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### Flexbox

```

bunu anlatmak zordu responsive gibi ve eşit bölmeli işlerde kullanılıyor gibi mozilla dan bakarsın

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### Media Query

```

@media screen and (min-width: 768px) {
  body {
    background-color: blue;
  }
}

```

eğer min genişlik 768 px ise arka plan mavi olur. 

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

html içinde yukarıdaki kod olmaz ise çalışmaz bunu unutma


<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### Bootstrap

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



<div style="border-style: double; border-color: green">

### 

```

<p style="">Hello World</p>

```

<hr style="color: green">

```

{

}

```



</div>



