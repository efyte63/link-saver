import mongoose from "mongoose";

await mongoose
  .connect("mongodb://yt-auth:GheQQ3p0I2LO1NRG@ac-6zq3hpf-shard-00-00.ydvtpa3.mongodb.net:27017,ac-6zq3hpf-shard-00-01.ydvtpa3.mongodb.net:27017,ac-6zq3hpf-shard-00-02.ydvtpa3.mongodb.net:27017/?ssl=true&replicaSet=atlas-nu30vv-shard-0&authSource=admin&appName=yt-auth")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});

export const UserModel = mongoose.model("User", userSchema);

const contentSchema = new mongoose.Schema({
  title: {
    type: String
  },

   linktype: {
    type: String
  },

  link: {
    type: String
  },

  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag"
    }
  ],
  
  description: {
    type: String
  },


  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export const ContentModel = mongoose.model("Content", contentSchema);

const linkSchema = new mongoose.Schema({
  hash: {
    type: String,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export const LinkModel = mongoose.model("Link", linkSchema);

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

export const MessageModel = mongoose.model("message" , messageSchema);
