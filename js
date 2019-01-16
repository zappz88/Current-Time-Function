function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
      }
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
    };
