
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);
    return cleanStr === reverseStr;
}

const inputText = document.getElementById('inputText');


function palindromeChecker(){

    const result = document.getElementById('result');
    if (isPalindrome(inputText.value)) {
        result.textContent = '"' + inputText.value + '"' +' is a Palindromes';
    } else {
        result.textContent = '"' + inputText.value + '"' +' is not a Palindromes';
    }
    inputText.value = '';
}
//check the input box is empty or not;


    document.getElementById('checkButton').addEventListener("click", palindromeChecker);

