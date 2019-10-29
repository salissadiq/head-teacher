<template>
  <div>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <panel title="Demography Data">
          <v-select
            v-model="state"
            :blur="selectLGA(state)"
            :items="states"
            :rules="[v => !!v || 'Item is required']"
            label="State"
            required
          ></v-select>
          <v-select
            v-model="lga"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="LGA"
            required
          ></v-select>
          <v-text-field
            v-model="school_name"
            :counter="10"
            :rules="nameRules"
            label="Schhol Name"
            required
          ></v-text-field>

          <v-text-field v-model="school_code" :rules="nameRules" label="School Code" required></v-text-field>
          <v-select
            v-model="select"
            :items="['Urban', 'Rural']"
            :rules="[v => !!v || 'Item is required']"
            label="Location"
            required
          ></v-select>
          <v-text-field
            v-model="school_name"
            :counter="10"
            :rules="nameRules"
            label="Teacher/Class Observatio"
            required
          ></v-text-field>
          <v-text-field
            v-model="subject"
            :counter="10"
            :rules="nameRules"
            label="Subject Observed"
            required
          ></v-text-field>
          <v-text-field
            v-model="school_name"
            :counter="10"
            :rules="nameRules"
            label="Year Of Experience"
            required
          ></v-text-field>
          <v-text-field
            v-model="Date_lesson_Observed"
            :counter="10"
            :rules="nameRules"
            label="Date Lesson Observed"
            required
          ></v-text-field>
          <v-select
            v-model="highest_teaching_qualification"
            :items="qualifications"
            :rules="[v => !!v || 'Item is required']"
            label="Highest Teaching Qualification"
            required
          ></v-select>
          <v-text-field
            v-model="name_of_Teacher_observed"
            :counter="10"
            :rules="nameRules"
            label="Name Of Teacher Observed"
            required
          ></v-text-field>
          <v-text-field
            v-model="trcn_Reg_number"
            :counter="10"
            :rules="nameRules"
            label="TRCN Reg No:"
            required
          ></v-text-field>
          <v-select
            v-model="teacher_gender"
            :items="['Male', 'Female']"
            :rules="[v => !!v || 'Item is required']"
            label=" Teacher's Gender"
            required
          ></v-select>
          <v-text-field
            v-model="teacher_phone"
            :counter="10"
            :rules="nameRules"
            label="Teachers Phone Number"
            required
          ></v-text-field>
          <v-text-field
            v-model="teacher_highest_qualification"
            :counter="10"
            :rules="nameRules"
            label="Teacher's Highest Qualification"
            required
          ></v-text-field>
          <v-text-field
            v-model="number_of_pupil_inClass"
            :counter="10"
            :rules="nameRules"
            label="Number Of Pupil In Class"
            required
          ></v-text-field>
          <v-text-field
            v-model="duration_of_lesson"
            :counter="10"
            :rules="nameRules"
            label="Duration PF Lesson"
            required
          ></v-text-field>
          <v-text-field v-model="age" :counter="10" :rules="nameRules" label="Age" required></v-text-field>
          <v-btn color="success" class="mr-4">Next</v-btn>
        </panel>
        <panel title="Class Room Lesson Observation Rating">
          <v-container class="mt-5">
            <h3>Subject content Knowledge</h3>
            <v-select
              v-model="content_is_relevant"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The content is Relevant"
              required
            ></v-select>
            <v-select
              v-model="content_deliver_status"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Content is delivered in a way that the leaners will understand"
              required
            ></v-select>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>
        <panel title="Planning the lesson">
          <v-container class="mt-5">
            <v-select
              v-model="lesson_plan"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Teacher Prepaid a Lesson"
              required
            ></v-select>
            <v-select
              v-model="curiousity_of_leaners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The introduction was stimulating and aroused the interest and curiousity of learners"
              required
            ></v-select>
            <v-select
              v-model="learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every learner is involved in learning and enjoying it"
              required
            ></v-select>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>
        <panel title="Presentation and Pedagogy">
          <v-container class="mt-5">
            <v-select
              v-model="learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every Learner is involved and enjoying it"
              required
            ></v-select>
            <v-select
              v-model="material_to_the_concept"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses a variety of instructional materials to explain the concept"
              required
            ></v-select>
            <v-select
              v-model="learner_relevant_writing_material"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The learner uses a variety of instructional materials to practice the concept"
              required
            ></v-select>
            <v-select
              v-model="learner_relevant_writing_material"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The learner have relevant relevant writing materials such as pencil,biro,colouring pen etc"
              required
            ></v-select>
            <v-select
              v-model="displplay_audio_vid"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses/displays audio/visual materials in class"
              required
            ></v-select>
            <v-select
              v-model="various_ways_of_grouping"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses various way of grouping learners"
              required
            ></v-select>
            <v-select
              v-model="relevent_language_used"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses language that is relevant and understandable to the laerner"
              required
            ></v-select>
            <v-select
              v-model="instruction_to_learners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher gives clear instruction to the learners"
              required
            ></v-select>
            <v-select
              v-model="instruction_to_learners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="New word and concept are clearly explain and releted to learners experience"
              required
            ></v-select>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>
        <panel title="Relationship with learners">
          <v-container class="mt-5">
            <v-select
              v-model="teacher_address_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Teacher   uses learner's name when addressing them individually"
              required
            ></v-select>
            <v-select
              v-model="teacher_fair"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is fair and inclusive in their teaching and feedback"
              required
            ></v-select>
            <v-select
              v-model="teacher_empathy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher has empathy to the learners"
              required
            ></v-select>
            <v-select
              v-model="teacher_respond_to_leaner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher responds to individual learners accoding to their need"
              required
            ></v-select>
            <v-select
              v-model="teacher_role_model"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is a role model to the learners"
              required
            ></v-select>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>

        <panel title="Class management">
          <v-container class="mt-5">
            <v-select
              v-model="teacher_visibilty"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every learner can see the teacher and the board"
              required
            ></v-select>
            <v-select
              v-model="teacher_praise_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher praises and rewards the learners"
              required
            ></v-select>
            <v-select
              v-model="teacher_encourage_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher encourages good behavior among learners "
              required
            ></v-select>
            <v-select
              v-model="teacher_confident"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is confident in his/her presentation"
              required
            ></v-select>
            <v-select
              v-model="learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher does not use cane, use physocal force to threatens leaners"
              required
            ></v-select>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>

        <panel title="Evaluation of Lesson">
          <v-container>
            <v-select
              v-model="objective_of_lesson"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The lesson objectives are clearly stated at the bigining of the lesson"
              required
            ></v-select>
            <v-select
              v-model="learner_effective"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher walk around the room for effective teching and leaning "
              required
            ></v-select>
            <v-select
              v-model="assesment_technique"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses a variaty of assesment techniques"
              required
            ></v-select>
            <v-select
              v-model="teacher_invite_learner_to_ask"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher invite learners to ask  questions and responds appropriately "
              required
            ></v-select>
            <v-select
              v-model="teacher_check_achiev"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher check the achievement of the lesson objectives at end of the lesson through relevant text"
              required
            ></v-select>
            <v-select
              v-model="teacher_home_work"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher gave relevant home work if need be"
              required
            ></v-select>
            <v-select
              v-model="teacher_home_work"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="OVERALL ASSESSMENT"
              required
            ></v-select>
            <v-textarea
              v-model="comment"
              :rules="[v => !!v || 'Item is required']"
              label="Comments"
            ></v-textarea>
            <v-btn color="warning" class="mr-4">Previouse</v-btn>
            <v-btn color="success" class="mr-4">Next</v-btn>
          </v-container>
        </panel>
        <panel title="Head Teacher's Summary And Comments">
          <v-select
            v-model="two_thins_went_very_well"
            :items="['Two thins that went well 1', 'Two thins that went well 2']"
            :rules="[v => !!v || 'Item is required']"
            label="Two thins that went well"
            required
            multiple
            chips
          ></v-select>
          <v-select
            v-model="two_things_could_be_next_tym"
            :items="[' What two thins could be done differently next time 1', 'What two thins could be done differently next time 2']"
            :rules="[v => !!v || 'Item is required']"
            label="What two thins could be done differently next time"
            required
            multiple
            chips
          ></v-select>
          <v-textarea
            v-model="support_needed"
            :rules="[v => !!v || 'Item is required']"
            label="What support is neededgoing forward and in which area"
          ></v-textarea>
        </panel>
        <panel title="Submission">
          <v-text-field
            v-model="name_of_teacher"
            :rules="nameRules"
            label="Name of Teacher"
            required
          ></v-text-field>
          <v-text-field v-model="date1" :rules="nameRules" label="Date" required></v-text-field>
          <v-text-field
            v-model="name_of_observer"
            :rules="nameRules"
            label="Name of Observer"
            required
          ></v-text-field>
          <v-text-field v-model="disignation" :rules="nameRules" label="Disignation" required></v-text-field>
          <v-text-field v-model="date2" :rules="nameRules" label="Date" required></v-text-field>
          <v-text-field v-model="phone_number" :rules="nameRules" label="Phone Number" required></v-text-field>
          <v-btn color="warning" class="mr-4">Previouse</v-btn>
          <v-btn color="success" class="mr-4">Submit</v-btn>
        </panel>
      </v-form>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import panel from "./Panel";
