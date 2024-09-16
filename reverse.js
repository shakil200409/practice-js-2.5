const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Using .reverse method
// const colour = colors.reverse();
// console.log(colour);

// Using for-of method
const colours = [];
for(let color of colors){
    colours.unshift(color);
    // console.log(color);
}
// console.log(colours);


// Using for loop method
const reversed_colors = [];
for(let i=0; i<colors.length; i++){
    const color = colors[i];
    reversed_colors.unshift(color);
}
// console.log(reversed_colors);