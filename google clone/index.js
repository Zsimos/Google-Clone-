function performSearch() {
    var searchQuery = document.getElementById('search-box').value;
    if (searchQuery.trim() !== "") {
        // For simplicity, let's just log the search query to the console.
        console.log("Performing search for: " + searchQuery);
    }
}
