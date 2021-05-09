const mongoose=require('mongoose');

mongoose.Promise=global.Promise;//ES6 implementation of Promise

//hook -- Runs once for a test suite
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
      .once('open',()=>{
        console.log('Good to go! Connected MongoDB');
        done();
      })
      .on('error',()=>{
          console.warn('Warning',error)
      });
})



//hook --Runs before each test
beforeEach((done)=>{
  mongoose.connection.collections.users.drop(()=>{
    //Ready to execute next test
    done();
  });
});