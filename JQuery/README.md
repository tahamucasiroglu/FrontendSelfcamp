26.11.2024 <br>
eklenme yolu <br>

```

<head>
<script src="jquery-3.7.1.min.js"></script>
</head>

```
<br><br>

`$(tag-class-id).action()`

<br>

şeklinde kullanılır.

<br>

```
<script>
    $("button").click(function(){
        $('p').hide();
    })
</script>
```

butona tıklarsan tüm `p` etiketleri gizlenir. Arkaplanda `display:none` olmakta.

<br>

```
$("#buton2").click(function(){
        $('#renkliyazi').css({"color":"red", "background-color":"green"})
    });
```

css ekler

<br>

`addClass` ve `removeClass` class ekler kaldırır. `toggleClass` ise tıklanmada aktif olur galiba

<br>

`attr` özellik değiştirir. yükseklik gibi

<br>

`text` içeriğin yazısını değiştirir

<br>

`fade` - `slide` - `animate` - `hide` gibi animasyon yapıalrı mevcut. başlarına süre ekleme gibi özellikler var dökümandan ihtiyaçta bakarım.

<br>




































