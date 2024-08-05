/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utlis/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://AI-Content-genrater_owner:YIWC5XG0DMSs@ep-flat-rice-a5che6bz.us-east-2.aws.neon.tech/AI-Content-genrater?sslmode=require",
    }
  };