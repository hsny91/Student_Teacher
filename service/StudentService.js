class StudentService{
    constructor(){
        this.database=[];
     }
addStudents(pStudents){
        this.database.push(pStudents);
    }
    getAllStudents(){
        return this.database;
    }
    getStudentsById(pId){
        return this.database.find(m=>m.id==pId);
    }
    deleteStudentsById(pId){
     this.database=this.database.filter(m=>m.id!=pId)
 }
  
        removeStudentsById(pStudents, pId) {
            this.database = this.database.filter(m => m.id != pId)
            this.database.push(pStudents)
        }
    
   

}
module.exports=new StudentService();

