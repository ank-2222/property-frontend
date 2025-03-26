/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
    getBlogsApi, 
    getBlogByIdApi, 
} from "@/API/Api";


// Get all blogs
export async function getAllBlogsService() {
    try {
        const response = await fetch(getBlogsApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

// Get blog by ID
export async function getBlogByIdService(blogId: string) {
    try {
        const response = await fetch(getBlogByIdApi(blogId), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}
