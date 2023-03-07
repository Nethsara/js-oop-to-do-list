const form = document.querySelector("[data-form]");
const list = document.querySelector("[data-lists]");
const input = document.querySelector("[data-input]");

let toDoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = new ToDO(Math.random() * 100000, input.value);
  toDoArr = [...toDoArr, toDo];
  console.log(toDoArr);
  UI.displayData();
});

class ToDO {
  constructor(id, toDo) {
    this.id = id;
    this.toDo = toDo;
  }
}

class UI {
  static displayData() {
    let displayData = toDoArr.map((value) => {
      return ` 
      <div class="todo">
        <p>${value.toDo}</p>
        <span class="remove" data-id= ${value.id}>🗑️</span>
      </div>`;
    });

    list.innerHTML = displayData.join("");
  }
  static clearInput() {
    input.value = "";
  }

  static removeToTo() {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
      }
      let btnID = e.target.dataset.id;
      UI.removeArrayToDo(btnID);
    });
  }
  static removeArrayToDo(id) {
    toDoArr = toDoArr.filter((item) => item.id !== +id);
  }
}
