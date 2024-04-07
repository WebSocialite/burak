import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';
import { verify } from 'jsonwebtoken';
import uploader from "./libs/utils/uploader";


/** MEBMER */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post("/member/logout", 
memberController.verifyAuth,
memberController.logout);
router.get("/member/detail", memberController.verifyAuth, 
memberController.getMemberDetail
);

router.post(
    "/member/update", 
    memberController.verifyAuth,   //image upload qilishdan oldin verify qlib check qilishi shart 
    uploader("members").single("memberImage"),
    memberController.updateMember
);
// .get but REST API ni methodi hisoblanadi
router.get("/member/top-users", memberController.getTopUsers);

/** PRODUCT */


/** ORDER */

export default router;
