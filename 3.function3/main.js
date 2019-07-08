  //将字符串转为ASCII数组
    //将ASCII数组排序
    //将排序后的数组转换为字符串
    function alphabetSort(message){
        // wirte your code here
        var messagelow = message.toLowerCase();
        var numArr=[];
        for(var i=0;i<messagelow.length;i++){
            var num = messagelow.charCodeAt(i);
            numArr.push(num);
        }
        var numArrNew = numArr.sort(sortNumber);
        var messageNew = '';
        for(var j=0;j<numArrNew.length;j++){
            messageNew+= String.fromCharCode(numArrNew[j]);
        }
      return messageNew;
    }
    function sortNumber(a,b)
    {
        return a - b
    }

    alert(alphabetSort('hello')); // should return 'ehllo'
    alert(alphabetSort("testadbldbffxweg"));