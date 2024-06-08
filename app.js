//1.поменять местами буквы в строке
// 'hi' ---> 'ih'
// 'hello' ---> 'olleh'
function reverseString (str) {
     //а.  return str.split('').reverse().join('')

     //б.  let reverse = '';
    // for(let char of str) {
    //     reverse = char+reverse;
    // }
    // return reverse;

    //в.
    let reverse = '';
    for(let i=0;i<str.length;i++) {
        reverse = str[i]+reverse
    }
    return reverse;
}

console.log(reverseString('hello'))

//2.поменять местами цифры в числе
// 123 ---> 321
//-90 --->-9
//-15 -->-51
function reverseNum (num) {
    let str= String(num).split('').reverse().join('');
    return parseInt(str)*Math.sign(num);
}

console.log(reverseNum('1123'))
console.log(reverseNum('-90'))
console.log(reverseNum('-15'))

// 3. Палиндромы. true, если палиндром, false, если нет
//'kayak' === true
//'madam'===true

function getPalindrome(str){
    
}