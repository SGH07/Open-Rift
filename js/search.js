const form = document.getElementById("search")
const searchInput = document.getElementById("searchInput")

function startSearch(result) {
    const value = searchInput.value
    
    result.preventDefault();

    searchResult(value)
}

form.addEventListener("submit", startSearch)



