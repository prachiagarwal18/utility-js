const filter=require('./filter')
var filterToBeApplied;
describe('Filter',() =>{
    it('filter([], x => true) should give [] ', () =>{
        filterToBeApplied=x=>true;
        expect(filter([],filterToBeApplied)).toEqual([]);
    })
   it('filter([1,2,3],x => false) should give []',()=>{
    filterToBeApplied=x=>false;
    expect(filter([1,2,3],filterToBeApplied)).toEqual([]);
})
    it('filter([1,2,3],x => x > 1 should give x>1',()=>{
    filterToBeApplied=x=>x>1;
    expect(filter([1,2,3],filterToBeApplied)).toEqual([2,3]);
})

})
