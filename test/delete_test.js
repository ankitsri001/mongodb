const assert=require('assert');
const User=require('../src/user');

describe('Deleting a user',()=>{

    let userInstance;
    beforeEach((done)=>{
        userInstance= new User({name:'Ankit'});
        userInstance.save().then(()=>done());
    });

    it('model instance remove',(done)=>{
        userInstance.remove()
            .then(()=>User.findOne({name:'Ankit'}))
            .then((user)=>{
                assert(user===null);
                done();
            });
            //Alternate way to use promise return's 
            // .then(()=>User.findOne({name:'Ankit'}))
            //     .then((user)=>{
            //     assert(user===null);
            //     done();
            // })
    });

    it('class instance remove',(done)=>{
        //usually used to remove more than one rec on a giving criteria
        User.remove({name:'Ankit'})
            .then(()=>User.findOne({name:'Ankit'}))
            .then((user)=>{
                assert(user===null);
                done();
            });

    });

    it('class instance findOneAndRemove',(done)=>{
        User.findOneAndRemove({name:'Ankit'})
          .then(()=>User.findOne({name:'Ankit'}))
          .then((user)=>{
            assert(user===null);
            done();
        });
    });

    it('class instance findByIdAndRemove',(done)=>{
        User.findByIdAndRemove(userInstance._id)
        .then(()=>User.findOne({name:'Ankit'}))
        .then((user)=>{
          assert(user===null);
          done();
      });
    });
});