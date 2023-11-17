
// object named user that has properties name and age. the greet function logs and displays a
// greeting message displaying its name and age values using the keyword this. 
let user = {
    name: "Joe",
    age: 25,
    greet: function(){
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
        displayedGreet.innerHTML =`<p>
            Hello, my name is ${this.name}. I am ${this.age} years old.
            </p>`;
    }
}

function userGreet(){
    user.greet();
}

let button = document.getElementById("ListenButton");
button.addEventListener("click", userGreet);

//another way to do line 19 and 20. 
//document.getElementById("ListenButton").addEventListener("click", userGreet);
