﻿import {IPagedList} from './IPagedList.ts'

export class PagedList<T> implements IPagedList{

    Items: Array<T>;
    HasNextPage: boolean;
    HasPreviousPage: boolean;
    IsFirstPage: boolean;
    IsLastPage: boolean;
    PageCount: number;
    PageIndex: number;
    PageNumber: number;
    PageSize: number;
    TotalItemCount: number;

    constructor() {
        this.Items = [];
    }

}