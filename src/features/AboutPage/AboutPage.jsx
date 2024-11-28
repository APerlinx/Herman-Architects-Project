import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import blur effect CSS

function AboutPage() {
  const name = 'text-lg font-bold';
  return (
    <div className="relative mt-32 grid min-h-screen w-screen items-center justify-items-center gap-8 border-b-2 border-stone-300 px-12 pb-12 sm:mt-48">
      {/* About Section */}
      <div className="justify-items-end border-b border-stone-300 pb-8">
        <h2 className="pb-4 text-3xl font-bold">אודות</h2>
        <p className="text-right leading-relaxed">
          הרמן אדריכלים נוסד ב-1991 על ידי יאיר הרמן. המשרד מתמחה בתכנון ועיצוב
          בנייה פרטית, בנייה רוויה, רבי קומות, שכונות מגורים מסחר ומלונאות
        </p>
      </div>

      {/* Team Member 1 */}
      <div className="justify-items-center text-center">
        <LazyLoadImage
          src="../../media/about-images/man.jpg"
          alt="יאיר הרמן - מייסד המשרד"
          effect="blur"
          className="h-64 w-72 rounded-lg shadow-md"
        />
        <h5 className={name}>יאיר הרמן</h5>
        <p className="leading-relaxed">
          מייסד הרמן אדריכלים, מנהל מקצועי ואדריכל ראשי בהרמן אדריכלים. בוגר
          תואר <span dir="ltr">B.Arc</span> בטכניון משנת 1987
        </p>
      </div>

      {/* Team Member 2 */}
      <div className="justify-items-center text-center">
        <LazyLoadImage
          src="../../media/about-images/woman.jpg"
          alt="אורה הרמן - מנהלת המשרד"
          effect="blur"
          className="h-64 w-72 rounded-lg shadow-md"
        />
        <h5 className={name}>אורה הרמן</h5>
        <p className="leading-relaxed">
          מנהלת המשרד בוגרת אוניברסיטת ריגה, ליטא
        </p>
        <p>
          בהנדסה <span dir="ltr">B.S.c</span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
