var mongoose=require('mongoose'),
    Schema = mongoose.Schema,
    questionSchema = new Schema({
      question: {type: String, required: [true, "Question is required."], trim: true},
      answer: {type: String, required: [true, "Answer is required."], trim: true},
      fakeOne: {type: String, required: [true, "Fake Answer 1 is required."], trim: true},
      fakeTwo: {type: String, required: [true, "Fake Answer 2 is required."], trim: true},
    }, {timestamps: true});

mongoose.model('Question', questionSchema);
