import type AbstractEntity_1 from "./AbstractEntity.js";
import type Company_1 from "./Company.js";
import type Status_1 from "./Status.js";
interface Contact extends AbstractEntity_1 {
    company?: Company_1;
    email?: string;
    firstName?: string;
    lastName?: string;
    status?: Status_1;
}
export default Contact;
