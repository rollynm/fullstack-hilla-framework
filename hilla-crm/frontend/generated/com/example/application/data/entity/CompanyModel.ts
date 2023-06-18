import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, NotBlank as NotBlank_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Company_1 from "./Company.js";
import type Contact_1 from "./Contact.js";
import ContactModel_1 from "./ContactModel.js";
class CompanyModel<T extends Company_1 = Company_1> extends AbstractEntityModel_1<T> {
    declare static createEmptyValue: () => Company_1;
    get employees(): ArrayModel_1<Contact_1, ContactModel_1> {
        return this[_getPropertyModel_1]("employees", ArrayModel_1, [true, ContactModel_1, [true]]) as ArrayModel_1<Contact_1, ContactModel_1>;
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", StringModel_1, [true, new NotBlank_1()]) as StringModel_1;
    }
}
export default CompanyModel;
