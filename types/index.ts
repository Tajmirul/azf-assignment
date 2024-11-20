export interface ICategory {
    id: number;
    title: string;
    parent_id: number | null;
    category_id: number;
    icon: string;
    link: string;
    childrens?: ICategory[];
}
