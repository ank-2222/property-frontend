/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAgentsApi,
} from "@/API/Api";

// Get all agents
export async function getAgentsService() {
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(getAgentsApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
