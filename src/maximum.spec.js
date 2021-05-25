const maximum=require('./maximum')
describe('Maximum',()=>{
    it('Maximum of [] is undefined',()=>{
        expect(maximum([])).toEqual(undefined);
    })
})