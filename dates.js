// DATES EXEMPLES

// const now = new Date();
// // const date = new Date(2020, 00, 01)
// const date = new Date("2020-01-01 05:15:25");
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const secondes = date.getSeconds();
// const time = date.getTime();

// console.log(now);
// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hours);
// console.log(minutes);
// console.log(secondes);
// console.log(time);

// const formattedDate = date.toLocaleDateString("fr-FR", {
//     year: "numeric",
//     month: "long",
//     // month: "short",
//     weekday: "narrow",
//     day: "numeric"
// });
// const formattedTime = date.toLocaleTimeString();
// const formattedDate2 = date.toLocaleString();

// console.log(formattedDate);
// console.log(formattedTime);
// console.log(formattedDate2);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DATES EXERCICES 

// Exercice 1 :
// function calculateAge(birthDate){
//     const birth = new Date(birthDate);
//     const today = new Date();

//     let age = (today.getFullYear() - birth.getFullYear());

//     return age;
// }
// console.log(calculateAge("1990-05-15"));


// Exercice 2 : 
// function isValidDate(date){
//     // const today = new Date();
//     const ddate = new Date(date);
//     return console.log(ddate);
// }
// isValidDate("2024-02-29");
// isValidDate("2023-02-29");

// Exercice 3 :
// function addOneWeek(date){
//     const today = new Date(date);
//     const sevenDays = new Date("0000-00-07");
//     const newDate = today.getFullYear() + sevenDays.getFullYear();
//     console.log(newDate);
//     console.log(today);
//     console.log(sevenDays);
// }

// addOneWeek("2024-10-10");


// Exercice 4 :
// function dayUntil(targetDate){
//     const today = new Date();
//     const dDay = new Date(targetDate);
//     const remainDaysInMilliseconds = dDay.getTime() - today.getTime();
//     const remainDays = remainDaysInMilliseconds / (1000 * 60 *60 *24);
//     return console.log(remainDays);
// }
// dayUntil("2024-12-25");


// Exercice 5 :
function formatCustomDate(date){
    const TargetDate = new Date(date);
    const formatedDate = TargetDate.toLocaleDateString("fr-FR", {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric"
    })
    return console.log(formatedDate);
}
formatCustomDate("2024-10-12");