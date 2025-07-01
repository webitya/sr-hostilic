import Serviceshero from "@/components/services/serviceshero";
import ServiceList from "@/components/services/ServiceList";
import ServiceExperience from "@/components/services/ServiceExperience";

export default function ServicesPage() {
  return (
    <div>
      <Serviceshero />
      <ServiceList />
      <ServiceExperience />
    </div>
  );
}
