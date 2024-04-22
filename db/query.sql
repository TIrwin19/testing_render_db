SELECT
    students.id AS student_id,
    CONCAT (first_name,' ', last_name) AS full_name,
    course_id,
    courses.name AS course,
    courses.type AS course_type
  FROM students
  LEFT JOIN courses
  ON students.course_id = courses.id;

SELECT
    students.id student_id,
    first_name,
    last_name,
    courses.id course_id,
    name
  FROM students
  JOIN courses
    ON students.course_id = courses.id;

-- SELECT
--     name,
--     COUNT(course_id) AS course_count
--     SUM(course_price AS course_profit)
--   FROM students
--     Right Join courses
--       ON students.course_id = courses.id
--     GROUP BY name;


-- UPDATE users SET password = 'password001' WHERE id = 2;

-- SELECT * FROM users ORDER BY id;
