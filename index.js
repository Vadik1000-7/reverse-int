module.exports = function reverse (n) {
    if(n > 0){
        let str = String(n);
        let arr = str.split('');
        let arrReverse = arr.reverse();
        let stringFromArray = arrReverse.join('');
        let result = Number(stringFromArray);
        return result;
    }
    
    if(n < 0){
        n = n * (-1);
        let str = String(n);
        let arr = str.split('');
        let arrReverse = arr.reverse();
        let stringFromArray = arrReverse.join('');
        let result = Number(stringFromArray);
        return result;
    }
    }