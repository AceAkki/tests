document.addEventListener("DOMContentLoaded", () => {
  $("header").load("header.html", () => {
    console.log("loaded");

    let idNode = document.querySelectorAll("[id]");
    //console.log(idNode);
    let idArray = [];

    let input = document.querySelector("#getId");
    let inputValue = "";

    let head = document.querySelector("#header");
    console.log(head);
    head.style.cssText = "flex-direction: column;";

    let hideElem = null;
    let hideBtn = document.querySelector("#hide");
    let showBtn = document.querySelector("#show");

    function getElems() {
      input.addEventListener("input", () => {
        inputValue = input.value;
        console.log(inputValue);

        if (inputValue == null || inputValue == "") {
          console.log("Input is Empty");
        } else if (idArray.includes(inputValue)) {
          hideElem = document.querySelector(`#${inputValue}`);
        } else if (inputValue === "a") {
          all();
        } else {
          console.log(`#${inputValue} : Doesn't Exists`);
        }
      });

      // Logic for buttons created with fetched id's list

      // let create = document.createElement("div");
      // create.style.cssText = "display:flex";
      // create.classList.add("header-wrap");
      // head.appendChild(create);

      // //   idNode.forEach((e) => {
      // //     console.log(e);
      // //     console.log(idNode[e].id);
      // //     idArray.push(e.id);
      // //     let headerBtn = document.createElement("h3");
      // //     create.appendChild(headerBtn);
      // //     headerBtn.style.cssText =
      // //       "background-color:black; color:white; padding:10px; border-radius:10px; font-weight:400";
      // //     headerBtn.innerText = e.id;
      // //   });

      // for (let e = 0; e < idNode.length; e++) {
      //   idArray.push(idNode[e].id);
      //   //console.log(idArray);
      //   let headerBtn = document.createElement("h3");
      //   create.appendChild(headerBtn);
      //   headerBtn.style.cssText =
      //     "background-color:black; color:white; padding:10px; border-radius:10px; font-weight:400";
      //   headerBtn.innerText = idNode[e].id;
      // }

      // console.log(idArray);
      // let headerW = document.querySelector(".header-wrap");
      // let headerL = headerW.children;
      // console.log(headerL);

      // for (let i = 0; i < idNode.length; i++) {
      //   headerL[i].addEventListener("click", () => {
      //     //headerL[i].style.display = "none";
      //     idNode[i].style.display = "none";
      //   });
      // }

      // for (let hide = 0; hide < 4; hide++) {
      //   headerL[hide].style.display = "none";
      // }

      // for (let hide = 11; hide < 14; hide++) {
      //   headerL[hide].style.display = "none";
      // }
    }

    getElems();

    function all() {
      for (let a = 4; a < 9; a++) {
        idNode[a].style.display = "none";
      }
    }
    all();

    hideBtn.addEventListener("click", () => {
      hideElem.style.display = "none";
    });

    showBtn.addEventListener("click", () => {
      hideElem.style.display = "block";
    });
  });

  // console.log(13 * 3);

  // Use an array to store contact names (e.g., ["Alice", "Bob", "Charlie"]).
  // Implement functions for:
  // Adding a new contact.
  // Deleting a contact by name.
  // Searching for a contact.
  // Scope Focus: Ensure functions manipulate only the relevant variables (e.g., avoid global variables when unnecessary).

  let nameList = [
    {
      Name: "FIO",
      ID: "32",
    },
    {
      Name: "JUL",
      ID: "30",
    },
    {
      Name: "JAN",
      ID: "31",
    },
    {
      Name: "AAL",
      ID: "28",
    },
    {
      Name: "MAL",
      ID: "29",
    },
  ];

  console.log(nameList);

  let nList = [];
  let aList = [];
  let nInput = document.querySelector("#Input");
  let nAuto = document.querySelector("#List");
  let nOutput = document.querySelector("#Output");
  let getId = document.querySelector("#getID");
  let query = "";


    nameList.forEach((e) => {
      // console.log(e.Name);
      nList.push(e.Name);
      aList.push(e.ID);
    });
    console.log(nList);
    console.log(aList);


  nInput.addEventListener("input", () => {
    query = nInput.value.toLowerCase();
    console.log(query);
    nAuto.innerHTML = "";
    nOutput.textContent = "";

    if (query) {
      const fList = nList.filter((f) => f.toLowerCase().includes(query));
      //  console.log(fList);

      fList.forEach((l) => {
        let li = document.createElement("li");
        nAuto.appendChild(li);
        li.innerText = l;

        li.addEventListener("click", () => {
          nInput.value = li.innerText;
          nAuto.innerHTML = "";
        });
      });
    }
  });

  getId.addEventListener("click", () => {
    let value = nInput.value;

    if (value === '') {
      console.log('No Value Input')
    } else {
      console.log(`"value is" : ${value}`);
      //console.log(nList.indexOf(value));
      let iName = nList.indexOf(value);
      console.log(iName);
      //console.log(aList[iName]);
      let id = aList[iName];
      nOutput.textContent = `ID is ${id}`;
    }

  });

  let nNameInput = document.querySelector("#nNameInput");
  let nIdInput = document.querySelector("#nIdInput");
  let addNameBtn = document.querySelector("#addName");

  let newData = { Name: "", ID: "" };

  [nNameInput, nIdInput].forEach((e, index) => {
    e.addEventListener("input", (e) => {
      // console.log(e) // Input object
      if (index === 0) {
        newData.Name = e.target.value.toUpperCase();
      } else {
        newData.ID = e.target.value;
      }

    });
  });

  addNameBtn.addEventListener("click", (e) => {
    //console.log(e);

    if (newData.Name === '' && newData.ID === '') {
      console.log ("Empty Input");
    } 
    else {
      nameList.push(newData);
      console.log(newData);
      console.log(newData.Name);
      console.log(nameList);
      updateLists();
      dt = newData;
      addTable(dt);
      newData = { Name: "", ID: "" };
    }
  });

  let dName = document.querySelector('#dNameInput');
  let delBtn = document.querySelector('#delName');
  let deleteValue = '';

  dName.addEventListener('input', () => {
    deleteValue = dName.value.toUpperCase();

  })

  delBtn.addEventListener('click', () => {
    if (nList.includes(deleteValue)) {
      index = nList.indexOf(deleteValue)
     // console.log(index);
      nameList.splice(index,1)
      console.log(nameList);

      let rows = tbody.querySelectorAll('tr');
      console.log(rows);
      
      rows.forEach(r => {
        if (r.innerText.includes(deleteValue)) {
          r.innerHTML= '';
        } else {
          console.log('Not Matched')
        }

      })
    }


  })


  function updateLists () {
    nList.push(newData.Name);
    aList.push(newData.ID);    
  }

  let dTable = document.querySelector(".dataTable");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let th = document.createElement("th");
  let thO = document.createElement("th");
  th.textContent = "Name";
  thO.textContent = "ID";

  dTable.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(th);
  thead.appendChild(thO);
  table.appendChild(tbody);

  function addTable (dt) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdO = document.createElement("td");
    console.log(dt)
    td.textContent = `${dt.Name}`;
    tdO.textContent = `${dt.ID}`;
    
    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(tdO);
  }

  nameList.forEach((dt) => {
    addTable(dt);
  });      


});
