import { Injectable } from '@nestjs/common';

const names = [
  '[전국배송] 페르디가오  닭정육 브라질 12kg (2kgx6)',
  '[22년] 밥맛좋은 농부쌀 (혼합/보통) 20kg [10시마감]',
  '해표 식용유 1.8L',
  '(한정수량) 오뚜기 참치 1.88KG 빅캔 6개 (온라인최저가)',
  '고강도 도시락용기-8호(9칸)-jb1001A',
  '해물총각 날치알 레드 800g',
  '☆쿠폰가 2,900☆ 셰프 블랙 니트릴 장갑 1팩 100매 대형 중형 소형',
  '[무료배송]사세 버팔로윙, 1kg * 10봉',
  '[무료배송]사세 순살치킨가라게, 1kg * 10봉',
  '[반짝특가] 220파이 탕용기 (FP/소/중/대)',
  '썬리취 모짜렐라골든치즈 2.5kg(PA)',
  '[22년] 영양쌀 (혼합/보통) 20kg',
  '오뚜기 오쉐프 스탠딩 마요네즈 3.2KG 4개 (1박스)',
  '[배민상회전용] 마이디벨 슈스트링 감자튀김 2kg x 8팩',
  '냉면용기 대 (CN/흑색)',
  '롯데칠성 칠성사이다 355ml x 48캔(업소용)',
  '[1+1] 베스트코 물만두 1.35kg',
  '1+1 초정토닉워터 250ml X 30캔 총60캔',
  '[2+1][소량] 비닐봉투 리뷰 (중/2호) 200장',
  '[1+1 이벤트] 마이디벨 카프레제 모짜렐라 치즈볼 500g',
  '[5+1특가]특가 유니랩 비닐백 중형 200매',
  '[9+1특가] 주방용 니트릴장갑 100매 화이트 MW700KF',
];

const prices = [
  54600, 44900, 5990, 106090, 73750, 18600, 5900, 141000, 101990, 23770, 23900,
  44900, 42820, 65460, 50500, 36500, 10990, 23900, 14500, 5000, 1800, 3900,
];

const imgs = [
  'https://cdn-mart.baemin.com/sellergoods/main/63f63439-a939-4369-8bd5-53c0f4f2ca24.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/17ba9863-6d93-409c-a655-dc0a80c340bc.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/5638260b-40a9-4924-8e20-5625c113a45f.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/5c391565-8eb3-4d3e-bc2b-6c7956967bc1.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/f8203204-3e79-4eed-88cf-5d6c9df5bfb0.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/01f44d55-02fe-41f8-8cae-e5dc3cf017c9.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/331dddd1-c173-4a49-8f7e-6dda4bc5c491.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/b6710e67-a322-4818-aae0-0c6f6b6110b9.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/cbae30d0-aa70-4b6e-9681-cb8338bcc69d.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/a0d0876b-db3b-4fda-84eb-c31dc7313d42.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/46b4e293-db50-48ff-b727-4a48b9f1f1da.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/caec0f22-550f-439d-b44f-97a38f6cf3cc.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/1ae41b2b-303a-4bf3-9ff1-bdd3ee400535.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/b8c2604c-519b-473c-a3e6-61fa39069a3e.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/cbffa08b-647a-4f6d-80d0-a982e0c7f435.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/24ada370-dfa3-43bf-9440-46f65d3ef998.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/63ea49bb-f40e-4324-8197-cd25651b215b.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/b49656d7-4226-434d-81c1-f6f45bf3e625.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/61d8a4ff-b006-41a5-b3e6-3b5a25de7daf.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/a8cc50e2-c142-4bb7-8469-fb5eb7e49d82.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/a1568a46-de9f-40d7-a5b5-fc4acf3fc1ca.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/ab8913a5-de68-4ac5-9716-798f422c5dda.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/fe38ab91-8891-4d87-8eee-de862fab424f.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/b5e08318-3950-4aae-be50-fb20ae840ffd.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/d4621854-0790-4bdc-a876-600ec30405e9.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/ce973a9e-582e-4e18-b8ad-d50f8b7dc11f.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/400ed33b-20a6-4729-8d0a-aa1ae3a071b1.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/6b3f9cf4-62cd-4e7c-91a4-a506bfefe4e5.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/9b0d56b2-a65d-4bfd-a042-4cc0470484a6.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/beb2d866-057b-4678-be53-76471108fd97.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/58ee3e7a-780a-46ef-a16d-e3198bef35c6.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/6b2303ac-ab55-4712-ab44-dce2ab45c44c.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/20c67bbe-9bca-4834-918b-06f4c19ad34f.jpeg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/e195c466-45db-4377-90cd-27d0166a9bdb.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/291ee4b4-a24c-4af3-b20c-8005f9089d84.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/38abc0f1-dcfc-43de-9b07-14b35193465c.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/89b11021-4575-48cf-9221-ac527db698e9.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/cc0b8123-1096-4ae0-a0dc-49feb54c7de6.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/f028a608-34e7-4c9f-abc3-2c7edc70ac5c.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/list/b9347af8-f244-4d9d-8301-ab528c9f63ba.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/e7fa58ed-d005-455d-b908-c8ca189cd28c.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/968418d4-7882-40d6-9bb4-13fbdc8eb60b.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/3dcc5d61-1dc0-405f-a6a2-51e18cdd10ab.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/78b2092a-9133-465c-9371-45ce1abeaf19.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/d074045c-dca7-44fc-839f-64e51bf23a0d.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/b6710e67-a322-4818-aae0-0c6f6b6110b9.png?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/84503bab-f741-455e-ab8e-c38af6b4adf8.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/5ecfe32c-02a2-441a-a74f-96b337387af7.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/c150dc5a-6163-472a-805a-d4b8d1462b22.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/5b020ab9-bd5e-456f-8757-216a7fecf140.jpg?h=300&w=300',
  'https://cdn-mart.baemin.com/sellergoods/main/f1c8cf23-c3e5-4d18-a446-152b657fd5ca.png?h=100&w=100',
  'https://cdn-mart.baemin.com/sellergoods/main/3d4bfbad-b4a0-414a-86a8-db7cf32039a2.jpg?h=100&w=100',
];

function generate() {
  return names.map((name, index) => ({
    id: index,
    storeId: 1,
    categoryIds: [1],
    name,
    price: prices[index],
    thumbnail: imgs[index],
  }));
}

export const list = generate();

@Injectable()
export class MerchandiseService {
  findAll() {
    const category1 = list.slice(0, 6);
    const category2 = list.slice(6, 12);
    const data = [
      {
        id: 1,
        name: '찾고 또 찾는 상품',
        merchandises: category1,
      },
      {
        id: 2,
        name: '초.특.가 놓치지 마세요!',
        merchandises: category2,
      },
    ];
    return data;
  }
  findOne(id: number) {
    return list[id];
  }
}
