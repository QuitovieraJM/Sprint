//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
	let userData= inputBox.value; //getting user entered value
	if(userData.trim()!= 0){ //if user entered value aren't spaces
		addBtn.classList.add("active"); //active the add button
	}else{
		addBtn.classList.remove("active"); //unactive the addbutton
	}
}
showTasks(); //calling showTasks function

//if user clicks on the add button
addBtn.onclick = () =>{
	let userData = inputBox.value; //getting user entered value
	let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
	if(getLocalStorage == null){ //if localStorage is null
		listArr = []; //creating blank array
	}else{
		listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
	}
	listArr.push(userData); //pushing or adding user data
	localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
	showTasks(); //calling showTasks function
}

// function to add task list inside ul
function showTasks(){
	let getLocalStorage= localStorage.getItem("New Todo"); //getting localstorage
	if(getLocalStorage == null){ //if localStorage is null
		listArr = []; //creating blank array
	}else{
		listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
	}

	const pendingNum = document.querySelector(".pendingNum");
	pendingNum.textContent = listArr.length; //passing the length value in pendingNum
	
	if(listArr.length > 0){  //if array length is greater than 0
		deleteAllBtn.classList.add("active"); //active the clear all button
	}else{
		deleteAllBtn.classList.remove("active"); //unactive the clear all button
	}

	let newLiTag = '';
	listArr.forEach((element,index) => {
		newLiTag += `<li> ${element} <span class="icon" onclick="deleteTask(${index})";><i class= "fas fa-trash"></i></span></li>`;
	});
	todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
	inputBox.value = ""; //once task added leave the input field blank
}

//delete task function
function deleteTask(index){
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage); 
	listArr.splice(index, 1); //delete or remove the particular indexed li
	// after removing the list, update the local storage
	localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
	showTasks(); //calling showTasks function
}

//delete all tasks function
deleteAllBtn.onclick = () =>{
	listArr = []; //empty the array
	// after delete all the task, update the local storage
	localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a json string
	showTasks(); //calling showTasks function
}