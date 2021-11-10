import Course from "../models/course";

const COURSES = [
  new Course(
    "c1",
    "Fundamentos de Programación",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "Curso introductorio a los fundamentos de programación",
    {
      id: 10,
      username: "teacher King",
      email: "dtrejog98@gmail.com",
      name: "Daniel",
      last_name: "Profesor",
      school_id: "A01372747",
      phone: null,
      role_id: 1,
      otp: null,
      otp_time: null,
      email_confirmation_code: null,
      email_confirmation_code_time: null,
      confirmed_email: 0,
      created: "2021-10-08T20:55:25",
      updated: "2021-10-08T20:55:25",
      enable: 1,
    }
  ),
  new Course(
    "c2",
    "Fundamentos de Ingeniería de Software",
    "https://www.computerhope.com/jargon/s/software-engineering.jpg",
    "Curso introductorio a los fundamentos de ingeniería de software",
    {
      id: 10,
      username: "teacher King",
      email: "dtrejog98@gmail.com",
      name: "Daniel",
      last_name: "Profesor",
      school_id: "A01372747",
      phone: null,
      role_id: 1,
      otp: null,
      otp_time: null,
      email_confirmation_code: null,
      email_confirmation_code_time: null,
      confirmed_email: 0,
      created: "2021-10-08T20:55:25",
      updated: "2021-10-08T20:55:25",
      enable: 1,
    }
  ),
];

export default COURSES;
