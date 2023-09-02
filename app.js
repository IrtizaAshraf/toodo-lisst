// const item = document.querySelector("#value").value;
// function submit() {

//     console.log(item)
//     // console.log(item);

//     item = ''
// }




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



//solutionn todo list


// const additem = document.querySelector("#add");
// const arry = document.querySelector("#list");
// const errormassage = document.querySelector("#error-message")
// const arr = [];

// function create() {
//     if (additem.value =="") {
//         alert("plese enter the value")

//     } 

//     else{
//         arr.push(additem.value);
//         console.log(arr);
//         additem.value = "";

//         arry.innerHTML = ""; // Clear the previous list content

//         for (let g = 0; g < arr.length; g++) {
//             const item = arr[g];
//             arry.innerHTML += `<li>${item}</li>  
//             <button onclick="deletelist(${g})">Delete</button>
//             <button onclick="editlist(${g})">Edite</button>`
//             ;
//         }
//     }



// }


// function deletelist(index) {
//     arr.splice(index, 1) 
//     render();  
// }


// function editlist(index) {
//    const content = prompt('Edit task:', arr[index]);
//     if (content === "") {
//         arr[index] = content ;
//         // render();
//         alert("please Enter the value")
//     }
//     else{
//         arr[index] = content ;
//         render();
//     }
// }


// function render() {

//     arry.innerHTML = ""; // Clear the previous list content
//     for (let g = 0; g < arr.length; g++) {
//         const item = arr[g];
//         arry.innerHTML += `<li>${item}</li>  
//         <button onclick="deletelist(${g})">Delete</button>
//         <button onclick="editlist(${g})">Edite</button>`
//         ;
//     }

// }









const addlist = document.querySelector("#add");
const arrry = document.querySelector("#list");
const erroermassage = document.querySelector("#error-message")
const todo = [];

function todolist(e) {
    e.preventDefault();

    switch (addlist.value) {
        case '':
            alert("Enter the Value ")

            break;

        default:
            todo.push(addlist.value)
            addlist.value = '';
            arrry.innerHTML = '';
            for (let g = 0; g < todo.length; g++) {
                const item = todo[g];
                arrry.innerHTML += `<li>${item}</li>  
             <button onclick="deletvalue(${g})">Delete</button>
             <button onclick="editvalue(${g})">Edite</button>`
                    ;
            }
            break;
    }

}

function deletvalue(index) {
    todo.splice(index, 1)
    addlist.value = '';
    arrry.innerHTML = '';
    for (let g = 0; g < todo.length; g++) {
        const item = todo[g];
        arrry.innerHTML += `<li>${item}</li>  
             <button onclick="deletvalue(${g})">Delete</button>
             <button onclick="editvalue(${g})">Edite</button>`
            ;
    }

}


function editvalue(index) {
    const todolist = +prompt("Change the Value", todo[index]) 
    todo.splice(index, 1, todolist)


    
}