import mongoose from "mongoose";

/*  made a connection object which stores wheather connection is already established or not   */
type ConnectionObject={
	isconnected?:number
}

const connection:ConnectionObject={}

export default async function dbConnect():Promise<void> {
	if(connection.isconnected===1) {
		console.log('already connected to database')
		return 
	}
	try {
		const  db=await mongoose.connect(process.env.DATABASE_URL||"")
		connection.isconnected=db.connections[0].readyState
	} catch (error) {
		console.log('database connection failed',error);
		process.exit(1)
	}
}