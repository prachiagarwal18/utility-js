const tail=require('./tail');
describe('Tail',()=>{
   it('Tail of empty array is undefined', () => {
        var array = []
        expect(tail(array)).toEqual(undefined);
    });
   it('Should return array after reoving the first element',()=>{
                var arr=[1,2,3,4]
                expect(tail(arr)).toEqual([2,3,4]);
            });
   
})
