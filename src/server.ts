import app from "./app"
import mongoose from 'mongoose';

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/blog-app";
console.log(DB_URI);


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to mongodb...")
    // app.listen(PORT, () => console.log('Server running...'));
})
.catch((err: any) => console.log('Error occurred while connecting', err));

