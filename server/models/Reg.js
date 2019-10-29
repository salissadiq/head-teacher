const mongoose = require('mongoose')
const {
    Demography,
    demographySchema
} = require('./demography')
const {
    ClassRommObservation,
    classRommObservationSchema
} = require('./classRoomObservation')
const {
    HeadTeacherSummary,
    headTeacherSchema
} = require('./headTeacherSummary')
const {
    Submission,
    submissionSchema
} = require('./submission')
const regSchema = new mongoose.Schema({
    demography: {
        type: demographySchema
    },
    classRommObservationSchema: {
        type: classRommObservationSchema
    },
    headTeacherSummary: {
        type: headTeacherSchema
    },
    submission: {
        type: submissionSchema
    }
})

const Register = mongoose.model('Register', regSchema)
exports.Register = Register