/**
 * JobsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
  getAll562:function(req,res){
       Jobs.find().exec(function(err,jobs562){
            if(err){
                console.log(err);
                res.send(5000,{err});
            }
            console.log(jobs562);
        //    res.send(jobs562);
            res.view('viewdata',{jobs562:jobs562});
       });
  },
  getOne562:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs and id required.')
    }else{
      let jobName562=req.param('jobName');
      let id562=req.param('id');
      Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs562){
        if(err){
            console.log(err);
            res.send(5000,{err});
        }
        if(jobs562==""){
            res.send('job with jobName '+jobName562+' and id '+id562+' was not found.');
        }else{
        res.view('viewone',{jobs562});
        }
    });}
  },
  create562:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs, id and quentity required.')
    }else{
      var j562;
      let jobName562=req.param('jobName');
      let id562=req.param('id');
      let qty562=req.param('qty');
      Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs562){
        if(err){
            console.log(err);
            res.send(5000,{err});
        }
        if(jobs562==""){
            Jobs.create({jobName:req.param('jobName'),id:req.param('id'),qty:req.param('qty')}).exec(function(err,jobs562){
                if(err){
                    console.log(err);
                    res.send(5000,{err});
                }
            //    res.send('job with jobName '+jobName562+' and id '+id562+' and qty '+qty562+' was created successfully.');
                res.redirect('/jobs562');
           });
        }else{
            res.send('job with jobName '+jobName562+' and id '+id562+' already exists.');
        }
        });}
  },
  updatejob562:function(req,res){
    let jobName=req.param('jobName');
    let id=req.param('id');
    let qty=req.param('qty');
    res.view('updatedata',{jobName:jobName,id:id,qty:qty});
  }
  ,
  update562:function(req,res){
    if(!req.param('jobName') || !req.param('id')){
      res.send('name of the jobs, id and quentity required.')
    }else{
    let jobName562=req.param('jobName');
    let id562=req.param('id');
    let qty562=req.param('qty');
    Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs562){
      if(err){
          console.log(err);
          res.send(5000,{err});
      }
      if(jobs562==""){
        res.send('job with jobName '+jobName562+' and id '+id562+' does not exit.');  
      }else{
        Jobs.update({jobName:req.param('jobName'),id:req.param('id')}).set({jobName:req.param('jobName'),id:req.param('id'),qty:req.param('qty')}).exec(function(err,jobs562){
            if(err){
                console.log(err);
                res.send(err);
            }
          //  res.send('job with jobName '+jobName562+' and id '+id562+' and qty '+qty562+' was updated successfully.');
          res.redirect('/jobs562');
       });
      }
      });}
    },
    delete562:function(req,res){
        var j562;
        let jobName562=req.param('jobName');
        let id562=req.param('id');
        let qty562=req.param('qty');
        Jobs.find({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs562){
          if(err){
              console.log(err);
              res.send(5000,{err});
          }
          if(jobs562==""){
            res.send('job with jobName '+jobName562+' and id '+id562+' does not exit.');  
          }else{
            Jobs.destroy({jobName:req.param('jobName'),id:req.param('id')}).exec(function(err,jobs562){
                if(err){
                    console.log(err);
                    res.send(err);
                }
            //    res.send('job with jobName '+jobName562+' and id '+id562+' and qty '+qty562+' was deleted successfully.');
            res.redirect('/jobs562');
           });
          }
          });
        }
};

