
// check Palindrome 

function checkPalindrome(sample: string) {

   
    let Palidrndrome = (sample) => {
        const len = sample.length;
        for (let i = 0; i < len / 2; i++) {
            if (sample[i] !== sample[len - 1 - i]) {
                console.log('It is not a palindrome');
            }
        }
        console.log('It is a palindrome');
    }
}

//Test
const sample = "TestString";
checkPalindrome(sample);

