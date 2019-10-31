<template>
  <div>
    <div>
      <v-alert :value="alert" color="deep-orange" dark border="top" transition="scale-transition">
        <h3>Successfully Registered!</h3>
      </v-alert>
    </div>
    <div v-show="!alert" id="formdiv">
      <v-form ref="form" v-model="valid" lazy-validation>
        <panel v-show="demography" title="Demography Data">
          <v-select
            v-model="reg_data.state"
            :change="selectLGA(reg_data.state)"
            :items="states"
            :rules="[v => !!v || 'Item is required']"
            label="State"
            required
          ></v-select>
          <v-select
            v-model="reg_data.lga"
            :items="lgas"
            :rules="[v => !!v || 'Item is required']"
            label="LGA"
            required
          ></v-select>
          <v-text-field
            v-model="reg_data.school_name"
            :rules="nameRules"
            label="School Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="reg_data.school_code"
            :rules="nameRules"
            label="School Code"
            required
          ></v-text-field>
          <v-select
            v-model="reg_data.location"
            :items="['Urban', 'Rural']"
            :rules="[v => !!v || 'Item is required']"
            label="Location"
            required
          ></v-select>
          <v-text-field
            v-model="reg_data.teacher_class_Observation"
            :rules="nameRules"
            label="Teacher/Class Observatio"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.subject"
            :rules="nameRules"
            label="Subject Observed"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.year_of_experience"
            :rules="nameRules"
            label="Year Of Experience"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.date_lesson_Observed"
            :rules="nameRules"
            label="Date Lesson Observed"
            required
          ></v-text-field>
          <v-select
            v-model="reg_data.highest_teaching_qualification"
            :items="qualifications"
            :rules="[v => !!v || 'Item is required']"
            label="Highest Teaching Qualification"
            required
          ></v-select>
          <v-text-field
            v-show="reg_data.highest_teaching_qualification == 'Other'"
            v-model="reg_data.other_qualificatio"
            :rules="nameRules"
            label="If Other Qualification Mention here"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.name_of_Teacher_observed"
            :rules="nameRules"
            label="Name Of Teacher Observed"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.trcn_Reg_number"
            :rules="nameRules"
            label="TRCN Reg No:"
            required
          ></v-text-field>
          <v-select
            v-model="reg_data.teacher_gender"
            :items="['Male', 'Female']"
            :rules="[v => !!v || 'Item is required']"
            label=" Teacher's Gender"
            required
          ></v-select>
          <v-text-field
            v-model="reg_data.teacher_phone"
            :rules="nameRules"
            label="Teachers Phone Number"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.teacher_highest_qualification"
            :rules="nameRules"
            label="Teacher's Highest Qualification"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.number_of_pupil_inClass"
            :rules="nameRules"
            label="Number Of Pupil In Class"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.duration_of_lesson"
            :rules="nameRules"
            label="Duration PF Lesson"
            required
          ></v-text-field>
          <v-text-field v-model="reg_data.age" :rules="nameRules" label="Age" required></v-text-field>
          <v-btn
            @click="demography = false, class_rum_observe = true"
            color="success"
            class="mr-4"
          >Next</v-btn>
        </panel>
        <panel
          v-show="class_rum_observe"
          transition="scale-transition"
          title="Class Room Lesson Observation Rating"
        >
          <v-container class="mt-5">
            <v-select
              v-model="reg_data.content_is_relevant"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The content is Relevant"
              required
            ></v-select>
            <v-select
              v-model="reg_data.content_deliver_status"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Content is delivered in a way that the leaners will understand"
              required
            ></v-select>
            <v-btn
              @click="demography = true, class_rum_observe = false"
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="class_rum_observe = false, planning_lesson=true"
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>
        <panel v-show="planning_lesson" title="Planning the lesson">
          <v-container class="mt-5">
            <v-select
              v-model="reg_data.lesson_plan"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Teacher Prepaid a Lesson"
              required
            ></v-select>
            <v-select
              v-model="reg_data.curiousity_of_leaners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The introduction was stimulating and aroused the interest and curiousity of learners"
              required
            ></v-select>
            <v-select
              v-model="reg_data.learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every learner is involved in learning and enjoying it"
              required
            ></v-select>
            <v-btn
              @click="class_rum_observe = true, planning_lesson = false"
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="planning_lesson = false, presentation_pedalogy= true "
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>
        <panel v-show="presentation_pedalogy" title="Presentation and Pedagogy">
          <v-container class="mt-5">
            <v-select
              v-model="reg_data.learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every Learner is involved and enjoying it"
              required
            ></v-select>
            <v-select
              v-model="reg_data.material_to_the_concept"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses a variety of instructional materials to explain the concept"
              required
            ></v-select>
            <v-select
              v-model="reg_data.learner_relevant_writing_material"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The learner uses a variety of instructional materials to practice the concept"
              required
            ></v-select>
            <v-select
              v-model="reg_data.learner_relevant_writing_material"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The learner have relevant relevant writing materials such as pencil,biro,colouring pen etc"
              required
            ></v-select>
            <v-select
              v-model="reg_data.displplay_audio_vid"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses/displays audio/visual materials in class"
              required
            ></v-select>
            <v-select
              v-model="reg_data.various_ways_of_grouping"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses various way of grouping learners"
              required
            ></v-select>
            <v-select
              v-model="reg_data.relevent_language_used"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses language that is relevant and understandable to the laerner"
              required
            ></v-select>
            <v-select
              v-model="reg_data.instruction_to_learners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher gives clear instruction to the learners"
              required
            ></v-select>
            <v-select
              v-model="reg_data.instruction_to_learners"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="New word and concept are clearly explain and releted to learners experience"
              required
            ></v-select>
            <v-btn
              @click="planning_lesson = true, presentation_pedalogy = false "
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="presentation_pedalogy = false, relation_with_learner = true"
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>
        <panel v-show="relation_with_learner" title="Relationship with learners">
          <v-container class="mt-5">
            <v-select
              v-model="reg_data.teacher_address_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The Teacher   uses learner's name when addressing them individually"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_fair"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is fair and inclusive in their teaching and feedback"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_empathy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher has empathy to the learners"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_respond_to_leaner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher responds to individual learners accoding to their need"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_role_model"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is a role model to the learners"
              required
            ></v-select>
            <v-btn
              @click="presentation_pedalogy = true, relation_with_learner = false"
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="relation_with_learner = false, class_management = true"
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>

        <panel v-show="class_management" title="Class management">
          <v-container class="mt-5">
            <v-select
              v-model="reg_data.teacher_visibilty"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="Every learner can see the teacher and the board"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_praise_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher praises and rewards the learners"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_encourage_learner"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher encourages good behavior among learners "
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_confident"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher is confident in his/her presentation"
              required
            ></v-select>
            <v-select
              v-model="reg_data.learner_enjoy"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher does not use cane, use physocal force to threatens leaners"
              required
            ></v-select>
            <v-btn
              @click="relation_with_learner = true, class_management = false"
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="class_management = false, lesson_evaluation = true"
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>

        <panel v-show="lesson_evaluation" title="Evaluation of Lesson">
          <v-container>
            <v-select
              v-model="reg_data.objective_of_lesson"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The lesson objectives are clearly stated at the bigining of the lesson"
              required
            ></v-select>
            <v-select
              v-model="reg_data.learner_effective"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher walk around the room for effective teching and leaning "
              required
            ></v-select>
            <v-select
              v-model="reg_data.assesment_technique"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher uses a variaty of assesment techniques"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_invite_learner_to_ask"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher invite learners to ask  questions and responds appropriately "
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_check_achiev"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher check the achievement of the lesson objectives at end of the lesson through relevant text"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_home_work"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="The teacher gave relevant home work if need be"
              required
            ></v-select>
            <v-select
              v-model="reg_data.teacher_home_work"
              :items="['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']"
              :rules="[v => !!v || 'Item is required']"
              label="OVERALL ASSESSMENT"
              required
            ></v-select>
            <v-textarea
              v-model="reg_data.comment"
              :rules="[v => !!v || 'Item is required']"
              label="Comments"
            ></v-textarea>
            <v-btn
              @click="class_management = true, lesson_evaluation = false"
              color="warning"
              class="mr-4"
            >Previouse</v-btn>
            <v-btn
              @click="lesson_evaluation = false, head_teacher_sum = true "
              color="success"
              class="mr-4"
            >Next</v-btn>
          </v-container>
        </panel>
        <panel v-show="head_teacher_sum" title="Head Teacher's Summary And Comments">
          <v-select
            v-model="reg_data.two_thins_went_very_well"
            :items="['Two thins that went well 1', 'Two thins that went well 2']"
            :rules="[v => !!v || 'Item is required']"
            label="Two thins that went well"
            required
            multiple
            chips
          ></v-select>
          <v-select
            v-model="reg_data.two_things_could_be_next_tym"
            :items="[' What two thins could be done differently next time 1', 'What two thins could be done differently next time 2']"
            :rules="[v => !!v || 'Item is required']"
            label="What two thins could be done differently next time"
            required
            multiple
            chips
          ></v-select>
          <v-textarea
            v-model="reg_data.support_needed"
            :rules="[v => !!v || 'Item is required']"
            label="What support is neededgoing forward and in which area"
          ></v-textarea>
          <v-btn
            @click="lesson_evaluation = true, head_teacher_sum = false"
            color="warning"
            class="mr-4"
          >Previouse</v-btn>
          <v-btn
            @click="head_teacher_sum = false, submmission = true"
            color="success"
            class="mr-4"
          >Next</v-btn>
        </panel>
        <panel v-show="submmission" title="Submission">
          <v-text-field
            v-model="reg_data.name_of_teacher"
            :rules="nameRules"
            label="Name of Teacher"
            required
          ></v-text-field>
          <v-text-field v-model="reg_data.date1" :rules="nameRules" label="Date" required></v-text-field>
          <v-text-field
            v-model="reg_data.name_of_observer"
            :rules="nameRules"
            label="Name of Observer"
            required
          ></v-text-field>
          <v-text-field
            v-model="reg_data.disignation"
            :rules="nameRules"
            label="Disignation"
            required
          ></v-text-field>
          <v-text-field v-model="reg_data.date2" :rules="nameRules" label="Date" required></v-text-field>
          <v-text-field
            v-model="reg_data.phone_number"
            :rules="nameRules"
            label="Phone Number"
            required
          ></v-text-field>
          <v-btn
            @click="head_teacher_sum = true, submmission = false"
            color="warning"
            class="mr-4"
          >Previouse</v-btn>
          <v-btn @click="register" color="success" class="mr-4">Submit</v-btn>
        </panel>
      </v-form>
    </div>
  </div>
