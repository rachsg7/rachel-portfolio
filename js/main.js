// List of links for homepage - Update Every Week!
const links = [{
        label: "Week 1",
        url: "Week1/index.html"
    },
    {
        label: "Week 2",
        url: "Week2/index.html"
    },
    {
        label: "Week 3",
        url: "Week3/index.html"
    }
]

const links2 = {
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
        }]
    }

}

// Populate html with links
/*let ol = document.getElementById('block1-list');
for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = '<a href=\"' + links[i].url + '\">' + links[i].label + '</a>';
    ol.appendChild(li);
}*/

// Populate html with links

let week = document.getElementById('block1-list');
for (var item in links2) {
    let header = document.createElement('h3');
    header.innerHTML = item;
    week.appendChild(header);
    console.log(item);
    for (let link in links2[item]) {
        for (let obj in links2[item][link]) {
            console.log(links2[item][link][obj]);
        }
        //console.log(links2[item][link].length);
    }
    //console.log(links2[item]);
}


function openBlockOne() {
    ol.classList.toggle('hidden');
}

const block1 = document.getElementById('block1');
block1.addEventListener('click', openBlockOne);