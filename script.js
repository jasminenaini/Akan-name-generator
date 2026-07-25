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
    if (!birthdate || !gender ) {
        alert("Please select your birhdate and gender.");
        return;
    }
     console.log(birthdate);
     console.log(gender.value);
})