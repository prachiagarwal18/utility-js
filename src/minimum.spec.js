const minimum=require('./minimum');
describe('Minimum',()=>{

    it('minimum of empty array is undefined',()=>{
        expect(minimum([],0)).toEqual(undefined);
    })
    it('Minimum of [2,4,3] should be 2',()=>{
        expect(minimum([2,4,3],3)).toEqual(2);
    })
    it('Minimum of [2,4,3] should be 2',()=>{
        var testArray=[-11,2,3,4,0]
        expect(minimum(testArray,testArray.length)).toEqual(-11);
    })
})