</template>
  

<script>
import Api from "../data/regApi";
import panel from "./Panel";
import data from "../data/statelocals";
import _ from "lodash";
export default {
  components: {
    panel
  },
  data: () => ({
    alert: false,
    valid: true,
    nameRules: [v => !!v || "Name is required"],
    demography: true,
    class_rum_observe: false,
    planning_lesson: false,
    presentation_pedalogy: false,
    lesson_evaluation: false,
    relation_with_learner: false,
    class_management: false,
    submmission: false,
    head_teacher_sum: false,
    states: [],
    lga: [],
    stateslga: {},
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    qualifications: ["NCE", "B.Ed", "Master in Education", "Other"],
    checkbox: false,
    reg_data: {
      state: null,
      lga: null,
      school_name: "School Name",
      school_code: "School Code",
      location: "Urban",
      teacher_class_Observation: "Teacher Class Observation",
      subject: "Subject",
      year_of_experience: "Year Of Experience",
      date_lesson_Observed: "Date Lesson Observed",
      highest_teaching_qualification: "NCE",
      other_qualificatio: "NIL",
      name_of_Teacher_observed: "Name Of Teacher Observed",
      trcn_Reg_number: "TRCN Reg Number",
      teacher_gender: "Male",
      teacher_phone: "Teacher Phone",
      teacher_highest_qualification: "Teacher Highest Qualification",
      number_of_pupil_inClass: "Number Of Pupil In Class",
      duration_of_lesson: "Duration Of Lesson",
      age: "Age",
      content_is_relevant: "Good",
      content_deliver_status: "Very Good",
      lesson_plan: "Excellent",
      curiousity_of_leaners: "Good",
      teacher_reference_skills: "Good",
      learner_enjoy: "Very Good",
      material_to_the_concept: "Good",
      material_to_pratice_the_concept: "Very Good",
      learner_relevent_books: "Fair",
      learner_relevant_writing_material: "Good",
      displplay_audio_vid: "Good",
      various_ways_of_grouping: "Good",
      relevent_language_used: "Very Good",
      instruction_to_learners: "Good",
      clearly_explain: "Excellent",
      teacher_address_learner: "Good",
      teacher_fair: "Very Good",
      teacher_empathy: "Good",
      teacher_respond_to_leaner: "Good",
      teacher_role_model: "Very Good",
      teacher_visibilty: "Good",
      teacher_praise_learner: "Good",
      teacher_encourage_learner: "Very Good",
      teacher_confident: "Good",
      teacher_punish_learner: "Good",
      objective_of_lesson: "Poor",
      learner_effective: "Fair",
      assesment_technique: "Fair",
      teacher_invite_learner_to_ask: "Fair",
      teacher_check_achiev: "Fair",
      teacher_home_work: "Fair",
      comment: "Comment",
      overall_assessment: "Excellent",
      two_thins_went_very_well: "Two thins that went well 1",
      two_things_could_be_next_tym:
        "What two thins could be done differently next time 2",
      support_needed: "Support needed",
      name_of_teacher: "Teacher Name",
      date1: "22/06/2019",
      name_of_observer: "Observer Name",
      disignation: "Designation",
      date2: "22/06/2019",
      phone_number: "08060000000"
    }
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
    selectLGA(state) {
      let lgs = _.find(this.stateslga, { name: state });
      lgs = _.pick(lgs, ["locals"]);
      let lgname = lgs.locals;
      let names = [];
      _.forEach(lgname, function(value, key) {
        names.push(value.name);
      });
      this.setLga(names);
    },
    setLga(lga) {
      this.lgas = lga;
    },
    async register() {
      await Api.create(this.reg_data);
      this.alert = true;
    }
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
