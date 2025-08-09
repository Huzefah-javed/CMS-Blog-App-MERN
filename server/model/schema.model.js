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
    commentedPosts:{
      type:Array,
      default: []
    },
    likePosts:{
      type:Array,
      default: []
    },
    favPosts:{
      type:Array,
      default: []
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
  creatorId:{
    type: String,
    required: true
  },
  likes:{
    type: Array,
    default: []
  },
  Comments:{
    type:[
        {
        userId:{
        type: String,
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
    enum:["approved", "pending", "decline", "drafted"]
  },
  feedBackByAdmin:{
    type: String,
  },
  creatorName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const blogs = mongoose.model("BLOG", blogStructure);
export const users = mongoose.model("USER", UsersStructure);

