# 📖 bookSwallow-client

새로운 기술에 대해 공부하다 막막했던 기억이 있으신가요?

저희가 미리 좋은 책을 추천해드리겠습니다. <br/>
의견을 남기고, <br/>
다른 사람들에게 추천하고, <br/>
나만의 찜 리스트도 만들어 보세요! 

책을 물어다 주는 제비, **BookSwallow**

## ⚙️ 사용 스택 및 아키텍처
![architecture](https://user-images.githubusercontent.com/41813020/117260912-84b36000-ae8a-11eb-8526-78b1dc1f8c73.png)

## ⛓ Flow Chart
- front-end
![frontend](https://user-images.githubusercontent.com/41813020/117261112-bcbaa300-ae8a-11eb-9cac-be93523ebffe.jpeg)

- back-end
![backend](https://user-images.githubusercontent.com/41813020/117261128-c0e6c080-ae8a-11eb-82ed-c9fb92d36236.jpeg)

## 📑 Project Directory Structure
<details>
<summary>client</summary>
<div markdown="1">     
  
```
├── README.md
├── package.json
├── public
│   ├── book_favicon.ico
│   ├── favicon.ico
│   ├── images
│   │   ├── 401.png
│   │   ├── 404.png
│   │   ├── 500.png
│   │   ├── Logo.png
│   │   ├── mainImage.png
│   │   ├── sns-google.png
│   │   └── sns-kakao.png
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── components
│   │   ├── auth
│   │   │   ├── AuthFrom.js
│   │   │   └── SocialAuth.js
│   │   ├── book
│   │   │   ├── BookDetail.js
│   │   │   ├── BookItem.js
│   │   │   ├── BookList.js
│   │   │   ├── BookSlide.js
│   │   │   ├── BookSlideItem.js
│   │   │   └── LikeButton.js
│   │   ├── comment
│   │   │   ├── CommentInput.js
│   │   │   ├── CommentItem.js
│   │   │   └── Comments.js
│   │   ├── common
│   │   │   ├── Button.js
│   │   │   ├── Empty.js
│   │   │   ├── GlobalStyles.js
│   │   │   ├── Header.js
│   │   │   ├── Input.js
│   │   │   ├── Loading.js
│   │   │   ├── Modal.js
│   │   │   └── Responsive.js
│   │   ├── errors
│   │   │   └── Errors.js
│   │   ├── main
│   │   │   └── Main.js
│   │   └── zzim
│   │       ├── ZzimItem.js
│   │       └── ZzimList.js
│   ├── containers
│   │   ├── auth
│   │   │   ├── AutoTemplate.js
│   │   │   ├── LoginForm.js
│   │   │   ├── MypageForm.js
│   │   │   ├── RegisterForm.js
│   │   │   └── SocialContainer.js
│   │   ├── book
│   │   │   ├── BookContainer.js
│   │   │   └── BooksContainer.js
│   │   ├── comment
│   │   │   ├── CommentInputContainer.js
│   │   │   └── CommentsContainer.js
│   │   ├── common
│   │   │   └── HeaderContainer.js
│   │   └── zzim
│   │       └── ZzimsContainer.js
│   ├── index.js
│   ├── lib
│   │   ├── api
│   │   │   ├── auth.js
│   │   │   ├── books.js
│   │   │   ├── client.js
│   │   │   ├── comments\ 2.js
│   │   │   ├── comments.js
│   │   │   ├── kakaoLogin.js
│   │   │   └── zzims.js
│   │   └── styles
│   │       └── palette.js
│   ├── modules
│   │   ├── auth.js
│   │   ├── books.js
│   │   ├── comments.js
│   │   ├── index.js
│   │   ├── modal.js
│   │   ├── user.js
│   │   └── zzims.js
│   ├── pages
│   │   ├── BookDetailPage.js
│   │   ├── ListPage.js
│   │   ├── LoginPage.js
│   │   ├── MainPage.js
│   │   ├── MyPage.js
│   │   ├── RegisterPage.js
│   │   └── ZzimPage.js
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

</div>
</details>

<details>
<summary>server</summary>
<div markdown="1">     
  
  ```
  ├── README.md
├── app.js
├── config
│   ├── config.js
│   └── config.json
├── controllers
│   ├── books
│   │   ├── best.js
│   │   ├── getBookList.js
│   │   ├── getBookSearch.js
│   │   ├── index.js
│   │   └── like.js
│   ├── comments
│   │   ├── createComment.js
│   │   ├── deleteComment.js
│   │   ├── getComment.js
│   │   ├── index.js
│   │   └── updateComment.js
│   ├── index.js
│   ├── users
│   │   ├── check.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   ├── signUp.js
│   │   ├── socialGoogle.js
│   │   ├── socialKakao.js
│   │   ├── updateInformation.js
│   │   ├── userInfo.js
│   │   └── withdrawal.js
│   └── zzims
│       ├── createZzim.js
│       ├── deleteZzim.js
│       ├── index.js
│       └── zzimList.js
├── middleware
│   └── jwtToken.js
├── migrations
│   ├── 20210428044504-create-book.js
│   ├── 20210428044724-create-user.js
│   ├── 20210428044838-create-comment.js
│   ├── 20210428045438-create-zzim.js
│   └── 20210428045443-create-like.js
├── models
│   ├── book.js
│   ├── comment.js
│   ├── index.js
│   ├── like.js
│   ├── user.js
│   └── zzim.js
├── package.json
├── routes
│   ├── book.js
│   ├── comment.js
│   ├── user.js
│   └── zzim.js
├── seeders
│   └── 20210428050212-demo-book.js
├── utils
│   └── userFunc.js
└── yarn.lock
  ```
  
</div>
</details>

## 👥 Member Information
| Member |   ROLE    |       E-mail        |
| :----: | :-------: | :-----------------: |
| 🤓 오우영 | Front-end | fz7948@gmail.com |
| 🦉 이재윤 | Back-end  | wodbs9128@gmail.com |
| 😑 조세민 | Back-end  | 1015tpals@gmail.com |
| 😎 조태규 | Front-end | chotg5592@gmail.com |
