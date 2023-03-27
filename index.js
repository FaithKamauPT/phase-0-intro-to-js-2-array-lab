// Write your solution here!

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  const cats = ['Milo', 'Otis', 'Garfield'];
  console.log(cats.push('Ralph'));
  

  describe('destructivelyPrependCat(cats)'), function () {
    it(cats.unshift('Bob')), function () {
        destructivelyPrependCat("Bob");
  
        console.log(cats);
  }};
    
  describe('destructivelyRemoveLastCat(cats)'), function () {
    it(cats.unshift('Bob')), function () {
        destructivelyPrependCat("Garfield");
  
        console.log(cats);
  }};

  describe('destructivelyRemoveFirstCat(cats)'), function () {
    it(cats.shift('Bob')), function () {
        destructivelyPrependCat("Milo");
  
        console.log(cats);
  }};
  describe('appendCat(cats)'), function () {
    it(cats.push('Broom')), function () {
        appendCat("Broom");
  
        console.log(cats);
  }};

  describe('prependCat(cats)'), function () {
    it(cats.unshift('Arnold')), function () {
        prependCat("Arnold");
  
        console.log(cats);
  }};

  describe('removeLastCat(cats)'), function () {
    it(cats.pop('Broom')), function () {
        removeLastCat("Broom");
  
        console.log(cats);
  }};

  describe('removeFirstCat(name)'), function () {
    it(cats.shift('Milo')), function () {
        appendCat("Milo");
  
        console.log(cats);
  }};
    