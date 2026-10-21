document.addEventListener('DOMContentLoaded', () => {
    $('#header').load('header.html');
   // let id = setInterval(function () {

    
    setTimeout(function () {
    let getId = document.querySelector('#getId');
    let hideBtn = document.querySelector('#hide');
    let showBtn = document.querySelector('#show');
    let idValue = "";
    let hiding = null;        
    let idArray = []
    let idNode = document.querySelectorAll('[id]');
    idNode.forEach(e => {
        console.log(e.id);
        idArray.push(e.id);
    })

        console.log(getId, hideBtn, showBtn);

    function inputValue () {
     getId.addEventListener('input', () =>  {
        idValue = getId.value.toLowerCase();
        //  console.log(idValue);

        if (idValue == null || idValue == '' ) {
            console.log('No value in input')
        } else if ( idArray.includes(idValue) ) {
            hiding = document.querySelector(`#${idValue}`);
        } else {
          console.log(`#${idValue} : ID does not exist in the document`);
        }
        // console.log(hiding);
    })
    }
    inputValue();

    // function getElem () {
    // }

        
        hideBtn.addEventListener('click', () => {                    
            //  getElem ();
            if (hiding) {
                hiding.style.display = 'none';
            } else {
                console.warn('no element to hide');
            }
        })
        
        showBtn.addEventListener('click', () => {
            //  getElem ();
            if (hiding) {
            hiding.style.display = 'block';
            } else {
                console.warn('no element to show');
            }
        })


    }, 500);



    // let sum = 13*3;
    // console.log(sum);



   
        const availableCourses = [
            "JavaScript for Beginners",
            "Advanced JavaScript",
            "Python Programming",
            "Web Development with HTML",
            "Web Development with JavaScript",
            "CSS for Designers",
            "JavaScript for Designers",
            "React Basics",
            "React Basics - JavaScript",
            "Node.js Essentials",
            "Node.js Essentials - JavaScript",
        ];

        const testFilter = availableCourses.filter(course =>
            course.includes('JavaScript')
        )
        console.log(testFilter);




        const input = document.getElementById("courseInput");
        const autocompleteList = document.getElementById("autocompleteList");

        input.addEventListener("input", () => {
            const query = input.value.toLowerCase();
            //console.log(query);
            autocompleteList.innerHTML = ""; // Clear the current suggestions

            if (query) {
                // Filter courses based on user input
                const filteredCourses = availableCourses.filter(course =>
                    course.toLowerCase().includes(query)
                );

                console.log(filteredCourses);

                // Generate suggestions
                filteredCourses.forEach(c => {
                    const item = document.createElement("div");
                    item.textContent = c;
                    item.className = "autocomplete-item";

                    //     // Add click event to select a suggestion
                    item.addEventListener("click", () => {
                        input.value = c;
                        autocompleteList.innerHTML = ""; // Clear suggestions
                    });

                    autocompleteList.appendChild(item);
                });
            }
        });

        // Close the autocomplete list if the user clicks outside
        document.addEventListener("click", (e) => {
            if (e.target !== input) {
                autocompleteList.innerHTML = "";
            }
        });



    // Use an array to store contact names (e.g., ["Alice", "Bob", "Charlie"]).
    // Implement functions for:
    // Adding a new contact.
    // Deleting a contact by name.
    // Searching for a contact.
    // Scope Focus: Ensure functions manipulate only the relevant variables (e.g., avoid global variables when unnecessary).

    let contacts = [
        {
            "Name": "Alice",
            "ID_Number": "23"

        },

        {
            "Name": "Rob",
            "ID_Number": "25"

        },
        {
            "Name": "Aaron",
            "ID_Number": "28"

        },
        {
            "Name": "Kevin",
            "ID_Number": "60"

        },
        {
            "Name": "Ron",
            "ID_Number": "30"

        }

    ]

    console.log(contacts);

})