function getAuthorFromParams(defaultAuthor = 'pphatdev') {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('author') || defaultAuthor;
}

async function fetchGithubCommits(author) {
    const response = await fetch(`https://api.github.com/search/commits?q=author:${author}`);
    const data = await response.json();
    return data;
}

// Usage
const author = getAuthorFromParams();
fetchGithubCommits(author)
.then(totalCount => {
    const total = document.getElementById('total');
    total.innerHTML = totalCount.total_count;
})
.catch(error => {
    console.error('Error fetching commits:', error);
});
