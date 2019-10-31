const mongoose = require('mongoose')
const headTeacherSchema = new mongoose.Schema({
    two_thins_went_very_well: String,
    two_things_could_be_next_tym: String,
    support_needed: String,

})

const HeadTeacherSummary = mongoose.model('HeadTeacher', headTeacherSchema)

exports.headTeacherSchema = headTeacherSchema
exports.HeadTeacherSummary = HeadTeacherSummary