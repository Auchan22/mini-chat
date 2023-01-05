import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const messageRouter = router({
  getAllMessages: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.message.findMany();
  }),
  createMessage: publicProcedure
    .input(
      z.object({
        content: z.string(),
        senderName: z.string().nullish(),
        senderEmail: z.string().nullish(),
        senderImg: z.string().nullish(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.message.create({
          data: {
            content: input.content,
            senderEmail: input.senderEmail,
            senderName: input.senderName,
            senderImg: input.senderImg,
          },
        });
        return { ok: true, message: "Cargando Correctamente" };
      } catch (error) {
        return { response: { ok: false, message: "Hubo un error" } };
        console.log(error);
      }
    }),
});
