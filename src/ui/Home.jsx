import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Image Slider */}
      <ImageSlider
        images={[
          'nebfk6i6dczfzyyynzig',
          'photo_2024-12-05_00-53-16_fuktpl',
          'yxoczxv4qh4it7zdozxv',
          'a1afmn2pdnpkyc0j45ev',
        ]}
        desc={{
          titles: [
            'תכנון ועיצוב בנייה פרטית',
            'תכנון ועיצוב מלונות',
            'תכנון ועיצוב מתחמי מסחר',
            'תכנון ועיצוב שכונות מגורים',
          ],
          details: [
            'בית פרטי למשפחה במושבת כנרת',
            'מלון דירות על שפת הכנרת, נבנה ב2015',
            'שערי המושבה, ראש פינה',
            'שכונת רימון, יקנעם',
          ],
        }}
      />
    </div>
  );
}

export default Home;

// cxg7shz7lv1fkth3h3vv
