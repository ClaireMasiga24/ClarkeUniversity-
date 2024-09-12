const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be at least 2 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  course: {
    type: String,
    enum: ['Computer Science', 'Information Technology'],
    required: [true, 'Course selection is required']
  },
  entryScheme: {
    type: String,
    enum: ['Direct Entry', 'Diploma Entry'],
    required: [true, 'Entry scheme selection is required']
  },
  intake: {
    type: String,
    enum: ['January', 'May', 'September'],
    required: [true, 'Intake selection is required']
  },
  sponsorship: {
    type: String,
    enum: ['Government', 'Private'],
    required: [true, 'Sponsorship selection is required']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'Gender selection is required']
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  residence: {
    type: String,
    required: [true, 'Residence is required'],
    minlength: [3, 'Residence must be at least 3 characters long']
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
