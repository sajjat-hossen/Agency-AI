import assets from '../assets/assets';
import ServiceCard from './ServiceCard';
import Title from './Title';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

const servicesData: Service[] = [
  {
    title: 'Advertising',
    description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
    icon: assets.ads_icon,
  },
  {
    title: 'Content Marketing',
    description: 'We help you execute your plan and deliver results.',
    icon: assets.marketing_icon,
  },
  {
    title: 'Content Writing',
    description: 'We help you create a marketing strategy that drives results.',
    icon: assets.content_icon,
  },
  {
    title: 'Social Media',
    description:
      'We help you build a strong social media presence and engage with your audience effectively.',
    icon: assets.social_icon,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-12 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-6xl">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
