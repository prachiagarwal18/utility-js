const minElement=(num1,num2)=>(num1<num2)?num1:num2;
const minimum = (array,size)=>{
    if(size==0)
        return undefined;
    else if(size==1)
        return array[0];
    else{
        return minElement(array[size],minimum(array,size-1));
    }
}
module.exports=minimum;