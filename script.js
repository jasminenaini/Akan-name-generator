const maleNames=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",

]
const femaleNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
]

const days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

]

const form=document.getElementById("akanform");
form.addEventListener("submit",function(event) {
    event.preventDefault();

    const birthdate=document.getElementById("birthdate").value ;
    const gender=document.querySelector('input[name="gender"]:checked');
    if (!birthdate) {
        alert("Please select your birthdate and gender.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }
     

     const day = new Date(birthdate);
     const dayOfWeek= date.getDay();
     const month= date.getMonth() +1;
     const year= date.getFullYear();

     if (day <1||day>31){
        alert("invalid day.")
     }
     if (month<1||month>12){
        alert("invalid month.");
     }

     const CC=Math.floor(year/100);
     const YY=year % 100;

     let akanName;
     if (gender.value==="male") {
        akanName=maleNames[dayOfWeek];
     } else {
        akanName=femaleNames[dayOfWeek];
     }
})
 
document.getElementById("result").textContent= `Your were born on ${days[dayOfWeek]}. Your Akan name is ${akanName}.`;
