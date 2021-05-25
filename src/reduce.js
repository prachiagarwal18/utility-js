const reduce=(array,reductionMethod,additionalVar) =>{
    if(additionalVar===undefined){
        try{
            return array.reduce(reductionMethod);
        }
        catch(error){
            return undefined;
        }
    }
    else{
        return array.reduce(reductionMethod,additionalVar);
    }
}
module.exports = reduce