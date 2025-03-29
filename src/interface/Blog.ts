export interface BlogSEO {
    metaTitle: string;
    metaDescription: string;
    tags: string[];
}

export interface Blog {
    title: string;
    content: string;
    coverImage: string;
    additionalImages?: string[];
    seo: BlogSEO;
    status: "draft" | "published";
}

export interface BlogResponse extends Blog {
    _id: string;
    createdAt: string;
    updatedAt: string;
}