const mongoose = require('mongoose')
const classRommObservationSchema = new mongoose.Schema({
    content_is_relevant: String,
    content_deliver_status: String,
    lesson_plan: String,
    curiousity_of_leaners: String,
    teacher_reference_skills: String,
    learner_enjoy: String,
    material_to_the_concept: String,
    material_to_pratice_the_concept: String,
    learner_relevent_books: String,
    learner_relevant_writing_material: String,
    displplay_audio_vid: String,
    various_ways_of_grouping: String,
    relevent_language_used: String,
    instruction_to_learners: String,
    clearly_explain: String,
    teacher_address_learner: String,
    teacher_fair: String,
    teacher_empathy: String,
    teacher_respond_to_leaner: String,
    teacher_role_model: String,
    teacher_visibilty: String,
    teacher_praise_learner: String,
    teacher_encourage_learner: String,
    teacher_confident: String,
    teacher_punish_learner: String,
    objective_of_lesson: String,
    learner_effective: String,
    assesment_technique: String,
    teacher_invite_learner_to_ask: String,
    teacher_check_achiev: String,
    teacher_home_work: String,
    comment: String,
    overall_assessment: String,
})

const ClassRommObservation = mongoose.model('ClassRommObservation', classRommObservationSchema)

exports.classRommObservationSchema = classRommObservationSchema
exports.ClassRommObservation = ClassRommObservation