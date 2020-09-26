var request = new XMLHttpRequest()

request.open('GET', 'https://random-word-api.herokuapp.com/word?number=1', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach((word) => {
            console.log(word)
            var app = document.getElementById('word');
            app.innerHTML = word;
        })
    } else {
        console.log('error')
    }
}

request.send()


