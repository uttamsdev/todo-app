let count = 0;
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  count++;

  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");
  tbody.innerHTML = `
    <tr style="height:80px; class="my-auto">
    <td scope="row">${count}</td>
    <td>${inputValue}</td>
    <td>
    <button style="background:red;border:none;" class="btn btn-primary py-2 px-3">Delete <i class="fa-solid fa-delete-left"></i></button>
    <button style="background:green;border:none;" class="btn btn-primary py-2 px-3">Done <i class="fa-solid fa-circle-check"></i></button>

    </td>
    </tr>
    `;
  table.appendChild(tbody);
});
