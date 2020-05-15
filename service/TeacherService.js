class TeacherService {
  constructor() {
    this.database = [];
  }
  addTeacher(pTeachers) {
    this.database.push(pTeachers); //yeni bir ögrenci eklemek icin
  }
  getAllTeachers() {
    return this.database; //database hepsini geri dondürücem
  }
  getTeacherById(pId) {
    return this.database.find((m) => m.id == pId); //ogrencinin ıd si eşit ise geri dondur
  }
  deleteTeacherById(pId) {
    //tüm database sil
    this.database = this.database.filter((m) => m.id != pId);
  }

  
  removeTeachersById(pTecahers, pId) {
      this.database = this.database.filter(m => m.id != pId)
      this.database.push(pTecahers)

  }
}
module.exports = new TeacherService();
