import reg from './info.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  buildContent();
  //get json
  //get xml
}

function buildContent() {
  let main = document.querySelector('main');
  let h1 = `<h1>${reg.school} ${reg.semester}</h1>`;
  main.innerHTML =
    h1 +
    reg.students
      .map((st) => {
        return `<div data-id="${st.id}" class="card">
      <h2>${st.fullname}</h2>
      <p>${st.program}</p>
      <p>${st.username}</p>
      <ul>
        <li>${st.courses[0].code} - ${st.courses[0].title}</li>
        <li>${st.courses[1].code} - ${st.courses[1].title}</li>
      </ul>
      </div>`;
      })
      .join('');
}
