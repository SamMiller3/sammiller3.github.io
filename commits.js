function csharpCommits() {
  fetch('https://api.github.com/repositories/331731691/stats/contributors')
    .then(response => response.json())
    .then(data => { 
      const parseText = String(data[0].total);
      document.getElementById("totalCommitsCSharp").innerHTML = parseText + " contributions in the last year";
    })
    .catch(error => {
      console.error("Error fetching C# commits:", error);
    });
}

function pythonCommits() {
  fetch('https://api.github.com/repositories/331721824/stats/contributors')
    .then(response => response.json())
    .then(data => {
      const parseText = String(data[0].total);
      document.getElementById("totalCommitsPython").innerHTML = parseText + " contributions in the last year";
    })
    .catch(error => {
      console.error("Error fetching Python commits:", error);
    });
}

pythonCommits();
csharpCommits();
