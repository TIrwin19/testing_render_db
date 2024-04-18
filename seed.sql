INSERT INTO courses (name, type)
VALUES
('Full Stack Flex', 'Web Dev'),
('Data Vis', 'Python/Data course'),
('UX/UI', 'User Experience');


INSERT INTO students (
  first_name,
  last_name,
  email,
  password,
  course_id
) VALUES
  ('John', 'Smith', 'jsmith@test.com', 'password123', 1),
  ('Jane', 'Doe', 'jdoe@test.com', 'password123', 1),
  ('Bob', 'Jim', 'bjim@test.com', 'password123', 3),
  ('Ryan', 'Bricker', 'rbricker@test.com', 'password123', 2),
  ('Carol', 'Smith', 'csmith@test.com', 'password123', null);