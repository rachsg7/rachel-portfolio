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

// Populate html with links
let ol = document.getElementById('block1-list');
for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = '<a href=\"' + links[i].url + '\">' + links[i].label + '</a>';
    ol.appendChild(li);
}