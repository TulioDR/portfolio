export interface ValuesType {
   name: string;
   email: string;
   phone: string;
   location: string;
   subject: string;
   message: string;
}
export interface ContactErrorsType {
   name?: string;
   email?: string;
   phone?: string;
   location?: string;
   subject?: string;
   message?: string;
}
export type InputNameType =
   | "name"
   | "email"
   | "phone"
   | "location"
   | "subject"
   | "message";

export type SentStatusType = null | "success" | "fail";
