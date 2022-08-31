function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = 'AM';
  
  if (h >= 12){
    h = h - 12;
    session = 'PM';
  }
  
  if (h == 0){
    h = 12;
  }

  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;
  
  var time = `<span class="numbers">${h}:${m}:${s}</span><span class="ampm">${session}</span>`;
  document.querySelector('.js-clock').innerHTML = time;
}

const timeInterval = setInterval(showTime, 1000);