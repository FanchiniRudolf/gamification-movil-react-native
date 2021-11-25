/* Course model based on the response of the API */
class Course {
  constructor(
    id,
    group_id,
    name,
    details,
    teacher_id,
    created,
    updated,
    enable,
    imageUrl
  ) {
    this.id = id;
    this.group_id = group_id;
    this.name = name;
    this.details = details;
    this.teacher = teacher_id;
    this.created = created;
    this.updated = updated;
    this.enable = enable;
    this.imageUrl = imageUrl;
  }
}

export default Course;
