import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<SingleData> extends ResponseModel{
    data:SingleData;
}