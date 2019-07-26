
// 7. O functie care intoarce suma primelor N numere prime

function numarPrim(n) {
    let s=0;
    for (i = 2; i < n; i++) {
        if (n[i] % i === 0) {
            s+=n[i];
        }
        return s
    }
    
}
console.log(numarPrim(5));


//10. O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array

function search(numberList, nr1){
    
    for(let i = 0; i <= numberList.length; i++) {
        if(numberList[i] === nr1){
            return true;  
        }        
    } 
    return false;
}
console.log(search([1, 2, 4, 6], 6));

//11. O functie care intoarce maximul dintr-un array primit ca parametru

function searchMax(numberList){
    
    for(let i = 0; i < numberList.length; i++) {
        var biggestNum = 0;
        if(numberList[i] > biggestNum){
            biggestNum = numberList[i];       
        }
          
    } 
    return biggestNum;
}
console.log(searchMax([1, 2, 4, 6, 20]));


//12. O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru

function sumMinMax(numberList){
    var biggestNum = numberList[0];
    var smallestNum = numberList[0];
    
    
    for(let i = 0; i < numberList.length; i++) {
        if(numberList[i] > biggestNum){
            biggestNum = numberList[i];     
        }  
       else if (numberList[i] < smallestNum){
            smallestNum = numberList[i];
            } 
    } 
    return smallestNum+biggestNum;
}
console.log(sumMinMax([1,2,3,5,6]));


//13. O functie care verifica daca exista duplicate intr-un array primit ca parametru

function duplicNum(numberList){
    var count = [];
    for(var i = 0; i <= numberList.length; i++) {
        if (count[numberList[i]] === undefined) {
            count[numberList[i]] = 1;
        } else {
            return true;
        } 
    }
    return false;
}
console.log(duplicNum([1,2,5,7,9]));

//14. O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru

function prodPozitive(numberList){
    var p = 1;
    for(var i = 0; i<numberList.length; i++){
        if (numberList[i]>0){
            p*=numberList[i];
        }
    }
    return p;
}
console.log(prodPozitive([-1, -2, 3, -3]));

//15. O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba

function polidrom(text) {
    let textReverse = "";
    for(i=text.length-1; i>=0; i--) {
        textReverse+=text[i];
    } if (textReverse.toLowerCase==text.toLowerCase) {
        return true;
    }
    return false;
}

console.log(polidrom("Lupul"));

function strPalindrom(str) {
    for (i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase !== str[str.length - i - 1].toLowerCase) {
            return str + " is not a palindrom"
        }
    }
    return str + " is a palindrom"
}
console.log(strPalindrom("Laura"));
console.log(strPalindrom("acd"));

// Tema JS part 2 

// 1. O functie care primeste un sir de caractere si returneaza cifrele din sirul respectiv

function checkStringForNumbers(input){
  let num = input.match(/\d/g);
  result = num.toString();
  return result;
}
console.log(checkStringForNumbers("Maria are 3 mere."));

// 2. O functie care primeste un sir de caractere si returneaza doar literele din sirul respectiv

function checkStringForLetters(input){
    let num = input.replace(/\d/g,"");
    result = num.toString();
    return result;
  }
  console.log(checkStringForLetters("Maria are 3 mere."));

  //3. O functie care primeste un sir de caractere si returneaza primele 5 litere(daca exista)

  function firstFiveLetters(input){
      let shortstr = input.slice(0,6);
      return shortstr;
  }
console.log(firstFiveLetters("Maria are 3 mere."));

//4. O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate

function strJoin(input){
    let joinedList=input.join();
    return  joinedList;
}
console.log(strJoin(["Banana", "Orange", "Apple", "Mango"]));

//5. O functie care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

/*function numFromList(input){
    let joinLst=input.join();
    for(i=0;i<joinLst.length;i++){
        let d=joinLst.charCodeAt(i);
        if(d<48 || d>57)
        return false;
    }
    return d;
}
console.log(numFromList(["Banana3", "Orange5", "Apple7", "Mango"]));*/

function numFromList(input){
    let jnLst=input.join();
    let num=jnLst.match(/\d/g);
    return num;
}
console.log(numFromList(["Banana3", "Orange5", "Apple7", "Mango"]));

