import FacebookLink from '../../ui/FacebookLink';

function ContactPage() {
  return (
    <div className="relative mt-32 grid min-h-screen w-screen grid-cols-1 gap-8 border-b-2 border-stone-300 px-12 pb-12 sm:mt-48 sm:grid-cols-2 sm:grid-rows-2">
      <div className="flex items-center justify-center">
        <img
          src="../../media/contact-images/office-image.jpeg"
          alt="תמונה של המשרד"
          className="h-100% w-100% rounded-lg object-cover shadow-md"
        />
      </div>
      <div>
        <h2 className="pb-4 text-right text-3xl font-bold">צור קשר</h2>
        <div className="space-y-6 py-4 text-right">
          <div>
            <p className="text-lg font-bold text-stone-800">כתובת</p>
            <p className="text-stone-600">רחוב הדוגמה 123, תל אביב</p>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-800">אימייל</p>
            <a
              href="mailto:example@email.com"
              className="text-stone-600 underline transition-colors hover:text-yellow-500"
            >
              example@email.com
            </a>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-800">טלפון</p>
            <a
              href="tel:03-1234567"
              className="text-stone-600 underline transition-colors hover:text-yellow-500"
            >
              03-1234567
            </a>
          </div>
          <div className="justify-items-end">
            <FacebookLink className={'sm:mt-2'} type="primary" />
          </div>
        </div>
      </div>

      <div className="aspect-w-16 aspect-h-9 w-full">
        {/* Replace the iframe with Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0060722171033!2d35.42258542431093!3d32.685884073701914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45c42c9f5ef9%3A0x3457c8acb83a60d4!2z15XXoteT15Qg15zXqteb16DXldefINeV15HXoNeZ15Qg15LXnNeZ15wg157Xlteo15fXmQ!5e0!3m2!1siw!2sus!4v1732891371279!5m2!1siw!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
