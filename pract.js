//let y = prompt("Enter your value here in the range of 1 to 10!");

let val1 = Math.floor(Math.random()*10);

// let i=0;
do{
    var y = prompt("Enter your value here in the range of 1 to 10!");
    if(y===val1){
        console.log("Congratulation! your number matched");
    }

}while(val1 !== y);