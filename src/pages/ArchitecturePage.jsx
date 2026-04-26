import ServiceDetailPage from './ServiceDetailPage';
import { servicesData } from '../data/services';

export default function ArchitecturePage() {
  const service = servicesData[0];
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      details={service.details}
      tools={service.tools}
      features={service.features}
    />
  );
}
