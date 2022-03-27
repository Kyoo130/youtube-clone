# YouTube Clone 유튜브 동영상 검색 서비스

### 📝 개요

+ YouTube API를 이용하여 만든 유튜브 동영상 검색 클론 프로젝트 입니다.
+ 원하는 YouTube 동영상을 검색하고, 재생할 수 있는 기능을 구현하였습니다.
+ 기본 테마는 Dark 스타일이며, 상단 토글 버튼을 통해 스타일을 변경할 수 있습니다.
+ 검색한 제목의 동영상이 없을 시 404페이지가 노출되도록 기능을 구현하였습니다.


### 💻 사용 기술

+ JavaScript
+ React
+ Styled-components
+ Axios


### 🏚 개발 환경

+ OS : Mac
+ Front-End : React
+ IDE : VS Code, IntelliJ
+ Platform : PC Web
+ Test Browser : Chrome v.99.0.4844.84
+ Test Device : iPhone 13 Pro (모바일 버전 미구현)


### 🔗 배포 URL

+ https://boisterous-paletas-1622d0.netlify.app


### 📂 프로젝트 구조

```bash
🗂 src
├── components
│   ├── Detail.js
│   ├── Header.js
│   ├── NotFound.js
│   ├── Toggle.js
│   ├── VideoItem.js
│   ├── VideoList.js
│   └── index.js
├── elements
│   ├── FlexBox.js
│   ├── SectionEl.js![2022-03-27 21 53 48](https://user-images.githubusercontent.com/77729264/160283915-4ef97da6-a038-4342-8fa1-a3619fd37b51.gif)

│   └── index.js
├── service
│   └── youtube.js
├── util
│   └── GlobalStyle.js
├── index.css
├── index.js
├── App.css
└── App.js
```


### 💬 구현 기능
- API 호출을 통해 Youtube 동영상 검색 기능 구현
- 토글 버튼 클릭 시 테마 스타일 변경 기능 구현 (기본값: DarkMode)
- 검색된 동영상이 없을 시 404 페이지 노출 기능 구현
- 모바일 환경에서도 대응이 가능한 반응형 웹 (구현 예정)


### 🛠 구현 화면

| Video List                                         | Video Search                                       |
|----------------------------------------------------|----------------------------------------------------|
| ![VideoList](https://user-images.githubusercontent.com/77729264/160283858-eff4a179-9144-41f2-a7fe-3c341bb00ccc.gif) | ![2022-03-27 22 32 02](https://user-images.githubusercontent.com/77729264/160284467-6d26b0b3-fc4e-4734-95b7-a1e06d95a281.gif) |

| Dark Mode                                          | Not Found                                          |
|----------------------------------------------------|----------------------------------------------------|
| ![2022-03-27 21 50 24](https://user-images.githubusercontent.com/77729264/160283925-74340ab6-6f79-4c09-a62d-80418b3832eb.gif) | ![2022-03-27 21 53 48](https://user-images.githubusercontent.com/77729264/160283922-7f50cf1d-79c1-485a-a3d1-eb9bcd74dec5.gif) |

