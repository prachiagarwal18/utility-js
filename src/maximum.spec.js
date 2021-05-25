const maximum=require('./maximum')
describe('Maximum',()=>{
    it('Maximum of [] is undefined',()=>{
        expect(maximum([])).toEqual(undefined);
    })
    it('Maximum element in [2,66,3,55,123,9,7,0] is 123',()=>{
        var a=[2,66,3,55,123,9,7,0];
        expect(maximum(a,a.length)).toEqual(123);
    })
})
