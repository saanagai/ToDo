{
  /* <div class="todoList">
          <div class="title">
            <div class="circle"></div>
            <h2>To do</h2>
            <p class="count">5</p>
          </div>
          <div class="list">
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
          </div>
        </div> */
}

const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "todo",
    paragraph: "[loan-management]-Add card componet",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
    paragraph: "[loan-management]-Add card componet",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
    paragraph: "[loan-management]-Add card componet",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
    paragraph: "[loan-management]-Add card componet",
  },
];
const todoDatas = [
  {
    title: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Shine jildee yvah",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Huvtssaa beldeh",
    date: "2024-12-09",
    state: "in-progress",
  },
];
function addTaskList(title, color, count, id) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");
  //todoList = <div class="todoList">
  //   <div class="title"></div>
  // </div>
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  // title = <div class="title"></div>
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  // <h2>To do</h2>
  const h2 = document.createElement("h2");
  h2.innerText = title;
  // <div style={backgroundColor:"white" } class="circle"></div>
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  // <p class="count"></p>
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer2.appendChild(todoList);
  // <div class="addItems">
  //     <div>
  //       <p>[loan-managament]- Add card component</p>
  //     </div>

  //     <img src="./trash.svg" alt="" />
  //   </div>
  const addItems = document.createElement("div");
  addItems.setAttribute("class", "addItems");
  const addItemsInner = document.createElement("div");
  const pTag = document.createElement("p");
  pTag.innerText = "[loan-managament]- Add card component";
  const image = document.createElement("img");
  image.setAttribute = ("src", "./trash.svg");
  taskContainer2.appendChild(addItemsInner);
  addItems.appendChild(addItemsInner);
}
containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id, item.paragraph);
});
const rendertodoDatas = (title, state) => {
  const todoDatasDiv = document.querySelector("#todoData");
};
// function dataList(title, date, state) {
//   //  const taskContainer2 = document.querySelector("#taskContainer");
//   const dataList = document.greateElement("div");
// }
