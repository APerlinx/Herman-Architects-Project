import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Image Slider */}
      <ImageSlider
        images={[
          'media/bg-images/bg-image-lg-e.jpeg',
          'media/bg-images/bg-image2.jpg',
          'media/bg-images/bg-image3.jpg',
        ]}
        desc={{
          titles: [
            'תכנון ועיצוב בנייה פרטית',
            'תכנון ועיצוב שכונות מגורים',
            'תכנון ועיצוב מלונות',
          ],
          details: [
            'בית פרטי למשפחה במושבת כנרת',
            'שכונת רימון.',
            'מלון דירות על שפת הכנרת, נבנה ב2015',
          ],
        }}
      />

      {/* Content Section */}
      <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* <h1 className="mb-12 cursor-default text-sm font-semibold text-stone-100 md:text-5xl">
          הרמן אדריכלים
          <br />
          <span className="cursor-pointer font-semibold leading-[0.5] text-stone-200 transition-all duration-300 hover:text-yellow-500 md:text-lg">
            הרמן אדריכלים נוסד ב-1991 על ידי יאיר הרמן. המשרד מתמחה בתכנון
            ועיצוב בנייה פרטית, בנייה רוויה, רבי קומות, שכונות מגורים מסחר
            ומלונאות
          </span>
        </h1> */}
      </div>
    </div>
  );
}

export default Home;
