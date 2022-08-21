function add(a, b) {
  console.log(a + b);
}

add(2, 3);

let addWith2 = add.bind(this, 2);
addWith2(9);
