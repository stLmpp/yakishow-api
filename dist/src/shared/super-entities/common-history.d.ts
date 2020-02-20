import { BaseEntity } from 'typeorm';
export declare abstract class CommonHistory extends BaseEntity {
    creationDate: Date;
    lastUpdateDate: Date;
}
