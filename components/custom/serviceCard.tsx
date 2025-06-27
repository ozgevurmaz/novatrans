import { allServicesType } from '@/types/freightService'

const ServiceCard = ({ service }: { service: allServicesType }) => {
    return (
        <div
            className="group w-full h-full flex items-center gap-4 p-4 rounded-sm bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-arrow"
        >
            {/* Icon Container */}
            <div className='bg-background group-hover:bg-primary group-hover:text-primary-foreground w-14 h-14 flex items-center justify-center rounded-sm border-2 border-border group-hover:border-primary transition-all duration-300 shadow-sm'>
                <service.icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
                <h5 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                </h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Hover Arrow */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
        </div>
    )
}

export default ServiceCard