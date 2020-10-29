# Use Webpack

## 1. Install node
- LTS(Long Term Support) 설치


## 2. Initialize
- move to directory    
`cd 3.숫자야구`

- initialize    
`npm init`

※ package.json (버전 관리 파일) 이 생성된다.

## 3. Use Vue
#### Install vue    
`npm install vue`
or
`npm i vue`

#### Install webpack    
`npm i webpack webpack-cli -D`    
 (-D: 개발할 때만 사용하겠다. = `--save-dev`)   
 
※ webpack.config.js 이 생성된다.
스크립트를 하나로 파일로 합치는데 그 대표파일을 entry에 명시
```
entry: {
  // 대표파일을 main.js로 설정
  app:path.join(__dirname, 'main.js'),
},
```
=> 스크립트가 `<script src="/app.js"></script>` 로 대체된다.

#### Build
`npm run build`
- package.json의 scripts에서 "build"를 참조한다.
```
"scripts": {
  "build": "webpack"
},
```
설정이 위와 같다면 `npm run build` = `npm run webpack`

#### Additional install
`npm i vue-loader -D`    

`npm i vue-template-compiler -D`

※ 특정 버전 설치하기    
`npm i vue@[version]`    
ex) `npm i vue@2.7.0`


#### In webpack.config.js
- entry의 파일을 처리 => 처리하다가 이상한거() 만나면 module의 rules가 처리
  => 최종 결과물로 output, output이 나오기 전에 plugin이 전처리

- main.js & NumberBaseball.vue를 'app.js'로 합침