//const Arithmetic = require('./arithmetic.js');

class Cal{
    constructor(ope) {
        this._ope = ope;
    }

    get ope(){
        return this._ope
    }
    set ope(ope){
        this._ope = ope
    }

    element(){
        let n = 0;
        let num = "";
        let list = [];
        for (n in this._ope){
            let character = this._ope[n]
            if (character == "+"|| character == "-"|| character == "*"|| character == "/"){
                list.push(parseInt(num));
                list.push(character);
                num = ""
            }else if((this._ope.length-1) == n){
                num += character;
                list.push(parseInt(num))
            }else{
                num += character;
                console.log(num)
            }
        }
        console.log(list)
        return list;
    }

    calculate(list){
        let flag = false;
        for (let index = 0; index < list.length; index++) {
            let element = list[index];
            let numRight = list[index+1];
            let numLeft = list[index-1];
            if (element == "*"){
                let result = numRight * numLeft;
                list[index] = result;
                list.splice(index+1, 1);
                list.splice(index-1, 1);
                flag = true;
                break;
            }else if (element == "/"){
                let result = numLeft/numRight;
                list[index] = result;
                list.splice(index+1, 1);
                list.splice(index-1, 1);
                flag = true
                break;
            }
        }
        if (!flag){
            for (let index = 0; index < list.length; index++) {
                let element = list[index];
                let numRight = list[index+1];
                let numLeft = list[index-1];
                if (element == "+"){
                    let result = numRight + numLeft
                    list[index] = result
                    list.splice(index+1, 1)
                    list.splice(index-1, 1)
                    break
                }else if (element == "-"){
                    let result = numLeft-numRight
                    list[index] = result
                    list.splice(index+1, 1)
                    list.splice(index-1, 1)
                    break
                }
            }
        }

        if (list.length == 1){
            return list[0]
        }else {
            return this.calculate(list)
        }
    }

    comprobate(){
        let n = 0
        for (n in this._ope){
            let character = this._ope[n] 
            let cast = parseInt(character)
            if(!isNaN(cast)){
                continue
            }else if (character == "+"|| character == "-"|| character == "*"|| character == "/"){
                continue
            }else{
                return false;
            }
        }
        return true
    }
}

var strInput = "4*2+5/2/2"

if (strInput.length > 20){
    console.log("The string exceeds 20 long")
}else{
    var newOpe1 = new Cal(strInput);
    var flag =  newOpe1.comprobate();
    if(flag){
        var list =  newOpe1.element();
        var result = newOpe1.calculate(list);
        console.log(result)
    }else{
        console.log("Input Error")
    }
}
