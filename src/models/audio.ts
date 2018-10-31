import { model, Schema } from 'mongoose';

const audioSchema: Schema = new Schema({
    title: String,
    artist: String,
    metaData: String,
    s3Path: String,
    // add more fields here
});

export default model('audio', audioSchema);
