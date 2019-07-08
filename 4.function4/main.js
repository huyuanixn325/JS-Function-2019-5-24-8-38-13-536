 function countWords(message){
        // wirte your code here
        var flag = 0;
        var count = 0;
        for(var i=0;i<message.length;i++){
            if(message.charCodeAt(i)==32){
                flag = 1;
            }
            if (flag == 1){
                count++;
                flag = 0;
            }
        }
        return (count+1);
    }
    alert(countWords('Good morning, I love JavaScript.')); // should return 5