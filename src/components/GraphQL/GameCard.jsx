import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.jsx";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";

const GameCard = ({ title, id, handleDelete, variant, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteConfirmation = async () => {
    await handleDelete(id);
    setOpen(false);
  };

  if (variant && variant === "empty")
    return (
      <Card className={"flex h-[180px] w-[300px] flex-col items-center justify-center"}>
        <CardDescription className={"text-md font-semibold text-red-600"}>
          Games Table Is Empty!
        </CardDescription>
      </Card>
    );

  return (
    <Card
      {...props}
      className={"flex h-[180px] w-[300px] flex-col justify-around md:justify-between"}
    >
      <CardHeader>
        <CardTitle className={"break-words leading-8"}>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center gap-6 md:justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={"outline"} className={"w-[80px]"}>
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[325px] md:max-w-[425px]">
            <DialogHeader>
              <p>
                Are you sure you want to delete <span className={"font-bold"}>{title}</span> ?
              </p>
            </DialogHeader>
            <DialogFooter className={"gap-4"}>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                className={"bg-destructive text-white hover:bg-destructive"}
                onClick={handleDeleteConfirmation}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Link to={`/game/${id}`}>
          <Button className={"w-[80px]"}>View</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func,
  variant: PropTypes.string
};

export default GameCard;
