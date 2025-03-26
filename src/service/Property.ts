/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
    getPropertiesApi, 
    getPropertyByIdApi, 
} from "@/API/Api";


// Get all properties
export async function getAllPropertiesService(filters: Record<string, any> = {}) {
    try {
        // Convert filters object into URL query parameters, excluding empty, null, or undefined values
        const queryParams = new URLSearchParams(
            Object.entries(filters)
                .filter(([, value]) => value !== undefined && value !== null && value !== "")
                .map(([key, value]) => [key, String(value)])
        ).toString();

        const response = await fetch(`${getPropertiesApi}${queryParams ? `?${queryParams}` : ""}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`Error fetching properties: ${response.statusText}`);
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message || "Failed to fetch properties");
    }
}



// Get property by ID
export async function getPropertyByIdService(propertyId: string) {
    try {
        const response = await fetch(getPropertyByIdApi(propertyId), {
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
