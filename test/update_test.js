const assert=require('assert');
const User=require('../src/user');

describe('Updating records',()=>{
let userInstance;

    beforeEach((done)=>{
        userInstance=new User({name:"Ankit"});
        userInstance.save()
            .then(()=>done());
    });

    const assertName=(operation,done)=>{
        operation
        .then(()=>User.find({}))
            .then((users)=>{
                assert(users.length===1);
                assert(users[0].name==='Ankita');
                done();
            });
    };

    it('instance update using set and save',(done)=>{
        //used to update a property in memory for model
        userInstance.set('name','Ankita');
        assertName(userInstance.save(),done);
    });

    it('instance update using update method',(done)=>{
        assertName(userInstance.update({name:'Ankita'}),done);
    });

    it('class update using updateOne method',(done)=>{
        assertName(User.updateOne({name:'Ankit'},{name:'Ankita'}),done);
    });

    it('class update using updateMany method',(done)=>{
        assertName(User.updateMany({name:'Ankit'},{name:'Ankita'}),done);
    });

    it('class update using findOneAndUpdate method',(done)=>{
        assertName(User.findOneAndUpdate({name:'Ankit'},{name:'Ankita'}),done);
    });

    it('class update using findByIdAndUpdate method',(done)=>{
        assertName(User.findByIdAndUpdate(userInstance._id,{name:'Ankita'}),done);
    });

    
})