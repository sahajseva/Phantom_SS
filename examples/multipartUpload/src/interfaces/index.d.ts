import { UploadedFile } from "@pankod/refine";

export interface ICategory {
    id: string;
    title: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    image: UploadedFile[];
    category: ICategory;
}
