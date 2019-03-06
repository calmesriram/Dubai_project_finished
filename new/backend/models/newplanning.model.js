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
    // RecordCreationDate:{
    //     type: Date,
    //     default: "-"
    // },
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
        default: "-"
    },
    SurLandArea:{
        type: String,
        default: "-"
    },
    SurPicture:{
        type: String,
        default: "-"
    },
    // role:{
    //     type:String,
    //     required:true,
    //     default:"select_roll"
    // }
    changeownertxid:{
        type: String,
        default: "-"
    },
    // changeownerrecorddate:{
    //     type: String,
    //     default: "-"
    // },
    changeownerrecordtime:{
        type: String,
        default: "-"
    },
    changeownerplanningtype:{
        type: Number,
        default: "-"
    },
    changeownername:{
        type: String,
        default: "-"
    },
    changeownerupdate:{
        type: Number,
        default: "-"
    },
    changeownermsg:{
        type: String,
        default: "-"
    },
    buytxid:{
        type: String,
        default: "-"
    },
    // buyrecorddate:{
    //     type: String,
    //     default: "-"
    // },
    buyrecordtime:{
        type: Number,
        default: "-"
    },
    buyplanningtype:{
        type: Number,
        default: "-"
    },
    buyownername:{
        type: String,
        default: "-"
    },
    buyupdate:{
        type: Number,
        default: "-"
    },
    buymsg:{
        type: String,
        default: "-"
    },
    survetxid:{
        type: String,
        default: "-"
    },
    // surveyrecorddate:{
    //     type: String,
    //     default: "-"
    // },
    surveyrecordtime:{
        type: String,
        default: "-"
    },
    surveyupdate:{
        type: Number,
        default: "-"
    },
    surveymsg:{
        type: String,
        default: "-"
    },
    surveyavathar:{
        type: String,
        default: "-"
    },
})

module.exports = mongoose.model('Planning', PlanningSchema);