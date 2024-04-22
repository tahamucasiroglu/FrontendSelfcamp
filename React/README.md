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
* `export default function Home()` şeklinde kısa olarak export tanımı oluyormuş.
* galiba `< />` ile `<> </ >` arasında bir fark yok. ikiside oluyor. `<> </ >` ile araya ek özellikler alabilen var ama ihtiyaç ve `clean kod` için galiba 
* `mui material icons` bunu iconlarda kullanabişlirsin. 
* `npm install formik --save` ile `formik` kurulur amacı formları yönetimini kolaylaştırmak
* `npm install react-router-dom@latest` react router dom kurma
* formik schemas içinde `yup` kullanımı var. .net'deki `validator` işini yapmakta. `npm i yup` ile kurulur






<br>


```
{courses.map((course,index)=>{
    return <Course key={index} courseName={course} />
})}
```
stateMantigi adlı projede kullanılan bu kod `Course` adlı yeri çalıştırır. Burada `courseName` aynı isimlere sahip olabileceği için `React` özel `key` property'sini almak istiyor. Burada `key` yazılımcı için değil `React` için konuldu.


<br>

### UseState

`useState` kulanarak bir değişkenin değeri değiştiğinde onu kullanan her yerin güncellenmesi sağlanabilir. Flutter ile aynı. `const [sayi, setSayi] = useState(0);` şeklinde bir kodda `sayi` `0` değeri ile programa başlar. İstenilen değer `setSayi(YeniSayi)` şeklinde ayarlanır. Eğer değer aynı kalırsa `chatGPT`'nin dediğine göre yeniden `render` gerçekleşmez.

<br>

### UseEffect

useEffect biraz daha farklı <br>


```
  useEffect(() => {
    //kod
  })
```

yukarıdaki gibi yazarsan olduğu component değişikliğinde veya içindeki `useState`'ler değişir ise çalışır. Başlangıçtada çalışır. Aslında her değişiklikte tetiklenir.


```
  useEffect(() => {
    //kod
  },[])
```

burada ise sadece ilk kez çağrılınca çalışır


```
  useEffect(() => {
    //kod
  },[sayi, numara])
```

burada ise sadece ilk kez çalışır ve içine yazılan state değerleri değişince çağrılır

<br>

yeni bakıyorum şuan ama galiba `flutter` ile benzer yine sayfa açılışında çağrılıyor genelde. `flutter`'dan farklı olarak bazı değişkenlerde değişince çağırma güzelmiş. (`Flutter` ilede uzun zaman oldu karıştırıyor olabilirim.) Muhtemelen en çok sayfa açılışında sunucu ve internet haberleşmelerinde kullanılmakta.



<br>

### ContextApi

temelde sayfalar arası iletişimi kolaylaştırıyor gibi

<br>


<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0AYDE7NAxvRubqaXM_wOhA.png"> </img>

