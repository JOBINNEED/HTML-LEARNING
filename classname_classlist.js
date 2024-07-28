//class name is used to access the class name and also add/modify the class anem 
let element=document.getElementById("idname");
element.className+="add new class name";
element.className.replace("class 1","class2");
//now to do even more thing we use classlist
//class list consists of many feautures:add,toggle,remive,contains
element.classList.add("names of the classes");
element.classList.remove("name of the class");
element.classList.toggle("name of the class");//in toggle if the class entered already exist than that class is deleted and if it doesn't exist than the class is added
element.classList.contains("name of the class");//check if the class is present 

