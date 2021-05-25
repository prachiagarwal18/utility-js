const minimum=require('./minimum');
describe('Minimum',()=>{

    it('minimum of empty array is undefined',()=>{
        expect(minimum([],0)).toEqual(undefined);
    })
})