const maxElement = (number1, number2) => (number1>number2)?number1:number2;

const maximum = (array, size) => {
    if(size==0)
        return undefined;
    else if( size == 1)
        return array[0];
    else
        return maxElement(array[size], maximum(array, size - 1));
} 

module.exports = maximum;
