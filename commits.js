function outputTotalCommits() {
    parseText=String(this.responseText);
    i=19;
    while (parseText.slice(i,i+1) != ","){
        i+=1;
    }
    parseText=parseText.slice(19,i)
    document.getElementById("totalCommits").innerHTML = parseText + " contributions in last year";
  }
  var request = new XMLHttpRequest();
  request.onload = outputTotalCommits;
  request.open('get', 'https://api.github.com/repos/IronHead43/python/stats/contributors', true)
  request.send()