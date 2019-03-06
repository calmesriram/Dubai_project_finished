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
        type: String
    },
    RecordCreationTime:{
        type: String
    },
    YourState: {
        type: String
    },
    Gender:{
        type:Number,
       // enum:["Male","Female"]
    },
    YourAvatar:{
        type: String
    },
    RelatedDocs:{
        type: String
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
    changeownertxid:{
        type: String,
        default: "null"
    },
    changeownerdate:{
        type: String,
        default: "null"
    },
    changeownertime:{
        type: String,
        default: "null"
    },
    changeownertype:{
        type: Number,
        default:"0"
    },
    changeownername:{
        type: String,
        default: "null"
    },
    changeownerupdate:{
        type: Number,
        default: "0"
    },
    changeownermsg:{
        type: String,
        default: "null"
    },
    buytxid:{
        type: String,
        default: "null"
    },
    buyrecorddate:{
        type: String,
        default: "null"
    },
    buyrecordtime:{
        type: String,
        default: "null"
    },
    buyplanningtype:{
        type: Number,
        default: "0"
    },
    buyownername:{
        type: String,
        default: "null"
    },
    buyupdate:{
        type: Number,
        default: "0"
    },
    buymsg:{
        type: String,
        default: "null"
    },
    survetxid:{
        type: String,
        default: "null"
    },
    surveyrecorddate:{
        type: String,
        default: "null"
    },
    surveyrecordtime:{
        type: String,
        default: "null"
    },
    surveyupdate:{
        type: Number,
        default: "0"
    },
    surveymsg:{
        type: String,
        default: "null"
    },
})

module.exports = mongoose.model('Planning', PlanningSchema);