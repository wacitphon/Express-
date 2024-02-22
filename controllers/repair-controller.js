const db = require('../models/db')
const repair = require('@prisma/client')

exports.getByUser = async (req, res, next) => {
  try {
    const todos = await db.repair.findMany({
      where : { userId : req.user.id}
    })
    res.json({todos})
  } catch (err) {
    next(err)
  }
}

exports.createRepair = async (req, res, next) => {
  // validate req.body
  const data = req.body
  // console.log(typeof new Date(data.requesDate))
  try{
    const rs = await db.repair.create({
       data : { ...data, userId : req.user.id}  
    })
    res.json({ msg: 'Create OK' , result : rs })
  }catch(err) {
    next(err)
  }
}

exports.updateRepair = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.repair.update({
      data :  {...data},
      where: { id : +id , userId : req.user.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}

// // exports.deleteTodo = async (req, res, next) => {
// //   const {id} = req.params
// //   try {
// //     const rs = await db.todo.delete({ where : {id : +id, userId: req.user.id}})
// //     res.json({msg: 'Delete ok', result : rs})
// //   }catch(err) {
// //     next(err)
// //   }
// }

exports.getAllStatus = async (req, res, next) => {
  res.json({status: Object.values(repair)})
}