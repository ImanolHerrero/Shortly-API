

//5a0d1fda729903745df8ed9a68aacc452b4ec
function UrlFetchApp() {
    var form = document.getElementById("frm1");
    var text = "";
    text += form.elements[0].value;

    var myHeaders = new Headers();
    myHeaders.append("apikey", "CJj2HzX8m8tjIiqniHeVzNXyCzFuTAvk");


    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: text
    };

    fetch("https://api.promptapi.com/short_url/hash", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.short_url);
            document.getElementById("demo").value = result.short_url;
            var copyText = document.getElementById("demo");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
        })

        .catch(error => console.log('error', error));
}





