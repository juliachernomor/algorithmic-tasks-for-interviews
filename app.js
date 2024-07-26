//1.поменять местами буквы в строке
// 'hi' ---> 'ih'
// 'hello' ---> 'olleh'
function reverseString (str) {
     //а. 
     //  return str.split('').reverse().join('')

     //б. 
     //  let reverse = '';
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
    return parseInt(str)*Math.sign(num);//Math.sign(num)-возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём
}
console.log(reverseNum('1123'))
console.log(reverseNum('-90'))
console.log(reverseNum('-15'))

// 3. Палиндромы. true, если палиндром, false, если нет. Палиндром - строка, которая образует одно и то же слово в обратном порядке
//'kayak' === true
//'madam'===true

function getPalindrome(str){
    //a.  
    // let trs = str.split('').reverse().join('');
    // return str===trs ? true : false;

    //б.  
    // let trs = str.split('').reverse().join('');
    // if(str === trs) {
    //     return true;
    // }
    // return false

    // в. метод every
    //  const massStr = str.split('');
    //  const trs = str.split('').reverse();
    //     // return massStr.every((letter, i) =>{return letter===trs[i]}) //Если есть {}, то нужен явный возврат
    //  return massStr.every((letter, i) =>  letter===trs[i]) // когда удаляешь фигурные скобки, это будет неявный возврат, который означает, что не нужно указывать return

    // г. техника двух указателей
        let left=0; // левый указатель(начало фрагмента, индекс )
        const a = str.replaceAll(' ','');
        console.log(a)
        for(let right = a.length-1; right >=0; right--) { //сдвигаем прав границу на 1
            if(a[left] === a[right]) {
                left +=1;
            } else {
                return false;
            }
        }
        return true;
    }
console.log(getPalindrome('kayak'));
console.log(getPalindrome('madam'));
console.log(getPalindrome('hfhhhhds'));
console.log(getPalindrome('sum summus mus'))

// // 4.найти максимальное кол-во идущих подряд символов(длина непрерывной последовательности), среди которых символ у встречается не боле 2 раза
// function getSubStringY(str) {
//     let countY=0;//сколько раз встречается Y на отрезке Left - Right 
//     let left=1; // левый указатель(начало фрагмента, индекс )
//     let m=0;//max длина 
//     for(let right = 1; right <= str.length; right++) { //сдвигаем прав границу на 1
//         if(str[right] === 'Y') { //включил Y во фрагмент 
//             countY += 1
//             // console.log(str[right])
//             // console.log(countY)
//         }
//         while (countY >2) { //пока отрезок плохой - двигаю левую границу, чтобы он был хорошим
//             if (str[left] == 'Y'){//убираем 1 Y из фрагмента
//                 countY -= 1//убираем единицу
//             }
//             left += 1//сдвигаем левую границу
//         }
//         // console.log(right)//0 1 2 3 4 5 6 7 8 9 10 11
//         console.log(left)//0 1 2
//         m = Math.max(right-left);
//     }
//     // console.log(left)
//     return m;
// }
// // console.log(getSubStringY('BYNDKLYDHYSK')) //NDKLYDHYSK -10
// console.log(getSubStringY('BYCDYVYWXYZ'))// CDYVYWX -7

// //5. найти максимальное кол-во идущих подряд символов(длина непрерывной последовательности), среди которых символ A встреч не более 700 раз, а Е(один в коде) не встречается совсем
// function getSubstringA(str) {
//     let right=0;
//     let countA=0;//сколько раз встречается A на отрезке Left - Right 
//     let left=0; // левый указатель(начало фрагмента, индекс )
//     let m=0;//max длина 
//     for(let i = 0; i <= str.length-1; i++) { //сдвигаем прав границу на 1
//         if(str[i] == 'A'){
//             countA += 1;
//             right += str[i];
//             console.log(right)
//           }
//         if(str[i] == 'E') {
//             left = i+1;
//             countA = 0;
//             right = i;
//             console.log(right)
//         }
        
//         while( countA >700) {    
//             if (str[left] == 'A'){//убираем 1 A из фрагмента
//                 countA -= 1//убираем единицу
//             }
//             left += 1//сдвигаем левую границу
//         }
      
        
//     }
//       m = Math.max(right)-Math.max(left);
//     return m;
// }


// console.log(getSubstringA('ADGEIGHUIKAAAAAATT')) //IGHUIKAAAAAATT -14
// // console.log(getSubstringA('HGJFSAAAJKASHJAAGEHAAAAAAAAAAAAAF'))//HGJFSAAAJKASHJAAG-17

