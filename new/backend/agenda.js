var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app= express();
var cors=require ("cors")
var Web3=require('web3')
//let modelsch=require('./modelschema.schema')
let User=require('./models/user.model')
let planning=require('./models/planning.model')
var planning_ownership = require("./models/planning_change");
var planning_buy_sell = require("./models/planning_buy_sel");
var multer  = require('multer');
var path = require("path");
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ed9c627571c540d39a95770ce85f7534'));
// var web3 = new Web3(new Web3.providers.HttpProvider('http://18.224.59.176:8545/	'));
// var url ="mongodb+srv://test:test@cluster0-h7tsx.mongodb.net/"
//var DBname = "onlinelandrecord"


var mode=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_uint_details_array",
				"type": "uint256[5]"
			},
			{
				"name": "_owner_name",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_avatar_file",
				"type": "string"
			},
			{
				"name": "_related_document_file",
				"type": "string"
			},
			{
				"name": "_message",
				"type": "string"
			}
		],
		"name": "createNewRecord",
		"outputs": [
			{
				"name": "_isCreated",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_unique_record_id",
				"type": "uint256"
			},
			{
				"name": "_newOwner",
				"type": "string"
			},
			{
				"name": "_message",
				"type": "string"
			},
			{
				"name": "_modification_type",
				"type": "uint8"
			}
		],
		"name": "plannerUpdateExistingRecord",
		"outputs": [
			{
				"name": "_isUpdated",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_unique_record_id",
				"type": "uint256"
			},
			{
				"name": "_geo_co_ordinates",
				"type": "string"
			},
			{
				"name": "_land_area",
				"type": "string"
			},
			{
				"name": "_picture",
				"type": "string"
			},
			{
				"name": "_surveyer_message",
				"type": "string"
			}
		],
		"name": "surveyerUpdateRecord",
		"outputs": [
			{
				"name": "isSurveyerUpdated",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_uint_details",
				"type": "uint256[5]"
			},
			{
				"indexed": false,
				"name": "_owner_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_email",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_state",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_avatar_file",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_related_document_file",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_message",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_record_creater",
				"type": "address"
			}
		],
		"name": "recordCreationDetails",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_unique_record_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_newOwner",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_message",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_planner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_modification_type",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "planner_record_update",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_unique_record_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_geo_co_ordinates",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_land_area",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_picture",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_surveyer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_surveyer_message",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "surveyer_update_record",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "show_last_record_id",
		"outputs": [
			{
				"name": "_record_id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_unique_record_id",
				"type": "uint256"
			}
		],
		"name": "show_record_details1",
		"outputs": [
			{
				"name": "_owner_name",
				"type": "string"
			},
			{
				"name": "_mobile_number",
				"type": "uint256"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_pin_code",
				"type": "uint256"
			},
			{
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_unique_record_id",
				"type": "uint256"
			}
		],
		"name": "show_record_details2",
		"outputs": [
			{
				"name": "_avatar_file",
				"type": "string"
			},
			{
				"name": "_related_document_file",
				"type": "string"
			},
			{
				"name": "_message",
				"type": "string"
			},
			{
				"name": "_geo_co_ordinates",
				"type": "string"
			},
			{
				"name": "_land_area",
				"type": "string"
			},
			{
				"name": "_picture",
				"type": "string"
			},
			{
				"name": "_modification_type",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

let modesc = new web3.eth.Contract(mode,'0x6ceecda0b1c9e73e9e90f2182d698e7aa6e36a63',{
    gasLimit: 3000000,
 });
// old:0x9628ee9d44ce2b1e1ab8abcb1ead3e056ef77e89
//  0x6ceecda0b1c9e73e9e90f2182d698e7aa6e36a63

// mongoose.connection.on('connected', function() {
//     console.log('Connection to Mongo established.');
//     // Hack the database back to the right one, because when using mongodb+srv as protocol.
//     if (mongoose.connection.client.s.url.startsWith('mongodb+srv')) {
//         mongoose.connection.db = mongoose.connection.client.db(DBname);
//     }
// });

// mongoose.connect(url, {dbName: DBname}, function(err, client) {
//   if (err) {
//      console.log("mongo error", err);
//      return;
//   }
// });

// mongoose.connect(url);
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:false
}));


app.get('/',(req,res)=>{
    res.send("hello world");
    web3.eth.getBlockNumber().then((res,err)=>{
        var user = new User();   
        user.lastupdated=res;   
            user.save((err,address)=>{
                if(err)  {
                    console.log(err);
                }else {
                    console.log(address);
                }
            });
        })       
})

