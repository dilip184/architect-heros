import ServiceDetailPage from './ServiceDetailPage';
import { servicesData } from '../data/services';

export default function ScanToBIMPage() {
  const service = servicesData[3];
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
