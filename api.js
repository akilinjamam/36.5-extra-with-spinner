const loadData = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => console.log(data.results[0]))
}

// loadData();

/* ------------------------------------------------------------------------------- */

const toggleSpinner = (showSpinner) => {
    document.getElementById('spinner').style.display = showSpinner
}

const toggleSearchResult = (searchResult) => {
    document.getElementById('meals').style.display = searchResult
}

const searchText = () => {
    const searchInput = document.getElementById('search').value;


    toggleSpinner('block')

    toggleSearchResult('none')
    loadMealData(searchInput);
    document.getElementById('search').value = '';

}



const loadMealData = (search) => {
    // const search = document.getElementById('search')
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealData(data.meals))
}

// loadMealData('fish')


const displayMealData = meal => {
    const displayMeals = document.getElementById('meals');
    displayMeals.textContent = ''
    // console.log(meal)

    if (!meal) {
        document.getElementById('error').style.display = 'block';
        toggleSpinner('none');
    }


    meal?.forEach(showMeals => {
        const creatingDiv = document.createElement('div');
        creatingDiv.innerHTML = `
        <h1>${showMeals.strMeal}</h1>
        <button onclick="loadDetails('${showMeals.strMeal}')">click</button>
        `

        displayMeals.appendChild(creatingDiv);
        document.getElementById('error').style.display = 'none';
        toggleSpinner('none');
        toggleSearchResult('block')
    });

}


const loadDetails = detailInfo => {
    console.log(detailInfo)
}