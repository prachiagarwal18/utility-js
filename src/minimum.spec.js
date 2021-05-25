const minimum=require('./minimum');
describe('Minimum',()=>{

    it('minimum of empty array is undefined',()=>{
        expect(minimum([],0)).toEqual(undefined);
    })
    it('Minimum of [2,4,3] should be 2',()=>{
        expect(minimum([2,4,3],3)).toEqual(2);
    })
})
