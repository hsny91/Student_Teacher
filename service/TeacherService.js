/**
 * Ogretmen metodlarini tutan class
 */
class TeacherService {
  constructor() {
    this.database = [];
  }
  /**
   *  Database'ye ogretmen kaydeder.
   * @param {*} pTeachers 
   */
  addTeacher(pTeachers) {
    this.database.push(pTeachers);
  }
  /**
   * Butun ogrentmenleri getiren metod
   */
  getAllTeachers() {
    return this.database;
  }
  /**
   * Secilen id' li ogretmeni getiren metod
   * @param {*} pId 
   */
  getTeacherById(pId) {
    return this.database.find((m) => m.id == pId);
  }
  /**
   * secili id'li ogretmeni silen metod
   * @param {*} pId 
   */
  deleteTeacherById(pId) {
    this.database = this.database.filter((m) => m.id != pId);
  }
  /**
   * Ogretmen bilgilerini guncelleyen fonksiyon
   * @param {*} pTecahers 
   * @param {*} pId 
   */
  removeTeachersById(pTecahers, pId) {
    this.database = this.database.filter(m => m.id != pId)
    this.database.push(pTecahers)
  }
}
module.exports = new TeacherService();