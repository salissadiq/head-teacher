const mongoose = require('mongoose')
const submissionSchema = new mongoose.Schema({
    date1: String,
    name_of_observer: String,
    disignation: String,
    date2: String,
    phone_number: String

})

const Submission = mongoose.model('Submission', submissionSchema)

exports.submissionSchema = submissionSchema
exports.Submission = Submission