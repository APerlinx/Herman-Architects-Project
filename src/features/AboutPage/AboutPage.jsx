import React from 'react';
import TeamMember from './TeamMember';

function AboutPage() {
  const teamMembers = [
    {
      image: '../../media/about-images/man.jpg',
      name: 'יאיר הרמן',
      description:
        'B.Arc .מייסד הרמן אדריכלים, מנהל מקצועי ואדריכל ראשי בהרמן אדריכלים. בוגר תואר בטכניון משנת 1987',
    },
    {
      image: '../../media/about-images/woman.jpg',
      name: 'אורה הרמן',
      description:
        'B.S.c .מנהלת המשרד בוגרת תואר בהנדסה באוניברסיטת ריגה, ליטא. עובדת במשרד משנת 1994',
    },
  ];

  return (
    <div className="relative mt-32 grid min-h-screen w-screen grid-cols-1 gap-8 border-b-2 border-stone-300 px-8 pb-12 sm:mt-48 sm:px-32 custom-sm:grid-cols-2">
      {/* Image Section */}
      <div className="hidden min-w-[530px] items-center justify-center gap-4 border-b border-stone-300 custom-sm:flex">
        <div className="relative">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-200/50 to-stone-200"
            aria-hidden="true"
          ></div>
          <img
            src="../../media/about-images/house-about.jpg"
            alt="תמונה של המשרד"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="relative justify-items-end border-b border-stone-300 pb-8">
        <h2 className="pb-5 text-4xl font-bold">אודות</h2>
        <div>
          <p className="text-right text-lg leading-relaxed">
            הרמן אדריכלים נוסד ב-1991 על ידי יאיר הרמן. המשרד מתמחה בתכנון
            ועיצוב בנייה פרטית, בנייה רוויה, רבי קומות, שכונות מגורים מסחר
            ומלונאות
          </p>
        </div>
      </div>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          image={member.image}
          name={member.name}
          description={member.description}
        />
      ))}
    </div>
  );
}

export default AboutPage;
