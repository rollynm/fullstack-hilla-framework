import { _getPropertyModel as _getPropertyModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Status_1 from "./Status.js";
class StatusModel<T extends Status_1 = Status_1> extends AbstractEntityModel_1<T> {
    declare static createEmptyValue: () => Status_1;
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", StringModel_1, [true]) as StringModel_1;
    }
}
export default StatusModel;
