import { Prisma } from "@prisma/client";
import getSession from "./getSession";

const getCurrentUser = async () => {
    try {
        const session  = await getSession();
        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prisma?.user.findUniqueOrThrow({
            where : {
                email : session.user.email as string
            }
        })

        if(!currentUser){
            return null;
        }

        return currentUser;
    } catch (error:any){
        return null;
    }
}

export default getCurrentUser;