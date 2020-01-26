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

      for (let property in xhttp.response) {
        showName.innerHTML += `<p>${xhttp.response[property].txt}</p>`;
        showCost.innerHTML += `<p>${xhttp.response[property].cc}</p>`;
        showValue.innerHTML += `<p>${xhttp.response[property].rate}</p>`;
        showDate.innerHTML += `<p>${xhttp.response[property].exchangedate}</p>`;
      };
    };
  };
  xhttp.send();
};

let show = () => {
  people();
};
