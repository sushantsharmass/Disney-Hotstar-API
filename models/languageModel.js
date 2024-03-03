const mongoose = require('mongoose')

const languageschema = mongoose.Schema(
    {
        id:{
            type: Number,
        },

        code: {
            type: String,
            required: [true, "Please enter langugae code"]
        },

        name:{
            type: String,
            required: [true, "Please enter langugae name"]
        }
    },
    {versionKey: false}
)

const Languages = mongoose.model('Languages', languageschema);

module.exports = Languages;