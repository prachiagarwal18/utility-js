const reduce=require('./reduce');
var reductionMethod;
describe('Reduce',()=>{
    it('reduce([],(x,y)=>x+y) should give undefined',() =>{
        reductionMethod=(x,y)=>x+y;
        expect(reduce([],reductionMethod)).toEqual(undefined);
    })
    it('reduce([],v(x,y)=>x+y,10) should give 10',()=>{
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    })
    it('reduce([a,b,c],(x,y)=>x+y shoud give abc',()=>{
        expect(reduce(['a', 'b', 'c'], (x,y)=>x+y)).toEqual('abc');
    })
    it('reduce([a, b, c], (x,y)=>x+y,z) should give zabc', () => {
        expect(reduce(['a', 'b', 'c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
})