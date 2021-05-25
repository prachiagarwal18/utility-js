const map = require('./map');
const cube=(number)=>{return number*number*number};
const identity= (number) => {return number};
describe('Map',() => {
    it('Map of empty array shuld return empty array',()=>{
        expect(map([],cube)).toEqual([]);
    });

    it('Map of [2,3,4],cube is [8,27,64]',()=>{
        expect(map([2,3,4],cube)).toEqual([8,27,64]);
    });
    it('Map of [1,2,3,4],identity is [1,2,3,4]',()=>{
            expect(map([1,2,3,4],identity)).toEqual([1,2,3,4]);
    });
    it('map([a{x : 10}],someObject => someObject.x + 1)  -> [11]', () => {
        expect(map([{ x: 10 }], someObject => someObject.x + 1)).toEqual([11]);  
        // expect(map(10)).toEqual(11);
    });
})
