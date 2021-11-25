/* Enrollment model based on the api response */
class Enrollment {
  constructor(student_id, xp, coins, student_name, last_name) {
    this.student_id = student_id;
    this.xp = xp;
    this.coins = coins;
    this.student_name = student_name;
    this.last_name = last_name;
  }
}

export default Enrollment;
