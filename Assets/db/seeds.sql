INSERT INTO `department` (`id`, `name`) VALUES ('1', 'Human Resources');
INSERT INTO `department` (`id`, `name`) VALUES ('2', 'Technical Training');
INSERT INTO `department` (`id`, `name`) VALUES ('3', 'Engineering');
INSERT INTO `department` (`id`, `name`) VALUES ('4', 'Testing');

INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES ('1', 'Officer', '100000', '1');
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES ('2', 'Trainer', '200000', '2');
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES ('3', 'Engineer', '300000', '3');
INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES ('4', 'Tester', '400000', '4');

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`) VALUES ('1', 'Leo', 'Messi', '1');
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('2', 'Roberto', 'Baggio', '2', '1');
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('3', 'Sylvester', 'Stallone', '3', '2');
INSERT INTO `employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('4', 'Ashraf', 'Takla', '4', '3');
