const listofproducts = {
  onion: 0.50,
  spinach: 1.30,
  purpleonion: 0.50,
  cola: 0.80,
  juice: 0.90,
  jar: 2.30,
  sauce: 4.30,
  water: 0.40,
  lettuce: 0.80,
  pumpkin: 2.00,
  chocolate: 4.30,
}


const convertIdToValidString = value => {
  let str = value;
  let position = str.indexOf('0');
  return str.substring(0, position);
}

let counter = 0;

const addPriceWhenAddToBasket = product => {
  counter += listofproducts[product];
  document.getElementById('amount_bought').innerHTML = counter.toFixed(2);
}

const reducePriceWhenaddtoShowcase = product => {
  counter -= listofproducts[product];
  document.getElementById('amount_bought').innerHTML = counter.toFixed(2);
}

/***********************************Drag and Drop ******************************************/
const allowDrop = ev => {
  ev.preventDefault();
}

const drag = ev => {
  ev.dataTransfer.setData("text", ev.target.id);
  document.getElementById('nameProduct').innerHTML = document.getElementById(ev.target.id).getAttribute('alt');
}

const drop = ev => {
  let data = ev.dataTransfer.getData("text");
  let item = document.getElementById(data);

  addPriceWhenAddToBasket(convertIdToValidString(data));


  // item.style.display = 'none' ;
  document.getElementById('nameProduct').innerHTML = "";

  ev.preventDefault();
  ev.target.appendChild(document.getElementById(data));

}

const drop2 = ev => {
  let data = ev.dataTransfer.getData("text");
  let item = document.getElementById(data);



  // item.style.display = 'none' ;
  document.getElementById('nameProduct').innerHTML = "";

  ev.preventDefault();
  ev.target.appendChild(document.getElementById(data));
  reducePriceWhenaddtoShowcase(convertIdToValidString(data));
}
