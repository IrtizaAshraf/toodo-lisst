const item = document.querySelector("#value").value;
function submit() {

    console.log(item)
    // console.log(item);

    item = ''
}


//paractice 1

// function create2() {
//     const listValue = + document.querySelector('#list').value;
//     const output = document.querySelector('#output');

//     // Clear previous content
//     output.innerHTML = listValue;


//     const itemCount = 5;

//     for (let i = 1; i <= 10; i++) {
//         const listItem = document.createElement('p');
//         listItem.textContent = `${listValue} - Item ${i}`;
//         output.appendChild(listItem);
//     }
// }

//practice 2


// const additem = document.querySelector("#send");
// const arry = document.querySelector("#list")

// const arr = []

// function create() {
//     arr.push(additem.value);
//     console.log(arr);
//     additem.value = "";

//     for (let g = 0; g < array.length; g++) {
//         const element = array[g];
//         arry.innerHTML`${index.g}<li></li>`

//     }

// }



//solution .....

const additem = document.querySelector("#send");
const arry = document.querySelector("#list");

const arr = [];

function create() {
    arr.push(additem.value);
    console.log(arr);
    additem.value = "";

    arry.innerHTML = ""; // Clear the previous list content

    for (let g = 0; g < arr.length; g++) {
        const item = arr[g];
        arry.innerHTML += `<li>${item}</li> 
        <button onclick="deletelist(${g})">Delete</button>
        <button onclick="editlist(${g})">Edit</button>`
        ;
    }
}




function deletelist(index) {
    arr.splice(index, 1) 
    render();  
}


function editlist(index) {
   const content = prompt('Edit task:', arr[index]);
    if (content !== null) {
        arr[index] = content ;
        render();
    }
}


function render() {

    arry.innerHTML = ""; // Clear the previous list content
    for (let g = 0; g < arr.length; g++) {
        const item = arr[g];
        arry.innerHTML += `<li>${item}</li>  
        <button onclick="deletelist(${g})">Delete</button>
        <button onclick="editlist(${g})">Edite</button>`
        ;
    }
    
}




