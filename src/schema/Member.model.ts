import mongoose, { Schema } from 'mongoose';
import memberController from 'src/controllers/member.controller';
import { memberStatus } from 'src/libs/member.enum';
import { MemberType } from 'src/libs/member.enum';


const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    MemberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE,
    },
    memberNIck

});