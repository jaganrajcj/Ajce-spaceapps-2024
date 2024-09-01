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
  noHeight?: boolean
}

export function AboutCard({ title, description, subTitle, image, noHeight }: AboutCardProp) {
  return (
    <Card shadow={false} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10" />
      <CardBody className={`${noHeight ? "" : "h-[453px]"} p-5 flex flex-col justify-center items-center rounded-2xl relative z-20`}>
        <Typography variant="h4" className="text-center" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
