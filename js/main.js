/** List of Links for Homepage
 *  Update every week!
 */
const links = {
    "Week 1": {
        links: [{
                label: "Notes",
                url: "Week1/notes.html"
            },
            {
                label: "Story Editor",
                url: "Week1/story_editor.html"
            }
        ]
    },
    "Week 2": {
        links: [{
                label: "Notes",
                url: "Week2/notes.html"
            },
            {
                label: "Team project",
                url: "Week2/team.html"
            }
        ]
    },
    "Week 3": {
        links: [{
                label: "Notes",
                url: "Week3/notes.html"
            },
            {
                label: "Team Project",
                url: "Week3/team.html"
            },
            {
                label: "My Practice",
                url: "Week3/practice.html"
            }
        ]
    },
    "Week 4": {
        links: [{
            label: "Notes",
            url: "Week4/notes.html"
        }]
    }

}

/** Populate HTML with dynamic links */
let week = document.getElementById('block1-list');
for (var item in links) {
    // Create 'h3' elements and 'ol' elements to put under it. Add ids and classes to them.
    let header = document.createElement('h3');
    header.id = item.split(" ").join("");
    let ol = document.createElement('ol');
    ol.id = item.split(" ").join("") + 'ol';
    ol.classList.add("hidden");
    header.innerHTML = item;
    week.appendChild(header);
    week.appendChild(ol);
    for (let link in links[item].links) {
        // Create 'li' elements to add to my ol - these will be the weekly links
        let li = document.createElement('li');
        let label = links[item].links[link].label;
        let href = links[item].links[link].url;
        li.innerHTML = '<a href=\"' + href + '\">' + label + '</a>';
        ol.appendChild(li);
    }
}

/** Create 'click' event for all h3 elements on home page
 *  They will show all links for that week when clicked
 */
const tag = document.getElementsByTagName('h3');
console.log(tag);
for (let item in tag) {
    let week = document.getElementById(tag[item].id);
    week.addEventListener('click', (event) => {
        console.log((event.target).id);
        const ol = document.getElementById((event.target).id + 'ol');
        ol.classList.toggle('hidden');
    });
}