/*//задав строку верните символ, который чаще всего используется в строке
// // 1 вариант
// function maxChar(str){
//     let obj={};
//     let max=0;
//     let maxLetter='';
//     str.split('').forEach((element) => {
//         if(obj[element]){
//             obj[element] = obj[element] + 1;
//         } else {
//             obj[element] = 1;
//         }
//     });
// for(let [key,value] of Object.entries(obj)){
//     if(value>max) {
//         max= value;
//         maxLetter=key
//     }
// }
// return maxLetter
// }

// // 2 вариант
// function maxChar(str){
//     let obj={};
//     let max=0;
//     let maxLetter='';
//     for(let char of str) {
//         obj[char]=obj[char]+1||1; // if(obj[element]){obj[element] = obj[element] + 1;} else {obj[element] = 1;}
//     };
// for(let key in obj){
//     if(obj[key]>max) {
//         max= obj[key];
//         maxLetter=key
//     }
// }
// return maxLetter
// }
// console.log(maxChar('abccccccccd'))
// console.log(maxChar('abc1111ccчовочоллаовгыкыкыааааааааааааааиьььььььььььььььььььььььььььь'))

// 3 вариант
function maxChar(str){
    let obj={};
    let max=0;
    let maxLetter='';
    for(let char of str) {
        obj[char]=obj[char]+1||1; // if(obj[element]){obj[element] = obj[element] + 1;} else {obj[element] = 1;}
    };
for(const  [key, value] of Object.entries(obj)){//Object.entries(obj) - массив [ключ, значение],[ключ, значение],[ключ, значение]
    if(value>max) {
        max = value;
        maxLetter=key;
    }
}
return maxLetter
}
console.log("===")//true
console.log(maxChar('abccccccccd'))
console.log(maxChar('abc1111ccчовочоллаовгыкыкыааааааааааааааиьььььььььььььььььььььььььььь'))
*/




/*//содержит ли строка a те же символы, что и строка В (грязеводолечебница - водогрязелечебница, бокал - колба(анаграммы)
//анаграммы
function anagr(str1,str2) {
    let obj1={};
    let obj2={};
    for(let letter of str1){
        obj1[letter]=obj1[letter]+1||1;
    }
    for(let letter of str2){
        obj2[letter]=obj2[letter]+1||1;
    }
    if (Object.keys(obj1).length !== Object.keys(obj1).length) {
        return false;
    }
    for (let char in obj1) {
        if(obj1[char] !== obj2[char] ) {
            return false;
        }
    }
    return true;
}
console.log(anagr('ласка','скала'))
console.log(anagr('нос','лоб'))
console.log(anagr('ласка','сскала'))
*/




/*//есть ли в данной строке повторяющиеся символы? если да, то true
function moreThanOne(str1) {
    let obj ={};
    for (let letter of str1){
        obj[letter]=obj[letter]+1||1;
    }
    for (let key in obj) {
        if (obj[key] >1){
            return true;
        }
        return false;
    }
}
console.log("===")//true
console.log(moreThanOne("hhfghjljljjljkl"))//true
console.log(moreThanOne("asdfghjkl"))//false
*/

/*// массив делить на подмассивы  [1,2,3,4,5,6,7,8,9,0,65,43]-->[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0, 65, 43 ] ]
// 1способ (мое решение)
function subMass(mass, number) {
    let initialMass=mass.slice();
    let sub=[];
    for(let i=0; i<initialMass.length/number;i++){
    sub.push(mass.splice(0,number));
    }
    return sub;
}
console.log(subMass([1,2,3,4,5,6,7,8,9,0,65,43], 3))
*/


/*// 2вариант
function subMass(mass, number) {
    let sub=[];
    let index=0;
    for(let i=0; i<mass.length/number;i++){
        sub.push(mass.slice(index,index+number));
        index+=number
    }
    return sub;
}

console.log(subMass([1,2,3,4,5,6,7,8,9,0,65,43], 3))*/

/*// 3вариант
function subMass(mass, number) {
    let sub=[];
    let index=0;
    while (index<mass.length){
        sub.push(mass.slice(index,index+number));
        index+=number
    }
    return sub;
}

console.log(subMass([1,2,3,4,5,6,7,8,9,0,65,43], 5));*/

/*// capitalize изменить первую букву а и б сидели на трубе, а упала-->А И Б Сидели На Трубе, А Упала
function capitalize(str){
    let mass = str.split(" ");
    let result=[];
for (let letter of mass) {
    result.push(letter[0].toUpperCase() + letter.slice(1));
}
return result.join(" ");
}

console.log(capitalize("а и б сидели на трубе, а упала"))*/

/*// capitalize изменить первую букву а и б сидели на трубе, а упала-->А И Б Сидели На Трубе, А Упала
function capitalize(str){
    return str.split(" ").map(letter=>letter[0].toUpperCase() + letter.slice(1)).join(" ");
}

console.log(capitalize("а и б сидели на трубе, а упала"))
*/

function anagram2(str1, str2) {
    let obj1={};
    let obj2={};
    const first=str1.toLowerCase().replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    const second=str2.toLowerCase().replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');

    for( let letter of first) {
        obj1[letter]=obj1[letter]+1||1
    }
    for( let letter of second) {
        obj2[letter]=obj2[letter]+1||1
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {return false}
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true
    }
    console.log("===")
    console.log(anagram2("coding money", "money coding"))
    console.log(anagram2("RAIL! SAFETY!", "fairy tales"))