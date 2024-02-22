const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

//const password = bcrypt.hashSync('123456')



// const userData = [
//   { username : 'andy' , password : '123456' , email: 'ffff@gmail.mail' ,phon : "085758" },
//   { username : 'boby', password : '12345' , email: 'boy@gmail.mail',phon : "67908" },
//   { username : 'daddy', password : '123' , email: 'dddd@gmail.mail',phon : "68967" },
  
// ]
const repairlist = [
  { detail:'จอแตก', requesDate: new Date(),location:'ห้องคอม 2' ,userId: 1,equiment : "เครื่องปริ้น" ,technicianId: 1,repairEditId: 1 },
  { detail:'ใช้ไม่ได้', requesDate: new Date(),location:'ห้องประชุม' ,userId: 1,equiment : "เมาค์"  ,technicianId: 1, repairEditId: 2 },
  { detail:'โปรเจคเตอร์เปิดไม่ติด', requesDate: new Date(),location:'ห้องโสด' ,userId:1 ,equiment : "โปรเจคเตอร์",technicianId: 1,repairEditId: 3},
  { detail:'คอมช้าเข้าโปรแกรมไม่ได้', requesDate: new Date(),location:'ห้องคอม 3' ,userId:1,equiment : "ซอฟแวร์"  ,technicianId: 1,repairEditId: 4},

]

// const repairEdit = [
//   { Editdate: new Date(),status:'กำลังดำเนิดการ' ,  detail  : "-" ,technicianId: 1},
//   { Editdate: new Date(),status:'รอตรวจสอบ' ,    detail   : "เจ้าหน้าที่กำลังดำเนินการเข้าเช็กอุปกรณ์"  ,technicianId: 2 },
//   { Editdate: new Date(),status:'สำเร็จ'        ,  detail  : "หนูกัดสายไฟต้องเปลี่ยนใหม่",technicianId: 3},
//   { Editdate: new Date(),status:'กำลังดำเนิดการ' ,  detail  : "เจ้าหน้าที่กำลังดำเนินการซ่อมอุปกรณ์"  ,technicianId: 1},

// ]

// const useEquiment = [
//   { name : 'คอมพิวเตอร์' },
//   { name : 'สายไฟ'},
//   { name : 'อุปกรณ์ it'},
//   { name : 'ซอฟแว์'},
// ]
// const useStatus = [
//   { status : 'กำลังเนินการ' },
//   { status : 'สำเร็จ'},
//   { status : 'รอตรวจสอบ'},
// ]

// const useTechnician = [
//   { name : 'ช่างออฟ',phon:"4547667" },
//   { name : 'ช่างบีม', phon:"6859675" },
//   { name : 'ช่างบอย',phon:"5437856" },
// ]

// const adminData = [
//   { name : 'admin1' , password : '1234567' , email: 'admin@gmail.mail' ,phon : "4738575", repairId: 1 },
// ]




const run = async () => {
  // await prisma.user.createMany({
  //   data : userData
  // })
  // await prisma.equiment.createMany({
  //   data : useEquiment
  // })
  // await prisma.status.createMany({
  //   data : useStatus
  // })
  // await prisma.technician.createMany({
  //   data : useTechnician
  // })
  await prisma.repair.createMany({
    data : repairlist

  })
  // await prisma.admin.createMany({
  //   data : adminData
  // })
  // await prisma.repairEdit.createMany({
  //   data : repairEdit
  // })
}

run()
