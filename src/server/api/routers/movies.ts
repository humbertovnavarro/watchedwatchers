import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  publicGroupProcedure,
} from "~/server/api/trpc";

export const movieRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
  }),
  watchMovie: protectedProcedure.query(({ ctx }) => {
    const { prisma } = ctx;
  }),
  rateMovie: protectedProcedure.query(({ ctx }) => {
    const { prisma } = ctx;
  }),
  /**
   * Fetch all movie ratings of movie x for group y.
   */
  groupMovieRatings: publicGroupProcedure.input(z.object({
    groupId: z.string(),
    movieId: z.string()
  }))
  .query(async ({ ctx, input }) => {
    const { group, prisma } = ctx;
    const { movieId } = input;
    const movies = await prisma.movieRating.findMany({
      where: {
        groupId: group.id,
        movieId: movieId
      }
    });
    return movies;
  })
});
