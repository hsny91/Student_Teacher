const express = require('express')
const cors=require('cors');
const studentManager = require("./service/StudentService"); 
const teacherManager = require("./service/TeacherService");
const Student = require("./model/Students")
const Teachers = require("./model/Teachers")
const app = express() 
const PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
/**
 * Butun ogrencileri getiren metod
 */
app.get('/Students', function (req, res) {
    let studentList = studentManager.getAllStudents();
    res.send(studentList);
})
/**
 * Secilen id' li ogrenciyi getiren fonksiyon
 */
app.get('/Students/:id', function (req, res) {
    let getStudent = studentManager.getStudentsById(req.params.id);
    res.send(getStudent);
})
/**
 * Ogrenci bilgilerini guncelleyen metod
 */
app.put('/Students/:id', function (req, res) {
    res.send('update metod' + req.params.id)
  let students = new Student(req.body.id, req.body.name, req.body.classroom, req.body.year);
  studentManager.removeStudentsById(students, req.params.id);
  res.send('Öğrenci Bilgileri Güncellenmiştir');
})
/**
 * Database' ye ogrenci kaydeder.
 */
app.post('/Students', function (req, res) {
    let students = new Student(req.body.id, req.body.name, req.body.classroom, req.body.year);
    studentManager.addStudents(students);
    res.send('gönderilen öğrencileri database kaydet')
})
/**
 * secili id'li ogrenciyi silen fonksiyon
 */
app.delete('/Students/:id', function (req, res) { 
    studentManager.deleteStudentsById(req.params.id)
    res.send('silindi')
})
/**
 * Butun ogrentmenleri getiren fonksiyon
 */
app.get('/Teachers', function (req, res) {
    let teacherList = teacherManager.getAllTeachers();
    res.send(teacherList);
})
/**
 *  Secilen id' li ogretmeni getiren fonksiyon
 */
app.get('/Teachers/:id', function (req, res) {
    let getTeacher = teacherManager.getTeacherById(req.params.id);
    res.send(getTeacher);
})
/**
 * Ogretmen bilgilerini guncelleyen fonksiyon
 */
app.put('/Teachers/:id', function (req, res) {
    res.send('update metod' + req.params.id)
  let teachers = new Teachers(req.body.id, req.body.name, req.body.classroom, req.body.year);
  teacherManager.removeTeachersById(teachers, req.params.id);
  res.send('Öğrenci bilgileri güncellenmiştir');
})
/**
 * Database'ye ogretmen kaydeder.
 */
app.post('/Teachers', function (req, res) {
    let teachers = new Teachers(req.body.id, req.body.name, req.body.classroom, req.body.year);
    teacherManager.addTeacher(teachers);
    res.send('gönderilen öğrencileri database kaydet')
})
/**
 * secili id'li ogretmeni silen fonksiyon
 */
app.delete('/Teachers/:id', function (req, res) {
    teacherManager.deleteTeacherById(req.params.id)
    res.send('silindi')
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))