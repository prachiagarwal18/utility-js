const map = (array,function_performed)=>{
    if(array.length==0){
        return [];
    }
    else if(function_performed== 'identity'){
        return identity(array);
    }
    else if(function_performed=='cube'){
        return cube(array);
    }
    else{
        return array+1;
    }
}
const identity= (array) =>{
    return array;
}
const cube =(array) =>{
    var arr_new=[],index=0;
    array.forEach(element => {
        arr_new[index]=element*element*element;
        index++;

    });
    return arr_new;
}


module.exports = map;


// const head = require('./head')
// const tail = require('./tail')
// let resultingList=[]
// const compute= (callbackFunction,list,listLength)=>{
//     if (resultingList.length!=listLength){
//     if(list.length > 0) {
//         resultingList.push(callbackFunction(head(list)));
//         return compute(callbackFunction,tail(list),listLength)
//     }}
//     let answer = resultingList
//     resultingList=[]
//     return answer 
// }
// const map = (list, callbackFunction) => {
//     var listLength = list.length
//     let result = compute(callbackFunction,list,listLength)
//     return result;
// }

// module.exports = map;