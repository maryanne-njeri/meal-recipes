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
        // console.log(data.meals[0].idMeal);
        let html = '';

        if (data.meals) {
            data.meals.forEach(meal => {
                // console.log(meal);
                
                html += `
                    <div class="card-item" data-id="${meal.idMeal}">
                        <img src="${meal.strMealThumb}" alt="food">
                        <div class="description">
                            <h4>${meal.strMeal}</h4>
                            <div class="card-link-holder">
                                <a href="#" class="recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else {
            html = 'Sorry, your search did not match our record!';
        }

        listOfMeals.innerHTML = html;
    });
}