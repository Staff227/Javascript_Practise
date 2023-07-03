
function weekDay(dayNum){
    let day;
    switch(dayNum){
        case 0:
            day = "Sunday";
            break;
        
        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tueasday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Sunday";
            break;

        default:
            day = "Choose a number from 0 - 6"
            break;

    }

    return day;

}

    document.write(weekDay(0));