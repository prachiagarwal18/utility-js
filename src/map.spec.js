const map = require('./map');

describe('Map',() => {
    it('Map of empty array shuld return empty array',()=>{
        expect(map([],'cube')).toEqual([]);
    });

    it('Map of [2,3,4],cube is [8,27,64]',()=>{
        expect(map([2,3,4],'cube')).toEqual([8,27,64]);
    });
    it('Map of [1,2,3,4],identity is [1,2,3,4]',()=>{
            expect(map([1,2,3,4],'identity')).toEqual([1,2,3,4]);
    });
    it('Map of a.x with a.x+1 should give 11', () => {
        
        expect(map(10)).toEqual(11);
    });
})





// const map = require('./map');

// describe('Map', () => {
    
//     it('Map of empty list should return empty list', () => {
//         let list = []
//         expect(map(list, x => x**3)).toEqual([]);
//     });

//     it('Map of [1,2,3] with cube function should give [1,8,27]', () => {
//         let list = [1,2,3]
//         expect(map(list, x => x**3)).toEqual([1,8,27]);
//     });

//     it('Map of [1,2,3] with Identity function is [1,2,3]', () => {
//         let list = [1,2,3]
//         expect(map(list, x => x)).toEqual([1,2,3]);
//     });
    
    // it('Map of a.x with a.x+1 should give 11', () => {
    //     let a = {x:10}
    //     expect(map([a],Obj => Obj.x + 1)).toEqual([11]);
    // });
    

// })
