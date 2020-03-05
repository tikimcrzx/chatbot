import { RolesTypes } from '../../security/enums/roles-types.enum';
export interface UpdateUserDTO {
    readonly _id: string;
    readonly name: string;
    readonly password: string;
    readonly roles: [RolesTypes];
    readonly status: boolean;
}