//6. O functie care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate

function charListReversed(input){
    let jnLst=input.join();
    let newStr="";
    for(i=jnLst-1;i>=0;i--){
        newStr+=jnLst[i];
    }
    return newStr;
}
console.log(charListReversed(["a","b","l","s"]));

//7. Calculeaza factorialul unui numar

function factorial(n1){
if(n1===0){
    return 1;
    }else{
        return n1*factorial(n1-1);
        }
}
console.log(factorial(5));

//8. Calculeaza cel mai mare divizor comun al 2 numere (Euclid: n1=34,n2=18 gcd(34,18)=gcd(18,34%18=16)=gcd(16,18%16=2)=gcd(2,16%2=0) )

function gCD(n1,n2){
    if(n2==0){
        return n1;
    } else{
        var remainder = n1%n2;
        return gCD(n2,remainder);
    }
}
console.log(gCD(18,34));

//9. Calculeaza cel mai mic multiplu comun al 2 numere

function cmmmc(n1,n2){
    let max = Math.max(n1,n2);
    let min = Math.min(n1,n2);
    i=max;
    while(i%min!==0){
        i+=max;
    }
    return i;
}

console.log(cmmmc(5,7));
console.log(cmmmc(31,19));

// 10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32])

function divisors(n1){

    arr = [];
    for(i=2;i<n1;i++){
        if(n1%i===0) arr.push(i);
    }
    if(arr.length===0){
        return n1 + " is prime";
    }else{
        return arr;
    }
}

console.log(divisors(20));
console.log(divisors(13));

//11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321)

 function numberPalindrome(n1){
    let rightDigit=0;
    reverseNumber=0;
    while(n1>0){
        n1=parseInt(n1/10);
        rightDigit = Math.floor(n1%10);
        reverseNumber = reverseNumber*10+rightDigit;
    }
    if(n1===reverseNumber){
        return true;
    }
    return false;
}

console.log(numberPalindrome(121));

//12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru.

/*function sortNumerePare(str){
    arrNumre=[];
    arrNumerePare=[];
    let num=str.match(/\d/g);
    arrNumre.push(num);
    for(i=0;i<arrNumre.length;i++){
        if(arrNumre[i]%2===0){
            arrNumerePare.push(arrNumre[i]);
        }
        return false;
    }
    return arrNumerePare;
}

console.log(sortNumerePare("Ana are 6 mere si 7 pere")); */

function sortNumPare(str){
   let arrNum=[]; 
   let arrNumPare=[];
    for(i=0;i<str.length;i++){
        if(str[i]=str.match(/\d/g)) {
            arrNum.push(str[i]);
        } for(j=0;j<arrNum.length;j++){
            if(arrNum[j]%2===0){
                arrNumPare.push(arrNum[j]);
            }
        }
    }
    return arrNumPare;
}
console.log(sortNumPare("Ana are 6 mere si 7 pere"));

// 13   . Sortare arr, nr pare ascendent, nr impare descendent 

function sortArray(arr){
    let arrPar=[];
    let arrImpar=[];
    let finalArr=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            arrPar.push(arr[i]);
            arrPar.sort(function(a,b){return a-b});
        }else{
            arrImpar.push(arr[i]);
            arrImpar.sort(function(a,b){return b-a});
        }
    }
    return finalArr=arrPar.concat(arrImpar);
}

console.log(sortArray([2,30,15,26,4,7]));

//14. binary search pentru a verifica daca un numar se regaseste intr-un array.
//Dupa ce se termina executia functiei trebuie sa puteti afisa de cate ori s-a apelat functia recursiv.

function binarySearchCount(arr,n1){
    minIndex = 0;
    maxIndex = 0;
    arr.sort(function(a,b){return a-b});

    for(i=0;i<arr.length;i++){
        if(arr[i]==n1){
            minIndex = arr[i];
        }
        
    }
    for(j=arr.length-1;j>0;j--){
        if(arr[j]==n1){
            maxIndex=arr[j];
        }
       
    }

    return (maxIndex - minIndex +1);
}

console.log(binarySearchCount([2,30,15,26,4,7],4));

