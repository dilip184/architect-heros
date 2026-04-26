import ServiceDetailPage from "./ServiceDetailPage";
import { servicesData } from "../data/services";

export default function MEPPage() {
  const service = servicesData[2];
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
