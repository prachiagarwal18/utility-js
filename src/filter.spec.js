const filter=require('./filter')
var filterToBeApplied;
describe('Filter',() =>{
    it('filter([], x => true) should give [] ', () =>{
        filterToBeApplied=x=>true;
        expect(filter([],filterToBeApplied)).toEqual([]);
    })
   

})