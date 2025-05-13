create table employees (      --create table like this and insert values it is inserting column vise
    id int primary key, -- firts is filed name second is type and third is constraint
    name varchar(50),
    age int not null
);
insert into employees values(1,'talha',25); --insert values like this into table use single quotes with strings
insert into employees values(2,'hamza',24);
insert into employees (id, name, age) -- bu this we can insert multiples values at once in table
values
  (3, 'ahmed', 21),
  (4, 'fatima', 22),
  (5, 'umar', 23);

select * from employees where id=1; -- by this we can get single record from table by id
select * from employees  -- this command show all data from data base

