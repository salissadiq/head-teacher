const express = require('express')
const {
    Register
} = require('./models/Reg')
const {
    Demography
} = require('./models/demography')
const {
    ClassRommObservation,
    classRommObservationSchema
} = require('./models/classRoomObservation')
const {
    HeadTeacherSummary,
    headTeacherSchema
} = require('./models/headTeacherSummary')
const {
    Submission,
    submissionSchema
} = require('./models/submission')
const router = express.Router();

router.post('/', async (req, res) => {
    let reg = new Register({
        demography: new Demography({
            state: req.body.state,
            lga: req.body.lga,
            school_name: req.body.school_name,
            school_code: req.body.school_code,
            location: req.body.location,
            teacher_class_Observation: req.body.teacher_class_Observation,
            subject: req.body.subject,
            year_of_experience: req.body.year_of_experience,
            date_lesson_Observed: req.body.date_lesson_Observed,
            highest_teaching_qualification: req.body.highest_teaching_qualification,
            other_qualificatio: req.body.other_qualificatio,
            name_of_Teacher_observed: req.body.name_of_Teacher_observed,
            trcn_Reg_number: req.body.trcn_Reg_number,
            teacher_gender: req.body.teacher_gender,
            teacher_phone: req.body.teacher_phone,
            teacher_highest_qualification: req.body.teacher_highest_qualification,
            number_of_pupil_inClass: req.body.number_of_pupil_inClass,
            duration_of_lesson: req.body.duration_of_lesson,
            age: req.body.age,
        }),
        classRommObservationSchema: new ClassRommObservation({
            content_is_relevant: req.body.content_is_relevant,
            content_deliver_status: req.body.content_deliver_status,
            lesson_plan: req.body.lesson_plan,
            curiousity_of_leaners: req.body.curiousity_of_leaners,
            teacher_reference_skills: req.body.teacher_reference_skills,
            learner_enjoy: req.body.learner_enjoy,
            material_to_the_concept: req.body.material_to_the_concept,
            material_to_pratice_the_concept: req.body.material_to_pratice_the_concept,
            learner_relevent_books: req.body.learner_relevent_books,
            learner_relevant_writing_material: req.body.learner_relevant_writing_material,
            displplay_audio_vid: req.body.displplay_audio_vid,
            various_ways_of_grouping: req.body.various_ways_of_grouping,
            relevent_language_used: req.body.relevent_language_used,
            instruction_to_learners: req.body.instruction_to_learners,
            clearly_explain: req.body.clearly_explain,
            teacher_address_learner: req.body.teacher_address_learner,
            teacher_fair: req.body.teacher_fair,
            teacher_empathy: req.body.teacher_empathy,
            teacher_respond_to_leaner: req.body.teacher_respond_to_leaner,
            teacher_role_model: req.body.teacher_role_model,
            teacher_visibilty: req.body.teacher_visibilty,
            teacher_praise_learner: req.body.teacher_praise_learner,
            teacher_encourage_learner: req.body.teacher_encourage_learner,
            teacher_confident: req.body.teacher_confident,
            teacher_punish_learner: req.body.teacher_punish_learner,
            objective_of_lesson: req.body.objective_of_lesson,
            learner_effective: req.body.learner_effective,
            assesment_technique: req.body.assesment_technique,
            teacher_invite_learner_to_ask: req.body.teacher_invite_learner_to_ask,
            teacher_check_achiev: req.body.teacher_check_achiev,
            teacher_home_work: req.body.teacher_home_work,
            comment: req.body.comment,
            overall_assessment: req.body.overall_assessment,
        }),
        headTeacherSummary: new HeadTeacherSummary({
            two_thins_went_very_well: req.body.two_thins_went_very_well,
            two_things_could_be_next_tym: req.body.two_things_could_be_next_tym,
            support_needed: req.body.support_needed

        }),
        submissionSchema: new Submission({
            name_of_teacher: req.body.name_of_teacher,
            date1: req.body.date1,
            name_of_observer: req.body.name_of_observer,
            disignation: req.body.disignation,
            date2: req.body.date2,
            phone_number: req.body.phone_number
        })
    })
    reg = await reg.save()
    res.send(reg)
})

module.exports = router