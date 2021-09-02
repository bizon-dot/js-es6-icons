const icons = [{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

const containerCards = document.getElementById("icons");

const search = document.getElementById("types");
search.innerHTML = ` `;
const types = getTypes(icons);
types.forEach((type) => {
        search.innerHTML += `
             <option value="${type}">${type}</option>    
        `
})
console.log(search);

const colors = [
    `blue`,
    `orange`,
    `purple`
]

containerCards.innerHTML = ` `;

const coloredIcons = colorIcons(icons,colors);

coloredIcons.forEach((icon) => {
    const {
        name,
        prefix,
        type,
        family,
        color
    } = icon;
    containerCards.innerHTML += `
    <div class="card">
        <i class = "${family} ${prefix + name}" style="color: ${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
    </div>
    `

})

function getTypes(array) {
    const types = [];
    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push(element.type);
        }
    })
    return types;
}

function colorIcons(array,colors) {
    const types = getTypes(array);
    console.log(types);
    const coloredIcons = array.map((element)=>{
        const indexTypes = types.indexOf(element.type);
        element.color = colors[indexTypes];
      
        return element;

    })
 return coloredIcons;
}

// console.log(getTypes(icons));

// console.log(colorIcons(icons,colors));