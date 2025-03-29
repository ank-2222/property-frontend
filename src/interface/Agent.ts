export interface Agent {
    name: string;
    area: string;
    expertise: string[];
    profile_pic: string;
}

export interface AgentResponse extends Agent {
    _id: string;
    created_at: string;
    updated_at: string;
}