import data from "../data/statelocals";
export default {
  components: {
    panel
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    states: [],
    lgas: [],
    stateslga: [],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    qualifications: ["NCE", "B.Ed", "Master in Education", "Other"],
    checkbox: false,
    state: null,
    lga: null,
    school_name: null,
    school_code: null,
    location: null,
    teacher_class_Observation: null,
    subject: null,
    year_of_experience: null,
    Date_lesson_Observed: null,
    highest_teaching_qualification: null,
    name_of_Teacher_observed: null,
    trcn_Reg_number: null,
    teacher_gender: null,
    teacher_phone: null,
    teacher_highest_qualification: null,
    number_of_pupil_inClass: null,
    duration_of_lesson: null,
    age: null,
    content_is_relevant: null,
    content_deliver_status: null,
    lesson_plan: null,
    curiousity_of_leaners: null,
    teacher_reference_skills: null,
    learner_enjoy: null,
    material_to_the_concept: null,
    material_to_pratice_the_concept: null,
    learner_relevent_books: null,
    learner_relevant_writing_material: null,
    displplay_audio_vid: null,
    various_ways_of_grouping: null,
    relevent_language_used: null,
    instruction_to_learners: null,
    clearly_explain: null,
    teacher_address_learner: null,
    teacher_fair: null,
    teacher_empathy: null,
    teacher_respond_to_leaner: null,
    teacher_role_model: null,
    teacher_visibilty: null,
    teacher_praise_learner: null,
    teacher_encourage_learner: null,
    teacher_confident: null,
    teacher_punish_learner: null,
    objective_of_lesson: null,
    learner_effective: null,
    assesment_technique: null,
    teacher_invite_learner_to_ask: null,
    teacher_check_achiev: null,
    teacher_home_work: null,
    comment: null,
    overall_assessment: null,
    two_thins_went_very_well: null,
    two_things_could_be_next_tym: null,
    support_needed: null,
    name_of_teacher: null,
    date1: null,
    name_of_observer: null,
    disignation: null,
    date2: null,
    phone_number: null
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    selectLGA(currentState) {}
  },
  created() {
    data.getStateLga(states => {
      this.stateslga = states;
      states.forEach(state => {
        this.states.push(state.name);
      });
    });
  }
};
</script>
