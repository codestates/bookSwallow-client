# π bookSwallow-client

μλ‘μ΄ κΈ°μ μ λν΄ κ³΅λΆνλ€ λ§λ§νλ κΈ°μ΅μ΄ μμΌμ κ°μ?

μ ν¬κ° λ―Έλ¦¬ μ’μ μ±μ μΆμ²ν΄λλ¦¬κ² μ΅λλ€. <br/>
μκ²¬μ λ¨κΈ°κ³ , <br/>
λ€λ₯Έ μ¬λλ€μκ² μΆμ²νκ³ , <br/>
λλ§μ μ° λ¦¬μ€νΈλ λ§λ€μ΄ λ³΄μΈμ! 

μ±μ λ¬Όμ΄λ€ μ£Όλ μ λΉ, **BookSwallow**

## βοΈ μ¬μ© μ€ν λ° μν€νμ²
![architecture](https://user-images.githubusercontent.com/41813020/117260912-84b36000-ae8a-11eb-8526-78b1dc1f8c73.png)

## β Flow Chart
- front-end
![frontend](https://user-images.githubusercontent.com/41813020/117261112-bcbaa300-ae8a-11eb-9cac-be93523ebffe.jpeg)

- back-end
![backend](https://user-images.githubusercontent.com/41813020/117261128-c0e6c080-ae8a-11eb-82ed-c9fb92d36236.jpeg)

## π Project Directory Structure
<details>
<summary>client</summary>
<div markdown="1">     
  
```
βββ README.md
βββ package.json
βββ public
β   βββ book_favicon.ico
β   βββ favicon.ico
β   βββ images
β   β   βββ 401.png
β   β   βββ 404.png
β   β   βββ 500.png
β   β   βββ Logo.png
β   β   βββ mainImage.png
β   β   βββ sns-google.png
β   β   βββ sns-kakao.png
β   βββ index.html
β   βββ logo192.png
β   βββ logo512.png
β   βββ manifest.json
β   βββ robots.txt
βββ src
β   βββ App.js
β   βββ components
β   β   βββ auth
β   β   β   βββ AuthFrom.js
β   β   β   βββ SocialAuth.js
β   β   βββ book
β   β   β   βββ BookDetail.js
β   β   β   βββ BookItem.js
β   β   β   βββ BookList.js
β   β   β   βββ BookSlide.js
β   β   β   βββ BookSlideItem.js
β   β   β   βββ LikeButton.js
β   β   βββ comment
β   β   β   βββ CommentInput.js
β   β   β   βββ CommentItem.js
β   β   β   βββ Comments.js
β   β   βββ common
β   β   β   βββ Button.js
β   β   β   βββ Empty.js
β   β   β   βββ GlobalStyles.js
β   β   β   βββ Header.js
β   β   β   βββ Input.js
β   β   β   βββ Loading.js
β   β   β   βββ Modal.js
β   β   β   βββ Responsive.js
β   β   βββ errors
β   β   β   βββ Errors.js
β   β   βββ main
β   β   β   βββ Main.js
β   β   βββ zzim
β   β       βββ ZzimItem.js
β   β       βββ ZzimList.js
β   βββ containers
β   β   βββ auth
β   β   β   βββ AutoTemplate.js
β   β   β   βββ LoginForm.js
β   β   β   βββ MypageForm.js
β   β   β   βββ RegisterForm.js
β   β   β   βββ SocialContainer.js
β   β   βββ book
β   β   β   βββ BookContainer.js
β   β   β   βββ BooksContainer.js
β   β   βββ comment
β   β   β   βββ CommentInputContainer.js
β   β   β   βββ CommentsContainer.js
β   β   βββ common
β   β   β   βββ HeaderContainer.js
β   β   βββ zzim
β   β       βββ ZzimsContainer.js
β   βββ index.js
β   βββ lib
β   β   βββ api
β   β   β   βββ auth.js
β   β   β   βββ books.js
β   β   β   βββ client.js
β   β   β   βββ comments\ 2.js
β   β   β   βββ comments.js
β   β   β   βββ kakaoLogin.js
β   β   β   βββ zzims.js
β   β   βββ styles
β   β       βββ palette.js
β   βββ modules
β   β   βββ auth.js
β   β   βββ books.js
β   β   βββ comments.js
β   β   βββ index.js
β   β   βββ modal.js
β   β   βββ user.js
β   β   βββ zzims.js
β   βββ pages
β   β   βββ BookDetailPage.js
β   β   βββ ListPage.js
β   β   βββ LoginPage.js
β   β   βββ MainPage.js
β   β   βββ MyPage.js
β   β   βββ RegisterPage.js
β   β   βββ ZzimPage.js
β   βββ reportWebVitals.js
β   βββ setupTests.js
βββ yarn.lock
```

</div>
</details>

<details>
<summary>server</summary>
<div markdown="1">     
  
  ```
  βββ README.md
βββ app.js
βββ config
β   βββ config.js
β   βββ config.json
βββ controllers
β   βββ books
β   β   βββ best.js
β   β   βββ getBookList.js
β   β   βββ getBookSearch.js
β   β   βββ index.js
β   β   βββ like.js
β   βββ comments
β   β   βββ createComment.js
β   β   βββ deleteComment.js
β   β   βββ getComment.js
β   β   βββ index.js
β   β   βββ updateComment.js
β   βββ index.js
β   βββ users
β   β   βββ check.js
β   β   βββ index.js
β   β   βββ login.js
β   β   βββ logout.js
β   β   βββ signUp.js
β   β   βββ socialGoogle.js
β   β   βββ socialKakao.js
β   β   βββ updateInformation.js
β   β   βββ userInfo.js
β   β   βββ withdrawal.js
β   βββ zzims
β       βββ createZzim.js
β       βββ deleteZzim.js
β       βββ index.js
β       βββ zzimList.js
βββ middleware
β   βββ jwtToken.js
βββ migrations
β   βββ 20210428044504-create-book.js
β   βββ 20210428044724-create-user.js
β   βββ 20210428044838-create-comment.js
β   βββ 20210428045438-create-zzim.js
β   βββ 20210428045443-create-like.js
βββ models
β   βββ book.js
β   βββ comment.js
β   βββ index.js
β   βββ like.js
β   βββ user.js
β   βββ zzim.js
βββ package.json
βββ routes
β   βββ book.js
β   βββ comment.js
β   βββ user.js
β   βββ zzim.js
βββ seeders
β   βββ 20210428050212-demo-book.js
βββ utils
β   βββ userFunc.js
βββ yarn.lock
  ```
  
</div>
</details>

## π₯ Member Information
| Member |   ROLE    |       E-mail        |
| :----: | :-------: | :-----------------: |
| π€ μ€μ°μ | Front-end | fz7948@gmail.com |
| π¦ μ΄μ¬μ€ | Back-end  | wodbs9128@gmail.com |
| π μ‘°μΈλ―Ό | Back-end  | 1015tpals@gmail.com |
| π μ‘°νκ· | Front-end | chotg5592@gmail.com |
