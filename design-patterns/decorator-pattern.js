// decorator pattern은 존재하는 클래스나 생성자 함수의 수정없이
// 객체의 기능을 확장할 떄 사용된다. 이 패턴은 근본적인 코드의 수정없이
// 객체에 기능을 추가하는 것이 가능하다.

function Car(name) {
  this.name = name;
  this.color = "White";
}

// decorate할 새로운 객체 생성
const tesla = new Car("Tesla Model 3");

// 객체를 새로운 기능으로 decorating한다.

tesla.setColor = function(color) {
  this.color = color;
};

tesla.setPrice = function(price) {
  this.price = price;
};

tesla.setColor("black");
tesla.setPrice(49000);

console.log(tesla.color);
