import { _getPropertyModel as _getPropertyModel_1, Email as Email_1, NotEmpty as NotEmpty_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import CompanyModel_1 from "./CompanyModel.js";
import type Contact_1 from "./Contact.js";
import StatusModel_1 from "./StatusModel.js";
class ContactModel<T extends Contact_1 = Contact_1> extends AbstractEntityModel_1<T> {
    declare static createEmptyValue: () => Contact_1;
    get company(): CompanyModel_1 {
        return this[_getPropertyModel_1]("company", CompanyModel_1, [true]) as CompanyModel_1;
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", StringModel_1, [true, new Email_1(), new NotEmpty_1()]) as StringModel_1;
    }
    get firstName(): StringModel_1 {
        return this[_getPropertyModel_1]("firstName", StringModel_1, [true, new NotEmpty_1()]) as StringModel_1;
    }
    get lastName(): StringModel_1 {
        return this[_getPropertyModel_1]("lastName", StringModel_1, [true, new NotEmpty_1()]) as StringModel_1;
    }
    get status(): StatusModel_1 {
        return this[_getPropertyModel_1]("status", StatusModel_1, [true]) as StatusModel_1;
    }
}
export default ContactModel;
