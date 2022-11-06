const deleteBtn = document.getElementsByClassName("btn-danger");
const saveTrackBtn = document.getElementById("save-modal");
const closeModal = document.getElementById("close-modal");
const artistInput = document.getElementById("artist-name");
const durationInput = document.getElementById("track-duration");
const songInput = document.getElementById("track-title");
const numberInput = document.getElementById("track-number");

function deletetrack() {
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (e) => {
      const targetElement = e.target;
      const parentElement = targetElement.closest("tr");
      parentElement.remove();
    });
  }
}

function saveTrack() {
  //creating elements
  const tBody = document.getElementById("t-body");
  const newTr = document.createElement("tr");
  // newTr.classList.add("color1");
  const newTh = document.createElement("th");
  newTh.setAttribute("scope", "row");
  const tdSong = document.createElement("td");
  const tdArtist = document.createElement("td");
  const tdDuration = document.createElement("td");
  const tdDeleteBtn = document.createElement("td");
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.innerText = "Delete";
  newDeleteBtn.classList.add("btn", "btn-danger");
  tBody.appendChild(newTr);
  newTr.appendChild(newTh);
  newTh.innerHTML = numberInput.value;
  newTr.appendChild(tdSong);
  tdSong.innerHTML = songInput.value;
  newTr.appendChild(tdArtist);
  tdArtist.innerHTML = artistInput.value;
  newTr.appendChild(tdDuration);
  newTr.appendChild(tdDeleteBtn);
  tdDuration.innerHTML = durationInput.value;
  tdDeleteBtn.appendChild(newDeleteBtn);
  colorTr();
  deletetrack();
}

function colorTr() {
  const trList = document.querySelectorAll("tr");
  // console.log(trList);

  for (let i = 0; i < trList.length; i++) {
    if (i % 2 === 0) {
      trList[i].classList.add("color1");
    } else {
      trList[i].classList.add("color2");
    }
  }
}

saveTrackBtn.addEventListener("click", saveTrack);
window.onload = (event) => {
  colorTr();
  deletetrack();
};
