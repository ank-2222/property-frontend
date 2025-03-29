const API_VAR = import.meta.env.VITE_BACKEND_URL;

// Property APIs
export const getPropertiesApi = `${API_VAR}/v1/property`;
export const getPropertyByIdApi = (propertyId: string) => `${API_VAR}/v1/property/${propertyId}`;

// Blog APIs
export const getBlogsApi = `${API_VAR}/v1/blog`;
export const getBlogByIdApi = (blogId: string) => `${API_VAR}/v1/blog/${blogId}`;

export const getAgentsApi = `${API_VAR}/v1/agent`;