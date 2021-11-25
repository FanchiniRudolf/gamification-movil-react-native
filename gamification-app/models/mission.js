/* Mission model based on he API, not an exact derivation. */
class Mission {
  constructor(id, group_id, start_date, delivery_date, title, description, xp) {
    this.id = id;
    this.group_id = group_id;
    this.start_date = start_date
    this.delivery_date = delivery_date
    this.title = title;
    this.description = description;
    this.xp = xp;
  }
}

export default Mission;
