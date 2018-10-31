import { model, Schema } from 'mongoose';

const audioSchema: Schema = new Schema({
    s3Path: String,
    // add more fields here
});

export default model('audio', audioSchema);