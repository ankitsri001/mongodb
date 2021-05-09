const assert=require('assert');
const User=require('../src/user');

describe('Creating records',()=>{

    it('saves a user',(done)=>{
        const userInstance=new User({name:"Ankit"});
        userInstance.save()
        .then((res)=>{
            //is Save successful
            assert(!userInstance.isNew);
            done();
        });
        
        
    });
});