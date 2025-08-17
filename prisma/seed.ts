// prisma/seed.ts
import { PrismaClient, Role, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Interest Areas
  const interestNames = ['Athletics', 'Art', 'Music', 'STEM', 'Culture', 'Community Service', 'Gaming'];

  const interests = await Promise.all(
    interestNames.map((name) =>
      prisma.interestArea.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  // Categories (note: enum via Prisma.CategoryType)
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name_type: { name: 'K-Pop', type: Prisma.CategoryType.MUSICAL_TASTE } },
      update: {},
      create: { name: 'K-Pop', type: Prisma.CategoryType.MUSICAL_TASTE },
    }),
    prisma.category.upsert({
      where: { name_type: { name: 'Songwriting', type: Prisma.CategoryType.CAPABILITY } },
      update: {},
      create: { name: 'Songwriting', type: Prisma.CategoryType.CAPABILITY },
    }),
    prisma.category.upsert({
      where: { name_type: { name: 'Performance', type: Prisma.CategoryType.GOAL } },
      update: {},
      create: { name: 'Performance', type: Prisma.CategoryType.GOAL },
    }),
  ]);

  // Users
  const [superAdmin, clubAdmin, user] = await Promise.all([
    prisma.user.upsert({
      where: { email: 'admin@foo.com' },
      update: {},
      create: {
        email: 'admin@foo.com',
        password: await hash('admin', 10),
        role: Role.SUPER_ADMIN,
        name: 'Super Admin',
      },
    }),
    prisma.user.upsert({
      where: { email: 'clubs@foo.com' },
      update: {},
      create: {
        email: 'clubs@foo.com',
        password: await hash('clubadmin', 10),
        role: Role.CLUB_ADMIN,
        name: 'Club Admin',
      },
    }),
    prisma.user.upsert({
      where: { email: 'user@foo.com' },
      update: {},
      create: {
        email: 'user@foo.com',
        password: await hash('user', 10),
        role: Role.USER,
        name: 'Student User',
      },
    }),
  ]);

  // Club
  const club = await prisma.club.upsert({
    where: { name: 'Manoa Dance Society' },
    update: {},
    create: {
      name: 'Manoa Dance Society',
      description: 'We host weekly practices and performances across styles.',
      website: 'https://example.org',
      meetingTime: 'Fridays 6–8pm',
      meetingPlace: 'Campus Center',
      adminId: clubAdmin.id,
    },
  });

  // Link club to interests
  const art = interests.find((i) => i.name === 'Art')!;
  const music = interests.find((i) => i.name === 'Music')!;

  await prisma.clubInterest.upsert({
    where: { clubId_interestId: { clubId: club.id, interestId: art.id } },
    update: {},
    create: { clubId: club.id, interestId: art.id },
  });

  await prisma.clubInterest.upsert({
    where: { clubId_interestId: { clubId: club.id, interestId: music.id } },
    update: {},
    create: { clubId: club.id, interestId: music.id },
  });

  // Attach a category
  await prisma.clubCategory.upsert({
    where: { clubId_categoryId: { clubId: club.id, categoryId: categories[0].id } },
    update: {},
    create: { clubId: club.id, categoryId: categories[0].id },
  });

  // User subscriptions
  await prisma.userInterest.upsert({
    where: { userId_interestId: { userId: user.id, interestId: music.id } },
    update: {},
    create: { userId: user.id, interestId: music.id },
  });
  await prisma.userInterest.upsert({
    where: { userId_interestId: { userId: user.id, interestId: art.id } },
    update: {},
    create: { userId: user.id, interestId: art.id },
  });

  console.log('Seed complete.');
}

main().finally(async () => prisma.$disconnect());
