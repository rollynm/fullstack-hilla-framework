import type AbstractEntity_1 from "./AbstractEntity.js";
import type Contact_1 from "./Contact.js";
interface Company extends AbstractEntity_1 {
    employees?: Array<Contact_1 | undefined>;
    name?: string;
}
export default Company;
