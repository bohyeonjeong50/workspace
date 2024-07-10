//item_list는 현재 쇼핑몰에서 판매하고 있는 상품들의 목록 정보이다.
//아래 데이터를 참고하여 요구사항을 해결하시오.

//배열 : 데이터 여러개 존재(반복 가능) + 데이터 접근할떄 '순번'으로 접근
// me> "item_list[0].item_name;" 일때 key값(.item_name;)으로 접근

const item_list = [

  //key 값은 중복 불가
  {
    //key : value
    item_name : '여름 셔츠',
    price : 25000,
    brand : 'java마켓',
    size : [90, 100, 110]
  },
  {
    item_name : '라운드 티',
    price : 20000,
    brand : 'java마켓',
    size : [90, 95, 100, 105, 110]
  },
  {
    item_name : '데님 청바지',
    price : 30000,
    brand : 'python마켓',
    size : [90, 100, 110, 120]
  },
  {
    item_name : '슬림 면바지',
    price : 35000,
    brand : 'python마켓',
    size : [90, 95, 100]
  }
];

//1. 'java마켓'에서 팔고 있는 상품들의 상품명과 가격을 각각 콘솔창에 출력하여라.

console.log(item_list);

for(let i = 0; i < item_list.length; i++){
  if(item_list[i].brand == 'java마켓'){
    console.log(`상품명 : ${item_list[i].item_name} / 가격 : ${item_list[i].price}`);
  }
}


for(const item of item_list){
  if(item.brand == 'java마켓'){
    console.log(`상품명 : ${item.item_name} / 가격 : ${item.price}`);
  }
}

item_list.forEach((item, i) => {
  if(item.brand == 'java마켓'){
    console.log(`상품명 : ${item.item_name} / 가격 : ${item.price}`);
  }
});


//2. 95사이즈를 구매할 수 있는 상품들의 상품명을 콘솔창에 출력하시오.

item_list.forEach((item, i) => {
  item.size.forEach((size, j) => {
    if(size == 95){
      console.log(item.item_name);
    }
  });
});


//3. '등록 및 출력' 버튼을 클릭하면 입력 내용 저장 후 콘솔창에 데이터를 출력하시오.
function addItem(){

  //체크박스
  const chks = document.querySelectorAll('.size:checkd');

  const size = [];

  chks.forEach((chk, i) => {
   size.push(chk.value);
  });

 //추가할 객체
 const add_data = {
  item_name : document.querySelector('#itemName').value,
    price : document.querySelector('#price').value ,
    brand : document.querySelector('#brand').value ,
    size : size
 };

 item_list.push(add_data);

}
