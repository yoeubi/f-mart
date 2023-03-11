# api

## USER FLOW

### 로그인 페이지

1. 이메일, 패스워드 입력 -> 로그인 클릭
   1. 성공시 메인 페이지 이동
   2. 실패시 에러 메세지 출력
   3. 이메일 코드 확인
      1. 성공시 메인 페이지 이동
      2. 실패시 대기

### 회원가입 페이지

1. 이메일, 패스워드 입력 -> 회원가입 클릭 -> 이메일 코드 입력
   1. 성공시 로그인 페이지 이동 or 메인 페이지 이동
   2. 실패시 에러 메세지 출력

### 메인 페이지

1. 슬라이드 클릭 -> 이벤트 페이지로 이동
2. 카테고리 클릭 -> 카테고리 페이지 이동
3. 아이템 클릭 -> 아이템 상세 페이지 이동
4. 카트 클릭 -> 카트 페이지 이동
5. 마이페이지 클릭 -> 마이페이지 이동

### 이벤트 페이지

1. 이벤트 이미지 보여주기

### 카테고리 페이지

1. 카테고리 클릭시 해당 카테고리 아이템 보여주기
2. 페이지네이션 클릭하면 다음 아이템 보여주기
3. 아이템에서 카트 누르면 카트 모달 보여주기
   1. 개수 조절
   2. 장바구니 담기

### 상세페이지

1. 상품 개수 조절
2. 장바구니 클릭
3. 바로구매 클릭

### 장바구니 페이지

1. 장바구니 아이템 보여주기
2. 주문하기
3. 개수 조절하기
4. 삭제하기

## API DESIGN

### USER

1. GET/user
   1. request:
   2. request: USER(not password)

### AUTH

1. POST/auth/login
   1. request: email, password,
   2. response: accessToken, refreshToken
2. GET/auth/logout
   1. request:
   2. response:
3. POST/auth/refresh
   1. request: refreshToken
   2. response: accessToken, refreshToken?

### CART

1. GET/cart
   1. request:
   2. response: ORDERS
2. PUT/cart/:id
   1. request: cart
   2. reponse: upadted cart or ORDERS
3. DELETE/cart/:id
   1. request:
   2. response:

### MERCHANDIES

1. GET/merchandise
   1. request: page, limit, category
   2. response: MERCHANDIES
