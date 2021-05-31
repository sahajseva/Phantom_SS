export interface ICategory {
    id: string;
    title: string;
}

export interface IPostFile {
    id: string;
    title: string;
    content: string;
    userId: number;
    categoryId: number;
    status: "published" | "draft" | "rejected";
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: ICategory;
}
