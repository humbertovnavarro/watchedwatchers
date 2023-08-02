import { PrismaClient } from "@prisma/client"

export const userIsGroupMember = async (groupId: string, memberId: string, prisma: PrismaClient) => {
    const membership = await prisma.groupMember.findUnique({
        where: {
            memberId_groupId: {
                memberId,
                groupId
            }
        }
    });
    return membership ? true : false;
}