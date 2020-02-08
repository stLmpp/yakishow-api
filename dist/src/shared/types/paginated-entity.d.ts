export declare class PaginatedEntity {
    itemCount: number;
    totalItems: number;
    pageCount: number;
    next?: string;
    previous?: string;
}
export interface PaginatedEntityItems<T> {
    items: T[];
}
