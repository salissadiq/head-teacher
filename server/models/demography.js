const mongoose = require('mongoose')
const demographySchema = new mongoose.Schema({
    state: String,
    lga: String,
    school_name: String,
    school_code: String,
    location: String,
    teacher_class_Observation: String,
    subject: String,
    year_of_experience: String,
    date_lesson_Observed: String,
    highest_teaching_qualification: String,
    other_qualificatio: String,
    name_of_Teacher_observed: String,
    trcn_Reg_number: String,
    teacher_gender: String,
    teacher_phone: String,
    teacher_highest_qualification: String,
    number_of_pupil_inClass: String,
    duration_of_lesson: String,
    age: String

})

const Demography = mongoose.model('Demography', demographySchema)
exports.demographySchema = demographySchema
exports.Demography = Demography