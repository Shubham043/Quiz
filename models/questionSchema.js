import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;
//  import { max,min } from 'mongoose-validator';


 const QuestionModel = new Schema({
    id: {
        type: Number,
        required: true
      },
      question: {
        type: String,
        required: true,
        default:'what is your name'
      },
      options: [{
        type: String,
        required: true
      }]
 });

//Question model
// const QuestionModel = new Schema({
    
//     text:{
//         max_length:255,
//         type: String,
//         required: true
//     },
        
//        options: [{
//     type: String,
//     required: true
//   }]
//       correct:{
//             type: String,
//             ref:'Answer',
//         },
        
//         timelimit:{
//             type : Number,
//             default:15,
//             required : true
//         },
        
//         marks:{
//             type : Number,
//             min: 0,
//             default:0,
//             required: true
//         }
        
//     },
//     )
    
     export default mongoose.model('Question', QuestionModel);

    //  const answerModel = new Schema({
    //     text: {
    //         type: String,
    //         max_length: 255,
    //         default:'',
    //         required: false
    //     },
    //     image:{
    //         type: String,
    //         dafault: '',
    //         required: false
    //     },
       
    // }
    // )
// //quiz model
//    const Quiz = new Schema({

//   id :{
//     type: String,
//     required: true,
//     default: uuid(),
//     max_length: 250,

//   },
//   name:{
//     ref: 'name',
//     type: String,
//     max_length:255,
//     required:true

//   },
//   count:{
//     ref:'count',
//     type: Number,
//     default:0,
// },
// sendCount:{
//     type:Number,
//     ref:'sendCount',
//     default:1,
// },
// startTime:{
//     type:Date,
//     default:date.now,
//     required:true
    
// },
// endTime:{
//     type:Date,
//     required:true

// },
// department:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'department',

// }
//  },
//  Quiz.methods.toString=function(){
//     return `${Quiz}  ${this.user.email}`
//       })
  
// //   Quiz.methods.toString=function(){
// // return `${Quiz}  ${this.user.email}`
// //   }      



// //scoreboard model
// const scoreboard = new Schema({

//  user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//  },

//  department:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref:'Department'
//  },

//  score:{
//     type: Number,
//     default:0,
//  },

//  timeStamp:{
//     type:Date,
//     default:Date.now,
//     required:true
//  }

// })
// scoreboard.methods.toString=function(){
//     return `User name is ${this.user.email}`
// }


// //quiz scoreboard model 

// const QuizScoreBoard= new Schema({
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref: 'user',
//         unique:true
//      },
//      quiz:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref: 'Quiz',
//         unique:true
//      },
//      score:{
//         type: Number,
//         default:0,
//      },
//      timeStamp:{
//         type:Date,
//         default:Date.now,
//         required:true
//      },    

// })
// QuizScoreBoard.methods.toString=function(){
//     return `User name is ${this.user.email} and quiz is ${this.quiz.name} `
// }

 


