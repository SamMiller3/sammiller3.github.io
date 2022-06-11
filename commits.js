function csharpCommits() {
    parseText=String(this.responseText);
    i=19;
    while (parseText.slice(i,i+1) != ","){
        i+=1;
    }
    parseText=parseText.slice(19,i);
    document.getElementById("totalCommitsCSharp").innerHTML = parseText + " contributions in last year";
  }
function pythonCommits() {
    parseText=String(this.responseText);
    i=19;
    while (parseText.slice(i,i+1) != ","){
        i+=1;
    }
    parseText=parseText.slice(19,i);
    document.getElementById("totalCommitsPython").innerHTML = parseText + " contributions in last year";
  }
  var request = new XMLHttpRequest();
  request.onload = pythonCommits;
  request.open('get', 'https://api.github.com/repos/IronHead43/python/stats/contributors', true)
  request.send()
  var request = new XMLHttpRequest();
  request.onload = csharpCommits;
  request.open('get', 'https://api.github.com/repos/IronHead43/CSharp/stats/contributors', true)
  request.send()