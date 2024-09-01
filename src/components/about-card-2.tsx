import {
    Card,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

interface AboutCardProp {
    title: string;
    subTitle: string;
    description: string;
    image: string
}

export function AboutCard2({ title, description, subTitle, image }: AboutCardProp) {
    return (
        <Card shadow={false} className="relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(/image/Pillars-of-Creation-NIRCam-social.webp)` }}
            />
            <div className="absolute inset-0 bg-black opacity-80 z-10" />
            <CardBody className="p-5 rounded-2xl relative z-20 ">
                <div className="flex flex-col items-center mb-3">
                    <h2 className="mb-4 text-xl font-semibold text-white dark:text-white">Details of Hackathon</h2>
                    <ul className="max-w-md space-y-3 text-gray-200 list-disc list-inside ">
                        <li>
                            1-6 team members
                        </li>
                        <li>
                            Across India
                        </li>
                        <li>
                            36 Hours Hackathon
                        </li>
                        <li>
                        School and College Students
                        </li>
                    </ul>
                </div>

            </CardBody>
        </Card>
    );
}


export default AboutCard2;
