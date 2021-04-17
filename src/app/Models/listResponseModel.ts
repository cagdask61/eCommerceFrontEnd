import { ResponseModel } from "./responseModel";

export interface ListResponseModel<List> extends ResponseModel{
    data:List[];
}