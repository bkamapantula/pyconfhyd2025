import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE } from '@/details';

const Hero = () => {
  return (
    <div className="bg-light-gradient py-4 text-center">
      <h1 className="display-3">{CONFERENCE.title}</h1>
      <p className="lead">{CONFERENCE.announcement}</p>
      <div className=" mt-4">
        <p className="my-2">
          Join us in making PyConf Hyderabad 2025 a success!
        </p>
        <Link href={CONFERENCE.volunteerFormUrl} target="_blank">
          <button className="btn bg-info-gradient text-light btn-lg">
            BECOME A VOLUNTEER
          </button>
        </Link>
      </div>
      <div className="row justify-content-center py-4">
        <div className="col-10 col-md-8">
          <Image
            src={CONFERENCE.heroBannerUrl}
            alt={CONFERENCE.title}
            width={1920}
            height={1280}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            aria-label={CONFERENCE.heroBannerAriaLabel}
          />
          <div className="text-center">{CONFERENCE.heroBannerAriaLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
