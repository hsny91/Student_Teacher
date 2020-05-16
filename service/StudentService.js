/**
 * Ogrenci metodlarini tutan class
 */
class StudentService {
    constructor() {
        this.database = [];
    }/**
     * Database' eogrenci ekleyen fonksiyon
     * @param {*} pStudents 
     */
    addStudents(pStudents) {
        this.database.push(pStudents);
    }/**
     * butun ogrencileri getiren metod
     */
    getAllStudents() {
        return this.database;
    }/**
     * Secilen id' li ogrenciyi getiren metod
     * @param {*} pId 
     */
    getStudentsById(pId) {
        return this.database.find(m => m.id == pId);
    }/**
     * secili id'li ogrenciyi silen metod
     * @param {*} pId 
     */
    deleteStudentsById(pId) {
        this.database = this.database.filter(m => m.id != pId)
    }
    /**
     *  Ogrenci bilgilerini guncelleyen metod
     * @param {*} pStudents 
     * @param {*} pId 
     */
    removeStudentsById(pStudents, pId) {
        this.database = this.database.filter(m => m.id != pId)
        this.database.push(pStudents)
    }
}
module.exports = new StudentService();