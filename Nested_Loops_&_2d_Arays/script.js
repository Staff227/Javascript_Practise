let ages = [
    [8, 12, 15, 26, 14, "word"],
    [78, 45, 54, 41, 16, 32],
    [74, 29, 21, 15, 18]
];


for(let x = 0; x < ages.length; x++){
    for(let y = 0; y < ages[x].length; y++){
        document.write(ages[x][y] + "</br>");
    };
    document.write("</br>")
};