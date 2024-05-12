**Todo**:
// handing all post-delete-update and authentication logics for users App first

**Notes**:
storing virtual url inside models by id
**Plan**:
Backend dependency:

<!-- dotenv -->
<!-- passportjs -->

jwtpassportjs
jwtwebtoken

folders:

<!-- DataBase: -->

<!-- - models -->
<!-- - mongoose.js -->

<!-- controllers: -->
<!-- passportjs: -->

<!-- - strategy -->

<!-- routes: -->
<!-- list of how many routes that I need to implement: -->

routes refactoring as needed.
get comment routes main page
get blogs routes main page
post comment routes main page
get sign up routes
get log in routes
post sign up routes
get log in routes

admin routes:
get comment
get blogs
post comment
post blogs
delete comments
delete blogs
update blogs
post routes for main page comments

models:
-comments: data, description, username, id, blog:
-users: username, password, comments
-blogs: description, title, data, isPosted, id, comments
