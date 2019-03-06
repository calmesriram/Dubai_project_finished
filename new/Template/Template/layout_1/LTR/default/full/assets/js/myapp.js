var contractAbi=[
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
var contractAddress="0x6ceecda0b1c9e73e9e90f2182d698e7aa6e36a63";
