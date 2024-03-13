HTML Notları<br>
Html kodları genellikle github tarafından işleniyor ondan dolayı direk burada gösterim kolay olacak.<br>
Başlıklar<br>
* [H Etiketleri](#h-etiketleri)<br>
* [Paragraf Etiketi](#paragraf-etiketi)<br>
* [a Etiketi](#a-etiketi)<br>
* [Img Etiketi](#img-etiketi)<br>
* [Button Etiketi](#button-etiketi)<br>
* [Listeleme ve Tablo](#listeleme-ve-tablo)<br>
* [Yazı Formatlama](#yazı-formatlama)<br>
* [Alinti Yapma](#alinti-yapma)<br>
* [](#)<br>
* [](#)<br>
* [](#)<br>
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

### H Etiketleri

<hr>

<div style="border-style: double; border-color: red">

```diff 
- <h1>Başlık<h1>
``` 

<h1 style="color: red ">Başlık</h1>

</div>

<div style="border-style: double; border-color: green">

```diff 
+ <h1>Başlık<h1>
```  
<h2 style="color: green">Başlık</h2>

</div>

<div style="border-style: double; border-color: red">

```diff 
- <h1>Başlık<h1>
``` 
<h3 style="color: red">Başlık</h3>

</div>

<div style="border-style: double; border-color: green">

```diff 
+ <h1>Başlık<h1>
``` 
<h4 style="color: green">Başlık</h4>

</div>

<div style="border-style: double; border-color: red">

```diff 
- <h1>Başlık<h1>
```  
<h5 style="color: red">Başlık</h5>

</div>

<div style="border-style: double; border-color: green">

```diff 
+ <h1>Başlık<h1>
```  
<h6 style="color: green">Başlık</h6>

</div>



### Paragraf Etiketi

```
<p>Lorem Ipsum is simply dummy text of the printing and typesetting        industry. Lorem Ipsum has been the industry's

standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
```

<p>Lorem Ipsum is simply dummy text of the printing and typesetting        industry. Lorem Ipsum has been the industry's 

standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>


<hr>


```
<pre>Lorem Ipsum is simply dummy text of the printing and typesetting        industry. Lorem Ipsum has been the industry's

standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</pre>
```

<pre>Lorem Ipsum is simply dummy text of the printing and typesetting        industry. Lorem Ipsum has been the industry's 

standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</pre>



### a Etiketi

```
<a href="google.com">Google</a>
```
<a href="google.com">Google</a>

### Img Etiketi

<div style="border-style: double; border-color: green">

```
<img src="https://picsum.photos/2000" alt="Rastgele Resim">
```

<img src="https://picsum.photos/200" alt="resim açıklaması seo vs için">

</div>

<div style="border-style: double; border-color: green">

```
<img src="https://picsum.photos/2000" alt="Rastgele Resim" width="150" height="150">
```

<img src="https://picsum.photos/2000" alt="Rastgele Resim" width="150" height="150">

</div>

<div style="border-style: double; border-color: green">

```
<div style="background-image: url('2.png');">
    <p style="padding: 100px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis
        inventore assumenda vel saepe
        blanditiis ipsam magni, quo illo pariatur laudantium qui enim aperiam nesciunt numquam quam dolorem quod
        soluta!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laudantium quos saepe, dolorem ullam eligendi,
        itaque dolores ut eum repudiandae aliquam officiis cumque nam facere nisi distinctio corporis dolor illo!
    </p>
</div>
```

<div style="background-image: url('https://picsum.photos/200');">
    <p style="padding: 100px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis
        inventore assumenda vel saepe
        blanditiis ipsam magni, quo illo pariatur laudantium qui enim aperiam nesciunt numquam quam dolorem quod
        soluta!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laudantium quos saepe, dolorem ullam eligendi,
        itaque dolores ut eum repudiandae aliquam officiis cumque nam facere nisi distinctio corporis dolor illo!
    </p>
</div>


</div>

### Button Etiketi

<div style="border-style: double; border-color: green">

```
<button>Tıkla</button>
```

<button>Tıkla</button>

</div>

### Listeleme ve Tablo

<div style="border-style: double; border-color: green">

```
<ul>
    <li>Coffe</li>
    <li>Tea</li>
    <li>Juice</li>
</ul>
```

<ul>
    <li>Coffe</li>
    <li>Tea</li>
    <li>Juice</li>
</ul>

</div>


<div style="border-style: double; border-color: green">

```
<ol>
    <li>Coffe</li>
    <li>Tea</li>
    <li>Juice</li>
</ol>
```

<ol>
    <li>Coffe</li>
    <li>Tea</li>
    <li>Juice</li>
</ol>

</div>

<div style="border-style: double; border-color: green">

```
<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td>Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Hakan</td>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>
```

<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td>Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Hakan</td>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>

</div>

<div style="border-style: double; border-color: green">

```
<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td>Can</td>
        <td colspan="2">Boz</td>
    </tr>
    <tr>
        <td>Hakan</td>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>
```

<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td>Can</td>
        <td colspan="2">Boz</td>
    </tr>
    <tr>
        <td>Hakan</td>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>

</div>

<div style="border-style: double; border-color: green">

```
<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td rowspan="2">Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>
```

<table style="width: 100%;">
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td rowspan="2">Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>

</div>

<div style="border-style: double; border-color: green">

```
<table style="width: 100%;">
    <caption>Öğrenci Listesi</caption>
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td rowspan="2">Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>
```

<table style="width: 100%;">
    <caption>Öğrenci Listesi</caption>
    <tr>
        <th>Ad</th>
        <th>Soyad</th>
        <th>Yaş</th>
    </tr>
    <tr>
        <td rowspan="2">Can</td>
        <td>Boz</td>
        <td>31</td>
    </tr>
    <tr>
        <td>Çanlı</td>
        <td>30</td>
    </tr>
</table>

</div>

<div style="border-style: double; border-color: green">

```
<ul style="list-style-type: circle;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```
<ul style="list-style-type: circle;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>


</div>


<div style="border-style: double; border-color: green">

```
<ul style="list-style-type: square;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

<ul style="list-style-type: square;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

</div>

<div style="border-style: double; border-color: green">

```
<ul style="list-style-type: none;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

<ul style="list-style-type: none;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

</div>

<div style="border-style: double; border-color: green">

```
<ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

```

<ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>


</div>


<div style="border-style: double; border-color: green">

```
<ol type="1">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

<ol type="1">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

</div>



<div style="border-style: double; border-color: green">

```
<ol type="A">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

<ol type="A">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

</div>



<div style="border-style: double; border-color: green">

```
<ol type="a">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

<ol type="a">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

</div>


<div style="border-style: double; border-color: green">

```
<ol type="I">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
```

<ol type="I">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>

</div>

### Yazı Formatlama

<div style="border-style: double; border-color: green">

```<p>Normal Text</p>```

<p>Normal Text</p>

</div>

<div style="border-style: double; border-color: green">

```<p><b>Kalın Text</b></p>```

<p><b>Kalın Text</b></p>

</div>

<div style="border-style: double; border-color: green">

```<p><strong>Kalın Text</strong></p>```

<p><strong>Kalın Text</strong></p>

</div>

<div style="border-style: double; border-color: green">

```<p><i>italic text</i></p>```

<p><i>italic text</i></p>

</div>

<div style="border-style: double; border-color: green">

```<p><em>Vurgulanmış text</em></p>```

<p><em>Vurgulanmış text</em></p>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <small>Css</small> Eğitimi</h1>```

<h1>Eğitimimiz <small>Css</small> Eğitimi</h1>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <mark>Css</mark> Eğitimi</h1>```

<h1>Eğitimimiz <mark>Css</mark> Eğitimi</h1>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <del>Css</del> Eğitimi</h1>```

<h1>Eğitimimiz <del>Css</del> Eğitimi</h1>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <ins>Css</ins> Eğitimi</h1>```

<h1>Eğitimimiz <ins>Css</ins> Eğitimi</h1>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <sub>Css</sub> Eğitimi</h1>```

<h1>Eğitimimiz <sub>Css</sub> Eğitimi</h1>

</div>

<div style="border-style: double; border-color: green">

```<h1>Eğitimimiz <sup>Css</sup> Eğitimi</h1>```

<h1>Eğitimimiz <sup>Css</sup> Eğitimi</h1>

</div>


### Alinti Yapma

<div style="border-style: double; border-color: green">

```<p>Can: <q>Yazılım zordur ama 4 saat egzersizle birşeyler oturur</q></p>```

<p>Can: <q>Yazılım zordur ama 4 saat egzersizle birşeyler oturur</q></p>

</div>


<div style="border-style: double; border-color: green">

```
<blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis nobis voluptate incidunt a
        fuga deserunt nostrum est, quo et repellendus! Error iste quidem perspiciatis necessitatibus dignissimos,
        obcaecati sit nihil.</blockquote>
```

<blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis nobis voluptate incidunt a
        fuga deserunt nostrum est, quo et repellendus! Error iste quidem perspiciatis necessitatibus dignissimos,
        obcaecati sit nihil.</blockquote>

</div>

<div style="border-style: double; border-color: green">

```
<address>
    Can Boz <br>
    www.canboz.com
</address>
```

<address>
    Can Boz <br>
    www.canboz.com
</address>

</div>

<div style="border-style: double; border-color: green">


</div>

