// toggleBar




// Fetch the data

// Selecting Dom Elements
let btnSearch = document.querySelector('.btn-search');
const listOfMeals = document.getElementById('card');
const detailedContent = document.querySelector('.detailed-content');
let formError = document.querySelector('.error');
let fullName = document.getElementById('full-name');
let userEmail = document.getElementById('email');
let contactBtn = document.querySelector('.contact-btn');
let contactInfo = document.querySelector('.info-results');


// Listening to Event
btnSearch.addEventListener('click', getMealList);
contactBtn.addEventListener('click', getContactInfo)

function getMealList() {
    let searchInput = document.getElementById('search-input');
    searchInput = searchInput.value.trim(); // trim clears whitespaces
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.meals[0].idMeal);
        let html = '';

        if (searchInput == "") {
            formError.innerHTML = `
                <span>Meal must be filled out!</span>
            `
        } else if (searchInput != '') {
            formError.innerHTML = ''
        }

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
            html = `<p style="color: red;">Sorry, your search did not match our record!</p>`;
        }

        listOfMeals.innerHTML = html;
    });
}

function getContactInfo(event) {
    event.preventDefault();

    fullName = fullName.value.trim();

    userEmail = userEmail.value.trim();

    let html = ''

    html = `
        <h3>Hello <em>${fullName},</em> thank you for contacting us!</h3>
            <div>Name: <span>${fullName}</span></div>
        <div>Email address: <span>${userEmail}</span></div>
    `

    contactInfo.innerHTML = html;
}