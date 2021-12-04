// 0-20 liiga külm -1
// 21-40 paras 0
// 41-60 liiga kuum 1
// checkTemp(temp)
// checkTemp.js

function checkTemp(currentTemp = prompt("Enter temperature value: ")) {

    while((currentTemp < 0 || currentTemp >=61) || isNaN(currentTemp)){

        if(currentTemp < 0 || currentTemp >=61){
            console.log("Enter temperature value between 0-60 degrees: ");
            currentTemp = prompt("Enter temperature value between 0-60 degrees: ");
        }else if(isNaN(currentTemp)){
            console.log("Invalid input data, enter only numbers between 0-60!");
            currentTemp = prompt("Invalid input data, enter only numbers between 0-60: ");
        }
    }

    if(currentTemp<=20){
        console.log("Temperature is too cold...you are slowly freezing to death...");
        document.write("Temperature is too cold...you are slowly freezing to death...");
        return -1;
    } else if(currentTemp >=21 && currentTemp <=40){
        console.log("Temperature is normal, you can sit back and relax!")
        document.write("Temperature is normal, you can sit back and relax!");
        return 0;
    }else
        console.log("Temperature is too hot, welcome to hell!");
        document.write("Temperature is too hot, welcome to hell!");
        return 1;
}

checkTemp(currentTemp=prompt("Enter temperature value: "));