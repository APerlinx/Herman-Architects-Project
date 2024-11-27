import LinkButton from './LinkButton';

function Footer() {
  return (
    <div className="mt-2 flex  items-center justify-between p-10  ">
      <div className="cursor-default">
        <h1 className="text-xl">Herman Architects Ltd.</h1>
        <p className="w-56 text-xs text-stone-400">
          Copyright 2024. All rights reserved.
          <br /> Site by Alon Perlin.
        </p>
      </div>

      <div className="flex items-center gap-10 ">
        <LinkButton to="/">
          <img
            src="../../media/icons/facebook.svg"
            alt="facebook"
            className="h-auto w-6 sm:w-8 md:w-12"
          />
        </LinkButton>
        <LinkButton to="/contacts">צור-קשר</LinkButton>
        <LinkButton>English</LinkButton>
      </div>
    </div>
  );
}

export default Footer;
