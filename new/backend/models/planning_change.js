var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlanningSchema = mongoose.Schema({
    
    UniqueId:{
        type: Number
    },
    OwnerName:{
        type: String,
        required: true
    },
    MobileNumber: {
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    PinCode:{
        type: String,
        required: true
    },
    RecordCreationDate:{
        type: String,
        default: "null"
    },
    RecordCreationTime:{
        type: String,
        default: "null"
    },
    YourState: {
        type: String
    },
    Gender:{
        type: Number,
        // enum:["Male","Female"]
    },
    YourAvatar:{
        type: String,
        //  data: Buffer, 
        //  contentType: String 
    },
    RelatedDocs:{
        type: String,
        // data: Buffer,
        // contentType: String 
    },
    YourMessage:{
        type: String
    },
    GeoCoordinates:{
        type: String,
        default: "null"
    },
    SurLandArea:{
        type: String,
        default: "null"
    },
    SurPicture:{
        type: String,
        default: "null"
    },
    transactionid:{
        type: String,
        default: "null"
    },
    planning_type:{
        type: Number,
        default: "null"
    },
    update:{
        type:Boolean
    }
    // role:{
    //     type:String,
    //     required:true,
    //     default:"select_roll"
    // }
})

module.exports = mongoose.model('Planning_change', PlanningSchema);