import React from 'react';
import Teacher from '../Teacher/Teacher';
import teacher1 from '../../../images/teacher-1.jpg';
import teacher2 from '../../../images/teacher-2.jpg';
import teacher3 from '../../../images/teacher-3.jpg';


const teacherData = [
    {
        name: 'Nadir(Full-Stack Developer)',
        img: teacher1,
        number: '01712154454'
    },
    {
        name: 'David(Font-End Developer)',
        img: teacher2,
        number: '01712151542'
    },
    {
        name: 'Sara(Back-End Developer)',
        img: teacher3,
        number: '01712584425'
    }
]

const Doctors = () => {
    return (
        <section className="doctors mt-5 pt-5">
            <div className="container">
                <h1 className="text-center text-warning">Our Teachers</h1>
                <div className="row">
                {
                    teacherData.map(teacher => <Teacher teacher={teacher} key={teacher.name}></Teacher>)
                }
                </div>
            </div>
        </section>
    );
};

export default Doctors;