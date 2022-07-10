let count = 0;
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  if(inputValue === ''){
    alert('Input filed cannot be empty');
    return;
  }
  count++;

  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");
  tbody.innerHTML = `
    <tr style="height:80px; class="my-auto">
    <td scope="row">${count}</td>
    <td>${inputValue}</td>
    <td>
    <button id="delete" style="background:red;border:none;" class="btn btn-primary py-2 px-3 delete-btn">Delete <i class="fa-solid fa-delete-left"></i></button>
    <button id="done" style="background:green;border:none;" class="btn btn-primary py-2 px-3 done-btn">Done <i class="fa-solid fa-circle-check"></i></button>

    </td>
    </tr>
    `;
  table.appendChild(tbody);
  input.value = ''; //clear input

  const deleteButton = document.getElementsByClassName("delete-btn");
  const doneButton = document.getElementsByClassName("done-btn");

  for (const button of deleteButton) {
    button.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }

  for (const button of doneButton) {
    button.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }
});
