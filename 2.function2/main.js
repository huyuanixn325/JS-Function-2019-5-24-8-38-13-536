 function palindrome(str){
        var len = str.length;
        for(var i=0; i<len;i++){if(str.charAt(i)!=str.charAt(len-1-i)){
           return false;
        }else{
            return true;
        }
        }
    }

alert(palindrome('hello')); // should return false
alert(palindrome('abcba')); // should return true