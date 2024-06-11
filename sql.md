Exersise-1 tasks

Find the title of each film ✓

```sql
SELECT title FROM movies;
```

Find the director of each film ✓

```sql
SELECT director FROM movies;
```

Find the title and director of each film ✓

```sql
SELECT title,director FROM movies;
```

Find the title and year of each film ✓

```sql
SELECT year,title FROM movies;
```

Find all the information about each film ✓

```sql
SELECT * FROM movies;
```

![alt text](image-19.png)

Exercise-2 Tasks

Find the movie with a row id of 6 ✓

```sql
SELECT title FROM movies
Where id=6
```

Find the movies released in the years between 2000 and 2010

```sql
SELECT title FROM movies
Where year BETWEEN 2000 AND 2010
```

Find the movies not released in the years between 2000 and 2010

```sql
SELECT title FROM movies
Where year NOT BETWEEN 2000 AND 2010
```

Find the first 5 Pixar movies and their release year

```sql
SELECT title,year FROM movies
where id BETWEEN 1 AND 5
```

![alt text](image-20.png)

Exercise 3 — Tasks

Find all the Toy Story movies ✓

```sql
SELECT title FROM movies
where title LIKE"%toy%";
```

Find all the movies directed by John Lasseter

```sql
select title from movies
where director="John Lasseter"
```

Find all the movies (and director) not directed by John Lasseter

```sql
select title from movies
where director!="John Lasseter"
```

Find all the WALL-\* movies

```sql
select title from movies
where title LIKE"%WALL%"
```

![alt text](image-21.png)

Exercise 4 — Tasks

List all directors of Pixar movies (alphabetically), without duplicates ✓

```sql
SELECT DISTINCT director FROM movies
order by director ASC;
```

List the last four Pixar movies released (ordered from most recent to least)

```sql
SELECT title FROM movies
order by year desc limit 4;
```

List the first five Pixar movies sorted alphabetically

```sql
SELECT title FROM movies
order by title  limit 5;

```

List the next five Pixar movies sorted alphabetically

```sql
SELECT title FROM movies
order by title
limit 5
offset 5;

```

![alt text](image-22.png)

Review 1 — Tasks

List all the Canadian cities and their populations ✓

```sql
SELECT city,population FROM north_american_cities
where country="canada";
```

Order all the cities in the United States by their latitude from north to south

```sql
SELECT City FROM north_american_cities
where country="United States"
Order by latitude desc;
```

List all the cities west of Chicago, ordered from west to east

```sql
SELECT city FROM north_american_cities
where longitude<(select Longitude from  North_american_cities
where City="Chicago")
order by longitude;
```

List the two largest cities in Mexico (by population)

```sql
SELECT city FROM north_american_cities
where country="Mexico"
order by population desc
limit 2;

```

List the third and fourth largest cities (by population) in the United States and their population

```sql
SELECT city,population FROM north_american_cities
where country="United States"
order by population desc
limit 2
offset 2;
```

![alt text](image-23.png)

Exercise 6 — Tasks

Find the domestic and international sales for each movie ✓

```sql
SELECT title, domestic_sales, international_sales
FROM movies
  INNER JOIN boxoffice
    where movies.id = boxoffice.movie_id;
```

Show the sales numbers for each movie that did better internationally rather than domestically

```sql
SELECT title, domestic_sales, international_sales
FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id
where international_sales > domestic_sales;
```

List all the movies by their ratings in descending order

```sql
SELECT title,rating
FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id
order by rating desc;
```

---
