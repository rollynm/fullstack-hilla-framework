import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import client_1 from "../connect-client.js";
import type CrmData_1 from "./com/example/application/data/endpoint/CrmEndpoint/CrmData.js";
import type Contact_1 from "./com/example/application/data/entity/Contact.js";
async function deleteContact_1(contactId: number | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("CrmEndpoint", "deleteContact", { contactId }, init); }
async function getCrmData_1(init?: EndpointRequestInit_1): Promise<CrmData_1> { return client_1.call("CrmEndpoint", "getCrmData", {}, init); }
async function saveContact_1(contact: Contact_1 | undefined, init?: EndpointRequestInit_1): Promise<Contact_1> { return client_1.call("CrmEndpoint", "saveContact", { contact }, init); }
export { deleteContact_1 as deleteContact, getCrmData_1 as getCrmData, saveContact_1 as saveContact };
