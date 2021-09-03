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

//colori
const colors = [
    `blue`,
    `orange`,
    `purple`
];

const containerCards = document.getElementById("icons");
const search = document.getElementById("types");

// Estrapolo i diversi tipi di icone in un array 
const getTypes = array => {
    const types = [];
    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push(element.type);
        }
    })
    return types;
}

// Aggiungo i colori per ogni tipo
const colorIcons = (array, colors) => {
    const types = getTypes(array);
    console.log(types);
    const coloredIcons = array.map((element) => {
        const indexTypes = types.indexOf(element.type);
        element.color = colors[indexTypes];
        return element;
    })
    return coloredIcons;
}

// Popolo il select 
const searchSelect = () => {
    search.innerHTML = ` `;
    const types = getTypes(icons);
    types.forEach((type) => {
        search.innerHTML += `
             <option value="${type}">${type.toUpperCase()}</option>    
        `
    });
}

// 

const generatePage = icons => {
    containerCards.innerHTML = ` `;
    const coloredIcons = colorIcons(icons, colors);
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
    </div>    `
    });
}





searchSelect();
generatePage(icons);

search.addEventListener('change', function() {
    let type = this.value;
    for (const key in icons) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
})
