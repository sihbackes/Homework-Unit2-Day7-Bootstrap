let deleteBtn = document.getElementsByClassName("btn-danger");

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("tr");
    parentElement.remove();
  });
}
