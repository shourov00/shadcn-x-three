import PropTypes from "prop-types";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PriceCard = ({ title, price, contents, footer, ...props }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card
      className={
        "flex min-h-[440px] max-w-[320px] cursor-auto select-none flex-row justify-start sm:flex-col"
      }
      {...props}
    >
      <CardHeader>
        <CardTitle className={"text-lg"}>{title}</CardTitle>
        <CardDescription className={"pt-4 text-3xl text-foreground"}>
          {formatter.format(price)}
        </CardDescription>
      </CardHeader>
      <CardContent className={"flex flex-col gap-3"}>
        {contents &&
          contents.map((content, index) => (
            <div key={index} className={"flex flex-row gap-2"}>
              <Check className={"mt-1 max-h-[20px] min-h-[20px] min-w-[20px] max-w-[20px]"} />
              <p>{content}</p>
            </div>
          ))}
      </CardContent>
      <CardFooter className={"mt-auto self-center"}>
        <Button variant={"outline"} className={"min-w-[180px]"}>
          {footer}
        </Button>
      </CardFooter>
    </Card>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  contents: PropTypes.array,
  footer: PropTypes.string,
};

export default PriceCard;
