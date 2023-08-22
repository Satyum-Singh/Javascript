const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");
const remov = document.getElementById("delete");

function addTodo() {
  const todoname = input.value;

  const task = document.createElement("li");
  const para1 = document.createElement("p");
  const del = document.createElement("button");

  para1.textContent = todoname;
  del.textContent = "Delete";
  del.classList.add("del");

  task.append(para1, del);
  list.appendChild(task);
  console.log(todoname);
}

btn.addEventListener("click", addTodo);
list.addEventListener("click", (event) => {
  const clicked = event.target;
  console.log(clicked);

  const clickedDelBtn = clicked.matches(".del");
  if (clickedDelBtn == false) {
    return false;
  } else {
    console.log(clicked);
    const li = clicked.parentElement;
    li.remove();
  }
});
