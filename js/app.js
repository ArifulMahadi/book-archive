
const searchBook=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    // console.log(searchText);
    searchField.value='';
    if(searchText===''){
        const errorMessage=document.getElementById('error-message')
        errorMessage.innerText='please,type the book name';
      return;
     }
   
    const url=`https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBook(data.docs))
}
const displaySearchBook = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent='';
    if(books.offset === null){
      
        const errorMessage = document.getElementById('error-message')
        errorMessage.innerText = 'No result found,Please search a valid book name';
    }
     books.forEach(book => {
            console.log(book.title);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `  <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class = "card-img-top w-75 mx-auto my-auto">
            <div class="card-body">
              <h5 class = "card-title">Book Name:${book.text[3]}</h5>
              <p class = "card-text">Author Name: ${book.author_name}</p>
              <p class = "card-text">Publisher: ${book.publisher}</p>
              <p class = "card-text">Publishing Year: ${book.first_publish_year}</p>
            </div>
          </div> `
          searchResult.appendChild(div);
        })   
}
