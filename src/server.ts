const dotenv =require ("dotenv");
dotenv.config();

const mongoose =require ('mongoose');
import app from "./app";

mongoose
.connect(process.env.MONGO_URL as string, {})

.then((data: any) => {
    console.log("MongoDB succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.log(`The server is running successfully: ${PORT}`);
    })
    
})
.catch((err: any) => console.log("ERRON ON connection mongodb:", err));