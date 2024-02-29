setInterval(() => {
    d = new Date();
    Htime = d.getHours();
    Mtime = d.getMinutes();
    Stime = d.getSeconds();

    Hrotation = 30 * Htime + Mtime / 2;
    Mrotation = 6 * Mtime;
    Srotation = 6 * Stime;

    Hour.style.transform = `rotate(${Hrotation}deg)`;
    Minute.style.transform = `rotate(${Mrotation}deg)`;
    Second.style.transform = `rotate(${Srotation}deg)`;
}, 1000);



// setInterval( () => {
//     d = new Date();
//     Htime = d.getHour();
//     Mtime = d.getMinute();
//     Stiem = d.getSecond();

//     Hrotation = 30*Htime + Mtime/2;
//     Mrotation = 6*Mtime;
//     Srotation = 6*Stime;

//     Hour.style.transform = `rotation(${horizontal}deg)`;
//     Mintue.style.transform = `rotation(${horizontal}deg)`;
//     Second.style.transform = `rotation(${horizontal}deg)`;
// },1000);