// console.log("Hi Im Shodhan Shetty");
fetch("./data.json").then(function(response){
    return response.json();
})
.then(function(data){
    // let tableData = document.querySelector("#data-output");
    let tableData = document.getElementById("data-output");
    let dataRowString = "";

    for(let i of data)
    {
        dataRowString += `
            <tr>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.phone}</td>
            </tr>
        `;
    }

    tableData.innerHTML = dataRowString;
})


//how to do the function call steps similar like jinja template in django and flask


//async await utilization
// async function dataRetrival() {
//     try{
//         const response = await fetch('/data.json');
//         return response.json();
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }
// dataRetrival().then(data =>{
//     let tableData = document.getElementById("data-output");
//     let dataRowString = "";

//     for(let i of data)
//     {
//         dataRowString += `
//             <tr>
//                 <td>${i.name}</td>
//                 <td>${i.age}</td>
//                 <td>${i.phone}</td>
//             </tr>
//         `;
//     }

//     tableData.innerHTML = dataRowString;
// })