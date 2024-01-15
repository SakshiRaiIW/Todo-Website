const getAndUpdate = () => {
    const title = document.getElementById('title').value;
    const currentDate = new Date().toLocaleDateString();

    const itemJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    itemJsonArray.push([title, currentDate]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    update();
  };

  const update = () => {
    const itemJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    const tableBody = document.getElementById("tableBody");
    let str = "";

    itemJsonArray.forEach((element, index) => {
      str += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });

    tableBody.innerHTML = str;
  };

  const deleted = (itemIndex) => {
    const itemJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
  };

  const clearStorage = () => {
    if (confirm("Do you really want to clear?")) {
      localStorage.clear();
      update();
    }
  };

  document.getElementById("add").addEventListener("click", getAndUpdate);
  update();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function getAndUpdate() {
    //   tit = document.getElementById('title').value;
    //   desc = document.getElementById('description').value;

    //   if (localStorage.getItem('itemsJson') == null) {
    //     itemJsonArray = [];
    //     itemJsonArray.push([tit, desc]);
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    //   } else {
    //     itemJsonArrayStr = localStorage.getItem('itemsJson');
    //     itemJsonArray = JSON.parse(itemJsonArrayStr);
    //     itemJsonArray.push([tit, desc]);
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    //   }
    //   update();
    // }

    // function update() {
    //   if (localStorage.getItem('itemsJson') == null) {
    //     itemJsonArray = [];
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    //   } else {
    //     itemJsonArrayStr = localStorage.getItem('itemsJson');
    //     itemJsonArray = JSON.parse(itemJsonArrayStr);
    //   }

    //   let tableBody = document.getElementById("tableBody");
    //   let str = "";

    //   itemJsonArray.forEach((element, index) => {
    //     str += `
    //       <tr>
    //         <th scope="row">${index + 1}</th>
    //         <td>${element[0]}</td>
    //         <td>${element[1]}</td>
    //         <td><button onclick="deleted(${index})">Delete</button></td>
    //       </tr>`;
    //   });

    //   tableBody.innerHTML = str;
    // }

    // add = document.getElementById("add");
    // add.addEventListener("click", getAndUpdate);
    // update();

    // function deleted(itemIndex) {
    //   itemJsonArrayStr = localStorage.getItem('itemsJson');
    //   itemJsonArray = JSON.parse(itemJsonArrayStr);

    //   itemJsonArray.splice(itemIndex, 1);
    //   localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    //   update();
    // }

    // function clearStorage() {
    //   if (confirm("Do you really want to clear?")) {
    //     localStorage.clear();
    //     update();
    //   }
    // }

















    // let inputTag = document.getElementById("input")[0]; // default behaviour - always returns an array even when one element is present but in we only want oth index input everytime our cacas
// let todo = document.getElementsByClassName("list")[0];

// function addnewtodo(){
//     if(inputTag.value.length < 1){ // we do not want to add anything in todo
//         return;
//     }
//     let newTag = document.createElement("p"); //it will create a new paragraph tag
//     newTag.textContent = inputTag.value; // whatever value we input , it will be saved in new Tag . text content
//     todo.appendChild(newTag); // list ke andar ek child append krdo which is " new tag"
// }


//   function addnewtodo() {
//     var newTaskInput = document.getElementById("new-task");
//     var taskDescription = newTaskInput.value.trim();

//     if (taskDescription !== "") {
//       var todoList = document.getElementById("todo-list");

//       // Create a new list item
//       var newTaskItem = document.createElement("li");
//       newTaskItem.className = "todo-item";

//       // Create a checkbox
//       var checkbox = document.createElement("input");
//       checkbox.type = "checkbox";

//       // Create a span for the task description
//       var taskSpan = document.createElement("span");
//       taskSpan.textContent = taskDescription;

//       // Append checkbox and task description to the list item
//       newTaskItem.appendChild(checkbox);
//       newTaskItem.appendChild(taskSpan);

//       // Append the new list item to the todo list
//       todoList.appendChild(newTaskItem);

//       // Clear the input field
//       newTaskInput.value = "";
//     }
// }


   