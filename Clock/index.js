let renderTime = () => {
    let dateTime = new Date();
    let dateTimeConvert = dateTime.toLocaleTimeString().split(':');
    let day_name;
    switch (dateTime.getDay()) {
        case 0:
            day_name = 'SUN';
            break;
        case 1:
            day_name = 'MON';
            break;
        case 2:
            day_name = 'TUE';
            break;
        case 3:
            day_name = 'WED';
            break;
        case 4:
            day_name = 'THUR';
            break;
        case 5:
            day_name = 'FRI';
            break;
        case 6:
            day_name = 'SAT';
    }

    document.querySelector('.clock__day .clock__val').innerHTML = day_name;
    document.querySelector('.clock__hours .clock__val').innerHTML =
        dateTimeConvert[0];
    document.querySelector('.clock__minutes .clock__val').innerHTML =
        dateTimeConvert[1];
    document.querySelector('.clock__seconds .clock__val').innerHTML =
        dateTimeConvert[2];
};

setInterval(renderTime, 1000);
