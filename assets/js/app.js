// Fetch the data

const fetchData = () => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=egg')
    .then(res => res.json())
    .then(meals => console.log(meals))
}
fetchData()

