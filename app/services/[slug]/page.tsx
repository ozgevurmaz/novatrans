import { ServiceDetailSection } from "@/components/service/serviceDetailSection"
import { servicesInfo } from "@/lib/constanst"

type Props = {
  params: { slug: string }
}

export default async function ServiceDetails({ params }: Props) {
  const service = servicesInfo.find((s) => s.name === params.slug);

  if (!service) {
    return <div className="p-8 text-center">Service not found</div>;
  }

  return <ServiceDetailSection service={service} />;
}
