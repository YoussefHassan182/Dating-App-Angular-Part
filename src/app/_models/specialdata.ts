import { Item } from "./Item";


export interface SpecialData {
    pageSize: number;
    currentPage: number;
    totalItems: number;
    totalPages: number;
    items: Item[];
}
