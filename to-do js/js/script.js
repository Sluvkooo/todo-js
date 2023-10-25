const button = document.querySelector(".input-btn");
const input = document.querySelector(".input-text");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list__item";
  li.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "Delete";
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li)
  })
});


