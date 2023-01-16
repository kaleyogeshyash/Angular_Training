
// check Palindrome 

function checkPalindrome(string:string) {

    const len = string.length;
    
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//Test
const sample2 = "radar";
const value = checkPalindrome(sample2);
console.log(value);
