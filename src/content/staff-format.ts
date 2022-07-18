export namespace StaffFormat {    
    export interface StaffMember {
        name: string;
        title: string;
        profileImage?: string;
    }
    export interface RootObject {
        staff: StaffMember[];
    }
}