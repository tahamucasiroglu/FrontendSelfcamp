# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<br>

* [yüzlerin kaynağı](https://www.kaggle.com/datasets/almightyj/person-face-dataset-thispersondoesnotexist/data)


<br>

<div style="border-style: solid; border-color: red"></div>

kendimi react kısmında geliştirmek için yaptığım proje. Amele pazarı gibi oldu sektör zaten. kimse eğitmeden eğitilmiş arıyor. bu sitede sektörün ilerisini gösteriyor diyebilir. ilerde linkedin gibi yerlerde biz şirketlere çalışan başvurmayacak. Şirketler amele alır gibi bizleri seçecek. (amele kelimesinden duyar kasan olmasın lütfen)


<br>

```

/my-developer-marketplace-app
│
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
│
├── src
│   ├── assets
│   │   ├── images         # Görseller ve ikonlar
│   │   └── styles         # Global stil dosyaları
│   │
│   ├── components         # Yeniden kullanılabilir bileşenler
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Card.tsx
│   │
│   ├── context            # React Context API için dosyalar
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── hooks              # Özel React hook'ları
│   │   ├── useAuth.ts
│   │   └── useTheme.ts
│   │
│   ├── pages              # Uygulamanın sayfaları
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Developers.tsx # Yazılımcı listeleme sayfası
│   │   ├── Profile.tsx    # Yazılımcı profili sayfası
│   │   └── Contact.tsx
│   │
│   ├── utils              # Yardımcı fonksiyonlar ve araçlar
│   │   ├── api.ts         # API istekleri için yardımcı fonksiyonlar
│   │   └── helpers.ts
│   │
│   ├── App.tsx            # Ana uygulama bileşeni
│   ├── index.tsx          # Uygulamayı başlatan dosya
│   └── routes.ts          # Routing yapılandırmaları
│
├── tests                  # Test dosyaları
│   ├── components
│   └── pages
│
├── vite.config.ts         # Vite yapılandırma dosyası
├── tsconfig.json          # TypeScript yapılandırma dosyası
└── package.json           # Proje bağımlılıkları ve scriptler

```

chatGPT ile konuştum. Dediki bu template ile ilerlemek herkes için en iyisi. milyonlarca saat internette eğitim görmüş. Haklıdır diyerek bu sistemde başlarım ben. Yalnız klasörleride büyük harf ile başladım daha güzel geliyor bana .

<br>

























