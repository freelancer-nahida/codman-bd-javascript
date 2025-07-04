const student = {
    stName: 'Nahida Sultana',
    stAge: 23,
    dob: 1992,
    isCollageStudend: false,
    university: 'NSU',
    isAdmitted: function () {
        console.log(`${this.stName} is admitted to ${this.university}`);

    }
,
    hightMark: function() {
        console.log('Hight Marks', 60);

    }
}


// student.stName = 'salma';
// student.stAge = 26
// console.log(student.stName, student.stAge);
// console.log(student['stName'], student.stAge);
student.isAdmitted();
student.hightMark();

