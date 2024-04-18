SELECT
    students.id AS student_id,
    CONCAT (first_name,' ', last_name) AS full_name,
    course_id,
    courses.name AS course,
    courses.type AS course_type
  FROM students
  LEFT JOIN courses
  ON students.course_id = courses.id;




-- UPDATE users SET password = 'password001' WHERE id = 2;

-- SELECT * FROM users ORDER BY id;
