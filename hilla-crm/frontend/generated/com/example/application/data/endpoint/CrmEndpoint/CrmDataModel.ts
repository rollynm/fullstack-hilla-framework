import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, ObjectModel as ObjectModel_1 } from "@hilla/form";
import type Company_1 from "../../entity/Company.js";
import CompanyModel_1 from "../../entity/CompanyModel.js";
import type Contact_1 from "../../entity/Contact.js";
import ContactModel_1 from "../../entity/ContactModel.js";
import type Status_1 from "../../entity/Status.js";
import StatusModel_1 from "../../entity/StatusModel.js";
import type CrmData_1 from "./CrmData.js";
class CrmDataModel<T extends CrmData_1 = CrmData_1> extends ObjectModel_1<T> {
    declare static createEmptyValue: () => CrmData_1;
    get companies(): ArrayModel_1<Company_1, CompanyModel_1> {
        return this[_getPropertyModel_1]("companies", ArrayModel_1, [false, CompanyModel_1, [false]]) as ArrayModel_1<Company_1, CompanyModel_1>;
    }
    get contacts(): ArrayModel_1<Contact_1, ContactModel_1> {
        return this[_getPropertyModel_1]("contacts", ArrayModel_1, [false, ContactModel_1, [false]]) as ArrayModel_1<Contact_1, ContactModel_1>;
    }
    get statuses(): ArrayModel_1<Status_1, StatusModel_1> {
        return this[_getPropertyModel_1]("statuses", ArrayModel_1, [false, StatusModel_1, [false]]) as ArrayModel_1<Status_1, StatusModel_1>;
    }
}
export default CrmDataModel;
