// This had to be after the grid was made, so I made it a function
function eventListeners() {
    const card = document.querySelectorAll('div.card');
    console.log(card);

    for (let item of card) {
        item.addEventListener('mouseover', makeLarger);
        item.addEventListener('mouseout', makeSmaller);
    }
}

/** Gets the classes that include the Row and Column then makes them larger */
function makeLarger(event) {
    let rowCol = findRowCol(event.target.classList);

    for (let i = 0; i < rowCol.length; i++) {
        let allRowCol = document.getElementsByClassName(rowCol[i]);
        for (let j = 0; j < allRowCol.length; j++) {
            allRowCol[j].classList.add('larger');
        }
    }
    event.target.classList.add('bold');
}

/** Gets the classes that include the Row and Column then takes away the larger class */
function makeSmaller(event) {
    let rowCol = findRowCol(event.target.classList);
    for (let i = 0; i < rowCol.length; i++) {
        let allRowCol = document.getElementsByClassName(rowCol[i]);
        for (let j = 0; j < allRowCol.length; j++) {
            allRowCol[j].classList.remove('larger');
        }
    }
    event.target.classList.remove('bold');
}

/** Takes a DOM List of Classes and converts it to an array
 *  Finds the values that start with "row" and "col" and adds them to a new array
 *  Returns new array with just those values
 */
function findRowCol(classList) {
    let rowCol = Array.from(classList);
    let newArray = [];

    for (let i = 0; i < rowCol.length; i++) {
        let value = rowCol[i];

        if (value.substring(0, 3) == "row" || value.substring(0, 3) == "col") {
            newArray.push(value);
        }
    }
    return newArray;
}