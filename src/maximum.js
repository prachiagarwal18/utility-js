var array=[1,2,3,4]
const maximum= (array)=>{
    if (array.length==0) {
        return undefined;
    }
    else{
        return Math.max.apply(array);
    }
}
module.exports=maximum;