`<form method="post" asp-action="Apply">` => `asp-action` ile aynı controller içindeki action kısmına bağladık. <br>
`<label asp-for="Email"></label>` => `asp-for` kullanımı ile ne için olacağını söylersin bu sayede label içlerini otomatik doldurtabilirsini.<br>
` <a class="btn btn-success" asp-controller="Home" asp-action="Index"> Home</a>` => kullanımı ile farklı yola gidebilirsin<br>
`[ValidateAntiForgeryToken]    [FromForm]` => kullanımları ile formdan veri alınımı daha güvenli hale gelmekte<br>
`dotnet ef migrations add init` => db ayarlar. `outputdir`  `context`   `project` gibi gibi özelleştirme vardır. <br>
`dotnet ef database update` => migrationsları veritabanına uygular<br>
`OnModelCreating` => bunun içinde veri doldurması yaparken base komutu sonrası koy kalan methodlarda sonra koy riske girme öncesinde olunca veri doldurma çalışömadı<br>
`view sayfa başına Layout = null` => ifadesi ile genel kullanılan null ifadesini iptal edebilirsin <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>
`` => <br>


### ViewComponent

`Components` klasörğ açılır ve `ViewComponent` miras alınır. 

![alt text](image.png)

galiba ekrana yansıtılan bilgiler üzerinde işlemler yapmayı sağlayan yapı gibi örnek sepette 2 ürün var gibi simgeleri hesaplayıp veren yapı


<br>

![alt text](image-1.png)
otomatik yapı alıcı düzen

<br>

![alt text](image-2.png)
buradaki parçları sağlayan yapıalrmış bende farklı yazdım üstte mantık örneği olarakmış btk akedemi mvc dersi 8. bölüm gerekirse bakarım


<br>


### Areas


![alt text](image-3.png)

### Extensions

![alt text](image-4.png)
oto migrate

<br>
<br>

### tag helper
![alt text](image-5.png)

attribute yönetimi sağlar. burada tüm table özelliklerine bootstrap table özelliği ekler
<br>

















