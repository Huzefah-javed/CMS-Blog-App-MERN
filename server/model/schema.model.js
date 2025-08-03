import mongoose,{Schema} from "mongoose"

const UsersStructure = new Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: 'user',
    },
    status: {
        type: String,
        default: 'unblock',
    },
    isApprove:{
        type: String,
        default: "pending",
        enum:["pending","decline","approved"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const blogStructure = new Schema({
  title:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
}  ,
post:{
    type: String,
    required: true,
  },
  likes:{
    type: Number,
    default: 0
  },
  Comments:{
    type:[
        {
        userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
    ],
   default: [] 
  },
  status:{
    type: String,
    enum:["approved", "pending", "decline"]
  },
  feedBackByAdmin:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const blogs = mongoose.model("BLOG", blogStructure);
export const users = mongoose.model("USER", UsersStructure);

