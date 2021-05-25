const tail=require('./tail');
describe('Tail',()=>{
   it('Tail of empty array is undefined', () => {
        var array = []
        expect(tail(array)).toEqual(undefined);
    });
   
})
