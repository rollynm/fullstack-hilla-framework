import type Company_1 from "../../entity/Company.js";
import type Contact_1 from "../../entity/Contact.js";
import type Status_1 from "../../entity/Status.js";
interface CrmData {
    companies: Array<Company_1>;
    contacts: Array<Contact_1>;
    statuses: Array<Status_1>;
}
export default CrmData;
