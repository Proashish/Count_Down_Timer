const endDate ="20 October 2022 12:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

 function  clock(){
    const end = new Date(endDate)
    const now =new Date()
    const diff = (end-now)/1000;//diving by 1000 to convert ms to second
    if(diff<0)//if countdown end hou gaya tau countdown negative nahi aai esliya use karte hai
     return;
    //days
    inputs[0].value=(Math.floor(diff/3600/24));
    //hours
    inputs[1].value =(Math.floor(diff/3600)%24);
    //minutes
    inputs[2].value =(Math.floor(diff/60)%60);
    //seconds
    inputs[3].value =(Math.floor(diff)%60);
   

}
//intial call when page is refresh 
clock()

 setInterval(
    ()=>{
        clock()
    },
    1000
 )
