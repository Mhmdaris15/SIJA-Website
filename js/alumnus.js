
// async function loadData(){
//     const response = await fetch('../data/alumnus.json');
//     const data = await response.json();
//     // console.log(data[0]);
//     for (let d of data) {
//         console.log(d);
//         let text = `
//         <h1>${d.name}</h1>
//         <h2>${d.job}</h2>    
//         `;
//         let container = document.querySelector('.container');
//         container.insertAdjacentHTML("beforeend", text);
//         // document.body.appendChild(text);
//     }
// }

// loadData();


async function loadData(){
    const response = await fetch('../data/alumnus.json');
    const data = await response.json();
    // console.log(data[0]);
    for (let d of data) {
        console.log(d);
        let text = `
        <div class="alumnus-card-parent">
        <div class="top-card"><ul class="dots">
            <li class="dot"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul></div>
        <div class="alumnus-card">
          <div class="photo"><img src=${d.photo} alt="Photo Profile"></div>
          <div class="biodata">
              <div class="name">${d.name}</div>
              <div class="job">${d.job}</div>
              <div class="salary">${d.salary}</div>
              <div class="company"><i class="fa-solid fa-building"></i> ${d.company}</div>
          </div>
      </div>
      </div>            
        `;
        let container = document.querySelector('.alumnus-cards');
        container.insertAdjacentHTML("beforeend", text);
        // document.body.appendChild(text);
    }
}

loadData();