const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function(){
    const searchText = searchInput.value;
    console.log(searchText)

})




































// const loadBooks = () => {
//     fetch("http://openlibrary.org/search.json?q=${searchText}")
//     .then(res => res.json())
//     .then(data => displayBooks(data))
// }
// loadBooks()

// const displayBooks = books => {
//     const searchText = document.getElementById('input-field')
//     books.forEach(book => {
        
//     })
// }