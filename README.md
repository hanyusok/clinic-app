# clinic-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# sass error fix command

npm add -D sass

### Navigation Tree
```sh
 Services
  |- list & new my Call-Doc
  |- list clinics info
  |- list local pharmacy info
  |- info faq
```

```sh
|---- Account(patient)
  |- Signin
  |- Signup(Register)
  |- Logout

```

```sh
Admin(master)
   |- list call-doc datatable (crud)
   |- list patients datatable
   |- list clinics datatable
   ```

#  firestore auth 

https://youtu.be/qWy9ylc3f9U?t=677

# pinia auth firestore
https://arduinoes.github.io/pinia/auth/#modallogin-vue

# custom auth for admin user
npm i firebase-tools

# vueuse addon for firestore handling
npm i @vueuse/core

# multistep form handling

# 전화번호 로그인
https://firebase.google.com/docs/auth/web/phone-auth?authuser=0&hl=ko
# kakao /naver login 
https://firebase.google.com/docs/auth/web/account-linking
https://github.com/FirebaseExtended/custom-auth-samples/blob/master/kakao/KakaoLoginServer/app.js
https://github.com/zaiyou12/firebase-custom-login
