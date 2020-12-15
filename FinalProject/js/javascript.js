const requestURL = 'https://rachsg7.github.io/pkmntypechart/js/pkmn.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const pkmntype = jsonObject['types'];

        createTable();
        eventListeners();

        function getMultiplier(source, target1, target2) {
            let target1Mul = pkmntype[source][target1];
            let target2Mul = pkmntype[source][target2];

            if (target1Mul == undefined) {
                target1Mul = 1.0;
            }

            if (target2Mul == undefined) {
                target2Mul = 1.0;
            }

            return target1Mul * target2Mul;
        }

        function getInnerHtmlByMultiplier(multiplier) {
            switch (multiplier) {
                case 4.0:
                    return "4X";
                case 2.0:
                    return "2X";
                case 1.0:
                    return "";
                case 0.5:
                    return "1/2X";
                case 0.25:
                    return "1/4X";
                case 0.0:
                    return "0";
            }
        }

        function getClassByMultiplier(multiplier) {
            switch (multiplier) {
                case 4.0:
                    return "superdupereffective";
                case 2.0:
                    return "supereffective";
                case 1.0:
                    return "normal";
                case 0.5:
                    return "noteffective";
                case 0.25:
                    return "reallynoteffective";
                case 0.0:
                    return "immune";
            }
        }

        function createTable() {
            // Add starting grid which is empty
            let card = document.createElement('div');
            card.classList.add("nothing");
            card.classList.add("col0");
            card.classList.add("row0");
            document.querySelector('div.grid-container').appendChild(card);
            let col = 1;
            let row = 0;

            // Loop through types and add to first line of grid
            for (let key in pkmntype) {
                let card = document.createElement('div');
                //let span = document.createElement('span');
                //let subspan = document.createElement('span');
                card.textContent = key;
                //span.textContent = key;

                // This is for mobile view - not ready yet
                /*let subattacker = (key.substring(0, 3));
                subspan.textContent = subattacker;
                span.classList.add("long-name");
                subspan.classList.add("short-name");*/

                //card.appendChild(span);
                //card.appendChild(subspan);
                card.classList.add("defend");
                card.classList.add("row" + row);
                card.classList.add("col" + col);
                card.classList.add("card");
                card.classList.add(key);

                document.querySelector('div.grid-container').appendChild(card);
                col++;
            }

            // Fill in rest of grid
            // i is row counter
            // j is column counter
            let i = 0;
            let j = 0;
            for (let attacker in pkmntype) {
                for (let defender in pkmntype) {
                    if (i == 0) {
                        // New row, each type is an attacker
                        row++;
                        col = 0;
                        let card = document.createElement('div');
                        //let span = document.createElement('span');
                        //let subspan = document.createElement('span');
                        //span.textContent = attacker;
                        card.textContent = attacker;
                        /*let subattacker = (attacker.substring(0, 3));
                        subspan.textContent = subattacker;

                        span.classList.add("long-name");
                        subspan.classList.add("short-name");*/

                        //card.appendChild(span);
                        //card.appendChild(subspan);
                        card.classList.add("attack");
                        card.classList.add(attacker);
                        card.classList.add("row" + row);
                        card.classList.add("col" + col);
                        card.classList.add("card");
                        document.querySelector('div.grid-container').appendChild(card);
                        i++;
                        col++;
                    }
                    j++;
                    // After first in row, get Multiplier for each type
                    let multiplier = getMultiplier(attacker, defender);
                    let className = getClassByMultiplier(multiplier);
                    //let effective = document.createElement('span');
                    //let defenderName = document.createElement('span');
                    let evenOddClass;
                    if (j % 2 == 0) {
                        evenOddClass = "even";
                    } else {
                        evenOddClass = "odd";
                    }

                    //effective.textContent = getInnerHtmlByMultiplier(multiplier);
                    //defenderName.textContent = defender;
                    //defenderName.classList.add("defenderName");
                    //defenderName.classList.add(defender);

                    let card = document.createElement('div');

                    card.textContent = getInnerHtmlByMultiplier(multiplier);;
                    card.classList.add(attacker);
                    card.classList.add(defender);
                    card.classList.add(className);
                    card.classList.add(evenOddClass);
                    card.classList.add("row" + row);
                    card.classList.add("col" + col);
                    card.classList.add("card");
                    //card.appendChild(defenderName);
                    //card.appendChild(effective);

                    document.querySelector('div.grid-container').appendChild(card);
                    i++;
                    col++;
                }
                i = 0;
                j++;
            }
        }
    })

document.body.addEventListener('click', pokeFlip);

function pokeFlip(event) {
    console.log(event.target);
    if (event.target.getAttribute('class') == 'long-name') {
        let newAttacker = (event.target).innerText;
        console.log(newAttacker);
        document.querySelector('div.grid-container').innerHTML = "";
        createTable();
    }
}