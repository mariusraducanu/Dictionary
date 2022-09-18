const textLine = document.getElementById("displayText");
const verifyText = document.getElementById("verifyText");
const printList2 = document.getElementById("printList");
let mySet1 = new Set();
function words() {
    let val = document.getElementById('text').value;
    mySet1.add(val);
    printList();
}
function verifyWords() {
    let word = document.getElementById('verify').value;
    console.log(word);
        if(mySet1.has(word)) {
            verifyText.innerHTML = "This word is in the Dictionary";
        } else {
            verifyText.innerHTML = "This word isn't in the Dictionary";
        }
}
function printList() {
    let text = "";
    mySet1.forEach(function(element) {
        console.log(element);
        text += element;
        text += "\n";
        console.log(text);
    });
    printList2.innerHTML = text;
}