function countWords(message){
        // wirte your code here
        var flag = 0;
        var count = 0;
        var regEx = /\s+/g;
        var test=message.replace(regEx,",");
        var numtest=test.split(",");
        for (var i=0;i<numtest.length;i++){
            if(numtest[i]!=null&&numtest[i]!=" "&&numtest[i].length>0){
               count++;
            }
        }
        return count;
    }
    alert(countWords('Good morning,I love JavaScript.')); // should return 5