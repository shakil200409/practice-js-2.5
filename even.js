const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers= [];
for(num of numbers){
    if(num%2==0){
        evenNumbers.push(num);
    }
    else{
        continue;
    }
}
console.log(evenNumbers);