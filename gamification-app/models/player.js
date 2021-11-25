/* 
Player course model based on the API
*/
class PlayerCourse {
  constructor(id, username, name, last_name, school_id) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.last_name = last_name;
    this.school_id = school_id;
  }
}

export default PlayerCourse;
