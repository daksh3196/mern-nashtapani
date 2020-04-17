const mongoose=require('mongoose');
const crypto=require('crypto')
const uuidv1=require('uuid/v1')

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true, //any space in the beginning or end will be trimmed out
		required: true,
		maxlength: 32
	}
},
{timestamps: true}
);
	
const tokenSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

module.exports = mongoose.model("Category", categorySchema);