setInterval(()=>{
    var currentblock;
    var lastupdated;
    var uesrid='5c7e1b2a63d68a16ef16f935';
    web3.eth.getBlockNumber().then((res,err)=>{
currentblock=res;
console.log(currentblock);
    User.find((err,address)=>{ 
        if(err){
        console.log(err);
      }
        else{
            lastupdated=address[0].lastupdated;   
        }
    console.log('lasupdate'+lastupdated );
    console.log('currentblock'+currentblock );
if(currentblock!=lastupdated && lastupdated<currentblock)
{
    console.log('update')	
	modesc.getPastEvents('recordCreationDetails', {
        fromBlock: lastupdated ,
        toBlock: lastupdated 
    }, (error, events) => {
        events.find(data=>{ 
            console.log(data['returnValues']);
			var d = data['returnValues'][0][4]
			var myDate = new Date( parseInt(d.toString()) *1000);
			var a=(myDate.toLocaleString());
			var zd = a.split(",")
console.log(zd)
	var newdata = new planning();
	    newdata.UniqueId=data['returnValues'][0][0]
        newdata.OwnerName=data['returnValues'][1];
        newdata.MobileNumber=data['returnValues'][0][1];
        newdata.Email=data['returnValues'][2];
        newdata.PinCode=data['returnValues'][0][3];
        newdata.RecordCreationDate=zd[0];
        newdata.RecordCreationTime=zd[1];
        newdata.YourState=data['returnValues'][3];
        newdata.Gender=data['returnValues'][0][2];
        newdata.YourAvatar=data['returnValues'][4];
        newdata.RelatedDocs=data['returnValues'][5];
        newdata.YourMessage=data['returnValues'][6];
        newdata.save((err,address) => {
            if(err)  {
                console.log(err);
            }else {
                console.log(address);
            }
        });
     
})
    })


	
	modesc.getPastEvents('planner_record_update', {
		fromBlock: lastupdated ,
		toBlock: lastupdated
	}, (error, events) => {
		events.find(data=>{
			 var d = data['returnValues'][5]
			 var myDate = new Date( parseInt(d.toString()) *1000);
			 var a=(myDate.toLocaleString());
			 var b1 = a.split(",")
			 // var recorddate1 = b1[0];
			 // var recordtime1 = b1[1];
 
			console.log(data['returnValues']);
		 
		 if(data['returnValues'][4]==1){
		 var UniqueId=data['returnValues'][0];
		var OwnerName=data['returnValues'][1];
		 var YourMessage=data['returnValues'][2];
		 var transactionid=data['transactionHash'];
		 // var planningtype=data['returnValues'][4]
		planning.findOneAndUpdate({UniqueId:UniqueId}, {$set :{OwnerName:OwnerName,RecordCreationDate:b1[0],RecordCreationTime:b1[1],buyownername:OwnerName,buymsg:YourMessage,buytxid:transactionid,buyupdate:1,buyplanningtype:data['returnValues'][4],buyrecorddate:b1[0],buyrecordtime:b1[1]}},(err,name)=> {
			if(err)  {
				console.log(err);
			}else {
				console.log(name);
			}
		 });
	 }
	 else if(data['returnValues'][4]==2)
	 {
		 var UniqueId=data['returnValues'][0];
		var OwnerName=data['returnValues'][1];
		 var YourMessage=data['returnValues'][2];
		 var transactionid=data['transactionHash'];
		 // var update = true;
		 // var planningtype =data['returnValues'][4]
 
		 planning.findOneAndUpdate({UniqueId:UniqueId}, {$set :{OwnerName:OwnerName,RecordCreationDate:b1[0],RecordCreationTime:b1[1],changeownername:OwnerName,changeownermsg:YourMessage,changeownertxid:transactionid,changeownerupdate:1,changeownertype:data['returnValues'][4],changeownerdate:b1[0],changeownertime:b1[1]}},(err,name)=> {
			if(err)  {
				console.log(err);
			}else {
				console.log(name);
			}
		});
	 }
 })
	})

	modesc.getPastEvents('surveyer_update_record', {
        fromBlock: lastupdated ,
        toBlock: lastupdated 
    }, (error, events) => {
        events.find(data=>{ 
            console.log(data['returnValues']);
			var d = data['returnValues'][6]
			var myDate = new Date( parseInt(d.toString()) *1000);
			var a=(myDate.toLocaleString());
			var b1 = a.split(",")
		var UniqueId=data['returnValues'][0];
        var GeoCoordinates=data['returnValues'][1];
        var SurLandArea=data['returnValues'][2];
        var SurPicture=data['returnValues'][3];
		var Surmsg=data['returnValues'][5];
		var transactionid=data['transactionHash'];
        planning.findOneAndUpdate({UniqueId:UniqueId}, {$set :{GeoCoordinates:GeoCoordinates,SurLandArea:SurLandArea,SurPicture:SurPicture,surveymsg:Surmsg,surveyupdate:1,surveyrecorddate:b1[0],surveyrecordtime:b1[1],survetxid:transactionid}},(err,name)=> {
            if(err)  {
                console.log(err);
            }else {
                console.log(name);
            }
		});
		
	
     
})
    })

    User.findByIdAndUpdate(uesrid, {$set :{lastupdated:lastupdated+1}},(err,name)=>{
        console.log(name);
        
        if(err){
        console.log(err);
        
    }
        else{
            console.log(name);   
        }
    })
}
})
})
},5000)

