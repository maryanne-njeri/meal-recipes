// Fetch the data

// Selecting Dom Elements
let btnSearch = document.querySelector('.btn-search');
const listOfMeals = document.getElementById('card');
const detailedContent = document.querySelector('.detailed-content');

// Listening to Event
btnSearch.addEventListener('click', getMealList);

function getMealList() {
    let searchInput = document.getElementById('search-input');
    searchInput = searchInput.value.trim(); // trim clears whitespaces
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}