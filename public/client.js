//define HTML elements
const formElement = document.querySelector("form");
const textArea = document.querySelector("textarea");
const outputElement = document.getElementById("output");

//handle from submission
formElement.addEventListener("submit", async (e) => {
    //prevent page reload
    e.preventDefault();

    //show loading status
    outputElement.innerText = "Loading ....";

    //make a POST request to/completion endpoint with textarea's text
    const response = await fetch("/completion", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ message: textArea.value}),
    });

    //convert the response to json
    const data = await response.json();

    //show the answer resp. the error
    if (data.answer) {
            outputElement.innerText = data.answer;
    } else if (data.error) {
            outputElement.innerText = "";
            window.alert(data.error);
    }
});