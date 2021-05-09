const assert=require('assert');
const User=require('../src/user');

describe('Read users from DB',()=>{
    let userInstance;

    beforeEach((done)=>{
        userInstance=new User({name:"Ankit"});
        userInstance.save()
            .then(()=>done());
    });
    it('find all users with a name Ankit',(done)=>{
        User.find({name:'Ankit'})
            .then((res)=>{
                assert(res[0]._id.toString()===userInstance._id.toString());
                done();
            });

    });
    it('find single user with a particular id',(done)=>{
        User.findOne({_id:userInstance._id})
            .then((user)=>{
                assert(user.name==="Ankit");
                done();
            });

    });

});