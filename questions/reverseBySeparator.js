const reverseBySeparator = (sentence, separator) => {
  return sentence.split(separator).reverse().join(separator);
};

let string = "Hello world";
console.log(reverseBySeparator(string, " "));
