// code your solution here
const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]

// const daHeck = (array) => {
//     array.find("W")
// }

// function year(item){
//     return item.year
// }

// function result(item){
//     return item.result
// }


// function superbowlWin(array){
//     for(let item of array){
//         if()

//     }


function superbowlWin(array){
    for(let item of array){
        if(item.result === "W"){
            return item.year
        }
    }

}

// function superbowlWin(array){
//     for(let item of array){
//         array.find(item.result === "W")
//         if(array){
//             return item.year
//         }         

//     }
// }
