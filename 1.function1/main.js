function reverseString(message){
        // wirte your code here
        var result='';
        for(var i =message.length;i>=0;i--){
            result+=message.substring(i-1,i);
        }
        return result;
    }
    var test=reverseString("hello");
    alert(test); // should return 'olleh'