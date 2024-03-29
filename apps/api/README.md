# api

## USER FLOW

### 로그인 페이지

1. 이메일, 패스워드 입력 -> 로그인 클릭
   1. 성공시 메인 페이지 이동
   2. 실패 시
      1. 비활성화된 유저의 경우 인증 이메일을 다시 전송한다.
      2. 그 이외의 에러일 경우 에러 메시지를 출력한다. (로그인 정보가 올바르지 않습니다.)

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
2. POST/auth/refresh
   1. request: refreshToken
   2. response: accessToken, refreshToken?
3. POST/auth/verification
   1. request:
   2. response: code

### CART

1. GET/cart
   1. request:
   2. response: productList: { productId, quantity }
2. PUT/cart/:productId
   1. request: quantity
   2. reponse: upadted cart
3. DELETE/cart/:productId
   1. request:
   2. response:

### ORDER

1. GET/order
   1. request:
   2. response: ORDERS

### MERCHANDIES

1. GET/merchandise
   1. request: page, limit, category
   2. response: list, page, size, totalPages
