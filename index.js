const express = require('express');
const PORT = 3000;
const app = express();
let courses = require('./data');


//register middlewarea
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));

//config view
app.set('view engine', 'ejs'); // khai báo rằng app sẽ dùng engin EJS để render trang web
app.set('views', './views'); // Nội dung render trang web sẽ nằm trong folder views


app.get('/', (req, resp) => {
    return resp.render('index', { courses }) // send data to ejs
});

// them router/save voi method post o phia backend
app.post('/save', (req, resp) => {
    const id = Number(req.body.id);
    const name = req.body.name;
    const course_type = req.body.course_type;
    const semester = req.body.semester;
    const department = req.body.department;

    const params = {
        "id": id,
        "name": name,
        "course_type": course_type,
        "semester": semester,
        "department": department
    }

    courses.push(params);

    return resp.redirect('/');

})



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})