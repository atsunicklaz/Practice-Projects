const btnElement = document.getElementById("btn");

const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge (){
    const birthdayValue =birthdayElement.value;
    if (birthdayValue === ""){
        alert("Please enter your birth date")
    }else{
        const age = getAge(birthdayValue);
        resultElement.innerText = `Your age is ${age} ${age >1 ? "years" : "year"} old.`;
        
    }
  
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const birthMonth = currentDate.getMonth() - birthDate.getMonth();
    if(birthMonth < 0 || (birthMonth === 0 && currentDate.getDate() < birthdayDate.getDate()) ){
        age-- ;
    }
   return age;
}
btnElement.addEventListener("click",calculateAge);

// function calculateAge(){
//     const birthdayValue =birthdayElement.value;
//     console.log(birthdayValue);
//     if (birthdayValue ===""){
//         alert('Please enter Your date of birth')
//     } else{
//         const getAge =getAge(birthdayValue);}
//     }
    
//     function getAge(birthdayValue){
//         const currentDate = new Date();
//         const birthDate = new Date(birthdayValue);
//         console.log(birthDate.getFullYear());}
        
// btnElement.addEventListener("click",calculateAge);
