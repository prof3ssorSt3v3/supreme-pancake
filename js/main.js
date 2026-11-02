import reg from './info.js';

document.addEventListener('DOMContentLoaded', init);
//when the DOMContentLoaded event happens
//add the init function to the task queue

function init() {
  buildContent();
  //get json
  getJSONData();
  //get xml
}

function getJSONData() {
  //fetch()
  const url = `http://127.0.0.1:5500/info.json`;
  // const url = `http://192.168.2.162:5500/`;
  fetch(url)
    .then(gotResponse)
    .then(gotData)
    .catch((err) => {
      console.warn('The fetch failed');
    });
}
function gotData(obj) {
  //obj is the JS Object from the JSON file
  //it was created by resp.json()
  console.log(obj);
}
function gotResponse(resp) {
  //the Response Headers are in resp.
  if (resp.ok) {
    return resp.json();
    //look in the body of the response
    //extract the JSON string
    //convert it into a JS object
  } else {
    throw new Error('Response was not ok');
  }
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
