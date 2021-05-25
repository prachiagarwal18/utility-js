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


