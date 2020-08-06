var clockEl = document.querySelector('.clock');

for (var i = 1; i <= 60; i++) {
  clockEl.innerHTML += "<div class='dialLines'></div>";
  var dialLines = document.querySelectorAll('.dialLines');
  dialLines[i - 1].style.transform = 'rotate(' + 6 * i + 'deg)';
}
function clock() {
  var WeekDay = new Array(7);
  d = new Date();

  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  date = d.getDate();
  month = d.getMonth() + 1;
  year = d.getYear();

  hDeg = h * 30 + m * (360 / 720);
  mDeg = m * 6;
  sDeg = s * 6;

  hEl = document.querySelector('.hour-hand');
  mEl = document.querySelector('.minute-hand');
  sEl = document.querySelector('.second-hand');
  dateEl = document.querySelector('.date');
  dayEl = document.querySelector('.day');

  WeekDay[0] = 'Sunday';
  WeekDay[1] = 'Monday';
  WeekDay[2] = 'Tuesday';
  WeekDay[3] = 'Wednesday';
  WeekDay[4] = 'Thursday';
  WeekDay[5] = 'Friday';
  WeekDay[6] = 'Saturday';

  var day = WeekDay[d.getDay()];

  hEl.style.transform = 'rotate(' + hDeg + 'deg)';
  mEl.style.transform = 'rotate(' + mDeg + 'deg)';
  sEl.style.transform = 'rotate(' + sDeg + 'deg)';

  dateEl.innerHTML = date + '/' + month + '/' + year;
  dayEl.innerHTML = day;
}
setInterval('clock()', 100);
