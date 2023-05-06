const categories = [
  "https://cdn-mart.baemin.com/inventory-unit/b8345430-3abc-4e28-b59a-423568018b11.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/02e9dc20-8fdf-4d4d-adbd-91a107c1ccb5.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/a6b42c55-15e0-4dbf-9af5-63f68a29d1d0.png",
  "https://cdn-mart.baemin.com/inventory-unit/02f9545f-be43-4f73-ac0f-6e51db6353f6.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/ae5dc7c0-60f5-485e-b834-a70a645e820b.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/74dd0c62-6947-4789-a696-ff5531e27a5f.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/421dba1c-36b5-4166-8ba0-14a747a81b70.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/57a5f5e2-8f31-40de-9e44-2ec13005ca23.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/cc6945c8-f459-4b31-829a-96bebebcb830.jpg",
  "https://cdn-mart.baemin.com/inventory-unit/e8112bc9-95c6-4d17-9622-27ed212303a0.jpg",
];

const names = [
  "플러스원",
  "콜드배송",
  "최저가도전",
  "탕용기",
  "비닐봉투",
  "가게용품 특가",
  "튀김류",
  "축산물",
  "수산물",
  "무료세무검토",
];

function generate() {
  return categories.map((cate, index) => ({
    id: index,
    thumbnail: cate,
    name: names[index],
  }));
}

export interface Category {
  id: number;
  thumbnail: string;
  name: string;
}

export function getCategories() {
  return generate();
}
