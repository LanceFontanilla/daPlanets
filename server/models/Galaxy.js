import mongoose from "mongoose"

const Schema = mongoose.Schema


export const GalaxySchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    type: { type: String, required: true, enum: ["spiral", "elliptical", "unclear", "ring"] }

},
    { timestamps: true, toJSON: { virtuals: true } }

)