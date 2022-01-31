function countdown() {
  const valDate = new Date('feb 14, 2022 00:00:00').getTime();

  //getTime helps to convert date to min seconds
  const curentDate = new Date().getTime();
  const diff = valDate - curentDate;
  // console.log(diff);

  const seconds = 1000;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate time
  const valDay = Math.floor(diff / day);
  const valHour = Math.floor((diff % day) / hour);
  const valminute = Math.floor((diff % hour) / minute);
  const valSeconds = Math.floor((diff % minute ) / seconds)

  document.querySelector('#day').innerText = valDay;
  document.querySelector('#hours').innerText = valHour;
  document.querySelector('#minute').innerText = valminute;
  document.querySelector('#seconds').innerText = valSeconds;

  

}

setInterval(countdown, 1000);