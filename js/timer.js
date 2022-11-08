function msToTime(ms) {
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  let seconds = (ms / 1000).toFixed(0);
  let minutes = (ms / (1000 * 60)).toFixed(0);
  let hours = (ms / (1000 * 60 * 60)).toFixed(0);
  return `${days} Ngày, ${hours} Giờ, ${minutes} Phút, ${seconds} Giây `;
}
setInterval(function () {
  const date1 = new Date("july 18, 2022 19:00:00");
  const date2 = new Date();
  const diff = date2.getTime() - date1.getTime();

  document.getElementById("clock1").innerHTML = msToTime(diff);
}, 1000);
