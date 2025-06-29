"use server"
import { redirect } from "next/navigation";
import { prisma } from "../utilis/db";
import sendQueryMail from "@/lib/sendqueryEmail";
import reciveQueryMail from "@/lib/reciveQueryMail";




export default  async function handleQuery(formData:FormData){
    const name= formData.get("name") as string;
    const email=formData.get("email") as string;
    const query=formData.get("query") as string;

    if(!name|| !email || !query){
        throw new Error("Data field is incomplete");

    }
    await prisma.helpQuery.create({
        data:{
            name,
            email,
            query
        }
    })
    sendQueryMail(email,name);
    reciveQueryMail(name,email,query)
    redirect('/')

}
