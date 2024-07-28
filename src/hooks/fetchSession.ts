import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"

const fetchSession = async () => {
    const session = await getServerSession(authOptions)
    return session
}
export default fetchSession