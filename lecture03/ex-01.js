let values1= ['Apple', 1, false];
let values2= ['Fries', 9, true, 'Mars'];
let values3= ['Mars', 9, 'Apple'];



for (let i = 0; i < values1.length; i++){
    for (let j = 0; j < values2.length; j++){
        if (values1[i] === values2[j]) {
           console.log("1 & 2 :" + values1[i])
           
        }
        
    }
   
}

for(let i = 0; i < values1.length; i++){
    for(let j = 0; j < values3.length; j++){
        if (values1[i] === values3[j]) {
            console.log("1 & 3 : " + values1[i])
            
         }
    }
}

for(let i = 0; i < values2.length; i++){
    for(let j = 0; j < values3.length; j++){
        if (values2[i] === values3[j]) {
            console.log("2 & 3 : " + values2[i])
            
         }
    }
}