[Kaynak](https://tsafaelmali.medium.com/react-context-api-nedir-nasıl-kullanılır-7000b530ebd0)


resimdeki gibi kısaca dallar arasında haberleşme sağlar. Tam olarak şuan anlamadım bakılan eğitim karmaşık anlatıyor gibi geldi bana. Ayrı bakılacak


<br>

### UseReducer

```
const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <div>Sayı = {count}</div>
      <button onClick={() => dispatch('increment')}>Arttır</button>
      <button onClick={() => dispatch('decrement')}>Azalt</button>
      <button onClick={() => dispatch('reset')}>Sıfırla</button>
    </div>
  );
}
```

`reducer` count değerini günceller. burada `reducer` fonksiyonunu `App` içerisinde `dispatch` ile bağlar. `usestate` den farkı aslında güncelleme fonksiyonun biz belirliyoruz.


### UseMemo

```
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div className="App">
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <div style={theme}>{doubleNumber}</div>
      </>
    </div>
  );
}

function slowFunc(num) {
  console.log('Fonksiyon çağrıldı');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
```

kısaca hedef değer değişmediği sürece işlem yapmaz.



### UseCallback

`UseMemo` gibi fonsiyon dönüyor. belli takibi var gibi vs. çok anlamlı glemedi geçtim ama adında callback var muhtemelen hata yapıyom

### UseRef

anlık değişikliklerde kullanılır mesela yazı yazarken her karaktere tıklanınca kontrol yapmak gibi

```
function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = 'Can';
  };
  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```

### UseTransition

bir koşula kadar başka bir işlem yapma yada göstermede kullanılır. örneğin veriler gelene kadar loading gösterg



### Custom Hook

bunlara `hook` denmekte özel olarak yapmak istersen.

```

function useTitle(num) {
  useEffect(() => {
    document.title = `Sayı ${num}`;
  }, [num]);
}

```

böyle bir tanımlama ile istenilen yerde `useTitle(num)` dersen çalışır. aslında tam bir `hook` değil gibi ama genede işe yarar





### React Router

`npm install react-router-dom@latest` kullanarak kurulur. 

<br>

sonra `import {BrowserRouter} from 'react-router-dom'` şeklinde `main.jsx` içine import edilir. Ayrıca 

```
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
```

şeklinde sarmalama yapılır.

```

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

```

Burada route sıralaması önemli `<Route path='*' element={<404NotFound />} />` gibi bir kullanım olabilir. Eğer sıra ile baktı linkler uymuyor her linki kabul eden `404` ataması olur. Bunu başa yazarsan olan olmayan her link `404` kabul edilir.

app içinde kullanımıda bu başlangıç için anladığım düm düz url değişikliklerini kontrol etme.

<br>

sayfalar arası yönlendirmeleride var iyiymiş.

<br>

#### Link

`Link` içerisine to='path' alarak ilerler. burada routerlar tıkladığında oldukları alan renderlanır.


#### NavLink

`link` ile aynı sadece tıklanana `active` adlı bir css class'ı tanımlıyor bu sayede tıklanmış olanları görebilirisiniz.


#### useNavigate

```

import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Mission() {
    const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=> navigate('/')}>Geri git</button>
    </>
  )
}


```

`route` kullanarak navbardan yönetim olmakta ama sayfa içinde bir diğer sayfaya gitmek istersek o zaman nu özellik ile sağlanabilir. eğer geri gitmek istersen `navigate(-1)` şeklinde de kullanabilirsin. Şuanlık neden illa önce bir değişkene atamam lazımı oturtamadım.


gpt ye sordum bir süre illa kod ukunurluğu dedikten sonra aşağıdaki çıktıyı verdi. Kısaca bu durum `React'un bileşen modeline aykırıdır` dedi. Anladığım kadarı ile `syntax` kuralı yani.

```

Anladım, sadece teknik açıdan bakalım o zaman.

React hook'ları, React bileşenlerindeki state ve yaşam döngüsü yönetimini sağlar. Herhangi bir hook'u çağırmak, React'in içsel bir durumunu güncelleyebilir veya diğer işlemleri gerçekleştirebilir. Ancak, hook'ları sadece React bileşenlerinin en üst düzeyinde, yani fonksiyon bileşenlerinin içinde çağırabilirsiniz.

useNavigate hook'u, React Router tarafından sağlanan bir hook'tur ve yönlendirme işlemleri için kullanılır. Bu nedenle, useNavigate'i doğrudan bir olay işleyicisi içinde çağırmak, React'un bileşen yaşam döngüsü kuralına aykırıdır.

useNavigate'i bir değişkene atamak, React bileşenlerinin kurallarına uygun şekilde hook'u çağırmak için standart bir uygulamadır. Bu şekilde, hook'un doğru kullanımı sağlanır ve potansiyel hataların önüne geçilir.

Kısacası, React hook'larını doğrudan bir olay işleyicisi içinde çağırmak, React'un bileşen modeline aykırıdır ve bu nedenle beklenmedik sonuçlara veya hatalara yol açabilir. Bu yüzden, useNavigate'i bir değişkene atayarak daha güvenli ve standart bir yaklaşım izlenir.

```

#### iç içe route'lar

öncelikle `Outlet` belirtecini unutma.

```

<Route path='/history' element={<History />}> 
  <Route path='company' element={<Company />}/>
  <Route path='team' element={<Team />}/>
  </ Route>
<Route path='*' element={<NorFound />} />

```
şeklinde atama sonrasında `history` içinde de 

```

<>
  <div>History</div>
  <nav>
  <Link to='company'>Company</Link>
  <Link to='team'>Team</Link>
  </nav>
  <Outlet/>
</> 

```

yapmalısın `outlet` olmadan `url` doğru ama sayfa gelmemekte baya uzun süre sonra anlaşılan bir bug'a sebep verebilri.

<br>

ayrıca `history` içindeki `to=company`'de başına `/` bilerek konmadı. Başına `/` koyarsan yine çalışmaz.


#### dinamik route

```

<Route path='/members' element={<Members />} />
<Route path='/members/:memberId' element={<MemberDetail />} />

```

şeklinde özel verileri url üzerinden alabilir url üzerinden haberleşebilirisin.

```

export default function MemberDetail() {
    const params = useParams();
    const memberId=params.memberId;
  return (
    <div>MemberDetail {memberId}</div>
  )
}

```
`member detail` içinden de bu şekilde kullanabilirisin. `http://localhost:5173/members/15` gibi fakat 15 yerine sadece `%` koyarsam patladı.

```
const {memberId} = useParams()
```

buda aynı işi görür


```

import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Members() {
    const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
    <div>Members</div>
    <button onClick={() => setSearchParams({filter:'aktive'})}> aktifleri getir</button>
    <button onClick={() => setSearchParams()}> resetle</button>
    </>
  )

```
şeklinde filtrelemeler yapılabilir. url üzerinde `?` sonrasında ekleme ile yapar mesela aktife tıklarsam url `http://localhost:5173/members` bundan `http://localhost:5173/members?filter=active` bu olur. reset tekrar ilk haline döndürür. bu aktiflikte `searchParams` parametresine atanır. Yani başta `const isActive = searchParams.get('filter') === 'active'` şeklinde bir kontrol ile filtreler kontrol edilir ve değerler ona göre getirilir. 


#### lazy loading

karmaşık ve bir sürü veri çekme işlemi olan yer için kullanılır. Örneğin anasayfa geldi fakat genelde anasayfa sonrası borsa grafiklerine bakıyor insanlar. Ne olacak. Borsaya tıkladığında o bir sürü veri çekilirken insanlar bekler. Onun yerine lazy load ile anasayfada iken insnalar öncesinde finans verilerini çekmeye başlayabilirsin. `ben öyle anladım`.

`lazy load` için `import` `const LazyAboutUs = React.lazy(() => import('./aboutUs')) ` şeklinde yapılır. 

kullanırkende `<Route path='/aboutus' element={<AboutUs />} />` yerine `<Route path='/aboutus' element={<React.Suspense><LazyAboutUs /></React.Suspense> } />` şeklinde kullanırsın. Direkt kullandığında suspend hatası vermekte onun için `react.suspense` ile sardık.





