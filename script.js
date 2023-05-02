// Common variables
const borderWidth = "0.5rem";
const borderStyle = "solid";
const color1 = "white";
const backgroundColor1 = "black";
const backgroundColor2 = "white";
const backgroundColor3 = "#7d6ab9";


for (let i = 0; i < 5; i++){

    let addRow = document.createElement('div');
    document.body.appendChild(addRow);
    addRow.innerHTML= (`Rad ${i+1}`);
    addRow.style.fontSize = `${i*10+10}px`;
    addRow.style.fontWeight = "bold";
    addRow.style.textAlign = "center"
    addRow.style.color = backgroundColor3;
    addRow.style.backgroundColor = `hsl(${120+(i*20)}, 100%, 80%)`;
    addRow.style.marginTop = `${i*5+5}px`;
    addRow.style.width = "80vw";
    addRow.style.marginLeft = "auto";
    addRow.style.marginRight = "auto";
}

// Container
let container = document.createElement('div');
document.body.appendChild(container);
container.style.display='flex';
container.style.justifyContent = "space-around";
container.style.border = '1px black solid';
container.style.marginTop = "3rem";
container.style.width = "80vw";
container.style.marginLeft = "auto";
container.style.marginRight = "auto";

// First column
let firstCol = document.createElement('div');
container.appendChild(firstCol);
firstCol.style.border = `${borderWidth} ${borderStyle} ${backgroundColor3}`;
firstCol.style.display = "flex";
firstCol.style.flexDirection = "column";
firstCol.style.alignItems = "center";
firstCol.style.margin = "3rem";

for (let i=0;i < 10; i++){
    let number = document.createElement('div');
    firstCol.appendChild(number);
    number.innerText = i;
    number.style.width = "50px";

    if ( i === 4 ){
        number.style.backgroundColor = backgroundColor3;
        number.style.color = color1;
    }
    else if (i % 2 == 0){
        number.style.backgroundColor = backgroundColor1;
        number.style.color = color1;
    }
    else {
        number.style.backgroundColor = backgroundColor2;
    }
}

// Second column
let secCol = document.createElement('div');
container.appendChild(secCol);
secCol.style.border = `${borderWidth} ${borderStyle} ${backgroundColor3}`;
secCol.style.display = "flex";
secCol.style.flexDirection = "column";
secCol.style.alignItems = "center";
secCol.style.margin = "3rem";

for (let i=9;i >= 0; i--){
    let number = document.createElement('div');
    secCol.appendChild(number);
    number.innerText = i;
    number.style.width = "50px";
    number.style.textAlign  = "center";

    if ( i === 8 ){
        number.style.backgroundColor = backgroundColor3;
        number.style.color = color1;
    }
    else if (i % 2 == 0){
        number.style.backgroundColor = backgroundColor1;
        number.style.color = color1;
    }
    else {
        number.style.backgroundColor = backgroundColor2;
    }
}

// Third column
let thrCol = document.createElement('div');
container.appendChild(thrCol);
thrCol.style.border = `${borderWidth} ${borderStyle} ${backgroundColor3}`;
thrCol.style.display = "flex";
thrCol.style.flexDirection = "column";
thrCol.style.alignItems = "center";
thrCol.style.margin = "3rem";

for (let i=0;i < 10; i++){
    let number = document.createElement('div');
    thrCol.appendChild(number);
    let text = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
    number.innerText = text[i];
    number.style.width = "50px";
    number.style.textAlign  = "right";

    if ( i === 6 ){
        number.style.backgroundColor = backgroundColor3;
        number.style.color = color1;
    }
    else if (i % 2 == 0){
        number.style.backgroundColor = backgroundColor1;
        number.style.color = color1
    }

    else {number.style.backgroundColor = backgroundColor2;}
}
