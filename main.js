let content = document.querySelector(".content");
let showName = document.querySelector(".name");
let showValue = document.querySelector(".value");
let showCost = document.querySelector(".cost");
let showDate = document.querySelector(".date");

let people = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", true);
  xhttp.responseType = 'json';
  xhttp.onload = () => {
    let status = xhttp.status;
    if (status == 200) {

      showName.innerHTML = '';
      showCost.innerHTML = '';
      showValue.innerHTML = '';
      showDate.innerHTML = '';

      for (let name of xhttp.response) {
        showName.innerHTML += `<p>${name.txt}</p>`
      };
      for (let value of xhttp.response) {
        showValue.innerHTML += `<p>${value.cc}</p>`
      };
      for (let cost of xhttp.response) {
        showCost.innerHTML += `<p>${cost.rate}</p>`
      };
      for (let date of xhttp.response) {
        showDate.innerHTML += `<p>${date.exchangedate}</p>`
      };
    };
  };
  xhttp.send();
};

let show = () => {
  people();
};
