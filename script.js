
function addEmployee() {
  let name = document.getElementById("name").value.trim();
  let role = document.getElementById("role").value.trim();

  if (!name || !role) {
    alert("Enter employee details!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = name + " - " + role + " ";

  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("list").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
}
